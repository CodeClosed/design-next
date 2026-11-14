# Testing & Quality Assurance Strategy

## 1. Objectives
Verify functional correctness, form security, responsive layout integrity, accessibility compliance, and zero build/runtime errors across all corporate routes.

## 2. Unit & Component Testing (Vitest + React Testing Library)

| Test Suite | Coverage |
| --- | --- |
| `tests/unit/products.test.ts` | Product retrieval by slug, category filtering, keyword search, related product exclusion/matching |
| `tests/unit/validation.test.ts` | Zod schema validation for General Enquiry and RFQ modes, invalid email/phone rejection, honeypot rejection, file type whitelist & 10 MB size enforcement |
| `tests/unit/enquiry-service.test.ts` | `submitEnquiry` execution with `MockPreviewEmailProvider`, reference number format, honest `development_preview` metadata |
| `tests/unit/components.test.tsx` | `ProductGrid` interactive search + category filter rendering; `Header` mobile menu toggle & ARIA state |

## 3. End-to-End Testing (Playwright)

### Required User Journeys
- **Journey A (Equipment Discovery → RFQ)**:
  `Home` → Navigate to `/products` → Filter by category / search term → Open `/products/heavy-duty-cane-milling-tandem` → Verify specification table & brochure link → Click "Request Quote for This Equipment" → Verify `/contact` opens with the product pre-selected.
- **Journey B (Corporate Credibility Flow)**:
  `Home` → `/about` → `/capabilities` → `/projects` (and project detail) → `/quality` → `/resources` → Verify headings, links, and zero broken routes.
- **Journey C (Lead Generation & Validation)**:
  `Home` → `/contact` → Trigger validation error check on empty submit → Complete valid RFQ fields + attach a sample specification file → Submit `POST /api/enquiry` → Verify reference ID & honest preview/confirmation feedback.

### Responsive Breakpoints & Quality Checks
Run automated checks across **4 viewports**:
- `375 x 812` (Mobile)
- `768 x 1024` (Tablet)
- `1024 x 768` (Laptop)
- `1440 x 900` (Desktop)

Assert on every tested viewport:
1. Zero horizontal overflow (`document.documentElement.scrollWidth <= window.innerWidth`).
2. Zero uncaught page errors or console errors.
3. Zero broken images (`complete && naturalWidth > 0`).
4. Mobile menu toggles cleanly at `375px` and desktop links are accessible at `>= 1024px`.

## 4. Release Verification Gate
Before final handoff, all 5 commands must pass cleanly:
1. `npm run typecheck`
2. `npm run lint`
3. `npm test`
4. `npm run build`
5. `npx playwright test`
