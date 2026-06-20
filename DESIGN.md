# Design system — nextjs-vps-project

## Theme

Dark infrastructure console. Pure near-black background with cobalt primary and frost-cyan accent for live status.

## Color (OKLCH)

| Token | Value | Role |
|-------|-------|------|
| `--bg` | `oklch(0.08 0 0)` | Page background |
| `--surface` | `oklch(0.12 0.015 230)` | Panels, cards |
| `--ink` | `oklch(0.93 0.01 230)` | Body text |
| `--muted` | `oklch(0.62 0.025 230)` | Secondary text |
| `--primary` | `oklch(0.55 0.105 230)` | Links, emphasis |
| `--accent` | `oklch(0.72 0.14 165)` | Live status, success |
| `--border` | `oklch(0.22 0.02 230)` | Dividers |

## Typography

- Display/body: Geist Sans (loaded in layout)
- Mono: Geist Mono for timestamps and stack labels

## Motion

Subtle status pulse on live badge. `prefers-reduced-motion` disables pulse.
