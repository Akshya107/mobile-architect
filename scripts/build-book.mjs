import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const CONTENT = path.join(ROOT, "content");
const BOOK = path.join(ROOT, "book");
const DATA = path.join(BOOK, "js", "pages.js");

const PARTS = [
  ["00-start-here", "Start here"],
  ["01-software-fundamentals", "Software craft"],
  ["02-architecture-patterns", "Architecture patterns"],
  ["03-mobile-foundations", "Mobile foundations"],
];

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function inline(text) {
  return text
    .replace(/`([^`]+)`/g, (_, code) => `<code>${escapeHtml(code)}</code>`)
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
}

function calloutClass(html) {
  const m = html.match(/<strong>([^<]+)<\/strong>/);
  if (!m) return "";
  const key = m[1].toLowerCase();
  if (key.startsWith("mental")) return "callout callout-mental";
  if (key.startsWith("architect")) return "callout callout-architect";
  if (key.startsWith("anti")) return "callout callout-anti";
  if (key.startsWith("war-room") || key.startsWith("war room")) return "callout callout-war";
  return "callout";
}

function renderTable(block) {
  const rows = block
    .trim()
    .split("\n")
    .map((line) =>
      line
        .replace(/^\|/, "")
        .replace(/\|$/, "")
        .split("|")
        .map((c) => c.trim())
    );
  if (rows.length < 2) return "";
  const head = rows[0];
  const body = rows.slice(2);
  const th = head.map((c) => `<th>${inline(c)}</th>`).join("");
  const tr = body
    .map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join("")}</tr>`)
    .join("");
  return `<table><thead><tr>${th}</tr></thead><tbody>${tr}</tbody></table>`;
}

function parseLabel(raw) {
  return raw.replace(/<br\s*\/?>/gi, " ").trim();
}

function mermaidToHtml(src) {
  const body = src.trim();
  if (body.startsWith("sequenceDiagram")) return sequenceToHtml(body);
  if (body.startsWith("quadrantChart")) return quadrantToHtml(body);
  if (body.startsWith("flowchart")) return flowchartToHtml(body);
  return `<pre class="diagram">${escapeHtml(body)}</pre>`;
}

function flowchartToHtml(src) {
  const dir = /flowchart\s+(LR|RL|TD|TB|BT)/.exec(src)?.[1] || "TD";
  const nodes = new Map();
  const edges = [];
  const nodeRe = /([A-Za-z][\w]*)\s*(?:\[([^\]]+)\]|\{([^}]+)\}|\(\[([^\]]+)\]\))/g;
  let m;
  while ((m = nodeRe.exec(src))) {
    nodes.set(m[1], { id: m[1], label: parseLabel(m[2] || m[3] || m[4]), diamond: Boolean(m[3]) });
  }
  const edgeRe =
    /([A-Za-z][\w]*)\s*(-->|-\.->|---|---|==>)\s*(?:\|([^|]+)\|)?\s*([A-Za-z][\w]*)/g;
  while ((m = edgeRe.exec(src))) {
    if (!nodes.has(m[1])) nodes.set(m[1], { id: m[1], label: m[1], diamond: false });
    if (!nodes.has(m[4])) nodes.set(m[4], { id: m[4], label: m[4], diamond: false });
    edges.push({ from: m[1], to: m[4], label: (m[3] || "").trim(), dashed: m[2].includes(".") });
  }
  const incoming = new Map([...nodes.keys()].map((id) => [id, 0]));
  for (const e of edges) incoming.set(e.to, (incoming.get(e.to) || 0) + 1);
  const roots = [...nodes.keys()].filter((id) => incoming.get(id) === 0);
  const layer = new Map();
  const queue = roots.length ? roots : [...nodes.keys()].slice(0, 1);
  for (const r of queue) layer.set(r, 0);
  const seen = new Set(queue);
  for (let i = 0; i < queue.length; i++) {
    const id = queue[i];
    for (const e of edges.filter((x) => x.from === id)) {
      const next = (layer.get(id) || 0) + 1;
      if (!layer.has(e.to) || layer.get(e.to) < next) layer.set(e.to, next);
      if (!seen.has(e.to)) {
        seen.add(e.to);
        queue.push(e.to);
      }
    }
  }
  const maxLayer = Math.max(0, ...layer.values());
  const layers = Array.from({ length: maxLayer + 1 }, () => []);
  for (const [id, node] of nodes) layers[layer.get(id) || 0].push(node);

  const horizontal = dir === "LR" || dir === "RL";
  const rows = layers
    .map((group) => {
      const cells = group
        .map((n) => {
          const outs = edges
            .filter((e) => e.from === n.id)
            .map((e) => {
              const dest = nodes.get(e.to);
              const lab = e.label ? `<span class="edge-lab">${escapeHtml(e.label)}</span>` : "";
              return `${lab}<span class="edge ${e.dashed ? "dashed" : ""}"></span><span class="edge-to">${escapeHtml(dest.label)}</span>`;
            })
            .join("");
          return `<div class="fn ${n.diamond ? "diamond" : ""}"><span class="fn-label">${escapeHtml(n.label)}</span>${outs ? `<div class="fn-out">${outs}</div>` : ""}</div>`;
        })
        .join("");
      return `<div class="flow-layer">${cells}</div>`;
    })
    .join(horizontal ? `<span class="flow-sep">→</span>` : `<span class="flow-sep down">↓</span>`);

  return `<div class="flow ${horizontal ? "lr" : "td"}" role="img" aria-label="Diagram">${rows}</div>`;
}

function sequenceToHtml(src) {
  const aliases = new Map();
  const lines = [];
  for (const raw of src.split("\n")) {
    const line = raw.trim();
    const p = /^participant\s+(\w+)(?:\s+as\s+(.+))?/.exec(line);
    if (p) {
      aliases.set(p[1], p[2] || p[1]);
      continue;
    }
    const note = /^Note\s+over\s+([^:]+):\s*(.+)/.exec(line);
    if (note) {
      lines.push(`<li class="seq-note">${escapeHtml(note[2])}</li>`);
      continue;
    }
    const msg = /^(\w+)(--)?>>(\w+):\s*(.+)/.exec(line);
    if (msg) {
      const from = aliases.get(msg[1]) || msg[1];
      const to = aliases.get(msg[3]) || msg[3];
      lines.push(
        `<li><span class="seq-from">${escapeHtml(from)}</span> → <span class="seq-to">${escapeHtml(to)}</span> <span class="seq-msg">${escapeHtml(msg[4])}</span></li>`
      );
    }
  }
  return `<ol class="seq" role="img" aria-label="Sequence">${lines.join("")}</ol>`;
}

function quadrantToHtml(src) {
  const title = /title\s+(.+)/.exec(src)?.[1] || "";
  const x = /x-axis\s+(.+?)\s+-->\s+(.+)/.exec(src);
  const y = /y-axis\s+(.+?)\s+-->\s+(.+)/.exec(src);
  const points = [];
  const re = /^\s+([A-Za-z][^:]+):\s*\[([0-9.]+),\s*([0-9.]+)\]/gm;
  let m;
  while ((m = re.exec(src))) points.push({ name: m[1].trim(), x: Number(m[2]), y: Number(m[3]) });
  const dots = points
    .map(
      (p) =>
        `<span class="q-dot" style="left:${p.x * 100}%;bottom:${p.y * 100}%">${escapeHtml(p.name)}</span>`
    )
    .join("");
  return `<div class="quadrant" role="img" aria-label="${escapeHtml(title)}">
    <p class="q-title">${escapeHtml(title)}</p>
    <div class="q-plot">${dots}</div>
    <p class="q-axis">${escapeHtml(x?.[1] || "")} → ${escapeHtml(x?.[2] || "")} · ${escapeHtml(y?.[1] || "")} → ${escapeHtml(y?.[2] || "")}</p>
  </div>`;
}

function mdToHtml(md) {
  const fences = [];
  let src = md.replace(/```([^\n]*)\n([\s\S]*?)```/g, (_, lang, body) => {
    const i = fences.length;
    fences.push({ lang: lang.trim(), body: body.replace(/\n$/, "") });
    return `\n%%FENCE${i}%%\n`;
  });

  const blocks = src.split(/\n{2,}/);
  const html = [];

  for (const raw of blocks) {
    const block = raw.trim();
    if (!block) continue;

    const fence = block.match(/^%%FENCE(\d+)%%$/);
    if (fence) {
      const { lang, body } = fences[Number(fence[1])];
      if (lang === "mermaid") {
        html.push(mermaidToHtml(body));
      } else {
        html.push(`<pre><code class="lang-${escapeHtml(lang)}">${escapeHtml(body)}</code></pre>`);
      }
      continue;
    }

    if (block.startsWith("|") && block.includes("\n|")) {
      html.push(renderTable(block));
      continue;
    }

    if (/^[-*_]{3,}$/.test(block)) {
      html.push("<hr />");
      continue;
    }

    if (block.startsWith(">")) {
      const text = block
        .split("\n")
        .map((l) => l.replace(/^>\s?/, ""))
        .join(" ");
      const inner = inline(text);
      html.push(`<blockquote class="${calloutClass(inner)}">${inner}</blockquote>`);
      continue;
    }

    if (block.startsWith("# ")) {
      html.push(`<h1>${inline(block.slice(2))}</h1>`);
      continue;
    }
    if (block.startsWith("## ")) {
      html.push(`<h2>${inline(block.slice(3))}</h2>`);
      continue;
    }
    if (block.startsWith("### ")) {
      html.push(`<h3>${inline(block.slice(4))}</h3>`);
      continue;
    }

    if (/^[-*] /.test(block) || /^\d+\. /.test(block)) {
      const items = block.split("\n");
      const ordered = /^\d+\. /.test(items[0]);
      const lis = items
        .map((l) => `<li>${inline(l.replace(/^([-*] |\d+\. )/, ""))}</li>`)
        .join("");
      html.push(ordered ? `<ol>${lis}</ol>` : `<ul>${lis}</ul>`);
      continue;
    }

    if (block.startsWith("<") && !block.startsWith("<http")) {
      html.push(block);
      continue;
    }

    const withImages = block.replace(
      /!\[([^\]]*)\]\(([^)]+)\)/g,
      (_, alt, srcPath) =>
        `<img src="${srcPath.replace(/^(\.\.\/)+/, "").replace(/^.*images\//, "images/")}" alt="${escapeHtml(alt)}" />`
    );
    html.push(`<p>${inline(withImages)}</p>`);
  }

  return html.join("\n");
}

function firstHeading(md) {
  const m = md.match(/^#\s+(.+)$/m);
  return m ? m[1].trim() : "Untitled";
}

function pagesFromLesson(md, part, file) {
  const title = firstHeading(md);
  const chunks = md.split(/<!--\s*pagebreak\s*-->/i);
  return chunks.map((chunk, i) => {
    const body = chunk.trim();
    return {
      part,
      title,
      file,
      pageInLesson: i + 1,
      pagesInLesson: chunks.length,
      html: mdToHtml(body),
    };
  });
}

function collect() {
  const pages = [];
  const toc = [];

  for (const [folder, part] of PARTS) {
    const dir = path.join(CONTENT, folder);
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md")).sort();
    const chapter = { part, folder, lessons: [] };

    for (const file of files) {
      const md = fs.readFileSync(path.join(dir, file), "utf8");
      const title = firstHeading(md);
      const start = pages.length;
      pages.push(...pagesFromLesson(md, part, file));
      chapter.lessons.push({ title, file, pageIndex: start });
    }
    if (chapter.lessons.length) toc.push(chapter);
  }

  return { pages, toc };
}

function writeData({ pages, toc }) {
  fs.mkdirSync(path.dirname(DATA), { recursive: true });
  const payload = { generatedAt: new Date().toISOString(), volume: 1, toc, pages };
  fs.writeFileSync(DATA, `window.BOOK_DATA = ${JSON.stringify(payload, null, 2)};\n`);
  console.log(`Wrote ${pages.length} pages from ${toc.length} parts → ${path.relative(ROOT, DATA)}`);
}

writeData(collect());
