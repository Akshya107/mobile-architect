# Mobile Architect

A visual field book for becoming a mobile architect. Markdown is the source. The `book/` folder is a paper-style reader you open in a browser or host anywhere static.

Written for a **Flutter expert** who is **good at Android** and **basic at iOS and React Native**. No widget tutorials. No Hello World.

## Open the book

```bash
npm run book
```

Then open [http://localhost:4173](http://localhost:4173).

- **Laptop:** two-page spread, tap the edges or use arrow keys.
- **Phone:** one page, swipe.
- **Ribbon** saves a place. The last page is remembered.
- **Contents** and **Search** are in the top bar.

Host it: run `npm run build`, then upload the `book/` folder to GitHub Pages, Netlify, or any static host.

After you edit lessons:

```bash
npm run build
```

## Volume 1 — Foundations (this book)

| Part | Folder | What you can do after it |
| --- | --- | --- |
| Start here | `content/00-start-here/` | Read the book the intended way |
| Software craft | `content/01-software-fundamentals/` | OOP, SOLID, patterns, PR review |
| Architecture patterns | `content/02-architecture-patterns/` | MVVM, MVI, Clean, VIPER, BLoC/TCA — and a 60-second pick |
| Mobile foundations | `content/03-mobile-foundations/` | Architect job, four runtimes, main thread, stores |

## Next volume

When you have read Volume 1, open a chat in this repo and say:

**write volume 2**

That writes `content/04-mobile-systems/` (sandbox, lifecycle, permissions, push, storage), rebuilds the book, and updates progress. The agent reads [`CURRICULUM.md`](CURRICULUM.md), [`PROGRESS.md`](PROGRESS.md), and [`.cursor/rules/memory.mdc`](.cursor/rules/memory.mdc).

## Repo map

```
content/                 # lessons (edit here)
book/                    # reader (generated pages + UI)
scripts/build-book.mjs   # markdown → book/js/pages.js
CURRICULUM.md            # all ten volumes
PROGRESS.md              # what is shipped
.cursor/rules/           # always-on writing + memory
```
