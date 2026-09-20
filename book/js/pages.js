window.BOOK_DATA = {
  "generatedAt": "2026-09-20T04:27:34.487Z",
  "volume": 1,
  "toc": [
    {
      "part": "Start here",
      "folder": "00-start-here",
      "lessons": [
        {
          "title": "How to read this book",
          "file": "01-how-to-read.md",
          "pageIndex": 0
        },
        {
          "title": "The mobile architect map",
          "file": "02-skill-map.md",
          "pageIndex": 2
        },
        {
          "title": "Your gap profile",
          "file": "03-gap-profile.md",
          "pageIndex": 4
        },
        {
          "title": "Open the book",
          "file": "04-open-the-book.md",
          "pageIndex": 6
        }
      ]
    },
    {
      "part": "Software craft",
      "folder": "01-software-fundamentals",
      "lessons": [
        {
          "title": "The four pillars — and the fifth",
          "file": "01-oop-four-pillars.md",
          "pageIndex": 8
        },
        {
          "title": "Types, interfaces, protocols, mixins",
          "file": "02-types-and-abstractions.md",
          "pageIndex": 10
        },
        {
          "title": "Composition over inheritance",
          "file": "03-composition-over-inheritance.md",
          "pageIndex": 12
        },
        {
          "title": "Value, reference, stack, heap",
          "file": "04-value-reference-memory.md",
          "pageIndex": 14
        },
        {
          "title": "SOLID — five pages in one",
          "file": "05-solid.md",
          "pageIndex": 16
        },
        {
          "title": "Coupling, cohesion, dependency direction",
          "file": "06-coupling-and-cohesion.md",
          "pageIndex": 18
        },
        {
          "title": "Design patterns you will actually use",
          "file": "07-design-patterns.md",
          "pageIndex": 20
        },
        {
          "title": "Repository, use case, mapper, DI",
          "file": "08-mobile-patterns.md",
          "pageIndex": 22
        },
        {
          "title": "Errors, results, and concurrency words",
          "file": "09-errors-and-concurrency.md",
          "pageIndex": 24
        },
        {
          "title": "What clean code means in a review",
          "file": "10-architect-pr-review.md",
          "pageIndex": 26
        }
      ]
    },
    {
      "part": "Architecture patterns",
      "folder": "02-architecture-patterns",
      "lessons": [
        {
          "title": "MVC, MVP, MVVM — one family",
          "file": "01-mvc-mvp-mvvm.md",
          "pageIndex": 28
        },
        {
          "title": "MVI and unidirectional flow",
          "file": "02-mvi.md",
          "pageIndex": 30
        },
        {
          "title": "Clean and hexagonal",
          "file": "03-clean-hexagonal.md",
          "pageIndex": 32
        },
        {
          "title": "VIPER and coordinators",
          "file": "04-viper-coordinators.md",
          "pageIndex": 34
        },
        {
          "title": "TCA, Redux, BLoC — same river",
          "file": "05-tca-redux-bloc.md",
          "pageIndex": 36
        },
        {
          "title": "Platform maps — what people actually ship",
          "file": "06-platform-maps.md",
          "pageIndex": 38
        },
        {
          "title": "Presentation, domain, data — who may import whom",
          "file": "07-layers-and-imports.md",
          "pageIndex": 40
        },
        {
          "title": "Who owns which state",
          "file": "08-state-ownership.md",
          "pageIndex": 42
        },
        {
          "title": "Navigation is architecture",
          "file": "09-navigation.md",
          "pageIndex": 44
        },
        {
          "title": "Which pattern — a 60-second pick",
          "file": "10-decision-tree.md",
          "pageIndex": 46
        }
      ]
    },
    {
      "part": "Mobile foundations",
      "folder": "03-mobile-foundations",
      "lessons": [
        {
          "title": "What a mobile architect owns",
          "file": "01-what-architect-owns.md",
          "pageIndex": 48
        },
        {
          "title": "The app is the product",
          "file": "02-app-is-the-product.md",
          "pageIndex": 50
        },
        {
          "title": "The app is a distributed system",
          "file": "03-distributed-system.md",
          "pageIndex": 52
        },
        {
          "title": "Binary, runtime, SDK, ABI",
          "file": "04-binary-runtime-sdk.md",
          "pageIndex": 54
        },
        {
          "title": "Four runtimes — do not mix them up",
          "file": "05-four-runtimes.md",
          "pageIndex": 56
        },
        {
          "title": "The main thread is sacred",
          "file": "06-main-thread.md",
          "pageIndex": 58
        },
        {
          "title": "Memory, battery, radio",
          "file": "07-memory-battery-radio.md",
          "pageIndex": 60
        },
        {
          "title": "Stores and versioning are architecture",
          "file": "08-stores-and-versioning.md",
          "pageIndex": 62
        }
      ]
    }
  ],
  "pages": [
    {
      "part": "Start here",
      "title": "How to read this book",
      "file": "01-how-to-read.md",
      "pageInLesson": 1,
      "pagesInLesson": 2,
      "html": "<h1>How to read this book</h1>\n<blockquote class=\"callout callout-mental\"><strong>Mental model.</strong> A mobile architect does not collect facts. They collect pictures they can redraw under pressure.</blockquote>\n<p>This is not a PDF and not a docs site. It is a field book: open it on a laptop as two pages, or on a phone as one page you swipe.</p>\n<h2>The picture</h2>\n<div class=\"flow lr\" role=\"img\" aria-label=\"Diagram\"><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Picture</span></div><div class=\"fn \"><span class=\"fn-label\">Flutter or Android mapping</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">Architect call</span></div></div></div><span class=\"flow-sep\">→</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Architect call</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">War-room question</span></div></div></div><span class=\"flow-sep\">→</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">War-room question</span></div></div></div>\n<p>Every lesson uses the same walk:</p>\n<ol><li>A picture (usually mermaid).</li><li>How it actually works, in short sentences.</li><li>“You already know this in Flutter as…”</li><li>The call you would make in a design review.</li><li>The anti-pattern that looks smart and fails in production.</li><li>A war-room question you should be able to answer out loud.</li></ol>"
    },
    {
      "part": "Start here",
      "title": "How to read this book",
      "file": "01-how-to-read.md",
      "pageInLesson": 2,
      "pagesInLesson": 2,
      "html": "<h2>How it actually works</h2>\n<p>Read the picture until you can redraw it from memory. Only then read the prose. If you cannot redraw it, you do not own it yet.</p>\n<p>Skim the four-platform strip even on topics you think you know. The point is the <em>mapping</em>, not the definition.</p>\n<p>Leave the cheatsheet for the night before a review. It is the page you would want on the table.</p>\n<h2>You already know this in Flutter as…</h2>\n<p>You already skip widget tutorials. Treat BLoC, isolates, and <code>pubspec</code> the same way this book treats UIKit and Hermes: as <em>placements</em> on a shared map.</p>\n<h2>Architect call</h2>\n<p>If a chapter does not change a decision you would make next week, you read it too passively. Write one sentence in the margin: “So I will / will not …”</p>\n<h2>Anti-patterns</h2>\n<ul><li>Highlighting every sentence.</li><li>Collecting acronyms (VIPER, TCA, JSI) without a picture.</li><li>Reading Android chapters as “I already know this” and skipping the iOS column.</li></ul>\n<h2>War-room question</h2>\n<p>A staff engineer asks: “Explain Clean Architecture without saying the word Clean.” What picture do you draw?</p>\n<h2>Cheatsheet</h2>\n<ul><li>Picture → mapping → decision.</li><li>Laptop: two pages. Phone: swipe.</li><li>Last page is remembered. Ribbon saves a place.</li><li>Arrow keys, tap the edges, or swipe.</li></ul>"
    },
    {
      "part": "Start here",
      "title": "The mobile architect map",
      "file": "02-skill-map.md",
      "pageInLesson": 1,
      "pagesInLesson": 2,
      "html": "<h1>The mobile architect map</h1>\n<blockquote class=\"callout callout-mental\"><strong>Mental model.</strong> Architecture is the set of decisions that are expensive to reverse.</blockquote>\n<p>A mobile architect owns more than folders. They own the product surface, the platform bet, and the way the team ships.</p>\n<h2>The picture</h2>\n<div class=\"flow td\" role=\"img\" aria-label=\"Diagram\"><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Product surface</span></div><div class=\"fn \"><span class=\"fn-label\">App as a system</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">Runtime and OS</span><span class=\"edge \"></span><span class=\"edge-to\">App shape: patterns and modules</span><span class=\"edge \"></span><span class=\"edge-to\">Data, offline, trust</span><span class=\"edge \"></span><span class=\"edge-to\">Perf, security, release</span></div></div><div class=\"fn \"><span class=\"fn-label\">Platform bet</span></div><div class=\"fn \"><span class=\"fn-label\">Team and pipeline</span></div></div><span class=\"flow-sep down\">↓</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Runtime and OS</span></div><div class=\"fn \"><span class=\"fn-label\">App shape: patterns and modules</span></div><div class=\"fn \"><span class=\"fn-label\">Data, offline, trust</span></div><div class=\"fn \"><span class=\"fn-label\">Perf, security, release</span></div></div></div>\n<p>Three rings:</p>\n<ul><li><strong>Product</strong> — what the user can do when the radio dies, the store rejects you, or the OS kills the process.</li><li><strong>Platform</strong> — native, Flutter, RN, KMP: a hiring and constraint choice, not a taste choice.</li><li><strong>Org</strong> — modules, CI, ownership, who can ship on Friday.</li></ul>"
    },
    {
      "part": "Start here",
      "title": "The mobile architect map",
      "file": "02-skill-map.md",
      "pageInLesson": 2,
      "pagesInLesson": 2,
      "html": "<h2>How it actually works</h2>\n<p>This book walks the map in order:</p>\n<table><thead><tr><th>Ring</th><th>Volume</th><th>What you gain</th></tr></thead><tbody><tr><td>Craft</td><td>1</td><td>OOP, SOLID, MVVM/Clean, runtimes</td></tr><tr><td>OS</td><td>2</td><td>Sandbox, lifecycle, permissions</td></tr><tr><td>Gaps</td><td>3–4</td><td>iOS and React Native, deeply</td></tr><tr><td>Home turf</td><td>5–6</td><td>Android and Flutter as <em>architect</em> upgrades</td></tr><tr><td>Bet</td><td>7</td><td>Which stack, honestly</td></tr><tr><td>Domains</td><td>8</td><td>Data, UI systems, perf, security, delivery, org</td></tr><tr><td>Studio</td><td>9–10</td><td>Full designs and what is new now</td></tr></tbody></table>\n<h2>You already know this in Flutter as…</h2>\n<p>You already make product calls (“this is a package, that is add-to-app”). The missing muscle is making the <em>same</em> call when the stack is UIKit or the New Architecture.</p>\n<h2>Architect call</h2>\n<p>If you cannot point to the ring you are deciding (product, platform, or org), you are bikeshedding a folder name.</p>\n<h2>Anti-patterns</h2>\n<ul><li>Treating “architect” as “the person who draws Clean circles.”</li><li>Optimizing widgets while the store versioning story is undefined.</li><li>Picking Flutter vs RN after the team is hired, not before.</li></ul>\n<h2>War-room question</h2>\n<p>“We need iOS parity in four months. Do we hire Swift, stretch Flutter, or stand up RN?” Which ring answers first?</p>\n<h2>Cheatsheet</h2>\n<ul><li>Expensive-to-reverse = architecture.</li><li>Three rings: product, platform, org.</li><li>This volume is the shared language. Later volumes are the platforms and the studio.</li></ul>"
    },
    {
      "part": "Start here",
      "title": "Your gap profile",
      "file": "03-gap-profile.md",
      "pageInLesson": 1,
      "pagesInLesson": 2,
      "html": "<h1>Your gap profile</h1>\n<blockquote class=\"callout callout-mental\"><strong>Mental model.</strong> You are not a beginner. You are uneven — and that is a better starting point than a blank slate.</blockquote>\n<p>This book is cut for one person: strong Flutter, good Android, basic iOS, basic React Native.</p>\n<h2>The picture</h2>\n<div class=\"quadrant\" role=\"img\" aria-label=\"Depth versus need\">\n    <p class=\"q-title\">Depth versus need</p>\n    <div class=\"q-plot\"><span class=\"q-dot\" style=\"left:35%;bottom:82%\">title Depth versus need\n    x-axis Low need --&gt; High need\n    y-axis Shallow --&gt; Deep\n    Flutter architect</span><span class=\"q-dot\" style=\"left:40%;bottom:68%\">Android daily</span><span class=\"q-dot\" style=\"left:82%;bottom:22%\">iOS platform</span><span class=\"q-dot\" style=\"left:78%;bottom:20%\">React Native</span><span class=\"q-dot\" style=\"left:70%;bottom:45%\">Patterns and OOP</span><span class=\"q-dot\" style=\"left:88%;bottom:40%\">Architect decisions</span></div>\n    <p class=\"q-axis\">Low need → High need · Shallow → Deep</p>\n  </div>\n<p>The high-need, still-shallow boxes are iOS, React Native, and the decision layer. Volume 1 builds the language. Volumes 3 and 4 fill the platforms.</p>"
    },
    {
      "part": "Start here",
      "title": "Your gap profile",
      "file": "03-gap-profile.md",
      "pageInLesson": 2,
      "pagesInLesson": 2,
      "html": "<h2>How it actually works</h2>\n<table><thead><tr><th>Surface</th><th>You today</th><th>This book</th></tr></thead><tbody><tr><td>Flutter</td><td>Ship features, packages, state</td><td>Engine, add-to-app, org-scale later</td></tr><tr><td>Android</td><td>Activities, ViewModels, Gradle enough to ship</td><td>Process, modules, OEM, Play as architecture</td></tr><tr><td>iOS</td><td>Basic</td><td>Full track: Swift, UIKit/SwiftUI, signing, modules</td></tr><tr><td>RN</td><td>Basic</td><td>Bridge vs JSI, Hermes, brownfield</td></tr><tr><td>Patterns</td><td>Use BLoC / Provider daily</td><td>Name them in Android/iOS/RN and defend a pick</td></tr></tbody></table>\n<h2>You already know this in Flutter as…</h2>\n<p>BLoC is unidirectional flow. <code>repository</code> + <code>cubit</code> is already Clean-ish. You do not need another BLoC tutorial. You need the iOS and RN <em>translations</em>.</p>\n<h2>Architect call</h2>\n<p>When you feel bored in a Flutter-shaped paragraph, read the iOS column twice. That is the work.</p>\n<h2>Anti-patterns</h2>\n<ul><li>Re-reading Flutter state-management blogs instead of UIKit lifecycle.</li><li>Pretending RN is “Flutter with JS.” The runtime is the difference.</li><li>Skipping OOP/SOLID because you already write classes. The vocabulary is for reviews, not for syntax.</li></ul>\n<h2>War-room question</h2>\n<p>A director says you are “the Flutter person.” How do you answer so they start sending you <em>platform</em> decisions?</p>\n<h2>Cheatsheet</h2>\n<ul><li>Uneven on purpose: skip widget 101.</li><li>Invest in iOS and RN early after this volume.</li><li>Translate, do not relearn what you already ship.</li></ul>"
    },
    {
      "part": "Start here",
      "title": "Open the book",
      "file": "04-open-the-book.md",
      "pageInLesson": 1,
      "pagesInLesson": 2,
      "html": "<h1>Open the book</h1>\n<blockquote class=\"callout callout-mental\"><strong>Mental model.</strong> Same pages, two bodies: a desk spread on a laptop, a single leaf on a phone.</blockquote>\n<h2>The picture</h2>\n<div class=\"flow td\" role=\"img\" aria-label=\"Diagram\"><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">content Markdown</span></div><div class=\"fn \"><span class=\"fn-label\">npm run build</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">book folder</span></div></div></div><span class=\"flow-sep down\">↓</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">book folder</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">Laptop: two-page spread</span><span class=\"edge \"></span><span class=\"edge-to\">Phone: swipe</span><span class=\"edge \"></span><span class=\"edge-to\">GitHub Pages / Netlify</span></div></div></div><span class=\"flow-sep down\">↓</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Laptop: two-page spread</span></div><div class=\"fn \"><span class=\"fn-label\">Phone: swipe</span></div><div class=\"fn \"><span class=\"fn-label\">GitHub Pages / Netlify</span></div></div></div>\n<h2>How it actually works</h2>\n<p>From the repo root:</p>\n<ol><li><code>npm run book</code> — builds pages and serves them (default [http://localhost:4173](http://localhost:4173)).</li><li><code>npm run build</code> — only rebuilds <code>book/js/pages.js</code> after you edit Markdown.</li><li>Hosting — upload the <code>book/</code> folder to any static host. It is HTML, CSS, JS, and images. No server API.</li></ol>\n<p>On a laptop, you see two pages and a gutter. Arrow keys or the page edges turn the leaf. On a phone, one page; swipe.</p>\n<p>The book remembers the last page. <strong>Ribbon</strong> pins a place.</p>"
    },
    {
      "part": "Start here",
      "title": "Open the book",
      "file": "04-open-the-book.md",
      "pageInLesson": 2,
      "pagesInLesson": 2,
      "html": "<table><thead><tr><th>Surface</th><th>What you do</th></tr></thead><tbody><tr><td>Cursor</td><td>Edit <code>content/*<em>/</em>.md</code> — this is the source of truth</td></tr><tr><td>Browser</td><td>Read <code>book/</code> like paper</td></tr><tr><td>Later chat</td><td>Say <strong>write volume 2</strong> — the agent reads <code>CURRICULUM.md</code></td></tr></tbody></table>\n<h2>You already know this in Flutter as…</h2>\n<p><code>lib/</code> is source, <code>build/</code> is output. Here <code>content/</code> is <code>lib/</code>, <code>book/</code> is <code>build/</code>.</p>\n<h2>Architect call</h2>\n<p>Study in the book, not in a PDF export. Search and the ribbon exist so the page-turn is not a toy.</p>\n<h2>Anti-patterns</h2>\n<ul><li>Editing HTML inside <code>book/</code> by hand. It will be overwritten.</li><li>Opening raw Markdown and skipping diagrams.</li><li>Expecting <code>file://</code> plus a network CDN. Vendors are local; still prefer <code>npm run book</code> or a host.</li></ul>\n<h2>War-room question</h2>\n<p>A new hire has only a phone. How do they read the same chapter you have open on a monitor?</p>\n<h2>Cheatsheet</h2>\n<ul><li><code>npm run book</code> to read.</li><li><code>content/</code> in, <code>book/</code> out.</li><li>After Volume 1: say <strong>write volume 2</strong>.</li></ul>"
    },
    {
      "part": "Software craft",
      "title": "The four pillars — and the fifth",
      "file": "01-oop-four-pillars.md",
      "pageInLesson": 1,
      "pagesInLesson": 2,
      "html": "<h1>The four pillars — and the fifth</h1>\n<blockquote class=\"callout callout-mental\"><strong>Mental model.</strong> OOP is not “use classes.” It is a way to hide change behind a small surface.</blockquote>\n<h2>The picture</h2>\n<div class=\"flow lr\" role=\"img\" aria-label=\"Diagram\"><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Abstraction</span></div><div class=\"fn \"><span class=\"fn-label\">Small surface</span></div><div class=\"fn \"><span class=\"fn-label\">Encapsulation</span></div><div class=\"fn \"><span class=\"fn-label\">Polymorphism</span></div><div class=\"fn \"><span class=\"fn-label\">Inheritance</span></div></div></div>\n<p>The four school names: abstraction, encapsulation, inheritance, polymorphism. Architects treat inheritance as optional and <strong>composition</strong> as the default fifth.</p>\n<h2>How it actually works</h2>\n<ul><li><strong>Abstraction</strong> — the caller knows <em>what</em>, not <em>how</em>. <code>PaymentClient.charge</code> hides Stripe vs Play Billing.</li><li><strong>Encapsulation</strong> — invariants live with the data. A <code>Money</code> type that refuses a negative amount.</li><li><strong>Polymorphism</strong> — one shape, many implementations. <code>AuthRepository</code> is Firebase today, a fake in tests.</li><li><strong>Inheritance</strong> — share implementation by “is-a.” Useful for UI kits. Dangerous for domain models.</li></ul>"
    },
    {
      "part": "Software craft",
      "title": "The four pillars — and the fifth",
      "file": "01-oop-four-pillars.md",
      "pageInLesson": 2,
      "pagesInLesson": 2,
      "html": "<table><thead><tr><th>Pillar</th><th>Android</th><th>iOS</th><th>Flutter</th><th>RN</th></tr></thead><tbody><tr><td>Abstraction</td><td><code>interface</code> / <code>fun interface</code></td><td><code>protocol</code></td><td><code>abstract class</code> / <code>interface</code></td><td><code>interface</code> / duck typing</td></tr><tr><td>Encapsulation</td><td>visibility + backing fields</td><td><code>private</code> / access control</td><td><code>_private</code> + packages</td><td>closures + modules</td></tr><tr><td>Polymorphism</td><td>interfaces, sealed</td><td>protocols, existentials</td><td>implements / overrides</td><td>structural + generics</td></tr><tr><td>Inheritance</td><td>classes, rarely deep</td><td>classes, rare in SwiftUI</td><td><code>extends</code> widgets</td><td><code>class</code> components (legacy)</td></tr></tbody></table>\n<h2>You already know this in Flutter as…</h2>\n<p><code>Widget</code> inheritance is a framework rule. Your <em>domain</em> should not look like a widget tree of subclasses.</p>\n<h2>Architect call</h2>\n<p>If a new payment vendor requires editing five screens, encapsulation failed. If it requires a new <code>PaymentClient</code> implementation, it worked.</p>\n<h2>Anti-patterns</h2>\n<ul><li>A 12-level <code>BaseActivity</code> / <code>BaseViewModel</code> / <code>BaseBloc</code>.</li><li>Getters and setters on every field and calling it encapsulation.</li><li>Using inheritance to share three lines of logging.</li></ul>\n<h2>War-room question</h2>\n<p>“Why is inheritance taught first if we keep telling seniors to avoid it?”</p>\n<h2>Cheatsheet</h2>\n<ul><li>Surface small. Hide change.</li><li>Inheritance is a privilege, not a default.</li><li>Polymorphism through interfaces/protocols, not deep trees.</li></ul>"
    },
    {
      "part": "Software craft",
      "title": "Types, interfaces, protocols, mixins",
      "file": "02-types-and-abstractions.md",
      "pageInLesson": 1,
      "pagesInLesson": 2,
      "html": "<h1>Types, interfaces, protocols, mixins</h1>\n<blockquote class=\"callout callout-mental\"><strong>Mental model.</strong> A type is a promise. An object is a value that keeps it.</blockquote>\n<h2>The picture</h2>\n<div class=\"flow td\" role=\"img\" aria-label=\"Diagram\"><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Type / contract</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">Interface / protocol: no leftover story</span><span class=\"edge \"></span><span class=\"edge-to\">Mixin / extension: behavior bolted on</span></div></div><div class=\"fn \"><span class=\"fn-label\">Class: can hold state</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">Object / instance</span></div></div></div><span class=\"flow-sep down\">↓</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Interface / protocol: no leftover story</span></div><div class=\"fn \"><span class=\"fn-label\">Mixin / extension: behavior bolted on</span></div><div class=\"fn \"><span class=\"fn-label\">Object / instance</span></div></div></div>\n<p>Words people mix up:</p>\n<ul><li><strong>Class</strong> — a blueprint that can store state and implement contracts.</li><li><strong>Object / instance</strong> — a living value in memory.</li><li><strong>Type</strong> — the name the compiler uses (<code>User</code>, <code>int</code>, <code>Widget</code>).</li><li><strong>Interface / protocol</strong> — a contract with no “and also I inherit your fields.”</li><li><strong>Mixin</strong> — reusable implementation without claiming “I am a kind of X.”</li></ul>"
    },
    {
      "part": "Software craft",
      "title": "Types, interfaces, protocols, mixins",
      "file": "02-types-and-abstractions.md",
      "pageInLesson": 2,
      "pagesInLesson": 2,
      "html": "<h2>How it actually works</h2>\n<p>Kotlin <code>interface</code> and Swift <code>protocol</code> are the same idea. Dart <code>abstract interface class</code> is the honest name. TypeScript interfaces are structural: if it has the fields, it fits.</p>\n<p>Mixins (<code>with</code> in Dart, protocol extensions in Swift, default interface methods in Kotlin) are for <em>behavior</em>. If you need <em>identity</em> (“this is a Vehicle”), use a type. If you need <em>ability</em> (“this can be logged”), use a mixin or protocol.</p>\n<table><thead><tr><th>Idea</th><th>Android / Kotlin</th><th>iOS / Swift</th><th>Flutter / Dart</th><th>RN / TS</th></tr></thead><tbody><tr><td>Contract</td><td><code>interface</code></td><td><code>protocol</code></td><td><code>abstract interface class</code></td><td><code>interface</code></td></tr><tr><td>Blueprint</td><td><code>class</code> / <code>data class</code></td><td><code>class</code> / <code>struct</code></td><td><code>class</code></td><td><code>class</code></td></tr><tr><td>Ability</td><td>default methods</td><td>protocol extension</td><td><code>mixin</code></td><td>mixin-style HOFs</td></tr><tr><td>Closed set</td><td><code>sealed</code></td><td><code>enum</code> + associated values</td><td><code>sealed class</code> / enum</td><td>union types</td></tr></tbody></table>\n<h2>You already know this in Flutter as…</h2>\n<p><code>mixin</code> on a <code>State</code> is an ability. <code>extends StatelessWidget</code> is a type the framework requires. Do not invent a third widget subclass to share a date formatter.</p>\n<h2>Architect call</h2>\n<p>Public modules export contracts. Implementations stay inside the package. That is how you swap analytics later.</p>\n<h2>Anti-patterns</h2>\n<ul><li>A “Utils” class that is really an untyped mixin of the whole app.</li><li>Interfaces that mirror one concrete class field-for-field (“IUserManagerImpl”).</li><li>Treating TypeScript <code>any</code> as a type.</li></ul>\n<h2>War-room question</h2>\n<p>“Should <code>User</code> be a class, a data class, a struct, or a typedef?” What changes if it crosses an isolate / a thread?</p>\n<h2>Cheatsheet</h2>\n<ul><li>Type = promise. Object = keeper.</li><li>Contracts for seams. Mixins for abilities.</li><li>Sealed types for states you must exhaust.</li></ul>"
    },
    {
      "part": "Software craft",
      "title": "Composition over inheritance",
      "file": "03-composition-over-inheritance.md",
      "pageInLesson": 1,
      "pagesInLesson": 2,
      "html": "<h1>Composition over inheritance</h1>\n<blockquote class=\"callout callout-mental\"><strong>Mental model.</strong> “Has-a” ages better than “is-a.”</blockquote>\n<h2>The picture</h2>\n<div class=\"flow lr\" role=\"img\" aria-label=\"Diagram\"><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">CheckoutScreen</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">PaymentClient</span><span class=\"edge \"></span><span class=\"edge-to\">Logger</span></div></div><div class=\"fn \"><span class=\"fn-label\">Cart</span></div><div class=\"fn \"><span class=\"fn-label\">CheckoutScreen extends BasePaidScreen</span></div><div class=\"fn \"><span class=\"fn-label\">BasePaidScreen</span></div></div><span class=\"flow-sep\">→</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">PaymentClient</span></div><div class=\"fn \"><span class=\"fn-label\">Logger</span></div></div></div>\n<p>The left graph still works when payments grow a wallet. The right graph breaks when <code>BasePaidScreen</code> grows a coupon the checkout does not want.</p>\n<h2>How it actually works</h2>\n<p><strong>Is-a</strong> means every invariant of the parent is yours. A <code>Square</code> that <em>is-a</em> <code>Rectangle</code> lies the moment someone sets width independently.</p>\n<p><strong>Has-a</strong> means you hold a collaborator. A <code>Checkout</code> <em>has a</em> <code>PaymentClient</code>. Tomorrow it can have two.</p>\n<p>Inheritance still wins inside frameworks: <code>StatelessWidget</code>, <code>UIViewController</code>, <code>ComponentActivity</code>. That is their extension point. Your <em>domain</em> should not copy that habit.</p>"
    },
    {
      "part": "Software craft",
      "title": "Composition over inheritance",
      "file": "03-composition-over-inheritance.md",
      "pageInLesson": 2,
      "pagesInLesson": 2,
      "html": "<table><thead><tr><th>Choice</th><th>Use when</th><th>Avoid when</th></tr></thead><tbody><tr><td>Inheritance</td><td>Framework says so; true subtype</td><td>Sharing helpers; optional behavior</td></tr><tr><td>Composition</td><td>Features combine independently</td><td>You want one object to “be” the other</td></tr><tr><td>Delegation</td><td>Kotlin <code>by</code>, Swift wrappers</td><td>You re-implement a 40-method interface by hand</td></tr></tbody></table>\n<h2>You already know this in Flutter as…</h2>\n<p>A <code>Column</code> <em>has</em> children. It does not <em>extend</em> them. Your <code>OrderRepository</code> should <em>have</em> a <code>HttpClient</code> and a <code>OrderCache</code>, not extend <code>BaseRepository</code>.</p>\n<h2>Architect call</h2>\n<p>In review: if the only reason for <code>extends</code> is “reuse <code>showLoading()</code>,” extract a function or a small collaborator.</p>\n<h2>Anti-patterns</h2>\n<ul><li><code>BaseViewModel</code> with 30 protected methods.</li><li>Deep widget subclasses (<code>MyBasePage</code> → <code>MyFormPage</code> → <code>MyCheckoutPage</code>).</li><li>Fixing a parent bug and breaking six children.</li></ul>\n<h2>War-room question</h2>\n<p>“We need a guest checkout and a wallet checkout. Inheritance tree or two compositions on one screen?”</p>\n<h2>Cheatsheet</h2>\n<ul><li>Has-a for features. Is-a only for real subtypes and framework hooks.</li><li>Delegation is composition with manners.</li><li>If you override half the parent, you picked the wrong parent.</li></ul>"
    },
    {
      "part": "Software craft",
      "title": "Value, reference, stack, heap",
      "file": "04-value-reference-memory.md",
      "pageInLesson": 1,
      "pagesInLesson": 2,
      "html": "<h1>Value, reference, stack, heap</h1>\n<blockquote class=\"callout callout-mental\"><strong>Mental model.</strong> Identity is “same box.” Equality is “same contents.” Memory is “who owns the box.”</blockquote>\n<h2>The picture</h2>\n<div class=\"flow td\" role=\"img\" aria-label=\"Diagram\"><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Stack: frames, fast, gone when the function returns</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">References / pointers</span></div></div></div><span class=\"flow-sep down\">↓</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">References / pointers</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">Heap: objects live until nothing points at them</span></div></div></div><span class=\"flow-sep down\">↓</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Heap: objects live until nothing points at them</span></div></div></div>\n<p>You do not need a GC PhD. You need to know why a copied <code>User</code> did not update the profile header.</p>\n<h2>How it actually works</h2>\n<p><strong>Value types</strong> copy contents (<code>struct</code> in Swift, <code>data class</code> copy in Kotlin, Dart records / immutable classes). <strong>Reference types</strong> copy the arrow (<code>class</code> almost everywhere).</p>\n<p><strong>Equality</strong> (<code>==</code>) should mean business equality. <strong>Identity</strong> (<code>===</code>, <code>identical</code>) means the same allocation.</p>\n<p><strong>Stack</strong> holds frames and small values. <strong>Heap</strong> holds objects. GC (ART, Dart, Hermes) and ARC (Swift) both free heap — they just argue about <em>when</em>.</p>"
    },
    {
      "part": "Software craft",
      "title": "Value, reference, stack, heap",
      "file": "04-value-reference-memory.md",
      "pageInLesson": 2,
      "pagesInLesson": 2,
      "html": "<table><thead><tr><th>Topic</th><th>Android</th><th>iOS</th><th>Flutter</th><th>RN</th></tr></thead><tbody><tr><td>Default objects</td><td>References on the heap</td><td><code>class</code> ref, <code>struct</code> value</td><td>Instances on the heap</td><td>JS objects are refs</td></tr><tr><td>Copy</td><td><code>copy()</code> / data class</td><td><code>struct</code> assign copies</td><td>immutable + <code>copyWith</code></td><td>spread <code>{...obj}</code></td></tr><tr><td>Identity</td><td><code>===</code></td><td><code>===</code> / <code>ObjectIdentifier</code></td><td><code>identical</code></td><td><code>===</code></td></tr><tr><td>Freeing</td><td>GC</td><td>ARC</td><td>GC</td><td>GC (Hermes)</td></tr></tbody></table>\n<p>Crossing a thread or isolate <em>copies</em> (or requires <code>Send</code> / <code>@Sendable</code>). That is why a Flutter isolate cannot share a random class instance.</p>\n<h2>You already know this in Flutter as…</h2>\n<p><code>const</code> widgets and immutable state exist so identity stays stable and rebuilds stay cheap. Mutating a list in a Cubit state is the same bug as mutating a Swift <code>class</code> you thought was a value.</p>\n<h2>Architect call</h2>\n<p>Domain models that cross layers should be immutable values. UI controllers can be long-lived references.</p>\n<h2>Anti-patterns</h2>\n<ul><li>Mutating a shared <code>User</code> from two screens.</li><li>Using identity to compare <code>data class</code> / <code>Equatable</code> objects in tests.</li><li>Assuming Swift <code>struct</code> is “free.” Large structs copy.</li></ul>\n<h2>War-room question</h2>\n<p>“The badge count updates on profile but not on home. Value copy or two references to different objects?”</p>\n<h2>Cheatsheet</h2>\n<ul><li>Value = copy contents. Reference = copy the arrow.</li><li><code>==</code> vs identity: know which one you mean.</li><li>Stack is short. Heap is shared. Crossing isolates copies.</li></ul>"
    },
    {
      "part": "Software craft",
      "title": "SOLID — five pages in one",
      "file": "05-solid.md",
      "pageInLesson": 1,
      "pagesInLesson": 2,
      "html": "<h1>SOLID — five pages in one</h1>\n<blockquote class=\"callout callout-mental\"><strong>Mental model.</strong> SOLID is five ways to keep a change from detonating the app.</blockquote>\n<h2>The picture</h2>\n<div class=\"flow lr\" role=\"img\" aria-label=\"Diagram\"><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">S: one reason to change</span></div><div class=\"fn \"><span class=\"fn-label\">O: add by extending</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">L: subtypes must not lie</span></div></div></div><span class=\"flow-sep\">→</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">L: subtypes must not lie</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">I: fat interfaces split</span></div></div></div><span class=\"flow-sep\">→</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">I: fat interfaces split</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">D: depend on contracts</span></div></div></div><span class=\"flow-sep\">→</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">D: depend on contracts</span></div></div></div>\n<h2>How it actually works</h2>\n<p><strong>S — Single responsibility.</strong> A class has one reason to change. <code>LoginViewModel</code> should not also write analytics CSV. Mobile example: a screen that fetches, maps, caches, and navigates. Split it.</p>\n<p><strong>O — Open/closed.</strong> Add a new <code>PaymentMethod</code> without editing the <code>switch</code> in five files. Sealed types + one mapper beat a growing <code>if</code>.</p>\n<p><strong>L — Liskov.</strong> A <code>CachedRepo</code> that <em>is-a</em> <code>Repo</code> must not throw “offline” where the parent promised “always returns.” Prefer composition if you cannot honor the contract.</p>"
    },
    {
      "part": "Software craft",
      "title": "SOLID — five pages in one",
      "file": "05-solid.md",
      "pageInLesson": 2,
      "pagesInLesson": 2,
      "html": "<p><strong>I — Interface segregation.</strong> Do not force a widget to implement <code>onPay</code>, <code>onRefund</code>, and <code>onChargeback</code> if it only shows a receipt. Split protocols.</p>\n<p><strong>D — Dependency inversion.</strong> High-level checkout depends on <code>PaymentClient</code>, not <code>StripeSdk</code>. The SDK lives behind the contract. This is the SOLID line that <em>is</em> Clean Architecture.</p>\n<table><thead><tr><th>Letter</th><th>Anti-pattern you will see Monday</th></tr></thead><tbody><tr><td>S</td><td><code>GodViewModel</code> / <code>AppService</code></td></tr><tr><td>O</td><td><code>when (type)</code> with 18 payment brands in the UI</td></tr><tr><td>L</td><td><code>NotImplementedError</code> in a subclass</td></tr><tr><td>I</td><td><code>BaseCallback</code> with 20 empty methods</td></tr><tr><td>D</td><td>Screens importing Retrofit / URLSession types</td></tr></tbody></table>\n<h2>You already know this in Flutter as…</h2>\n<p>A Cubit that imports <code>dio</code> is a D violation. A Cubit that imports <code>AuthRepository</code> is the inversion done right.</p>\n<h2>Architect call</h2>\n<p>In PR review, name the letter. “This is S, not taste.” People argue taste. They rarely argue a named letter plus an example.</p>\n<h2>Anti-patterns</h2>\n<ul><li>Folder religion: <code>domain/</code> <code>data/</code> with a 20-line app and no seams.</li><li>“We are SOLID” because every class has an interface — including <code>IUser</code> on a data class.</li><li>Breaking L so a fake can be lazy in tests, then shipping the fake’s contract.</li></ul>\n<h2>War-room question</h2>\n<p>Pick one class from your last PR. Which SOLID letter would you fail first, and what is the smallest fix?</p>\n<h2>Cheatsheet</h2>\n<ul><li>S: one reason. O: add, don’t edit. L: don’t lie.</li><li>I: small contracts. D: depend upward on abstractions.</li><li>D is the hinge to Clean.</li></ul>"
    },
    {
      "part": "Software craft",
      "title": "Coupling, cohesion, dependency direction",
      "file": "06-coupling-and-cohesion.md",
      "pageInLesson": 1,
      "pagesInLesson": 2,
      "html": "<h1>Coupling, cohesion, dependency direction</h1>\n<blockquote class=\"callout callout-mental\"><strong>Mental model.</strong> Cohesion is “these things belong together.” Coupling is “this cannot move without that.” Direction is “who is allowed to know whom.”</blockquote>\n<h2>The picture</h2>\n<div class=\"flow td\" role=\"img\" aria-label=\"Diagram\"><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Domain</span><div class=\"fn-out\"><span class=\"edge-lab\">never</span><span class=\"edge dashed\"></span><span class=\"edge-to\">UI</span></div></div><div class=\"fn \"><span class=\"fn-label\">Data</span></div></div><span class=\"flow-sep down\">↓</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">UI</span></div></div></div>\n<p>Arrows point toward stability. Domain does not import Flutter, UIKit, or Retrofit.</p>\n<h2>How it actually works</h2>\n<p><strong>High cohesion:</strong> a <code>Cart</code> module contains cart UI, cart math, and cart tests. You can explain it in one sentence.</p>\n<p><strong>Low coupling:</strong> you can replace the HTTP client without opening the cart math.</p>\n<p><strong>Affinity</strong> is not cohesion. Ten unrelated helpers in <code>core/utils</code> are glued by a folder, not by a job.</p>"
    },
    {
      "part": "Software craft",
      "title": "Coupling, cohesion, dependency direction",
      "file": "06-coupling-and-cohesion.md",
      "pageInLesson": 2,
      "pagesInLesson": 2,
      "html": "<table><thead><tr><th>Smell</th><th>What it really is</th></tr></thead><tbody><tr><td>Screen imports database</td><td>Coupling through a shortcut</td></tr><tr><td><code>shared</code> module imported by everything</td><td>A coupling magnet</td></tr><tr><td>Package cycles</td><td>Direction was never drawn</td></tr><tr><td>“Just this once” platform import in domain</td><td>Direction leak</td></tr></tbody></table>\n<h2>You already know this in Flutter as…</h2>\n<p>A feature package that imports <code>Material</code> in <code>domain/</code> will never run in a pure Dart test. That is coupling you can feel.</p>\n<h2>Architect call</h2>\n<p>Draw the allowed imports before you draw the folders. Folders without a direction rule are costume.</p>\n<h2>Anti-patterns</h2>\n<ul><li>A <code>common</code> module that knows every feature.</li><li>Bidirectional <code>import</code> between <code>checkout</code> and <code>profile</code> “because the avatar is on the receipt.”</li><li>Measuring architecture by number of modules, not by who can change independently.</li></ul>\n<h2>War-room question</h2>\n<p>“If we deleted the profile feature tomorrow, how many modules would fail to compile?” If the answer is “most of them,” coupling won.</p>\n<h2>Cheatsheet</h2>\n<ul><li>Cohesion up, coupling down, arrows toward the domain.</li><li>Utils is not a module strategy.</li><li>Cycles mean you hid a missing concept (usually a small DTO or a contract).</li></ul>"
    },
    {
      "part": "Software craft",
      "title": "Design patterns you will actually use",
      "file": "07-design-patterns.md",
      "pageInLesson": 1,
      "pagesInLesson": 2,
      "html": "<h1>Design patterns you will actually use</h1>\n<blockquote class=\"callout callout-mental\"><strong>Mental model.</strong> A pattern is a named conversation. If you cannot name it, reviewers will argue implementation details forever.</blockquote>\n<h2>The picture</h2>\n<div class=\"flow td\" role=\"img\" aria-label=\"Diagram\"><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Creational</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">Singleton — usually a smell</span></div></div><div class=\"fn \"><span class=\"fn-label\">Factory / builder</span></div><div class=\"fn \"><span class=\"fn-label\">Structural</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">Decorator / composite</span></div></div><div class=\"fn \"><span class=\"fn-label\">Adapter / facade</span></div><div class=\"fn \"><span class=\"fn-label\">Behavioral</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">Strategy / command / state</span></div></div><div class=\"fn \"><span class=\"fn-label\">Observer</span></div></div><span class=\"flow-sep down\">↓</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Singleton — usually a smell</span></div><div class=\"fn \"><span class=\"fn-label\">Decorator / composite</span></div><div class=\"fn \"><span class=\"fn-label\">Strategy / command / state</span></div></div></div>\n<p>Skip the catalog of 23 as a religion. Learn the ones that appear in mobile PRs every week.</p>\n<h2>How it actually works</h2>\n<p><strong>Factory / builder</strong> — hide messy construction (<code>URLSession</code> config, Dio interceptors, a SwiftUI <code>Environment</code>). Builders shine when there are eight optional fields.</p>\n<p><strong>Singleton</strong> — “there can be one.” Analytics, and sometimes the database. The smell: hidden global state that tests cannot replace. Prefer a single instance <em>injected</em>, not <code>shared</code> reached from anywhere.</p>\n<p><strong>Adapter</strong> — wrap a vendor SDK so your domain speaks your types. <strong>Facade</strong> — one door in front of three SDKs. <strong>Decorator</strong> — add logging/retry around a client without editing it. <strong>Composite</strong> — trees (views, menu nodes).</p>"
    },
    {
      "part": "Software craft",
      "title": "Design patterns you will actually use",
      "file": "07-design-patterns.md",
      "pageInLesson": 2,
      "pagesInLesson": 2,
      "html": "<p><strong>Observer</strong> — streams, <code>Flow</code>, <code>Combine</code>, <code>ChangeNotifier</code>, Redux subscriptions. The UI <em>reacts</em>. Do not re-implement observer with a home-grown callback list unless you must.</p>\n<p><strong>Strategy</strong> — swap an algorithm (<code>Sort</code>, <code>RetryPolicy</code>, <code>AuthMethod</code>). <strong>Command</strong> — undo stacks, analytics events queued as data. <strong>State</strong> — explicit state objects instead of boolean soup.</p>\n<table><thead><tr><th>Pattern</th><th>Android</th><th>iOS</th><th>Flutter</th><th>RN</th></tr></thead><tbody><tr><td>Observer</td><td>Flow / LiveData</td><td>Combine / AsyncSequence</td><td>Streams / Listenable</td><td>hooks + store</td></tr><tr><td>Adapter</td><td>wrap Play Billing</td><td>wrap StoreKit</td><td>wrap channel</td><td>wrap NativeModule</td></tr><tr><td>Strategy</td><td>interface param</td><td>protocol param</td><td>typedef / class</td><td>function prop</td></tr><tr><td>Singleton smell</td><td><code>object</code> + static</td><td><code>.shared</code></td><td><code>get_it</code> without scope</td><td>module global</td></tr></tbody></table>\n<h2>You already know this in Flutter as…</h2>\n<p><code>Navigator</code> is a facade. <code>Theme</code> is a decorator of sorts. <code>Bloc</code> is observer + state. You already speak patterns; this page names them for mixed teams.</p>\n<h2>Architect call</h2>\n<p>Name the pattern in the PR title when it is the point: “Adapter over StoreKit so domain stays unit-testable.”</p>\n<h2>Anti-patterns</h2>\n<ul><li>Singleton service locator as the entire architecture.</li><li>Factory that is just a constructor with extra steps.</li><li>Observer spaghetti: five listeners updating each other.</li></ul>\n<h2>War-room question</h2>\n<p>“Is our <code>AppServices.shared</code> a facade or a junk drawer?” How would you prove it?</p>\n<h2>Cheatsheet</h2>\n<ul><li>Creational: factory, builder; singleton only if injected.</li><li>Structural: adapter, facade, decorator, composite.</li><li>Behavioral: observer, strategy, command, state.</li></ul>"
    },
    {
      "part": "Software craft",
      "title": "Repository, use case, mapper, DI",
      "file": "08-mobile-patterns.md",
      "pageInLesson": 1,
      "pagesInLesson": 2,
      "html": "<h1>Repository, use case, mapper, DI</h1>\n<blockquote class=\"callout callout-mental\"><strong>Mental model.</strong> These four are how mobile teams <em>apply</em> SOLID without saying SOLID.</blockquote>\n<h2>The picture</h2>\n<ol class=\"seq\" role=\"img\" aria-label=\"Sequence\"><li><span class=\"seq-from\">API</span> → <span class=\"seq-to\">Repo</span> <span class=\"seq-msg\">dto</span></li><li><span class=\"seq-from\">Mapper</span> → <span class=\"seq-to\">Repo</span> <span class=\"seq-msg\">Order</span></li><li><span class=\"seq-from\">Repo</span> → <span class=\"seq-to\">UseCase</span> <span class=\"seq-msg\">Order</span></li><li><span class=\"seq-from\">UseCase</span> → <span class=\"seq-to\">UI</span> <span class=\"seq-msg\">result</span></li></ol>\n<ul><li><strong>Repository</strong> — the app’s door to a kind of data. Hides network + cache.</li><li><strong>Use case / interactor</strong> — one user job (<code>PlaceOrder</code>). Owns the policy.</li><li><strong>Mapper</strong> — DTO ↔ domain. Stops Retrofit/JSON types from leaking.</li><li><strong>DI</strong> — construction happens at the edges. The rest receives neighbors.</li></ul>"
    },
    {
      "part": "Software craft",
      "title": "Repository, use case, mapper, DI",
      "file": "08-mobile-patterns.md",
      "pageInLesson": 2,
      "pagesInLesson": 2,
      "html": "<h2>How it actually works</h2>\n<p>A repository is <em>not</em> “a class named Repository.” It is a seam: the rest of the app can run on a fake. If the class just forwards one API call and adds nothing (cache, mapping, policy), you paid a name for no seam.</p>\n<p>A use case is worth a type when the job has a rule (retry, combine two repos, enforce entitlements). A one-line <code>repo.get()</code> does not need a <code>GetUserUseCase</code>.</p>\n<p>DI is a graph: Hilt / Koin / <code>get_it</code> / Swinject / a composition root. The crime is <code>new Sdk()</code> in a widget.</p>\n<table><thead><tr><th>Piece</th><th>Android</th><th>iOS</th><th>Flutter</th><th>RN</th></tr></thead><tbody><tr><td>Repository</td><td>interface + impl</td><td>protocol + impl</td><td>abstract + impl</td><td>interface + impl</td></tr><tr><td>Use case</td><td>class / function</td><td>struct / actor</td><td>class / function</td><td>function</td></tr><tr><td>Mapper</td><td>extension / Mapstruct-ish</td><td>init from DTO</td><td><code>fromJson</code> isolated</td><td>zod + mapper</td></tr><tr><td>DI</td><td>Hilt, Koin</td><td>Swinject, factories</td><td>get_it, riverpod</td><td>context, DI libs</td></tr></tbody></table>\n<h2>You already know this in Flutter as…</h2>\n<p><code>AuthRepository</code> + a Cubit that calls it <em>is</em> this page, if the Cubit does not parse JSON.</p>\n<h2>Architect call</h2>\n<p>Require mappers at the data boundary in the style guide. Everything else is optional ceremony — add use cases when a rule appears, not on day one of a todo app.</p>\n<h2>Anti-patterns</h2>\n<ul><li><code>XxxUseCase</code> per CRUD verb, each five lines, forever.</li><li>Repository that returns <code>Response&lt;Dto&gt;</code> to the UI.</li><li><code>GetIt.I&lt;Foo&gt;()</code> inside a random helper three packages deep.</li></ul>\n<h2>War-room question</h2>\n<p>“Do we need use cases if we have Riverpod / ViewModel / Bloc?” (Yes, when there is a <em>policy</em>. No, when they would only forward.)</p>\n<h2>Cheatsheet</h2>\n<ul><li>Repository = data seam. Use case = policy. Mapper = type firewall.</li><li>DI at the composition root.</li><li>Names without seams are costume.</li></ul>"
    },
    {
      "part": "Software craft",
      "title": "Errors, results, and concurrency words",
      "file": "09-errors-and-concurrency.md",
      "pageInLesson": 1,
      "pagesInLesson": 2,
      "html": "<h1>Errors, results, and concurrency words</h1>\n<blockquote class=\"callout callout-mental\"><strong>Mental model.</strong> An error is information. A crash is a broken promise. Concurrency is about <em>who may touch what, and when</em>.</blockquote>\n<h2>The picture</h2>\n<div class=\"flow lr\" role=\"img\" aria-label=\"Diagram\"><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Failure</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">Exception</span><span class=\"edge \"></span><span class=\"edge-to\">Crash / fatal</span></div></div><div class=\"fn \"><span class=\"fn-label\">Result / sealed</span></div><div class=\"fn \"><span class=\"fn-label\">Work</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">Lock</span></div></div><div class=\"fn \"><span class=\"fn-label\">Thread</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">Race if shared mutable</span></div></div></div><span class=\"flow-sep\">→</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Exception</span></div><div class=\"fn \"><span class=\"fn-label\">Crash / fatal</span></div><div class=\"fn \"><span class=\"fn-label\">Lock</span></div><div class=\"fn \"><span class=\"fn-label\">Race if shared mutable</span></div></div></div>\n<h2>How it actually works</h2>\n<p><strong>Exceptions</strong> are control flow for <em>exceptional</em> paths. Using them for “wrong password” makes call sites noisy and easy to swallow.</p>\n<p><strong>Results</strong> (<code>Result</code>, <code>Either</code>, Swift <code>Result</code>, Dart <code>Result</code> / sealed, Kotlin <code>Result</code> / sealed) make failure part of the type. The compiler can nag you.</p>\n<p><strong>Crashes</strong> (<code>fatalError</code>, force unwrap, Dart <code>!</code> on null, RN redbox in prod if you are unlucky) are for broken invariants — not for network.</p>"
    },
    {
      "part": "Software craft",
      "title": "Errors, results, and concurrency words",
      "file": "09-errors-and-concurrency.md",
      "pageInLesson": 2,
      "pagesInLesson": 2,
      "html": "<p>Concurrency vocabulary, <em>before</em> platform APIs:</p>\n<ul><li><strong>Thread</strong> — an OS worker. The <strong>main / UI thread</strong> paints. Block it and the app janks.</li><li><strong>Lock</strong> — “only one at a time.” Deadlock is two locks waiting on each other.</li><li><strong>Race</strong> — two writers, no rule, last write wins (or worse).</li><li><strong>Async</strong> — “I will continue later.” Not the same as “on another thread.” JS is async on one thread. Dart <code>async</code> is often still on the UI isolate.</li><li><strong>Isolate / process / actor</strong> — memory is <em>not</em> shared (or is shared only through messages). Safer, copies cost.</li></ul>\n<table><thead><tr><th>Word</th><th>Android</th><th>iOS</th><th>Flutter</th><th>RN</th></tr></thead><tbody><tr><td>Main thread</td><td>Main looper</td><td>Main actor</td><td>UI isolate</td><td>JS thread + UI thread</td></tr><tr><td>Async</td><td>coroutines</td><td>Swift async</td><td>Future / async</td><td>Promise / async</td></tr><tr><td>Parallel work</td><td>Dispatchers.IO</td><td>Task.detached</td><td>Isolate</td><td>JSI / native</td></tr><tr><td>Errors</td><td>sealed / Result</td><td>Result / throws</td><td>Result / throws</td><td>Result / throw</td></tr></tbody></table>\n<h2>You already know this in Flutter as…</h2>\n<p><code>Future</code> is async, not parallel. <code>compute()</code> / isolates are parallel. <code>catchError</code> that returns <code>null</code> is how production mysteries start.</p>\n<h2>Architect call</h2>\n<p>Pick one error type at the domain boundary (<code>Failure</code> sealed). Map exceptions at the edge. Never leak <code>DioException</code> or <code>NSError</code> into UI.</p>\n<h2>Anti-patterns</h2>\n<ul><li>Empty <code>catch</code>.</li><li><code>try/catch</code> around 200 lines “just in case.”</li><li>Doing JSON parse on the UI thread for a 2 MB payload and calling it “a jank mystery.”</li></ul>\n<h2>War-room question</h2>\n<p>“Is this <code>async</code> function allowed to touch the UI? How do you know?”</p>\n<h2>Cheatsheet</h2>\n<ul><li>Result for expected failure. Exception for broken contracts. Crash for invariants.</li><li>Async ≠ parallel. Main thread paints.</li><li>Isolate/actor: share messages, not objects.</li></ul>"
    },
    {
      "part": "Software craft",
      "title": "What clean code means in a review",
      "file": "10-architect-pr-review.md",
      "pageInLesson": 1,
      "pagesInLesson": 2,
      "html": "<h1>What clean code means in a review</h1>\n<blockquote class=\"callout callout-mental\"><strong>Mental model.</strong> As an architect you review <em>reversibility</em>, not punctuation.</blockquote>\n<h2>The picture</h2>\n<div class=\"flow td\" role=\"img\" aria-label=\"Diagram\"><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">PR</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">Can I replace a vendor in one package</span><span class=\"edge \"></span><span class=\"edge-to\">Did we invent a name without a seam</span><span class=\"edge \"></span><span class=\"edge-to\">Did we block the main thread</span><span class=\"edge \"></span><span class=\"edge-to\">Will a junior copy this as the new pattern</span></div></div><div class=\"fn \"><span class=\"fn-label\">Can I test the policy without a device</span></div></div><span class=\"flow-sep down\">↓</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Can I replace a vendor in one package</span></div><div class=\"fn \"><span class=\"fn-label\">Did we invent a name without a seam</span></div><div class=\"fn \"><span class=\"fn-label\">Did we block the main thread</span></div><div class=\"fn \"><span class=\"fn-label\">Will a junior copy this as the new pattern</span></div></div></div>\n<p>Syntax nits are cheap. A new global singleton is expensive.</p>\n<h2>How it actually works</h2>\n<p>Ask five questions, in this order:</p>\n<ol><li><strong>Direction</strong> — does UI import data types? Stop there.</li><li><strong>Seam</strong> — is there a fake for the new SDK?</li><li><strong>Name</strong> — does <code>Manager</code> / <code>Helper</code> / <code>Service</code> hide two jobs?</li><li><strong>Thread</strong> — any disk, JSON, or crypto on the UI path?</li><li><strong>Copy-paste</strong> — if this PR becomes the template, are we happy?</li></ol>"
    },
    {
      "part": "Software craft",
      "title": "What clean code means in a review",
      "file": "10-architect-pr-review.md",
      "pageInLesson": 2,
      "pagesInLesson": 2,
      "html": "<p>You already write readable Dart. The upgrade is refusing PRs that are readable <em>and</em> irreversible.</p>\n<table><thead><tr><th>Approve</th><th>Request changes</th></tr></thead><tbody><tr><td>Small adapter over a vendor</td><td>Screens talking to Retrofit / URLSession</td></tr><tr><td>Sealed failures mapped at the edge</td><td><code>catch (e) {}</code></td></tr><tr><td>Feature package with a public barrel</td><td>New code in <code>common/utils</code></td></tr><tr><td>Immutable state</td><td>Mutated lists shared across screens</td></tr></tbody></table>\n<h2>You already know this in Flutter as…</h2>\n<p>You have rejected <code>setState</code> soup. Apply the same allergy to <code>BaseViewModel</code> soup and <code>AppServices.shared</code>.</p>\n<h2>Architect call</h2>\n<p>Write the rule down once (this book, a CONTRIBUTING, a lint). Do not win the same argument with charisma every Friday.</p>\n<h2>Anti-patterns</h2>\n<ul><li>Reviewing only the language you like (Dart) and rubber-stamping Kotlin/Swift.</li><li>Blocking a PR for brace style while a cycle lands in <code>domain</code>.</li><li>“We’ll refactor after the release” with no ticket and no seam.</li></ul>\n<h2>War-room question</h2>\n<p>A VP wants the feature tomorrow. Which of the five questions are you allowed to waive, and which one never?</p>\n<h2>Cheatsheet</h2>\n<ul><li>Review reversibility: direction, seam, name, thread, template.</li><li>Readable is necessary, not sufficient.</li><li>Write the rule once. Point at it.</li></ul>"
    },
    {
      "part": "Architecture patterns",
      "title": "MVC, MVP, MVVM — one family",
      "file": "01-mvc-mvp-mvvm.md",
      "pageInLesson": 1,
      "pagesInLesson": 2,
      "html": "<h1>MVC, MVP, MVVM — one family</h1>\n<blockquote class=\"callout callout-mental\"><strong>Mental model.</strong> All three answer “who owns UI state, and who talks to the model?” They differ only in how chatty the view is.</blockquote>\n<h2>The picture</h2>\n<div class=\"flow lr\" role=\"img\" aria-label=\"Diagram\"><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">MVC</span></div><div class=\"fn \"><span class=\"fn-label\">Controller</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">Model</span></div></div></div><span class=\"flow-sep\">→</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Model</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">View</span></div></div></div><span class=\"flow-sep\">→</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">View</span></div></div></div>\n<div class=\"flow lr\" role=\"img\" aria-label=\"Diagram\"><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">MVP</span></div><div class=\"fn \"><span class=\"fn-label\">View</span></div><div class=\"fn \"><span class=\"fn-label\">Presenter</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">Model</span></div></div></div><span class=\"flow-sep\">→</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Model</span></div></div></div>\n<div class=\"flow lr\" role=\"img\" aria-label=\"Diagram\"><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">MVVM</span></div><div class=\"fn \"><span class=\"fn-label\">ViewModel</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">Model</span><span class=\"edge \"></span><span class=\"edge-to\">View</span></div></div></div><span class=\"flow-sep\">→</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">View</span></div><div class=\"fn \"><span class=\"fn-label\">Model</span></div></div></div>\n<h2>How it actually works</h2>\n<p><strong>MVC</strong> — the controller interprets input. The view often observes the model. Classic UIKit and old Android Activities mixed V and C until they hurt.</p>\n<p><strong>MVP</strong> — the presenter is a puppet master. The view is a passive interface (<code>showName</code>). Easy to unit-test, verbose, and the presenter tends to become a god.</p>\n<p><strong>MVVM</strong> — the view binds to observable state. The ViewModel does not hold a view reference. Rotation / configuration changes become survivable.</p>"
    },
    {
      "part": "Architecture patterns",
      "title": "MVC, MVP, MVVM — one family",
      "file": "01-mvc-mvp-mvvm.md",
      "pageInLesson": 2,
      "pagesInLesson": 2,
      "html": "<table><thead><tr><th>Pattern</th><th>Android</th><th>iOS</th><th>Flutter</th><th>RN</th></tr></thead><tbody><tr><td>MVC</td><td>Early Activities</td><td>UIKit controllers</td><td>almost never</td><td>class components + store</td></tr><tr><td>MVP</td><td>still in older apps</td><td>VIPER-adjacent</td><td>rare</td><td>container/presenter</td></tr><tr><td>MVVM</td><td>Jetpack VM + state</td><td>SwiftUI + Observable</td><td>something else*</td><td>hooks + state</td></tr></tbody></table>\n<p>\\<em>Flutter “MVVM” is usually a ChangeNotifier or a Cubit. The </em>idea* matches: view binds, logic does not point at widgets.</p>\n<h2>You already know this in Flutter as…</h2>\n<p><code>Cubit</code> + <code>BlocBuilder</code> is MVVM with a stricter input (<code>event</code> / <code>emit</code>) if you use Bloc. Provider + <code>notifyListeners</code> is MVVM with more rope.</p>\n<h2>Architect call</h2>\n<p>For a new native Android/iOS screen in 2026: MVVM (or MVI). Do not start a new MVP unless the team already has a hundred presenters and a generator.</p>\n<h2>Anti-patterns</h2>\n<ul><li>Calling it MVVM while the ViewModel holds <code>Context</code> / <code>UIViewController</code>.</li><li>MVC where the Activity is 2,000 lines of everything.</li><li>MVP interfaces that repeat every <code>TextView</code> setter.</li></ul>\n<h2>War-room question</h2>\n<p>“If I rotate the phone, who still has the typed text — View, Presenter, or ViewModel — and why?”</p>\n<h2>Cheatsheet</h2>\n<ul><li>MVC: controller + leaky views. MVP: passive view, chatty presenter. MVVM: bind to state, no view pointer.</li><li>New work: MVVM / MVI.</li><li>Flutter Bloc ≈ MVVM + events.</li></ul>"
    },
    {
      "part": "Architecture patterns",
      "title": "MVI and unidirectional flow",
      "file": "02-mvi.md",
      "pageInLesson": 1,
      "pagesInLesson": 2,
      "html": "<h1>MVI and unidirectional flow</h1>\n<blockquote class=\"callout callout-mental\"><strong>Mental model.</strong> State is a value. Events go in. A new state comes out. Time travel is a log of those pairs.</blockquote>\n<h2>The picture</h2>\n<div class=\"flow lr\" role=\"img\" aria-label=\"Diagram\"><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Reducer / Bloc</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">State</span></div></div></div><span class=\"flow-sep\">→</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">State</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">View</span></div></div></div><span class=\"flow-sep\">→</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">View</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">Event / Intent</span></div></div></div><span class=\"flow-sep\">→</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Event / Intent</span></div></div></div>\n<p>No second door. The view does not poke <code>user.name =</code>. It sends <code>NameChanged</code>.</p>\n<h2>How it actually works</h2>\n<p><strong>MVI</strong> (Model-View-Intent) is MVC’s grandchild via Redux. One immutable state. A pure-ish reducer. Side effects live beside the reducer, not inside the view.</p>\n<p>This is why Flutter Bloc, Redux, TCA, and Android UDF look like cousins. They disagree about syntax, not about the arrow.</p>"
    },
    {
      "part": "Architecture patterns",
      "title": "MVI and unidirectional flow",
      "file": "02-mvi.md",
      "pageInLesson": 2,
      "pagesInLesson": 2,
      "html": "<p><strong>State</strong> must be enough to draw the screen. If the view must “remember” a dialog, it is not in the state.</p>\n<p><strong>Intents</strong> are facts about the user or the system (<code>SubmitTapped</code>, <code>TokenExpired</code>). They are not “setLoading(true).”</p>\n<p><strong>Effects</strong> (<code>Channel</code>, <code>once</code> events, TCA effects) are for navigation and toasts — things that are not <em>state</em>, they are <em>moments</em>.</p>\n<table><thead><tr><th>Stack</th><th>Event in</th><th>State out</th></tr></thead><tbody><tr><td>Flutter Bloc</td><td><code>add(Event)</code></td><td><code>state</code></td></tr><tr><td>Android UDF</td><td><code>onEvent</code></td><td><code>StateFlow</code></td></tr><tr><td>TCA</td><td><code>Action</code></td><td><code>State</code> + <code>Effect</code></td></tr><tr><td>Redux / RN</td><td><code>dispatch</code></td><td>store</td></tr></tbody></table>\n<h2>You already know this in Flutter as…</h2>\n<p>If you have ever replayed Bloc events in a test, you already trust unidirectional flow. MVI is that trust, named.</p>\n<h2>Architect call</h2>\n<p>Use MVI when the screen has more than three states (loading / error / data) or when QA needs “what did the user do.” Skip it for a static settings row.</p>\n<h2>Anti-patterns</h2>\n<ul><li>Mutable state objects inside a “reducer.”</li><li>Two stores updating each other (a cycle of arrows).</li><li>Putting navigation in the reducer as a boolean <code>shouldOpenDetails</code> that never resets.</li></ul>\n<h2>War-room question</h2>\n<p>“Show me how you would reproduce a production bug from an event log.” If they cannot, the flow is not unidirectional yet.</p>\n<h2>Cheatsheet</h2>\n<ul><li>Event in, state out, one arrow.</li><li>State draws. Effects are moments.</li><li>Bloc / UDF / TCA / Redux are dialects.</li></ul>"
    },
    {
      "part": "Architecture patterns",
      "title": "Clean and hexagonal",
      "file": "03-clean-hexagonal.md",
      "pageInLesson": 1,
      "pagesInLesson": 2,
      "html": "<h1>Clean and hexagonal</h1>\n<blockquote class=\"callout callout-mental\"><strong>Mental model.</strong> Policies do not import mechanisms. The domain does not know Flutter exists.</blockquote>\n<p><img src=\"images/dependency-rule.png\" alt=\"Dependency rule\" /></p>\n<h2>The picture</h2>\n<div class=\"flow td\" role=\"img\" aria-label=\"Diagram\"><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Presentation</span></div><div class=\"fn \"><span class=\"fn-label\">Application / use cases</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">Domain</span></div></div><div class=\"fn \"><span class=\"fn-label\">Data / adapters</span></div><div class=\"fn \"><span class=\"fn-label\">OS, HTTP, DB</span></div></div><span class=\"flow-sep down\">↓</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Domain</span></div></div></div>\n<p><strong>Hexagonal</strong> (ports and adapters): the app is a hexagon. <strong>Ports</strong> are interfaces. <strong>Adapters</strong> are Firebase, Room, URLSession. The hexagon does not mention them.</p>\n<p><strong>Clean</strong> (Martin) is the same dependency rule drawn as circles. Entities at the center. Frameworks at the edge.</p>"
    },
    {
      "part": "Architecture patterns",
      "title": "Clean and hexagonal",
      "file": "03-clean-hexagonal.md",
      "pageInLesson": 2,
      "pagesInLesson": 2,
      "html": "<h2>How it actually works</h2>\n<p>The <strong>dependency rule</strong>: source code dependencies point inward. A use case may import an <code>Order</code> entity. An entity may not import a use case. A use case may not import Dio.</p>\n<p><strong>Layers are not folders.</strong> You can have Clean in three files. You can have <code>domain/</code> <code>data/</code> <code>presentation/</code> and still import <code>BuildContext</code> in an entity.</p>\n<p>Use Clean when you have <em>real</em> vendor risk (payments, identity, offline sync) or multiple UIs (phone + watch). Do not install five layers for a marketing app with three screens.</p>\n<table><thead><tr><th>Layer</th><th>Allowed to know</th><th>Forbidden</th></tr></thead><tbody><tr><td>Domain</td><td>your types</td><td>Flutter, Retrofit, Room</td></tr><tr><td>Application</td><td>domain + ports</td><td>widgets, JSON</td></tr><tr><td>Data</td><td>ports + SDKs</td><td>widgets</td></tr><tr><td>Presentation</td><td>app API + widgets</td><td>SQL, raw DTO</td></tr></tbody></table>\n<h2>You already know this in Flutter as…</h2>\n<p>A package whose <code>lib/src/domain</code> is pure Dart, with <code>flutter</code> only in <code>presentation</code>. That <em>is</em> hexagonal.</p>\n<h2>Architect call</h2>\n<p>Clean is a <strong>direction</strong>, not a folder religion. Require the rule. Do not require <code>usecases/get_user_usecase.dart</code> for every read.</p>\n<h2>Anti-patterns</h2>\n<ul><li>15 files to show a name.</li><li>Domain models that are JSON-serializable “for convenience.”</li><li>Calling it Clean because the repo has the three folder names.</li></ul>\n<h2>War-room question</h2>\n<p>“Point at a type that would still compile if we deleted Flutter. If you cannot, we do not have a domain — we have a UI.”</p>\n<h2>Cheatsheet</h2>\n<ul><li>Arrows inward. Domain is ignorant.</li><li>Ports = interfaces. Adapters = vendors.</li><li>Direction over folders. Ceremony is optional.</li></ul>"
    },
    {
      "part": "Architecture patterns",
      "title": "VIPER and coordinators",
      "file": "04-viper-coordinators.md",
      "pageInLesson": 1,
      "pagesInLesson": 2,
      "html": "<h1>VIPER and coordinators</h1>\n<blockquote class=\"callout callout-mental\"><strong>Mental model.</strong> VIPER is MVP exploded so navigation and assembly have names. Coordinators steal the navigation part and leave the rest alone.</blockquote>\n<h2>The picture</h2>\n<div class=\"flow lr\" role=\"img\" aria-label=\"Diagram\"><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Interactor</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">Presenter</span></div></div><div class=\"fn \"><span class=\"fn-label\">Entity</span></div></div><span class=\"flow-sep\">→</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Presenter</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">View</span><span class=\"edge \"></span><span class=\"edge-to\">Router</span></div></div></div><span class=\"flow-sep\">→</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">View</span></div><div class=\"fn \"><span class=\"fn-label\">Router</span></div></div></div>\n<p>Five nouns: View, Interactor, Presenter, Entity, Router. Plus a builder that wires them.</p>\n<h2>How it actually works</h2>\n<p>VIPER exists because UIKit view controllers became airports. The <strong>router/coordinator</strong> owns “where next.” The <strong>interactor</strong> owns the job. The <strong>presenter</strong> formats. The <strong>view</strong> is dumb.</p>\n<p>On iOS this is still a live dialect. On Android it lost to ViewModel. In Flutter you rarely want five types per screen — you already have navigation as a separate package and Bloc as presenter+interactor.</p>"
    },
    {
      "part": "Architecture patterns",
      "title": "VIPER and coordinators",
      "file": "04-viper-coordinators.md",
      "pageInLesson": 2,
      "pagesInLesson": 2,
      "html": "<p><strong>Coordinators</strong> (or routers) are the keepable idea: screens do not push screens. A parent owns the flow (<code>CheckoutCoordinator</code>). That maps to Flutter <code>go_router</code> redirects, Android Navigation graph + a wrapper, RN navigators.</p>\n<table><thead><tr><th>Piece</th><th>Keep?</th><th>Where it lives now</th></tr></thead><tbody><tr><td>Router / coordinator</td><td>Yes</td><td>Navigation layer</td></tr><tr><td>Interactor</td><td>Sometimes</td><td>Use case</td></tr><tr><td>Presenter</td><td>Often</td><td>ViewModel / Bloc</td></tr><tr><td>Entity</td><td>Yes</td><td>Domain</td></tr><tr><td>Per-screen VIPER files</td><td>Rarely</td><td>iOS legacy / generated</td></tr></tbody></table>\n<h2>You already know this in Flutter as…</h2>\n<p>If a widget calls <code>context.go('/success')</code> deep in a button, you skipped the coordinator. If the <em>route table</em> decides, you kept it.</p>\n<h2>Architect call</h2>\n<p>Steal coordinators. Do not install VIPER on a Flutter team to look enterprise. On an iOS UIKit codebase that already speaks VIPER, do not rewrite it to MVVM in one quarter — wrap new SwiftUI with a coordinator instead.</p>\n<h2>Anti-patterns</h2>\n<ul><li>VIPER templates that produce 8 empty files for a label.</li><li>View controllers that still push while a router exists (two navigators).</li><li>Coordinators that also fetch network data.</li></ul>\n<h2>War-room question</h2>\n<p>“Who is allowed to start the payment SDK UI — the card screen or the checkout coordinator?”</p>\n<h2>Cheatsheet</h2>\n<ul><li>VIPER = MVP + named router + named interactor.</li><li>Keep coordinators. Keep entities. Collapse the rest when the team is not iOS-VIPER native.</li><li>Screens do not own the journey.</li></ul>"
    },
    {
      "part": "Architecture patterns",
      "title": "TCA, Redux, BLoC — same river",
      "file": "05-tca-redux-bloc.md",
      "pageInLesson": 1,
      "pagesInLesson": 2,
      "html": "<h1>TCA, Redux, BLoC — same river</h1>\n<blockquote class=\"callout callout-mental\"><strong>Mental model.</strong> One state tree (or one per feature), actions in, reducer out, effects on the side. Different national costumes.</blockquote>\n<h2>The picture</h2>\n<div class=\"flow lr\" role=\"img\" aria-label=\"Diagram\"><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Reducer</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">State</span><span class=\"edge \"></span><span class=\"edge-to\">Effect</span></div></div></div><span class=\"flow-sep\">→</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">State</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">View</span></div></div><div class=\"fn \"><span class=\"fn-label\">Effect</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">Action / Event</span></div></div></div><span class=\"flow-sep\">→</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Action / Event</span></div><div class=\"fn \"><span class=\"fn-label\">View</span></div></div></div>\n<h2>How it actually works</h2>\n<p><strong>Redux</strong> made the river famous on the web. RN still lives here (or in Redux Toolkit). The store is global unless you work not to.</p>\n<p><strong>BLoC</strong> is Redux with a stream per feature and a Dart type system. Cubit is BLoC with methods instead of event classes.</p>\n<p><strong>TCA</strong> (The Composable Architecture, iOS) is Redux with value types, reducers that compose, and effects as first-class data. If you know <code>bloc_test</code>, you already understand TCA tests.</p>\n<p><strong>Riverpod</strong> is not Redux. It is a dependency graph of providers. You can still put UDF <em>inside</em> a notifier.</p>"
    },
    {
      "part": "Architecture patterns",
      "title": "TCA, Redux, BLoC — same river",
      "file": "05-tca-redux-bloc.md",
      "pageInLesson": 2,
      "pagesInLesson": 2,
      "html": "<table><thead><tr><th>Dialect</th><th>Unit of state</th><th>Side effects</th><th>Best at</th></tr></thead><tbody><tr><td>Redux</td><td>store slice</td><td>thunk / saga / listener</td><td>RN brownfield</td></tr><tr><td>BLoC</td><td>per-feature bloc</td><td><code>repo</code> in handler</td><td>Flutter teams</td></tr><tr><td>Cubit</td><td>per-feature</td><td>methods</td><td>simple screens</td></tr><tr><td>TCA</td><td>composed reducers</td><td><code>Effect</code></td><td>SwiftUI + test logs</td></tr><tr><td>Riverpod</td><td>provider</td><td>notifier body</td><td>Flutter DI + state</td></tr></tbody></table>\n<h2>You already know this in Flutter as…</h2>\n<p>Teaching TCA to yourself: rename <code>Event</code> → <code>Action</code>, <code>emit</code> → <code>state =</code>, <code>repository</code> call → <code>Effect.run</code>. Same river.</p>\n<h2>Architect call</h2>\n<p>Do not run Redux <em>and</em> Bloc <em>and</em> Riverpod in one app without a written rule. Pick a river. Use DI (Riverpod / Hilt) beside it, not a second river.</p>\n<h2>Anti-patterns</h2>\n<ul><li>Global Redux for a single form.</li><li>Bloc that is 1,200 lines because the feature was never split.</li><li>TCA copied onto Android by someone who wanted a blog post.</li></ul>\n<h2>War-room question</h2>\n<p>“Where does ‘open the receipt’ live — reducer, effect, or view?” (Effect / coordinator. Not the reducer.)</p>\n<h2>Cheatsheet</h2>\n<ul><li>Same river: action → reducer → state + effect.</li><li>BLoC / Redux / TCA are dialects.</li><li>One river per app. DI is not a second river.</li></ul>"
    },
    {
      "part": "Architecture patterns",
      "title": "Platform maps — what people actually ship",
      "file": "06-platform-maps.md",
      "pageInLesson": 1,
      "pagesInLesson": 2,
      "html": "<h1>Platform maps — what people actually ship</h1>\n<blockquote class=\"callout callout-mental\"><strong>Mental model.</strong> Marketing names lie. Map the <em>roles</em>: view, state holder, policy, data, navigation.</blockquote>\n<h2>The picture</h2>\n<div class=\"flow td\" role=\"img\" aria-label=\"Diagram\"><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">View</span></div><div class=\"fn \"><span class=\"fn-label\">State holder</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">Policy / use case</span></div></div><div class=\"fn \"><span class=\"fn-label\">Navigation</span></div></div><span class=\"flow-sep down\">↓</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Policy / use case</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">Data port</span></div></div></div><span class=\"flow-sep down\">↓</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Data port</span></div></div></div>\n<p>Fill the boxes per stack. If a box is empty, that role leaked into a neighbor.</p>\n<h2>How it actually works</h2>\n<p><strong>Android, done properly:</strong> Compose (or Views) bind to a <code>ViewModel</code> that exposes UDF state. Use cases optional. Repository + DataStore/Room/Retrofit behind interfaces. Navigation Compose or a graph. Hilt at the edge.</p>\n<p><strong>iOS:</strong> SwiftUI + <code>@Observable</code> / <code>ObservableObject</code> is MVVM. UIKit + coordinators if the app is old. TCA if the team wants a river. URLSession behind a protocol.</p>\n<p><strong>Flutter:</strong> Widget + Bloc/Cubit/Notifier + repository. <code>go_router</code> as coordinator. Pure Dart domain if you paid for it.</p>"
    },
    {
      "part": "Architecture patterns",
      "title": "Platform maps — what people actually ship",
      "file": "06-platform-maps.md",
      "pageInLesson": 2,
      "pagesInLesson": 2,
      "html": "<p><strong>RN:</strong> Function component + hooks. Server cache (React Query) is <em>not</em> UI state. Redux if the team is already there. Native modules behind a TS interface.</p>\n<table><thead><tr><th>Role</th><th>Android</th><th>iOS</th><th>Flutter</th><th>RN</th></tr></thead><tbody><tr><td>View</td><td>Compose</td><td>SwiftUI / UIKit</td><td>Widget</td><td>Component</td></tr><tr><td>State holder</td><td>ViewModel</td><td>Observable / TCA</td><td>Bloc / Notifier</td><td>useState / store</td></tr><tr><td>Policy</td><td>use case</td><td>struct / actor</td><td>class / function</td><td>function</td></tr><tr><td>Data</td><td>repository</td><td>repository</td><td>repository</td><td>repository / Query</td></tr><tr><td>Navigation</td><td>Nav graph</td><td>Coordinator</td><td>go_router</td><td>React Navigation</td></tr></tbody></table>\n<h2>You already know this in Flutter as…</h2>\n<p><code>flutter_bloc</code> + <code>go_router</code> + a repo package is a complete map. Android ViewModel is your Cubit. SwiftUI <code>View</code> is your widget. Stop translating syntax; translate <em>roles</em>.</p>\n<h2>Architect call</h2>\n<p>In a mixed org, write this table on the wiki once. New hires fill it for their stack in week one.</p>\n<h2>Anti-patterns</h2>\n<ul><li>“We use MVVM” on RN when they mean <code>useState</code> in a 400-line screen.</li><li>React Query as the domain model for checkout rules.</li><li>Two ViewModels for one screen because a tutorial said “one VM per widget.”</li></ul>\n<h2>War-room question</h2>\n<p>Hand a junior this table with the Flutter column filled. Can they fill iOS without Googling class names?</p>\n<h2>Cheatsheet</h2>\n<ul><li>Roles, not brand names.</li><li>View / state / policy / data / nav — five boxes.</li><li>Empty box = leaked responsibility.</li></ul>"
    },
    {
      "part": "Architecture patterns",
      "title": "Presentation, domain, data — who may import whom",
      "file": "07-layers-and-imports.md",
      "pageInLesson": 1,
      "pagesInLesson": 2,
      "html": "<h1>Presentation, domain, data — who may import whom</h1>\n<blockquote class=\"callout callout-mental\"><strong>Mental model.</strong> An import is a dependency. A dependency is a promise you cannot break later.</blockquote>\n<h2>The picture</h2>\n<div class=\"flow td\" role=\"img\" aria-label=\"Diagram\"><div class=\"flow-layer\"></div><span class=\"flow-sep down\">↓</span><div class=\"flow-layer\"></div><span class=\"flow-sep down\">↓</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">application</span><div class=\"fn-out\"><span class=\"edge-lab\">may</span><span class=\"edge \"></span><span class=\"edge-to\">domain</span></div></div></div><span class=\"flow-sep down\">↓</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">domain</span><div class=\"fn-out\"><span class=\"edge-lab\">must not</span><span class=\"edge \"></span><span class=\"edge-to\">presentation</span><span class=\"edge-lab\">must not</span><span class=\"edge \"></span><span class=\"edge-to\">data</span></div></div></div><span class=\"flow-sep down\">↓</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">presentation</span><div class=\"fn-out\"><span class=\"edge-lab\">must not</span><span class=\"edge \"></span><span class=\"edge-to\">data</span></div></div><div class=\"fn \"><span class=\"fn-label\">data</span><div class=\"fn-out\"><span class=\"edge-lab\">may</span><span class=\"edge \"></span><span class=\"edge-to\">application</span></div></div></div></div>\n<p>The last arrow is the one teams skip: screens importing Room / Dio / <code>shared_preferences</code>.</p>\n<h2>How it actually works</h2>\n<p><strong>Presentation</strong> may import application APIs and UI kits. It formats and dispatches.</p>\n<p><strong>Application</strong> (use cases) may import domain and ports. It orchestrates.</p>\n<p><strong>Domain</strong> imports nothing from the outside world. Types, math, rules.</p>\n<p><strong>Data</strong> implements ports. It may import SDKs. It maps to domain.</p>"
    },
    {
      "part": "Architecture patterns",
      "title": "Presentation, domain, data — who may import whom",
      "file": "07-layers-and-imports.md",
      "pageInLesson": 2,
      "pagesInLesson": 2,
      "html": "<p>Lint what you cannot preach. Android: Gradle module APIs. Flutter: package <code>analysis_options</code> + no <code>flutter</code> in domain. iOS: SPM targets. RN: ESLint <code>no-restricted-imports</code>.</p>\n<table><thead><tr><th>Bad import</th><th>Why it hurts</th></tr></thead><tbody><tr><td>Widget → DTO</td><td>JSON rename breaks UI</td></tr><tr><td>Domain → BuildContext</td><td>tests need a device</td></tr><tr><td>Use case → Retrofit</td><td>vendor swap edits policy</td></tr><tr><td>Data → Widget</td><td>you now have two UIs</td></tr></tbody></table>\n<h2>You already know this in Flutter as…</h2>\n<p><code>import 'package:flutter/material.dart'</code> in a “domain” file is the whole lesson.</p>\n<h2>Architect call</h2>\n<p>Make the illegal import a CI failure, not a Slack opinion.</p>\n<h2>Anti-patterns</h2>\n<ul><li><code>core</code> that re-exports everything so imports look clean and direction dies.</li><li>“Just this mapper in the widget, it is faster.”</li><li>Domain enums that include <code>toJson</code>.</li></ul>\n<h2>War-room question</h2>\n<p>“Show me the CI rule that would have failed this PR.” If there isn’t one, the diagram is a poster.</p>\n<h2>Cheatsheet</h2>\n<ul><li>Presentation ↛ data.</li><li>Domain ↛ anyone.</li><li>Lint the arrows.</li></ul>"
    },
    {
      "part": "Architecture patterns",
      "title": "Who owns which state",
      "file": "08-state-ownership.md",
      "pageInLesson": 1,
      "pagesInLesson": 2,
      "html": "<h1>Who owns which state</h1>\n<blockquote class=\"callout callout-mental\"><strong>Mental model.</strong> Three piles: pixels, business, and server cache. Mixing them is how you get “ghost” badges.</blockquote>\n<h2>The picture</h2>\n<div class=\"flow lr\" role=\"img\" aria-label=\"Diagram\"><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">UI state: scroll, text, dialog</span></div><div class=\"fn \"><span class=\"fn-label\">Screen</span></div><div class=\"fn \"><span class=\"fn-label\">Domain state: cart, session</span></div><div class=\"fn \"><span class=\"fn-label\">App / feature</span></div><div class=\"fn \"><span class=\"fn-label\">Server cache: lists, profiles</span></div><div class=\"fn \"><span class=\"fn-label\">Repository / Query</span></div></div></div>\n<h2>How it actually works</h2>\n<p><strong>UI state</strong> dies with the screen (or survives configuration change if you care). Cursor position, “is the sheet open,” password visible.</p>\n<p><strong>Domain state</strong> is the product: cart lines, auth session, feature flags you already resolved. It outlives a screen.</p>\n<p><strong>Server cache</strong> is a <em>copy</em> of the backend with a freshness rule. React Query / a repository cache. It is not the cart’s source of truth if the user can edit the cart offline.</p>"
    },
    {
      "part": "Architecture patterns",
      "title": "Who owns which state",
      "file": "08-state-ownership.md",
      "pageInLesson": 2,
      "pagesInLesson": 2,
      "html": "<table><thead><tr><th>Pile</th><th>Lives in</th><th>Do not put here</th></tr></thead><tbody><tr><td>UI</td><td>ViewModel ephemeral / <code>useState</code> / <code>StatefulWidget</code></td><td>user id</td></tr><tr><td>Domain</td><td>session store, cart bloc</td><td><code>isPasswordVisible</code></td></tr><tr><td>Cache</td><td>repository, Query client</td><td>checkout legal rules</td></tr></tbody></table>\n<h2>You already know this in Flutter as…</h2>\n<p>Hydrated Bloc for the cart: domain. <code>TextEditingController</code>: UI. <code>dio</code> cache: server. Three tools, three piles.</p>\n<h2>Architect call</h2>\n<p>Write “source of truth” on the design. If two piles claim the same field, you will ship a race.</p>\n<h2>Anti-patterns</h2>\n<ul><li>Putting the entire user profile in a global Provider because one avatar needed it.</li><li>Treating React Query data as editable domain (mutate cache as if it were a cart).</li><li>Saving scroll offset into the domain store.</li></ul>\n<h2>War-room question</h2>\n<p>“The user edits their name offline. Which pile is truth until sync, and who loses if the server disagrees?”</p>\n<h2>Cheatsheet</h2>\n<ul><li>UI / domain / cache — three piles.</li><li>One source of truth per field.</li><li>Cache is a copy, not a policy.</li></ul>"
    },
    {
      "part": "Architecture patterns",
      "title": "Navigation is architecture",
      "file": "09-navigation.md",
      "pageInLesson": 1,
      "pagesInLesson": 2,
      "html": "<h1>Navigation is architecture</h1>\n<blockquote class=\"callout callout-mental\"><strong>Mental model.</strong> A route is a public API. Deep links are just that API with a URL.</blockquote>\n<h2>The picture</h2>\n<ol class=\"seq\" role=\"img\" aria-label=\"Sequence\"><li><span class=\"seq-from\">Screen</span> → <span class=\"seq-to\">Coordinator / router</span> <span class=\"seq-msg\">paid</span></li></ol>\n<p>The screen reports <em>outcomes</em>. The coordinator chooses <em>destinations</em>.</p>\n<h2>How it actually works</h2>\n<p>If a widget/controller knows the next route name, you have coupled two features. A coupon team cannot change the success screen without opening checkout.</p>\n<p><strong>Typed routes</strong> (<code>CartRoute(id)</code>), <strong>graphs</strong> (Android Navigation), <strong>go_router</strong>, <strong>React Navigation</strong> — all fine. The rule is the same: feature code emits <em>intents</em> (<code>CheckoutCompleted</code>), not <code>push('/magic')</code>.</p>\n<p>Deep links, app links, universal links, notifications: they enter at the coordinator, not at a random widget <code>initState</code>.</p>"
    },
    {
      "part": "Architecture patterns",
      "title": "Navigation is architecture",
      "file": "09-navigation.md",
      "pageInLesson": 2,
      "pagesInLesson": 2,
      "html": "<table><thead><tr><th>Stack</th><th>Coordinator-shaped tool</th></tr></thead><tbody><tr><td>Android</td><td>Nav graph + ViewModel outcomes</td></tr><tr><td>iOS</td><td>Coordinator / TCA destination</td></tr><tr><td>Flutter</td><td><code>go_router</code> / auto_route</td></tr><tr><td>RN</td><td>navigation container + linking config</td></tr></tbody></table>\n<h2>You already know this in Flutter as…</h2>\n<p><code>context.go</code> inside a Bloc is a smell (Bloc should not need <code>BuildContext</code>). Emit an effect; let a listener / router map it.</p>\n<h2>Architect call</h2>\n<p>Own a single linking table. If marketing invents a new URL, one file changes.</p>\n<h2>Anti-patterns</h2>\n<ul><li>Stringly routes (<code>'/user/' + id</code>) in twelve files.</li><li>Notification payload that opens a screen by instantiating it, bypassing the graph.</li><li>Back stack as a junk drawer (pushing login on top of checkout).</li></ul>\n<h2>War-room question</h2>\n<p>“A push notification arrives during an active payment. Who decides whether we interrupt, and with which API?”</p>\n<h2>Cheatsheet</h2>\n<ul><li>Screens report outcomes. Routers pick destinations.</li><li>Deep links enter at the coordinator.</li><li>One linking table.</li></ul>"
    },
    {
      "part": "Architecture patterns",
      "title": "Which pattern — a 60-second pick",
      "file": "10-decision-tree.md",
      "pageInLesson": 1,
      "pagesInLesson": 2,
      "html": "<h1>Which pattern — a 60-second pick</h1>\n<blockquote class=\"callout callout-mental\"><strong>Mental model.</strong> Pick for the <em>team and the risk</em>, not for the blog you liked this month.</blockquote>\n<h2>The picture</h2>\n<div class=\"flow td\" role=\"img\" aria-label=\"Diagram\"><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">New app or new feature</span></div><div class=\"fn diamond\"><span class=\"fn-label\">Vendor / offline / multi-UI risk</span><div class=\"fn-out\"><span class=\"edge-lab\">yes</span><span class=\"edge \"></span><span class=\"edge-to\">Direction: Clean / ports</span><span class=\"edge-lab\">no</span><span class=\"edge \"></span><span class=\"edge-to\">Team already has a river</span></div></div></div><span class=\"flow-sep down\">↓</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Direction: Clean / ports</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">Stay on the river</span></div></div><div class=\"fn diamond\"><span class=\"fn-label\">Team already has a river</span><div class=\"fn-out\"><span class=\"edge-lab\">Bloc / TCA / Redux</span><span class=\"edge \"></span><span class=\"edge-to\">Stay on the river</span><span class=\"edge-lab\">no</span><span class=\"edge \"></span><span class=\"edge-to\">Native Android / iOS</span></div></div></div><span class=\"flow-sep down\">↓</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Stay on the river</span></div><div class=\"fn diamond\"><span class=\"fn-label\">Native Android / iOS</span><div class=\"fn-out\"><span class=\"edge-lab\">yes</span><span class=\"edge \"></span><span class=\"edge-to\">MVVM or UDF ViewModel</span><span class=\"edge-lab\">RN</span><span class=\"edge \"></span><span class=\"edge-to\">Hooks + Query + tiny domain</span><span class=\"edge-lab\">Flutter</span><span class=\"edge \"></span><span class=\"edge-to\">Cubit or Notifier + repo</span></div></div></div><span class=\"flow-sep down\">↓</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">MVVM or UDF ViewModel</span></div><div class=\"fn \"><span class=\"fn-label\">Hooks + Query + tiny domain</span></div><div class=\"fn \"><span class=\"fn-label\">Cubit or Notifier + repo</span></div></div></div>\n<h2>How it actually works</h2>\n<p><strong>Default, 2026:</strong></p>\n<ul><li>Flutter: Cubit/Notifier + repository. Bloc when events are a product need. Clean <em>direction</em> if money or identity is involved.</li><li>Android: ViewModel + UDF + repository. Hilt.</li><li>iOS: SwiftUI MVVM. TCA if the team is already TCA. Coordinators for flows.</li><li>RN: hooks + React Query for server cache + a real domain module when rules exist.</li></ul>"
    },
    {
      "part": "Architecture patterns",
      "title": "Which pattern — a 60-second pick",
      "file": "10-decision-tree.md",
      "pageInLesson": 2,
      "pagesInLesson": 2,
      "html": "<table><thead><tr><th>Situation</th><th>Pick</th><th>Do not pick</th></tr></thead><tbody><tr><td>Three-screen marketing app</td><td>MVVM / Cubit</td><td>Full Clean + VIPER</td></tr><tr><td>Payments + offline</td><td>Ports + use cases</td><td>Widgets talking to Stripe</td></tr><tr><td>UIKit app with VIPER</td><td>Keep, wrap new SwiftUI</td><td>Big-bang rewrite</td></tr><tr><td>Mixed RN + native</td><td>JSI modules + clear JS domain</td><td>Second Redux</td></tr><tr><td>You are the only Flutter hire</td><td>Cubit, boring</td><td>TCA-in-Dart experiment</td></tr></tbody></table>\n<h2>You already know this in Flutter as…</h2>\n<p>You have already chosen Bloc vs Riverpod once. The architect upgrade is choosing <em>again</em> for an iOS team you do not personally enjoy.</p>\n<h2>Architect call</h2>\n<p>Write the pick in the RFC in one paragraph: team, risk, default, escape hatch. If you cannot, you are decorating.</p>\n<h2>Anti-patterns</h2>\n<ul><li>Clean as a costume (folders, no seams).</li><li>A new pattern per squad.</li><li>Rewriting working MVP because MVVM is “modern.”</li></ul>\n<h2>War-room question</h2>\n<p>You have 60 seconds. The app is a field tool with bad radio and a two-person iOS team that knows UIKit. What do you pick, and what do you refuse?</p>\n<h2>Cheatsheet</h2>\n<ul><li>Risk → direction (Clean). Team → dialect (Bloc/TCA/VM).</li><li>Boring defaults beat clever uniques.</li><li>One paragraph RFC. One escape hatch.</li></ul>"
    },
    {
      "part": "Mobile foundations",
      "title": "What a mobile architect owns",
      "file": "01-what-architect-owns.md",
      "pageInLesson": 1,
      "pagesInLesson": 2,
      "html": "<h1>What a mobile architect owns</h1>\n<blockquote class=\"callout callout-mental\"><strong>Mental model.</strong> You own the decisions that are expensive to reverse: product surface, platform bet, and how the org ships.</blockquote>\n<h2>The picture</h2>\n<div class=\"flow td\" role=\"img\" aria-label=\"Diagram\"><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Mobile architect</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">Platform bet</span><span class=\"edge \"></span><span class=\"edge-to\">Shipping system</span></div></div><div class=\"fn \"><span class=\"fn-label\">Product surface</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">What works offline</span></div></div></div><span class=\"flow-sep down\">↓</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Platform bet</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">Native / Flutter / RN / KMP</span></div></div><div class=\"fn \"><span class=\"fn-label\">Shipping system</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">Modules, CI, owners</span></div></div><div class=\"fn \"><span class=\"fn-label\">What works offline</span></div></div><span class=\"flow-sep down\">↓</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Native / Flutter / RN / KMP</span></div><div class=\"fn \"><span class=\"fn-label\">Modules, CI, owners</span></div></div></div>\n<p>You do not own every pixel. You own the <em>frame</em> those pixels live in.</p>\n<h2>How it actually works</h2>\n<p><strong>Product surface</strong> — can checkout survive a kill? Is the watch a real client or a remote? What is the contract with the backend (BFF vs public API)?</p>\n<p><strong>Platform bet</strong> — hiring, time-to-market, UX ceiling, brownfield. This is Volume 7 later. You still <em>name</em> it now.</p>\n<p><strong>Shipping system</strong> — who can release, how rollback works, what “done” means for crash-free and store review.</p>"
    },
    {
      "part": "Mobile foundations",
      "title": "What a mobile architect owns",
      "file": "01-what-architect-owns.md",
      "pageInLesson": 2,
      "pagesInLesson": 2,
      "html": "<table><thead><tr><th>Owns</th><th>Does not own</th></tr></thead><tbody><tr><td>Dependency direction</td><td>Button corner radius (unless a11y)</td></tr><tr><td>Min OS / store story</td><td>Every feature flag name</td></tr><tr><td>Module boundaries</td><td>The copy on a toast</td></tr><tr><td>Quality bar (crash, startup)</td><td>Ticket estimation theatre</td></tr></tbody></table>\n<h2>You already know this in Flutter as…</h2>\n<p>You already decide package boundaries and “add-to-app vs rewrite.” That <em>is</em> architect work. The title just makes you do it for iOS and RN too.</p>\n<h2>Architect call</h2>\n<p>If a meeting is about a folder name with no reverse-cost, leave. If it is about “can we ever leave Firebase Auth,” stay.</p>\n<h2>Anti-patterns</h2>\n<ul><li>Architect as “the person who draws circles and writes no code.”</li><li>Architect as “the best pixel pusher.”</li><li>Owning none of CI because “that is DevOps.”</li></ul>\n<h2>War-room question</h2>\n<p>“What did you decide last quarter that we could not undo this quarter?” If the list is empty, you were a senior IC with a nicer title.</p>\n<h2>Cheatsheet</h2>\n<ul><li>Expensive-to-reverse = yours.</li><li>Three rings: product, platform, org.</li><li>Circles without shipping are posters.</li></ul>"
    },
    {
      "part": "Mobile foundations",
      "title": "The app is the product",
      "file": "02-app-is-the-product.md",
      "pageInLesson": 1,
      "pagesInLesson": 2,
      "html": "<h1>The app is the product</h1>\n<blockquote class=\"callout callout-mental\"><strong>Mental model.</strong> A website is a tab. An app is a resident: process, icon, store, OS, and a user who thinks it is <em>theirs</em>.</blockquote>\n<h2>The picture</h2>\n<div class=\"flow lr\" role=\"img\" aria-label=\"Diagram\"><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Website</span></div><div class=\"fn \"><span class=\"fn-label\">Tab: gone when closed</span></div><div class=\"fn \"><span class=\"fn-label\">App</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">OS process</span><span class=\"edge \"></span><span class=\"edge-to\">Store contract</span><span class=\"edge \"></span><span class=\"edge-to\">Local truth</span></div></div><div class=\"fn \"><span class=\"fn-label\">Icon and identity</span></div></div><span class=\"flow-sep\">→</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">OS process</span></div><div class=\"fn \"><span class=\"fn-label\">Store contract</span></div><div class=\"fn \"><span class=\"fn-label\">Local truth</span></div></div></div>\n<h2>How it actually works</h2>\n<p>People ask “why isn’t this just a website?” Answer with constraints, not tribalism:</p>\n<ul><li><strong>Process</strong> — the OS will kill you. You must resume.</li><li><strong>Store</strong> — Apple and Google are extra regulators. Privacy manifests, target SDK, payments rules.</li><li><strong>Hardware</strong> — camera, BLE, sensors, widgets, live activities, tiles.</li><li><strong>Trust</strong> — biometrics, keychain, attestation.</li><li><strong>Attention</strong> — push, badging, offline queues.</li></ul>\n<p>A BFF still matters. The app is not “the backend on the phone.” The app is the <em>product surface</em> that can work when the backend is sad.</p>"
    },
    {
      "part": "Mobile foundations",
      "title": "The app is the product",
      "file": "02-app-is-the-product.md",
      "pageInLesson": 2,
      "pagesInLesson": 2,
      "html": "<table><thead><tr><th>If the need is…</th><th>Maybe web</th><th>Need an app</th></tr></thead><tbody><tr><td>Read content, logged-out</td><td>Yes</td><td>Rarely</td></tr><tr><td>Payments + wallet + offline</td><td>Painful</td><td>Yes</td></tr><tr><td>Store-grade identity</td><td>Hard</td><td>Yes</td></tr><tr><td>OS widgets / share sheet</td><td>Limited</td><td>Yes</td></tr><tr><td>Weekly brochure</td><td>Yes</td><td>Vanity</td></tr></tbody></table>\n<h2>You already know this in Flutter as…</h2>\n<p>Flutter web is a target, not a get-out-of-store-free card. If you need IAP and a camera pipeline, you already knew it was an app.</p>\n<h2>Architect call</h2>\n<p>Write a one-pager: “we are an app because ___.” If the blanks are “the CEO wants an icon,” push back.</p>\n<h2>Anti-patterns</h2>\n<ul><li>Wrapping a website in a webview and calling it a strategy.</li><li>Ignoring store review as “release engineering.”</li><li>Building a website’s information architecture into a phone with no offline story.</li></ul>\n<h2>War-room question</h2>\n<p>“Name three things this product does that a well-made PWA cannot, and one thing we should have left on the web.”</p>\n<h2>Cheatsheet</h2>\n<ul><li>App = resident + store + OS + local truth.</li><li>BFF is a friend. The phone is still the product.</li><li>“Why not a website?” — answer with constraints.</li></ul>"
    },
    {
      "part": "Mobile foundations",
      "title": "The app is a distributed system",
      "file": "03-distributed-system.md",
      "pageInLesson": 1,
      "pagesInLesson": 2,
      "html": "<h1>The app is a distributed system</h1>\n<blockquote class=\"callout callout-mental\"><strong>Mental model.</strong> One user, many computers: the phone, the radio, your API, the store, and last night’s backup.</blockquote>\n<h2>The picture</h2>\n<div class=\"flow lr\" role=\"img\" aria-label=\"Diagram\"><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Disk / DB / files</span></div><div class=\"fn \"><span class=\"fn-label\">Network / push</span></div><div class=\"fn \"><span class=\"fn-label\">Play / App Store</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">Process / memory</span></div></div><div class=\"fn \"><span class=\"fn-label\">Your backend / BFF</span></div></div><span class=\"flow-sep\">→</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Process / memory</span></div></div></div>\n<p>You already design distributed systems if you have a queue, a cache, and a retry. The phone just lies about being “one device.”</p>\n<h2>How it actually works</h2>\n<p><strong>Process</strong> — ephemeral. Killed at any time. State in memory is a rumor.</p>\n<p><strong>Disk</strong> — durable until the user clears data, changes phones, or iCloud/Google fights you.</p>\n<p><strong>Network</strong> — optional. Partition is the normal case on a train.</p>\n<p><strong>Store</strong> — a deployment plane you do not fully control (review, staged rollout, last-good binary).</p>\n<p><strong>Backend</strong> — another team’s process. Versions drift. The app must speak <em>old and new</em>.</p>"
    },
    {
      "part": "Mobile foundations",
      "title": "The app is a distributed system",
      "file": "03-distributed-system.md",
      "pageInLesson": 2,
      "pagesInLesson": 2,
      "html": "<table><thead><tr><th>Failure</th><th>Architect move</th></tr></thead><tbody><tr><td>Process death</td><td>Persist intent, not just UI</td></tr><tr><td>Partition</td><td>Queue + truth rules</td></tr><tr><td>Store reject</td><td>Feature flags, not a binary bet</td></tr><tr><td>API drift</td><td>Versioned DTOs, tolerant readers</td></tr><tr><td>New phone</td><td>Account-based restore, not “the file was on disk”</td></tr></tbody></table>\n<h2>You already know this in Flutter as…</h2>\n<p><code>hydrated_bloc</code> + a repository queue is a mini distributed system. Treat it with the same respect you would give Kafka — just smaller.</p>\n<h2>Architect call</h2>\n<p>Draw this five-box diagram in every kickoff. If a box has no owner, you will meet it in production.</p>\n<h2>Anti-patterns</h2>\n<ul><li>“We’ll just refetch on every screen.”</li><li>Believing <code>shared_preferences</code> is a backup plan.</li><li>One binary that can only talk to today’s API.</li></ul>\n<h2>War-room question</h2>\n<p>“The user paid, the app died, the receipt push failed. Which box still knows the truth?”</p>\n<h2>Cheatsheet</h2>\n<ul><li>Five boxes: process, disk, network, store, API.</li><li>Memory is a rumor. Disk is local. Network is optional.</li><li>Design for kill, partition, and version drift.</li></ul>"
    },
    {
      "part": "Mobile foundations",
      "title": "Binary, runtime, SDK, ABI",
      "file": "04-binary-runtime-sdk.md",
      "pageInLesson": 1,
      "pagesInLesson": 2,
      "html": "<h1>Binary, runtime, SDK, ABI</h1>\n<blockquote class=\"callout callout-mental\"><strong>Mental model.</strong> Users install a <strong>binary</strong>. That binary talks to a <strong>runtime</strong>. You develop against an <strong>SDK</strong>. The <strong>ABI</strong> is the handshake you cannot casually break.</blockquote>\n<h2>The picture</h2>\n<div class=\"flow lr\" role=\"img\" aria-label=\"Diagram\"><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">SDK: headers, stubs, tools</span></div><div class=\"fn \"><span class=\"fn-label\">Compile / AOT / bytecode</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">Store binary</span></div></div></div><span class=\"flow-sep\">→</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Store binary</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">Runtime on device</span></div></div></div><span class=\"flow-sep\">→</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Runtime on device</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">ABI / NDK / JSI / channels</span></div></div></div><span class=\"flow-sep\">→</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">ABI / NDK / JSI / channels</span></div></div></div>\n<h2>How it actually works</h2>\n<p><strong>SDK</strong> — what you compile <em>against</em> (<code>compileSdk</code>, Xcode, Flutter SDK). You can target a newer SDK than the user’s OS if you stay within APIs you guard.</p>\n<p><strong>Min OS / min SDK</strong> — the oldest runtime you promise to run on. This is a product cut (who we abandon), not a Gradle trivia.</p>\n<p><strong>Binary</strong> — IPA / APK / AAB / on-disk Flutter. What review sees.</p>\n<p><strong>Runtime</strong> — ART, Darwin + Swift/ObjC runtime, Dart AOT/VM, Hermes.</p>\n<p><strong>ABI</strong> — application binary interface. JNI signatures, Swift module stability, Dart FFI, JSI host functions. Change it carelessly and plugins crash on old minors.</p>"
    },
    {
      "part": "Mobile foundations",
      "title": "Binary, runtime, SDK, ABI",
      "file": "04-binary-runtime-sdk.md",
      "pageInLesson": 2,
      "pagesInLesson": 2,
      "html": "<table><thead><tr><th>Word</th><th>Android</th><th>iOS</th><th>Flutter</th><th>RN</th></tr></thead><tbody><tr><td>SDK</td><td>Android SDK / AGP</td><td>Xcode + SDK</td><td>Flutter SDK</td><td>RN + Android/iOS SDKs</td></tr><tr><td>Binary</td><td>APK / AAB</td><td>IPA</td><td>embeds both</td><td>embeds both</td></tr><tr><td>Runtime</td><td>ART</td><td>Darwin</td><td>Dart + engine</td><td>Hermes + native</td></tr><tr><td>ABI risk</td><td>JNI / 16 KB pages</td><td>modules / bitcode-era scars</td><td>FFI / engine</td><td>JSI / codegen</td></tr></tbody></table>\n<p><strong>Package vs library:</strong> a package is a distribution unit (<code>aar</code>, <code>xcframework</code>, <code>pub</code>, npm). A library is the code. Architects version <em>packages</em>.</p>\n<h2>You already know this in Flutter as…</h2>\n<p><code>pubspec</code> SDK constraints vs the engine that shipped in the binary. A plugin compiled for an old engine ABI is the crash in your crashlytics that says <code>UnsatisfiedLinkError</code> or a missing symbol.</p>\n<h2>Architect call</h2>\n<p>Pin the story: min OS, target SDK, Flutter/RN version, NDK. Review it quarterly. This is architecture.</p>\n<h2>Anti-patterns</h2>\n<ul><li>“Just bump compileSdk” without reading behavior changes.</li><li>Shipping debug/JIT bits to the store.</li><li>A plugin that vendors a second copy of the engine.</li></ul>\n<h2>War-room question</h2>\n<p>“If we drop Android 8, what <em>product</em> do we lose, and what <em>runtime</em> do we gain?”</p>\n<h2>Cheatsheet</h2>\n<ul><li>SDK = compile against. Runtime = run on. Binary = what you ship.</li><li>ABI is a contract with native code.</li><li>Min OS is a product decision.</li></ul>"
    },
    {
      "part": "Mobile foundations",
      "title": "Four runtimes — do not mix them up",
      "file": "05-four-runtimes.md",
      "pageInLesson": 1,
      "pagesInLesson": 2,
      "html": "<h1>Four runtimes — do not mix them up</h1>\n<blockquote class=\"callout callout-mental\"><strong>Mental model.</strong> ART, Swift/LLVM, Dart AOT, and Hermes are four different ways a phone runs your ideas.</blockquote>\n<p><img src=\"images/four-runtimes.png\" alt=\"Four runtimes\" /></p>\n<h2>The picture</h2>\n<div class=\"flow td\" role=\"img\" aria-label=\"Diagram\"><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Android</span></div><div class=\"fn \"><span class=\"fn-label\">Kotlin / Java</span></div><div class=\"fn \"><span class=\"fn-label\">DEX / ART</span></div><div class=\"fn \"><span class=\"fn-label\">iOS</span></div><div class=\"fn \"><span class=\"fn-label\">Swift / ObjC</span></div><div class=\"fn \"><span class=\"fn-label\">LLVM machine code</span></div><div class=\"fn \"><span class=\"fn-label\">Flutter</span></div><div class=\"fn \"><span class=\"fn-label\">Dart</span></div><div class=\"fn \"><span class=\"fn-label\">AOT arm64 + engine</span></div><div class=\"fn \"><span class=\"fn-label\">React Native</span></div><div class=\"fn \"><span class=\"fn-label\">JS / TS</span></div><div class=\"fn \"><span class=\"fn-label\">Hermes bytecode</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">JSI / native</span></div></div></div><span class=\"flow-sep down\">↓</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">JSI / native</span></div></div></div>\n<h2>How it actually works</h2>\n<p><strong>ART</strong> — Android’s VM. Compiles DEX (profile-guided, now AOT-heavy). GC pauses are <em>your</em> jank if you allocate in a list scroll.</p>\n<p><strong>Swift / LLVM</strong> — mostly ahead-of-time native. ARC, not GC. The cost is retain cycles and the main actor, not a nursery scan.</p>\n<p><strong>Dart</strong> — debug is a VM (hot reload). Release on mobile is AOT machine code plus the Flutter engine (Impeller). Isolates do not share heap.</p>\n<p><strong>Hermes</strong> — a JS engine aimed at RN. Bytecode in the binary. The New Architecture talks to native through JSI, not a JSON bridge.</p>"
    },
    {
      "part": "Mobile foundations",
      "title": "Four runtimes — do not mix them up",
      "file": "05-four-runtimes.md",
      "pageInLesson": 2,
      "pagesInLesson": 2,
      "html": "<table><thead><tr><th>Runtime</th><th>Heap</th><th>UI thread name</th><th>Crossing to native</th></tr></thead><tbody><tr><td>ART</td><td>GC</td><td>Main looper</td><td>JNI</td></tr><tr><td>Swift</td><td>ARC</td><td>Main actor</td><td>direct / C</td></tr><tr><td>Dart</td><td>GC per isolate</td><td>UI isolate</td><td>channels / FFI</td></tr><tr><td>Hermes</td><td>GC</td><td>JS thread ≠ UI thread</td><td>JSI / TurboModules</td></tr></tbody></table>\n<p>This is why “just run my Dart mental model on RN” fails. RN has <em>two</em> important threads before you even start. Flutter has a UI isolate and a raster thread in the engine.</p>\n<h2>You already know this in Flutter as…</h2>\n<p>Hot reload is a <em>debug VM</em> luxury. The store binary is AOT. Never benchmark architecture in debug.</p>\n<h2>Architect call</h2>\n<p>When someone says “JS is slow” or “Dart is slow,” ask <em>which runtime, which thread, which allocation</em>. The sentence is otherwise folklore.</p>\n<h2>Anti-patterns</h2>\n<ul><li>Comparing Flutter debug to RN release.</li><li>Treating JNI / channels / JSI as the same cost.</li><li>Ignoring 16 KB page sizes / bitcode-era myths as “native trivia.”</li></ul>\n<h2>War-room question</h2>\n<p>Draw all four boxes from memory, including how each talks to native. You have two minutes.</p>\n<h2>Cheatsheet</h2>\n<ul><li>ART = DEX/GC. Swift = LLVM/ARC. Dart = AOT + engine. Hermes = JS bytecode + JSI.</li><li>Debug ≠ store.</li><li>Crossing to native always has a price; the price differs.</li></ul>"
    },
    {
      "part": "Mobile foundations",
      "title": "The main thread is sacred",
      "file": "06-main-thread.md",
      "pageInLesson": 1,
      "pagesInLesson": 2,
      "html": "<h1>The main thread is sacred</h1>\n<blockquote class=\"callout callout-mental\"><strong>Mental model.</strong> Pixels are produced on a privileged thread. If you stall it, the OS calls you frozen. Users call you junk.</blockquote>\n<h2>The picture</h2>\n<ol class=\"seq\" role=\"img\" aria-label=\"Sequence\"><li><span class=\"seq-from\">Background</span> → <span class=\"seq-to\">Main / UI</span> <span class=\"seq-msg\">publish state</span></li><li class=\"seq-note\">16ms budget at 60Hz</li></ol>\n<p>16 ms at 60 Hz. 8 ms at 120 Hz. That is the whole budget for input, layout, and draw.</p>\n<h2>How it actually works</h2>\n<p><strong>Android</strong> — main looper. <code>StrictMode</code>, jank traces, ANR at ~5 s of block. Work: coroutines on <code>Dispatchers.IO</code> / <code>Default</code>, then <code>StateFlow</code> back.</p>\n<p><strong>iOS</strong> — main actor. Hang detection. Work: <code>Task.detached</code> / background <code>URLSession</code>, hop back with <code>@MainActor</code>.</p>\n<p><strong>Flutter</strong> — UI isolate. <code>async</code> still runs <em>there</em> unless you <code>compute</code> / spawn. The engine has a raster thread you do not get to casually block either.</p>\n<p><strong>RN</strong> — JS thread <em>and</em> UI thread. A heavy JS reduce blocks JS; a heavy native view blocks UI. They are not the same.</p>"
    },
    {
      "part": "Mobile foundations",
      "title": "The main thread is sacred",
      "file": "06-main-thread.md",
      "pageInLesson": 2,
      "pagesInLesson": 2,
      "html": "<table><thead><tr><th>Allowed on main</th><th>Never on main</th></tr></thead><tbody><tr><td>Bind state to views</td><td>Large JSON parse</td></tr><tr><td>Short animation ticks</td><td>Image decode of a camera still</td></tr><tr><td>Dispatching work</td><td>Encryption of a file</td></tr><tr><td>Drawing</td><td>Disk walks, DB migrations</td></tr></tbody></table>\n<h2>You already know this in Flutter as…</h2>\n<p><code>ListView.builder</code> vs a <code>map</code> of 2,000 widgets. Same religion, every platform.</p>\n<h2>Architect call</h2>\n<p>Make “main-thread I/O” a CI-detectable crime where the platform allows (StrictMode, main-thread checker). The rest is review.</p>\n<h2>Anti-patterns</h2>\n<ul><li>“It’s just one <code>readAsString</code> in <code>initState</code>.”</li><li>RN: huge Redux reduce on JS during scroll.</li><li>Flutter: <code>fromJson</code> of a catalog on the UI isolate at startup.</li></ul>\n<h2>War-room question</h2>\n<p>“Show me the trace where we dropped a frame, and which thread owned that stack.”</p>\n<h2>Cheatsheet</h2>\n<ul><li>Main paints. Everything else is a guest.</li><li>16 ms / 8 ms.</li><li>RN has two sacred threads. Flutter’s <code>async</code> is not an isolate.</li></ul>"
    },
    {
      "part": "Mobile foundations",
      "title": "Memory, battery, radio",
      "file": "07-memory-battery-radio.md",
      "pageInLesson": 1,
      "pagesInLesson": 2,
      "html": "<h1>Memory, battery, radio</h1>\n<blockquote class=\"callout callout-mental\"><strong>Mental model.</strong> The phone is a furnace with a small tank. Memory, watts, and radio are first-class budgets — not “perf later.”</blockquote>\n<h2>The picture</h2>\n<div class=\"flow lr\" role=\"img\" aria-label=\"Diagram\"><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Memory</span></div><div class=\"fn \"><span class=\"fn-label\">OS killer / jetsam</span></div><div class=\"fn \"><span class=\"fn-label\">Battery</span></div><div class=\"fn \"><span class=\"fn-label\">Radio</span></div><div class=\"fn \"><span class=\"fn-label\">Wake locks / bg tasks</span></div></div></div>\n<p>The OS will murder you (LMK, jetsam) before the user will thank you for a prettier cache.</p>\n<h2>How it actually works</h2>\n<p><strong>Memory</strong> — bitmaps, lists, WebViews, Flutter images. Leak a listener and you leak a screen. On iOS, a retain cycle is a leak. On Android/Dart/JS, a forgotten subscription is a leak.</p>\n<p><strong>Battery</strong> — CPU, GPU, GPS, radio. A 1 Hz timer that hits the network is a product bug. Background limits exist because of architects who ignored this.</p>\n<p><strong>Radio</strong> — the most expensive thing you casually do. Batch. Coalesce. Cache. HTTP/2 and a BFF beat 40 tiny REST calls from a list row.</p>"
    },
    {
      "part": "Mobile foundations",
      "title": "Memory, battery, radio",
      "file": "07-memory-battery-radio.md",
      "pageInLesson": 2,
      "pagesInLesson": 2,
      "html": "<table><thead><tr><th>Budget</th><th>Android</th><th>iOS</th><th>Flutter</th><th>RN</th></tr></thead><tbody><tr><td>Memory</td><td>LMK, profiler</td><td>jetsam</td><td>image cache + isolates</td><td>Hermes heap + native</td></tr><tr><td>Battery</td><td>Battery Historian</td><td>Instruments</td><td>timeline + native</td><td>same + JS wakeups</td></tr><tr><td>Radio</td><td>WorkManager batch</td><td>BGTasks / URLSession</td><td>same plugins</td><td>same native</td></tr></tbody></table>\n<h2>You already know this in Flutter as…</h2>\n<p><code>cached_network_image</code> without a bound is a memory policy. A <code>Timer.periodic</code> in a discarded widget is a battery policy.</p>\n<h2>Architect call</h2>\n<p>Put numbers in the RFC: target RSS, startup, and “network calls per cold home.” If you cannot name them, you cannot defend them.</p>\n<h2>Anti-patterns</h2>\n<ul><li>Wake lock “just until this finishes” that never finishes.</li><li>Prefetching the world on 5% battery and poor radio.</li><li>Holding bitmaps at screen × 3 “for sharpness.”</li></ul>\n<h2>War-room question</h2>\n<p>“We will add live location for the whole session. What is the battery story, and who turns it off?”</p>\n<h2>Cheatsheet</h2>\n<ul><li>Memory / watts / radio are architecture.</li><li>Batch the radio. Bound the cache. Drop the timer.</li><li>OS killers are the real QA.</li></ul>"
    },
    {
      "part": "Mobile foundations",
      "title": "Stores and versioning are architecture",
      "file": "08-stores-and-versioning.md",
      "pageInLesson": 1,
      "pagesInLesson": 2,
      "html": "<h1>Stores and versioning are architecture</h1>\n<blockquote class=\"callout callout-mental\"><strong>Mental model.</strong> You do not deploy to devices. You <em>propose</em> a binary to two regulators, then to a percentage of users who may never update.</blockquote>\n<h2>The picture</h2>\n<div class=\"flow lr\" role=\"img\" aria-label=\"Diagram\"><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Binary</span></div><div class=\"fn \"><span class=\"fn-label\">Store review</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">Staged rollout</span></div></div><div class=\"fn \"><span class=\"fn-label\">Flags / remote config</span></div></div><span class=\"flow-sep\">→</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Staged rollout</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">Version fleet</span></div></div></div><span class=\"flow-sep\">→</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">Version fleet</span><div class=\"fn-out\"><span class=\"edge \"></span><span class=\"edge-to\">API must serve many binaries</span></div></div></div><span class=\"flow-sep\">→</span><div class=\"flow-layer\"><div class=\"fn \"><span class=\"fn-label\">API must serve many binaries</span></div></div></div>\n<h2>How it actually works</h2>\n<p><strong>Min OS / target SDK</strong> — Google and Apple force target bumps. Behavior changes hitchhike on those bumps. Read them like you read a breaking API.</p>\n<p><strong>Review</strong> — privacy nutrition labels, privacy manifests, Photo/ATT, payments. A feature that cannot pass review is not a feature.</p>\n<p><strong>Fleet</strong> — N versions live at once. Your backend and your feature flags must tolerate last quarter’s binary.</p>\n<p><strong>Rollback</strong> — stores let you halt a rollout. They do not let you edit yesterday’s binary. Flags are the real rollback.</p>"
    },
    {
      "part": "Mobile foundations",
      "title": "Stores and versioning are architecture",
      "file": "08-stores-and-versioning.md",
      "pageInLesson": 2,
      "pagesInLesson": 2,
      "html": "<table><thead><tr><th>Lever</th><th>Use it for</th><th>Not for</th></tr></thead><tbody><tr><td>Staged rollout</td><td>Crash watch</td><td>Hiding an unfinished legal flow</td></tr><tr><td>Feature flag</td><td>Kill / experiment</td><td>Shipping secret APIs in the binary forever</td></tr><tr><td>Force update</td><td>Broken security</td><td>Taste</td></tr><tr><td>Min OS bump</td><td>Runtime / API you need</td><td>“Cleaner CI”</td></tr></tbody></table>\n<h2>You already know this in Flutter as…</h2>\n<p>You already wait for store review after <code>flutter build</code>. Treat <code>minSdk</code> and iOS deployment target as product, same as a pub constraint.</p>\n<h2>Architect call</h2>\n<p>Never ship a one-way schema (local DB or API) without a reader that understands the previous version. The fleet is the customer.</p>\n<h2>Anti-patterns</h2>\n<ul><li>“Everyone updates in a week.” They do not.</li><li>Killing a flag server-side while the old binary still <em>requires</em> that endpoint shape.</li><li>Force-update as a substitute for QA.</li></ul>\n<h2>War-room question</h2>\n<p>“If 12% of users stay on last release for six months, which of today’s changes murder them?”</p>\n<h2>Cheatsheet</h2>\n<ul><li>Review + fleet + flags = the real deploy.</li><li>APIs serve many binaries.</li><li>Min OS is a product cut.</li><li>Rollback is a flag, not a prayer.</li></ul>\n<p>You can now explain the architect job, the four runtimes, the sacred main thread, and why the store is part of the system. Say <strong>write volume 2</strong> when you want mobile OS internals next.</p>"
    }
  ]
};
