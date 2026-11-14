# Technical Architecture

## 1. Technology Stack

| Layer | Technology | Rationale |
| --- | --- | --- |
| Framework | Next.js (App Router) | Static Site Generation (SSG), server components by default, route handlers, SEO metadata & sitemap support |
| Language | TypeScript (`strict: true`) | End-to-end type safety across content schemas, UI props, forms, and API payloads |
| Styling | Tailwind CSS v4 + CSS tokens | Consistent industrial design tokens, responsive 12-column grid, zero runtime CSS overhead |
| Icons & Motion | `lucide-react`, `motion` | Crisp technical iconography and restrained GPU-friendly transitions honoring `prefers-reduced-motion` |
| Forms & Validation | `react-hook-form`, `@hookform/resolvers`, `zod` | Shared client/server validation schemas with accessible error states |
| Testing | `vitest`, `@testing-library/react`, `@playwright/test` | Fast unit/component feedback + cross-viewport E2E verification |

### Deliberate Non-Overengineering Decisions
- No database or external CMS required in v1; content lives in typed modular TypeScript modules (`src/content/*`) designed for effortless migration to a headless CMS later.
- No microservices, Docker, Kubernetes, or authentication system.

## 2. Layered System Architecture

```text
┌────────────────────────────────────────────────────────────────────┐
│                       PRESENTATION LAYER                           │
│  src/app/** (Server Pages, Layouts, Dynamic SSG Routes)            │
│  src/components/** (Layout, Home, Products, Forms, Shared UI)      │
└────────────────────────────────┬───────────────────────────────────┘
                                 │
┌────────────────────────────────▼───────────────────────────────────┐
│                         CONTENT LAYER                              │
│  src/types/content.ts (Strict domain entities)                     │
│  src/content/company.ts | products/ | projects/ | industries.ts    │
│  src/content/capabilities.ts | quality.ts | resources.ts           │
└────────────────────────────────┬───────────────────────────────────┘
                                 │
┌────────────────────────────────▼───────────────────────────────────┐
│                       APPLICATION LAYER                            │
│  src/lib/validations/enquiry.ts (Shared Zod + file constraints)    │
│  src/app/api/enquiry/route.ts (Multipart/JSON Route Handler)       │
│  src/lib/services/enquiry.ts & email.ts (Provider abstraction)     │
└────────────────────────────────┬───────────────────────────────────┘
                                 │
┌────────────────────────────────▼───────────────────────────────────┐
│                     INFRASTRUCTURE & SEO LAYER                     │
│  next.config.ts (Security headers, image settings)                 │
│  src/app/sitemap.ts, robots.ts, JSON-LD generators, next/font      │
└────────────────────────────────────────────────────────────────────┘
```

## 3. Folder Structure

```text
├── docs/                     # Project architecture, design system & QA plans
├── public/
│   ├── brochures/            # Sample downloadable specification sheets
│   └── images/               # Technical SVG diagrams (hero, products, projects)
├── src/
│   ├── app/                  # App Router pages, dynamic routes, API, SEO files
│   ├── components/           # Modular UI, layout, home, product & form components
│   ├── content/              # Typed centralized domain content & query helpers
│   ├── lib/                  # Validation schemas, services, SEO helpers, utils
│   └── types/                # Shared TypeScript interfaces
├── tests/
│   ├── unit/                 # Vitest unit & component tests
│   └── e2e/                  # Playwright user journeys & viewport audits
├── .env.example              # Placeholder environment variables
├── next.config.ts            # Security headers & Next config
└── playwright.config.ts      # Playwright configuration
```

## 4. Server vs. Client Boundaries

- **Server Components (Default)**: All pages (`app/**/page.tsx`), `Footer`, `Breadcrumbs`, `ProductSpecsTable`, `RelatedProducts`, `HeroSection`, `CapabilitiesSection`, `ProcessTimeline`, and JSON-LD builders execute on the server with zero unnecessary client JS.
- **Client Components (`"use client"`)**: Used strictly where interactivity requires browser state:
  - `Header` (responsive mobile drawer toggle, active path indicator, Escape handling)
  - `ProductGrid` / `ProductFilter` (live search query + category filtering synced with URL `searchParams`, wrapped in `<Suspense>`)
  - `ContactRfqSection` / `FileUploadField` (React Hook Form state, file selection/validation, submission feedback)
  - `FaqAccordion` / restrained `Reveal` wrapper (`motion/react` with `useReducedMotion`)

## 5. Enquiry & Email Service Abstraction

1. `POST /api/enquiry` accepts `multipart/form-data` (for RFQ attachments) or `application/json`.
2. In-memory sliding-window rate limiter guards against automated bursts per client IP.
3. Hidden `honeypot` field rejects automated bot submissions silently or with `400`.
4. Shared `enquiryFormSchema` and `validateSpecificationFile` re-validate all inputs and attachments server-side (extension whitelist + 10 MB cap).
5. `EnquiryService` delegates to an `EmailProvider` selected via `process.env.EMAIL_PROVIDER`:
   - Default (`"mock"` or unconfigured): `MockPreviewEmailProvider` generates an audit reference (`ENQ-YYYYMMDD-XXXX`) and explicitly returns `deliveryMode: "development_preview"` so the UI informs the user no external email was sent.
   - `"resend"` / `"smtp"`: Integration hooks ready for production credentials via `.env.local` without exposing secrets to client code.
