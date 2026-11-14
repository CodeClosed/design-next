# Implementation Plan

## Execution Sequence

| Stage | Milestone | Key Deliverables | Status |
| --- | --- | --- | --- |
| 1 | Workspace Inspection & Planning | Inspect workspace, verify Node/npm, create `docs/` architecture & design specs | Completed |
| 2 | Project Initialization & Tooling | `package.json`, dependencies, `tsconfig.json`, `next.config.ts`, `.env.example`, design tokens | Completed |
| 3 | Centralized Content & Assets | `src/types/content.ts`, `src/content/*`, SVG industrial diagrams, sample PDF/HTML spec brochures | Completed |
| 4 | Global Layout & Reusable Components | `Header`, `Footer`, `Breadcrumbs`, UI primitives, Home sections, Product cards/tables, Form controls | Completed |
| 5 | Backend Validation & Enquiry Service | Shared Zod schemas, file validator, rate limiter, email abstraction, `POST /api/enquiry` | Completed |
| 6 | App Router Pages & SEO | Home, About, Products (`[slug]`), Industries (`[slug]`), Capabilities, Projects (`[slug]`), Quality, Resources, Contact, Privacy, Terms, Sitemap, Robots | Completed |
| 7 | Automated QA & Verification | Vitest unit/component tests, Playwright Journeys A/B/C & 4 viewport audits, `typecheck`, `lint`, `build`, `README.md` | Completed |

## Assumptions & Reversible Decisions
- **Placeholder Brand Name**: Uses **Vanguard Sugar & Process Engineering Pvt. Ltd.** (explicitly labeled as a starter template placeholder in `src/content/company.ts` and UI badges) so the template renders coherently while clearly signaling where real corporate data must be inserted.
- **Media Assets**: Clean, scalable vector technical diagrams (`.svg`) are created under `public/images/` and `next/image` is configured cleanly so there are zero external image CDN failures or broken URLs locally.
- **Email Delivery Default**: Defaults to `MockPreviewEmailProvider` when `EMAIL_PROVIDER` is unset or `"mock"`, transparently displaying `development_preview` status rather than faking live email transmission.
