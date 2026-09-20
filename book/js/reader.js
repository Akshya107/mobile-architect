(() => {
  const data = window.BOOK_DATA;
  if (!data) return;

  const STORAGE_PAGE = "ma-book-page";
  const STORAGE_MARK = "ma-book-mark";
  const FRONT = 3;

  const bookEl = document.getElementById("book");
  const wrapEl = document.getElementById("bookWrap");
  const running = document.getElementById("running");
  const folioText = document.getElementById("folioText");
  const tocNav = document.getElementById("tocNav");
  const drawer = document.getElementById("drawer");
  const search = document.getElementById("search");
  const searchInput = document.getElementById("searchInput");
  const searchHits = document.getElementById("searchHits");

  const pages = [
    {
      kind: "cover",
      part: "Volume I",
      title: "Cover",
      html: `<img src="images/cover.png" alt="Mobile Architect Volume I cover" />`,
    },
    {
      kind: "imprint",
      part: "Volume I",
      title: "Foundations",
      html: `<div class="imprint"><h1>Mobile Architect</h1><p>Volume I · Foundations</p><p>Software craft · Architecture patterns · Mobile foundations</p><p>A visual field book. Picture first. Then the decision.</p></div>`,
    },
    {
      kind: "toc",
      part: "Contents",
      title: "Contents",
      html: `<h1>Contents</h1>${tocHtml()}`,
    },
    ...data.pages.map((page, i) => ({
      kind: "body",
      part: page.part,
      title: page.title,
      html: page.html,
      number: i + 1,
    })),
  ];

  let index = clamp(Number(localStorage.getItem(STORAGE_PAGE) || 0), 0, pages.length - 1);
  let flipping = false;
  let leafEl = null;
  let pendingIndex = null;

  function tocHtml() {
    return data.toc
      .map((part) => {
        const items = part.lessons
          .map(
            (l) =>
              `<li data-jump="${FRONT + l.pageIndex}"><span>${escape(l.title)}</span></li>`
          )
          .join("");
        return `<p class="toc-part">${escape(part.part)}</p><ul class="toc-list">${items}</ul>`;
      })
      .join("");
  }

  function escape(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  }

  function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
  }

  function portrait() {
    return window.innerWidth < 860;
  }

  function reduced() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function paperHtml(page) {
    if (!page) {
      return `<article class="paper verso"><p class="header-line">Mobile Architect</p></article>`;
    }
    if (page.kind === "cover") {
      return `<article class="paper cover">${page.html}</article>`;
    }
    const head = page.kind === "body" ? `${page.part} · ${page.title}` : page.part;
    const num = page.kind === "body" ? page.number : "";
    return `<article class="paper">
      <p class="header-line">${escape(head)}</p>
      ${page.html}
      <p class="folio-line">${num}</p>
    </article>`;
  }

  function pairFor(i) {
    if (portrait()) return { left: null, right: pages[i], single: true };
    if (i <= 0) return { left: null, right: pages[0], single: false, closed: true };
    return { left: pages[i], right: pages[i + 1] || null, single: false };
  }

  function chrome(i) {
    const page = pages[i];
    running.textContent = page?.title || "Mobile Architect";
    folioText.textContent = portrait()
      ? `${i + 1} / ${pages.length}`
      : `${Math.min(i + 1, pages.length)}–${Math.min(i + (i === 0 ? 1 : 2), pages.length)} / ${pages.length}`;
    localStorage.setItem(STORAGE_PAGE, String(i));
  }

  function bindJumps(root) {
    root.querySelectorAll("[data-jump]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        go(Number(el.getAttribute("data-jump")));
      });
    });
  }

  function leafChrome() {
    return `<div class="curl"></div><div class="spine"></div>`;
  }

  function paint(i) {
    const p = portrait();
    bookEl.className = "book";
    bookEl.classList.toggle("portrait", p);
    bookEl.classList.toggle("closed-cover", !p && i === 0);
    const pair = pairFor(i);
    if (p || i === 0) {
      bookEl.innerHTML = `
        <div class="spread single">
          <div class="page-slot">
            <div class="under">${paperHtml(pages[i])}</div>
          </div>
        </div>
      `;
    } else {
      bookEl.innerHTML = `
        <div class="spread">
          <div class="page-slot left"><div class="under">${paperHtml(pair.left)}</div></div>
          <div class="page-slot right"><div class="under">${paperHtml(pair.right)}</div></div>
        </div>
      `;
    }
    leafEl = null;
    bindJumps(bookEl);
    chrome(i);
  }

  function step() {
    return portrait() || index === 0 ? 1 : 2;
  }

  function align(i) {
    if (portrait()) return clamp(i, 0, pages.length - 1);
    if (i <= 0) return 0;
    return clamp(i % 2 === 1 ? i : i - 1, 1, pages.length - 1);
  }

  function targetIndex(direction) {
    if (direction === "next") return index + step();
    if (index <= 0) return -1;
    if (!portrait() && index === 1) return 0;
    return index - (portrait() ? 1 : 2);
  }

  function go(i) {
    if (flipping) return;
    index = align(i);
    paint(index);
  }

  function mountFlip(direction, toIndex) {
    const p = portrait();
    const from = pairFor(index);
    const to = pairFor(toIndex);
    bookEl.className = "book";
    bookEl.classList.toggle("portrait", p);

    if (p || index === 0 || toIndex === 0) {
      const leafClass = direction === "next" ? "full" : "full prev-full";
      bookEl.classList.toggle("closed-cover", !p && (index === 0 || toIndex === 0));
      bookEl.innerHTML = `
        <div class="spread single">
          <div class="page-slot">
            <div class="under">${paperHtml(pages[index])}</div>
          </div>
          <div class="leaf ${leafClass}">
            <div class="face front">${paperHtml(pages[index])}</div>
            <div class="face back">${paperHtml(null)}</div>
            ${leafChrome()}
          </div>
        </div>
      `;
    } else if (direction === "next") {
      bookEl.innerHTML = `
        <div class="spread">
          <div class="page-slot left"><div class="under">${paperHtml(from.left)}</div></div>
          <div class="page-slot right"><div class="under">${paperHtml(from.right)}</div></div>
          <div class="leaf right-leaf">
            <div class="face front">${paperHtml(from.right)}</div>
            <div class="face back">${paperHtml(to.left)}</div>
            ${leafChrome()}
          </div>
        </div>
      `;
    } else {
      bookEl.innerHTML = `
        <div class="spread">
          <div class="page-slot left"><div class="under">${paperHtml(from.left)}</div></div>
          <div class="page-slot right"><div class="under">${paperHtml(from.right)}</div></div>
          <div class="leaf left-leaf">
            <div class="face front">${paperHtml(from.left)}</div>
            <div class="face back">${paperHtml(to.right)}</div>
            ${leafChrome()}
          </div>
        </div>
      `;
    }
    leafEl = bookEl.querySelector(".leaf");
    bindJumps(bookEl);
  }

  function revealDestination(direction, toIndex) {
    const p = portrait();
    const to = pairFor(toIndex);
    if (p || index === 0 || toIndex === 0) {
      const under = bookEl.querySelector(".page-slot .under");
      if (under) under.innerHTML = paperHtml(pages[toIndex]);
      return;
    }
    if (direction === "next") {
      const right = bookEl.querySelector(".page-slot.right .under");
      if (right) right.innerHTML = paperHtml(to.right);
      return;
    }
    const left = bookEl.querySelector(".page-slot.left .under");
    if (left) left.innerHTML = paperHtml(to.left);
  }

  function angleFor(direction, progress) {
    const p = Math.max(0, Math.min(1, progress));
    if (direction === "next") return -180 * p;
    return 180 * p;
  }

  function setProgress(direction, progress) {
    if (!leafEl) return;
    const p = clamp(progress, 0, 1);
    const origin = direction === "prev" && (portrait() || index === 0) ? "right center" : "";
    if (origin) leafEl.style.transformOrigin = origin;
    const lift = Math.sin(Math.PI * p) * 18;
    leafEl.style.transform = `rotateY(${angleFor(direction, p)}deg) translateZ(${lift}px)`;
    const curl = leafEl.querySelector(".curl");
    if (curl) curl.style.opacity = String(0.2 + 0.8 * Math.sin(Math.PI * p));
  }

  function finishFlip(toIndex) {
    flipping = false;
    pendingIndex = null;
    bookEl.classList.remove("is-flipping", "is-dragging", "flipping-next", "flipping-prev");
    leafEl?.remove();
    leafEl = null;
    index = toIndex;
    const p = portrait();
    const pair = pairFor(index);
    bookEl.classList.toggle("portrait", p);
    bookEl.classList.toggle("closed-cover", !p && index === 0);
    if (p || index === 0) {
      const under = bookEl.querySelector(".spread.single .under");
      if (under) {
        under.innerHTML = paperHtml(pages[index]);
        bindJumps(bookEl);
        chrome(index);
        return;
      }
    } else {
      const left = bookEl.querySelector(".page-slot.left .under");
      const right = bookEl.querySelector(".page-slot.right .under");
      if (left && right) {
        left.innerHTML = paperHtml(pair.left);
        right.innerHTML = paperHtml(pair.right);
        bindJumps(bookEl);
        chrome(index);
        return;
      }
    }
    paint(index);
  }

  function listenLeafDone(toIndex) {
    const done = (e) => {
      if (e && e.propertyName && e.propertyName !== "transform") return;
      if (e && e.target !== leafEl) return;
      leafEl?.removeEventListener("transitionend", done);
      finishFlip(toIndex);
    };
    leafEl?.addEventListener("transitionend", done);
    window.setTimeout(() => {
      if (flipping && pendingIndex === toIndex) finishFlip(toIndex);
    }, 1100);
  }

  function animateTurn(direction) {
    const target = targetIndex(direction);
    if (target < 0 || target >= pages.length) return;
    const toIndex = align(target);
    if (toIndex === index || flipping) return;

    if (reduced()) {
      go(toIndex);
      return;
    }

    flipping = true;
    pendingIndex = toIndex;
    mountFlip(direction, toIndex);

    requestAnimationFrame(() => {
      revealDestination(direction, toIndex);
      requestAnimationFrame(() => {
        bookEl.classList.add("is-flipping", direction === "next" ? "flipping-next" : "flipping-prev");
        if (leafEl) leafEl.style.transform = "";
        listenLeafDone(toIndex);
      });
    });
  }

  function next() {
    animateTurn("next");
  }

  function prev() {
    animateTurn("prev");
  }

  function fillToc() {
    tocNav.innerHTML = data.toc
      .map((part) => {
        const links = part.lessons
          .map((l) => `<a data-jump="${FRONT + l.pageIndex}">${escape(l.title)}</a>`)
          .join("");
        return `<p class="toc-part">${escape(part.part)}</p>${links}`;
      })
      .join("");
    bindJumps(tocNav);
  }

  drawer.hidden = true;
  search.hidden = true;

  document.getElementById("tocBtn").onclick = (e) => {
    e.stopPropagation();
    search.hidden = true;
    drawer.hidden = !drawer.hidden;
  };
  document.getElementById("searchBtn").onclick = (e) => {
    e.stopPropagation();
    drawer.hidden = true;
    search.hidden = !search.hidden;
    if (!search.hidden) searchInput.focus();
  };
  document.getElementById("bookmarkBtn").onclick = (e) => {
    e.stopPropagation();
    localStorage.setItem(STORAGE_MARK, String(index));
    folioText.textContent = "Ribbon saved";
  };
  let gestureLock = false;

  function lockGesture() {
    gestureLock = true;
    window.setTimeout(() => {
      gestureLock = false;
    }, 500);
  }

  document.getElementById("nextBtn").onclick = (e) => {
    e.stopPropagation();
    if (gestureLock || flipping) return;
    lockGesture();
    next();
  };
  document.getElementById("prevBtn").onclick = (e) => {
    e.stopPropagation();
    if (gestureLock || flipping) return;
    lockGesture();
    prev();
  };

  document.addEventListener("keydown", (e) => {
    if (e.target === searchInput) return;
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
    if (e.key === "Home") go(0);
    if (e.key === "End") go(pages.length - 1);
  });

  const drag = {
    active: false,
    armed: false,
    scrolling: false,
    direction: null,
    startX: 0,
    startY: 0,
    lastX: 0,
    lastT: 0,
    vx: 0,
    onPaper: false,
    pointerId: null,
  };

  function dragProgress(x) {
    const width = Math.max(140, wrapEl.clientWidth * (portrait() ? 0.72 : 0.42));
    if (drag.direction === "next") return clamp((drag.startX - x) / width, 0, 1);
    return clamp((x - drag.startX) / width, 0, 1);
  }

  function resetDrag() {
    drag.active = false;
    drag.armed = false;
    drag.scrolling = false;
    drag.direction = null;
    drag.onPaper = false;
  }

  function isTouchPtr(e) {
    return e.pointerType === "touch";
  }

  function onPointerDown(e) {
    if (flipping || gestureLock) return;
    if (e.target.closest("[data-jump], a, .ghost, .drawer, .search, input")) return;
    drag.armed = true;
    drag.active = false;
    drag.scrolling = false;
    drag.direction = null;
    drag.startX = e.clientX;
    drag.startY = e.clientY;
    drag.lastX = e.clientX;
    drag.lastT = performance.now();
    drag.onPaper = Boolean(e.target.closest(".paper"));
    drag.pointerId = e.pointerId;
  }

  function onPointerMove(e) {
    if (isTouchPtr(e)) return;
    if (!drag.armed && !drag.active) return;
    if (drag.scrolling) return;
    const x = e.clientX;
    const y = e.clientY;
    const now = performance.now();
    const dt = Math.max(1, now - drag.lastT);
    drag.vx = (x - drag.lastX) / dt;
    drag.lastX = x;
    drag.lastT = now;

    if (!drag.active) {
      const dx = x - drag.startX;
      const dy = y - drag.startY;
      if (Math.abs(dx) < 10 && Math.abs(dy) < 10) return;
      if (Math.abs(dy) > Math.abs(dx) && drag.onPaper) {
        drag.scrolling = true;
        drag.armed = false;
        return;
      }
      if (Math.abs(dx) <= Math.abs(dy)) return;
      const direction = dx < 0 ? "next" : "prev";
      const target = targetIndex(direction);
      if (target < 0 || target >= pages.length) {
        drag.armed = false;
        return;
      }
      drag.active = true;
      drag.direction = direction;
      flipping = true;
      pendingIndex = align(target);
      mountFlip(direction, pendingIndex);
      requestAnimationFrame(() => revealDestination(direction, pendingIndex));
      bookEl.classList.add("is-dragging");
      try {
        wrapEl.setPointerCapture(e.pointerId);
      } catch (_) {
        /* ignore */
      }
    }
    e.preventDefault();
    setProgress(drag.direction, dragProgress(x));
  }

  function onPointerUp(e) {
    if (!drag.armed && !drag.active) {
      resetDrag();
      return;
    }
    const wasActive = drag.active;
    const direction = drag.direction;
    const dx = e.clientX - drag.startX;
    const dy = e.clientY - drag.startY;
    const progress = wasActive ? dragProgress(e.clientX) : 0;
    const flick = direction === "next" ? drag.vx < -0.28 : drag.vx > 0.28;
    const moved = Math.abs(dx) > 24 || Math.abs(dy) > 24;
    resetDrag();

    if (!wasActive) {
      if (moved || gestureLock || flipping || isTouchPtr(e)) return;
      const rect = wrapEl.getBoundingClientRect();
      const x = e.clientX - rect.left;
      if (x > rect.width * 0.62) {
        lockGesture();
        next();
      } else if (x < rect.width * 0.38) {
        lockGesture();
        prev();
      }
      return;
    }

    const commit = progress > 0.22 || flick;
    bookEl.classList.remove("is-dragging");
    bookEl.classList.add("is-flipping");
    if (commit) {
      bookEl.classList.add(direction === "next" ? "flipping-next" : "flipping-prev");
      if (leafEl) leafEl.style.transform = "";
      listenLeafDone(pendingIndex);
    } else {
      if (leafEl) leafEl.style.transform = "rotateY(0deg) translateZ(0)";
      const done = (ev) => {
        if (ev && ev.target !== leafEl) return;
        leafEl?.removeEventListener("transitionend", done);
        flipping = false;
        pendingIndex = null;
        paint(index);
      };
      leafEl?.addEventListener("transitionend", done);
      window.setTimeout(() => {
        if (bookEl.classList.contains("is-flipping")) {
          flipping = false;
          pendingIndex = null;
          paint(index);
        }
      }, 1100);
    }
  }

  function onTouchMove(e) {
    if (drag.active) {
      e.preventDefault();
      return;
    }
    if (!e.target.closest(".paper, .drawer, .search")) {
      e.preventDefault();
    }
  }

  wrapEl.addEventListener("pointerdown", onPointerDown);
  wrapEl.addEventListener("pointermove", onPointerMove, { passive: false });
  wrapEl.addEventListener("pointerup", onPointerUp);
  wrapEl.addEventListener("pointercancel", onPointerUp);
  document.addEventListener("touchmove", onTouchMove, { passive: false });

  const swipe = { tracking: false, x: 0, y: 0, t: 0 };

  function swipeIgnore(target) {
    return Boolean(target.closest("[data-jump], a, .ghost, .drawer, .search, input"));
  }

  function onSwipeStart(e) {
    if (flipping || drag.active) return;
    const t = e.changedTouches[0];
    if (swipeIgnore(e.target)) return;
    swipe.tracking = true;
    swipe.x = t.clientX;
    swipe.y = t.clientY;
    swipe.t = Date.now();
  }

  function onSwipeEnd(e) {
    if (!swipe.tracking || flipping || drag.active || gestureLock) {
      swipe.tracking = false;
      return false;
    }
    swipe.tracking = false;
    const t = e.changedTouches[0];
    const dx = t.clientX - swipe.x;
    const dy = t.clientY - swipe.y;
    const dt = Date.now() - swipe.t;
    if (dt > 900) return false;
    if (Math.abs(dx) < 36) return false;
    if (Math.abs(dx) < Math.abs(dy) * 1.05) return false;
    lockGesture();
    if (dx < 0) next();
    else prev();
    return true;
  }

  function onSwipeTap(e) {
    if (flipping || gestureLock || drag.active) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - swipe.x;
    const dy = t.clientY - swipe.y;
    if (Math.abs(dx) > 24 || Math.abs(dy) > 24) return;
    if (swipeIgnore(e.target)) return;
    const rect = wrapEl.getBoundingClientRect();
    const x = t.clientX - rect.left;
    if (x > rect.width * 0.62) {
      lockGesture();
      next();
    } else if (x < rect.width * 0.38) {
      lockGesture();
      prev();
    }
  }

  const stage = document.querySelector(".stage");
  stage.addEventListener("touchstart", onSwipeStart, { passive: true });
  stage.addEventListener("touchend", (e) => {
    const started = swipe.tracking;
    const turned = onSwipeEnd(e);
    if (started && !turned) onSwipeTap(e);
  }, { passive: true });

  searchInput.addEventListener("input", () => {
    const q = searchInput.value.trim().toLowerCase();
    searchHits.innerHTML = "";
    if (q.length < 2) return;
    const hits = [];
    data.pages.forEach((page, i) => {
      const text = `${page.title} ${page.html}`.replace(/<[^>]+>/g, " ").toLowerCase();
      if (text.includes(q)) hits.push({ title: page.title, i: FRONT + i });
    });
    searchHits.innerHTML = hits
      .slice(0, 12)
      .map((h) => `<li><a data-jump="${h.i}">${escape(h.title)}</a></li>`)
      .join("");
    bindJumps(searchHits);
  });

  window.addEventListener("resize", () => {
    if (!flipping) paint(align(index));
  });

  fillToc();
  paint(align(index));
})();
