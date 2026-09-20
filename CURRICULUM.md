# Mobile Architect Curriculum

Source of truth for every volume. Read this before writing notes.

**Learner:** Flutter expert, Android good, iOS and React Native basic.
**Goal:** Mobile architect decisions — not syntax tutorials.
**Format:** Markdown in `content/` → static book in `book/` (desktop two-page spread, mobile swipe).

## Voice

- Picture first (mermaid), then short text.
- Map from Flutter / Android to the new idea.
- Four-platform strip: Android | iOS | Flutter | RN.
- Boxes: Mental model, Architect call, Anti-pattern, War-room question.
- Lesson ends with a one-page cheatsheet.
- Dart/Kotlin examples first. Swift and TypeScript as side notes.

## Do not teach

- Flutter widgets 101, setState tours, “Hello World”.
- Android Activity tutorials for beginners.
- Copy-paste cookbook without a decision.
- Later volume folders until the user asks.

## Lesson template

```markdown
# Topic
> **Mental model.** One sentence.

## The picture

## How it actually works

## You already know this in Flutter as…

## Architect call

## Anti-patterns

## War-room question

## Cheatsheet
```

Use `<!-- pagebreak -->` when a lesson should split across book pages.

## Volumes

| Vol | Folders | Title | Status |
| --- | --- | --- | --- |
| 1 | `00` `01` `02` `03` | Foundations (software, patterns, mobile) | Write first |
| 2 | `04` | Mobile systems | After “write volume 2” |
| 3 | `05` | iOS (basic → architect) | After “write volume 3” |
| 4 | `06` | React Native (basic → architect) | After “write volume 4” |
| 5 | `07` | Android architect | After “write volume 5” |
| 6 | `08` | Flutter architect | After “write volume 6” |
| 7 | `09` | Platform decisions | After “write volume 7” |
| 8 | `10`–`17` | Domains (scale, data, UI, perf, security, quality, delivery, org) | After “write volume 8” |
| 9 | `18` | System-design studio | After “write volume 9” |
| 10 | `19` | Now and next | After “write volume 10” |

“Write volume N” means: write that volume’s `content/` complete, rebuild the book, update `PROGRESS.md` and `.cursor/rules/memory.mdc`. Do not create later folders.

### Volume 1 — Foundations

- `content/00-start-here/` — how to read, skill map, gap profile, how to open the book
- `content/01-software-fundamentals/` — OOP, types, composition, memory, SOLID, coupling, design patterns, repository/use case/DI, errors, concurrency words, architect PR review
- `content/02-architecture-patterns/` — MVC/MVP/MVVM, MVI, Clean/hexagonal, VIPER, TCA/BLoC/Redux, platform maps, layers, state ownership, navigation, decision tree
- `content/03-mobile-foundations/` — architect role, app as product, distributed system, binary/runtime/SDK, four runtimes, main thread, memory/battery/radio, stores and versioning

### Volume 2 — `04-mobile-systems`

Sandbox, entitlements, permissions, process/activity/scene/isolate/JS runtime, lifecycle, background limits, IPC, push, storage layers, device classes (phone, foldable, watch, car, TV).

### Volume 3 — `05-ios`

Swift, SwiftUI vs UIKit, App/Scene/ViewController vs Activity, layout vs Flutter, ARC, Swift Concurrency, coordinators, URLSession, Keychain/SwiftData, Xcode/SPM, signing, TestFlight, modular iOS, extensions.

### Volume 4 — `06-react-native`

JS thread vs isolate, old bridge vs New Architecture (JSI, Fabric, TurboModules), Hermes, Metro, native modules vs platform channels, navigation/state, brownfield, OTA realities, when RN loses.

### Volume 5 — `07-android-architect`

Process/LMK/background, Architecture Components done properly, Gradle modules, Compose vs Views at scale, JNI/NDK, baseline profiles, R8, Play Feature Delivery, OEM fragmentation.

### Volume 6 — `08-flutter-architect`

Engine (Impeller, isolates), FFI, platform views, add-to-app, federated plugins, packages/melos/white-label, org-scale state and navigation, web/desktop when real, Flutter vs RN vs KMP.

### Volume 7 — `09-platform-decisions`

Decision matrix (skill, hiring, time, UX ceiling, brownfield), KMP / Compose Multiplatform, super-app / mini-app / white-label / SDK, cost of “one codebase”.

### Volume 8 — `10`–`17` domains

- `10-app-at-scale` — modularization, monorepos, Gradle/SPM graphs (do not repeat MVVM)
- `11-data-and-offline` — sync, conflict, pagination, GraphQL/REST/gRPC
- `12-ui-and-design-systems` — a11y, RTL, foldables
- `13-performance` — startup, jank, memory, battery, network
- `14-security-and-privacy` — auth, secrets, pinning, privacy manifests
- `15-quality` — test pyramid, farms, SLOs, crash-free
- `16-delivery` — CI/CD, staged rollout, kill switches
- `17-scale-and-org` — platform teams, guilds, hiring

### Volume 9 — `18-system-design-studio`

Chat, offline field, super-app, fintech, media, SDK, migrations (native→Flutter, RN→Flutter, monolith→modules).

### Volume 10 — `19-now-and-next`

On-device AI, Apple Intelligence constraints, Gemini Nano, foldables, KMP, RN New Arch, Impeller, privacy sandboxes.

## After writing a volume

1. Run `npm run build` so `book/` matches `content/`.
2. Update `PROGRESS.md` (last completed, next trigger).
3. Update `.cursor/rules/memory.mdc` progress snapshot.
4. Keep the book working: desktop two-page + mobile one-page turn.
