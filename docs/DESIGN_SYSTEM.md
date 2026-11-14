# Design System: Industrial Engineering Identity

## 1. Visual Direction

**Direction A (Premium Industrial) + Editorial Precision**:
Authoritative, structured, and technical—engineered for heavy machinery procurement teams rather than consumer SaaS visitors.

- **Do**: Large technical equipment visuals, crisp hairline grid rules, generous whitespace, tabular engineering figures, dark navy contrast sections, restrained motion.
- **Avoid**: Neon gradients, glassmorphism, floating decorative blobs, exaggerated border radii, playful cartoons, or inconsistent color palettes across routes.

## 2. Color Palette & Tokens

| Token | Hex | Usage |
| --- | --- | --- |
| `--color-navy` (Primary) | `#142B3A` | Primary headings, dark engineering sections, primary buttons, footer |
| `--color-navy-deep` | `#0E1F2B` | Hero dark contrast backing, footer lower bar, header notice strip |
| `--color-steel` (Secondary) | `#31566D` | Secondary accents, architectural subheadings, technical borders |
| `--color-amber` (Accent) | `#D99A36` | High-visibility industrial CTAs ("Request an Enquiry"), capacity indicators, badges |
| `--color-amber-dark` | `#B87D1E` | Hover state for primary amber actions (maintains WCAG contrast with dark navy ink) |
| `--color-bg` (Background) | `#F7F8F6` | Warm off-white industrial canvas |
| `--color-surface` | `#FFFFFF` | Specification cards, data tables, form surfaces |
| `--color-ink` (Text) | `#202A30` | Primary body copy |
| `--color-muted` (Muted Text) | `#546470` | Captions, secondary labels, placeholder disclaimers (AA contrast on `#F7F8F6` and `#FFFFFF`) |
| `--color-border` | `#DCE2E6` | Hairline 1px grid rules and structural dividers |

## 3. Typography

- **Display / Headings**: `Manrope` (`next/font/google`), weights `600`, `700`, `800`, tight tracking (`-0.02em`).
- **Body / Interface**: `Inter` (`next/font/google`), weights `400`, `500`, `600`, line height `1.6`.
- **Technical Metrics / Model Codes**: `JetBrains Mono` (`next/font/google`), `tabular-nums` for model designations (`VSP-FFE-4500`), TCD capacities, pressure ratings, and spec tables.

### Type Scale
- Hero `h1`: `clamp(2.25rem, 4vw, 3.5rem)` (`36px–56px`), line-height `1.08`
- Page `h1`: `clamp(2rem, 3.2vw, 2.75rem)` (`32px–44px`), line-height `1.12`
- Section `h2`: `clamp(1.5rem, 2.4vw, 2.125rem)` (`24px–34px`), line-height `1.2`
- Card/Sub `h3`: `1.125rem–1.25rem` (`18px–20px`), line-height `1.3`
- Body: `1rem` (`16px`) / `0.9375rem` (`15px`)

## 4. Layout, Spacing & Elevation

- **Grid**: 12-column desktop CSS Grid inside a max-width container (`1280px` / `max-w-7xl`) with `1rem` (`16px`) mobile padding, `1.5rem` (`24px`) tablet, and `2rem` (`32px`) desktop padding.
- **Border Radius**: Restrained industrial geometry — `2px`–`6px` (`rounded-sm` / `rounded-md`) across cards, inputs, and buttons. No oversized pill cards.
- **Elevation**: Relies on crisp `1px` borders (`#DCE2E6`) and subtle background tonal contrast (`#FFFFFF` over `#F7F8F6`) rather than heavy drop shadows.
- **Accessibility & Focus**: Minimum `4.5:1` text contrast, visible `2px` solid amber/navy focus rings (`focus-visible:outline-2`), minimum `44x44px` interactive targets on touch screens, and `prefers-reduced-motion: reduce` disables translate/parallax reveals.
