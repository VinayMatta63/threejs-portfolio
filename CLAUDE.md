# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm start          # dev server on port 3000
pnpm build          # tsc + vite build → build/
pnpm serve          # preview production build
pnpm lint           # eslint src/
pnpm lint:fix       # eslint src/ --fix
ANALYZE=true pnpm build  # open bundle visualizer after build
```

No test suite exists.

## Debug Mode

Append `#debug` to the URL to enable: Rapier physics wireframes, Three.js `Stats` overlay, and the Leva GUI panel (hidden otherwise). Debug and effect values are all tunable via Leva controls exposed through `useDefaults`.

## Architecture

### High-level

3D walk-around portfolio — keyboard-controlled player navigates a Three.js world; walking into **collision plates** triggers portfolio content (project screens, links, contact portal).

Stack: React 19 + React-Three-Fiber (R3F) + Rapier physics + `@react-three/drei` + `@react-three/postprocessing`. Package manager is **pnpm**.

### Rendering pipeline

`App.tsx` drives R3F with `frameloop="never"` + a manual RAF loop (`FpsLimiter`) capped at 60fps. `PerformanceMonitor` auto-adjusts DPR between 1–1.5. `World` lazy-loads heavy section components (`Projects`, `Skills`, `About`, `Game`, `Lamps`).

### Player movement

`usePlayerMovement` (called from `Player.tsx`) runs entirely in `useFrame` — no React state. Pre-allocated Three.js vectors avoid per-frame GC. Gravity and floor clamping are manual (no Rapier gravity). The player `RigidBody` is a **sensor**, so collisions are intersections, not physical contacts.

### Collision system

`CollisionEmitter` (`src/services/CollisionEmitter.ts`) is a pub/sub keyed by `collisionName` string. Flow:

1. `CollisionPlate` sets `userData.collisionName` on its `RigidBody`.
2. Player's `onIntersectionEnter/Exit` → `useCollisionDetector` → `collisionEmitter.emit`.
3. `useCollisionListener(name, cb)` hooks subscribe per plate name and trigger local state (show `<Html>` overlay, open URL, etc.).

### Base primitives (`src/base/`)

| Component | Purpose |
|---|---|
| `Character` | Animated GLB player mesh with crossfade between Idle/Walk/Run |
| `CollisionPlate` | Invisible sensor RigidBody + pub/sub wiring |
| `Project` | Wraps a GLB model + CollisionPlate + `<Html>` Screen overlay |
| `Link` | Text label + CollisionPlate → opens external URL via Screen |
| `Screen` | HTML overlay with `V` / `G` keyboard shortcuts to open links |
| `Sign` / `Text` | 3D text using `TextGeometry` with `/fonts/Roboto_Regular.json` |
| `Sprite` | Billboard sprite for skill icons |

### 3D assets

All GLB models live in `public/models/`, textures in `public/textures/`, skill icons in `public/assets/`. The portal uses a custom GLSL shader (`src/shaders/portal/shaders`) animated via `uTime` uniform.

### Config / constants

- `useDefaults` — Leva-backed runtime controls for physics, camera, player, bloom. Every tunable value lives here.
- `src/constants/spriteStyles.ts` — shared CSS for `<Html transform>` overlays.
- `src/constants/loaderConfig.ts` — `@react-three/drei` Loader appearance config.
