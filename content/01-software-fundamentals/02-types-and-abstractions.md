# Types, interfaces, protocols, mixins

> **Mental model.** A type is a promise. An object is a value that keeps it.

## The picture

```mermaid
flowchart TD
  type[Type / contract] --> class[Class: can hold state]
  type --> iface[Interface / protocol: no leftover story]
  type --> mixin[Mixin / extension: behavior bolted on]
  class --> object[Object / instance]
```

Words people mix up:

- **Class** — a blueprint that can store state and implement contracts.
- **Object / instance** — a living value in memory.
- **Type** — the name the compiler uses (`User`, `int`, `Widget`).
- **Interface / protocol** — a contract with no “and also I inherit your fields.”
- **Mixin** — reusable implementation without claiming “I am a kind of X.”

<!-- pagebreak -->

## How it actually works

Kotlin `interface` and Swift `protocol` are the same idea. Dart `abstract interface class` is the honest name. TypeScript interfaces are structural: if it has the fields, it fits.

Mixins (`with` in Dart, protocol extensions in Swift, default interface methods in Kotlin) are for *behavior*. If you need *identity* (“this is a Vehicle”), use a type. If you need *ability* (“this can be logged”), use a mixin or protocol.

| Idea | Android / Kotlin | iOS / Swift | Flutter / Dart | RN / TS |
| --- | --- | --- | --- | --- |
| Contract | `interface` | `protocol` | `abstract interface class` | `interface` |
| Blueprint | `class` / `data class` | `class` / `struct` | `class` | `class` |
| Ability | default methods | protocol extension | `mixin` | mixin-style HOFs |
| Closed set | `sealed` | `enum` + associated values | `sealed class` / enum | union types |

## You already know this in Flutter as…

`mixin` on a `State` is an ability. `extends StatelessWidget` is a type the framework requires. Do not invent a third widget subclass to share a date formatter.

## Architect call

Public modules export contracts. Implementations stay inside the package. That is how you swap analytics later.

## Anti-patterns

- A “Utils” class that is really an untyped mixin of the whole app.
- Interfaces that mirror one concrete class field-for-field (“IUserManagerImpl”).
- Treating TypeScript `any` as a type.

## War-room question

“Should `User` be a class, a data class, a struct, or a typedef?” What changes if it crosses an isolate / a thread?

## Cheatsheet

- Type = promise. Object = keeper.
- Contracts for seams. Mixins for abilities.
- Sealed types for states you must exhaust.
