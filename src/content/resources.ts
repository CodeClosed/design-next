import type { FaqItem, ResourceDocument } from "@/types/content";

export const resourceDocuments: ResourceDocument[] = [
  {
    id: "res-company-profile",
    title: "Corporate Engineering & Manufacturing Profile (Sample Template)",
    category: "Company Profile",
    description:
      "Demonstrative text summary outlining equipment scope, workshop bays, and enquiry guidelines. Replace with your company's designed PDF corporate brochure.",
    filePath: "/brochures/sample-company-profile.txt",
    fileFormat: "TXT (Sample Demo)",
    fileSize: "4 KB",
    isSampleDocument: true,
  },
  {
    id: "res-full-catalogue",
    title: "Sugar Processing Equipment Summary Catalogue (Sample Template)",
    category: "Technical Catalogue",
    description:
      "Consolidated reference overview covering cane milling tandems, fibrizers, falling film evaporators, continuous vacuum pans, centrifugals, and dryer-coolers.",
    filePath: "/brochures/sample-equipment-catalogue.txt",
    fileFormat: "TXT (Sample Demo)",
    fileSize: "5 KB",
    isSampleDocument: true,
  },
  {
    id: "res-milling-spec",
    title: "VSP-MT-4R Cane Milling Tandem Specification Sheet (Sample)",
    category: "Brochure",
    description:
      "Illustrative mechanical specification parameters and roller dimension table for 4-roller cane milling systems.",
    filePath: "/brochures/sample-cane-milling-tandem-spec.txt",
    fileFormat: "TXT (Sample Demo)",
    fileSize: "3 KB",
    isSampleDocument: true,
  },
  {
    id: "res-evaporator-spec",
    title: "VSP-FFE-4500 Falling Film Evaporator Specification Sheet (Sample)",
    category: "Brochure",
    description:
      "Illustrative heat-transfer area, tube metallurgy, and condensate extraction datasheet for multi-effect boiling houses.",
    filePath: "/brochures/sample-falling-film-evaporator-spec.txt",
    fileSize: "3 KB",
    fileFormat: "TXT (Sample Demo)",
    isSampleDocument: true,
  },
  {
    id: "res-rfq-checklist",
    title: "Plant RFQ Technical Input Questionnaire (Sample Template)",
    category: "Compliance Template",
    description:
      "Checklist of process parameters (TCD, steam pressure, cane fiber %, space constraints) recommended when submitting an RFQ.",
    filePath: "/brochures/sample-rfq-input-checklist.txt",
    fileFormat: "TXT (Sample Demo)",
    fileSize: "3 KB",
    isSampleDocument: true,
  },
];

export const faqs: FaqItem[] = [
  {
    id: "faq-01",
    category: "Enquiries & RFQs",
    question: "What technical information should we include when submitting an equipment RFQ?",
    answer:
      "To prepare an accurate preliminary sizing and commercial proposal, please specify target plant crushing capacity (TCD or TPD), available steam/vapor pressure and temperature, cane fiber percentage or liquor brix parameters, preferred metallurgy (CS / SS 304 / SS 316L), and whether the scope is retrofit or greenfield. You can attach GA drawings or process datasheets directly on our Contact & RFQ page.",
  },
  {
    id: "faq-02",
    category: "Engineering & Customization",
    question: "Can equipment footprints be customized to fit existing mill foundations or boiling house bays?",
    answer:
      "Yes. In brownfield expansions and off-season retrofits, foundation bolt patterns, soleplate elevations, and vapor piping nozzles are engineered around measured site clearances captured during technical survey.",
  },
  {
    id: "faq-03",
    category: "Quality & Inspection",
    question: "Are third-party inspection agencies (TPIA) permitted during fabrication and testing?",
    answer:
      "Client representatives and nominated third-party inspection agencies can witness stage-wise Quality Assurance Plan (QAP) checkpoints—including MTC correlation, NDT weld checks, rotor balancing, and hydrostatic pressure tests—prior to dispatch.",
  },
  {
    id: "faq-04",
    category: "Template Setup",
    question: "Why do brochures and statistics carry sample labels in this build?",
    answer:
      "This codebase is delivered as a production-ready starter template adhering strictly to factual accuracy: no company credentials, certifications, or client testimonials are fabricated. Replace the central files under src/content/ and public/brochures/ with verified corporate assets before going live.",
  },
];
