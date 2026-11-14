# Industrial Corporate Website Starter Template (Sugar Processing Equipment)

A production-quality, locally runnable B2B corporate website starter template engineered with **Next.js (App Router)**, **TypeScript (strict mode)**, **Tailwind CSS**, **React Hook Form + Zod**, **Vitest**, and **Playwright**.

> **Important Template Policy:** All company branding, statistics, project case studies, leadership profiles, testimonials, and sample brochures are clearly marked placeholders (`isSampleContent: true` / `[Placeholder]`). Zero certifications (such as ISO or ASME) or customer claims are presented as verified facts.

---

## Features

- **Full Corporate Sitemap**: Home, About Us, Products (`/products` + `/products/[slug]`), Industries (`/industries` + `/industries/[slug]`), Engineering & Manufacturing Capabilities, Projects (`/projects` + `/projects/[slug]`), Quality Assurance, Resources & FAQs, Contact & RFQ, Privacy Policy, and Terms & Conditions.
- **Centralized Typed Content Layer**: Add or update equipment, project case studies, industries, and corporate contact details in `src/content/` without touching presentation components.
- **Equipment Search & Filtering**: Live search across model codes, applications, and specifications alongside category filter controls synchronized with URL query parameters.
- **Real Client & Server Form Validation**: General Enquiry and Technical RFQ forms built with React Hook Form + Zod, supporting specification file attachments (`.pdf`, `.doc`, `.docx`, `.dwg`, `.dxf`, `.png`, `.jpg`, up to 10 MB), IP rate limiting, honeypot spam protection, and an honest email provider abstraction.
- **SEO, Accessibility & Security**: Dynamic `sitemap.xml`, `robots.txt`, canonical metadata, `Organization`, `BreadcrumbList`, and `Product` JSON-LD, WCAG 2.2 AA semantics (skip link, landmarks, keyboard-scrollable responsive spec tables, `prefers-reduced-motion`), and HTTP security headers in `next.config.ts`.

---

## Technology Stack

- **Framework**: Next.js (App Router) + React 19
- **Language**: TypeScript (`strict: true`)
- **Styling**: Tailwind CSS v4 + CSS design tokens
- **Icons & Motion**: `lucide-react`, `motion`
- **Forms & Validation**: `react-hook-form`, `@hookform/resolvers`, `zod`
- **Testing & Linting**: Vitest, React Testing Library, Playwright, ESLint

---

## Folder Structure

```text
├── docs/                       # Architecture, Design System, Testing & Project docs
├── public/
│   ├── brochures/              # Sample downloadable technical datasheets
│   └── images/                 # Engineering SVG schematics (hero, products, projects)
├── src/
│   ├── app/                    # App Router pages, dynamic [slug] routes, API & SEO files
│   ├── components/             # Modular UI, layout, home, product, form & FAQ components
│   ├── content/                # Centralized typed domain data & query helpers
│   ├── lib/                    # Zod schemas, email/enquiry services, rate limiter, SEO utils
│   └── types/                  # Domain TypeScript interfaces
├── tests/
│   ├── unit/                   # Vitest unit & React Testing Library component specs
│   └── e2e/                    # Playwright E2E journeys & responsive viewport audits
├── .env.example                # Documented placeholder environment variables
├── next.config.ts              # Security headers & SVG image policy
└── tsconfig.json               # Strict TypeScript config
```

---

## Getting Started

### Prerequisites
- Node.js `20+` (verified on Node `v24.14.0` and npm `11.11.0`)

### Installation & Local Development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

See `.env.example` for all supported variables:

| Variable | Purpose | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical base URL for metadata, `sitemap.xml`, and JSON-LD | `http://localhost:3000` |
| `EMAIL_PROVIDER` | Enquiry transport mode: `mock`, `resend`, or `smtp` | `mock` |
| `EMAIL_FROM` | Sender address when live email transport is enabled | Placeholder |
| `EMAIL_TO_SALES` | Recipient corporate sales inbox | Placeholder |
| `RESEND_API_KEY` | Resend API key (required when `EMAIL_PROVIDER=resend`) | Empty |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | SMTP configuration placeholder (when `EMAIL_PROVIDER=smtp`) | Empty |
| `RATE_LIMIT_MAX_REQUESTS` | Maximum `/api/enquiry` submissions per 10-minute window per IP | `15` |
| `NEXT_PUBLIC_ANALYTICS_ID` | Optional analytics measurement ID | Empty |

---

## Customizing Content & Branding

### 1. Replace Company Branding & Contact Details
Edit `src/content/company.ts` to replace:
- `name`, `shortName`, `legalName`, `tagline`, `description`
- `contact` (emails, phone numbers, WhatsApp number, business hours)
- `addresses` (corporate office, manufacturing works, coordinates)
- `statistics`, `milestones`, `leadership`, `testimonials`

### 2. Add a New Equipment Product
Add a new typed object to the `products` array in `src/content/products/index.ts` and place its image under `public/images/products/` and brochure under `public/brochures/`. Both `/products` filtering, `/products/[slug]` static route generation, `/sitemap.xml`, and the `/contact` RFQ dropdown update automatically.

### 3. Add a Project Case Study
Add a new object to `projects` in `src/content/projects/index.ts` and add its image to `public/images/projects/`.

### 4. Configure Live Email Delivery
By default (`EMAIL_PROVIDER=mock`), `/api/enquiry` validates all fields and attachments server-side and returns an honest `development_preview` confirmation with an `ENQ-YYYYMMDD-XXXX` reference ID without pretending an email was sent.
To enable live emails via Resend:
1. Set `EMAIL_PROVIDER=resend`, `RESEND_API_KEY=...`, `EMAIL_FROM=...`, and `EMAIL_TO_SALES=...` in `.env.local`.
2. Restart the Next.js server.

---

## Verification & Testing Commands

```bash
# TypeScript strict type checking
npm run typecheck

# ESLint check
npm run lint

# Vitest unit & component test suite
npm test

# Production Next.js build
npm run build

# Playwright end-to-end tests (auto-starts production server on port 3000)
npx playwright test
```

---

## Known Limitations (Starter Template)
- **Visual Assets & Brochures**: Provided schematics (`.svg`) and brochures (`.txt`) are illustrative engineering placeholders; replace them with actual plant photography and designed PDF datasheets before launch.
- **SMTP Adapter**: `ResendEmailProvider` works out of the box via HTTPS `fetch` when configured; `SmtpEmailProvider` acts as a documented integration boundary requiring `nodemailer` if SMTP transport is preferred over Resend.
- **Rate Limiter**: Uses an in-memory per-instance store suitable for single-node deployments; swap with Redis if scaling horizontally across multiple serverless/container instances.
- **File Attachments**: Uploaded files on `/contact` are validated by extension, MIME type, and size server-side and summarized in the confirmation response; attach cloud object storage or mail attachment streaming in `src/lib/services/email.ts` if forwarding binary drawings directly to sales inboxes.
