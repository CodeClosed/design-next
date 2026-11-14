import type { ProjectCaseStudy } from "@/types/content";

export const projects: ProjectCaseStudy[] = [
  {
    id: "proj-01",
    slug: "integrated-5000-tcd-boiling-house-modernization",
    title: "5,000 TCD Boiling House & Evaporation Modernization [Sample Case Study]",
    clientLabel: "[Sample Client: Regional Cooperative Sugar Factory]",
    industry: "Sugar Processing",
    industrySlug: "sugar-processing",
    location: "[Western India — Sample Location]",
    completionPeriod: "[Off-Season Retrofit — Sample Timeline]",
    plantCapacity: "5,000 TCD (Expandable to 6,500 TCD)",
    scope: [
      "Thermal heat balance engineering & vapor bleed optimization",
      "Fabrication & supply of Falling Film Evaporator bodies",
      "Erection supervision & hydro-testing during off-season shutdown",
    ],
    summary:
      "Illustrative sample case study demonstrating replacement of legacy Robert evaporator bodies with falling film units to reduce process steam consumption.",
    description:
      "Sample Case Study Narrative: To support export cogeneration power generation, the plant required reduction of process steam % cane. This illustrative engagement covers layout engineering, shop fabrication of two SS-tubed falling film evaporator bodies, entrainment separators, and site erection integration within a constrained off-season maintenance window.",
    equipmentSupplied: [
      "4,200 m² Tubular Falling Film Evaporator (1st Effect)",
      "3,000 m² Tubular Falling Film Evaporator (2nd Effect)",
      "Multi-Jet Barometric Spray Condenser Station",
    ],
    relatedProductSlugs: [
      "robert-type-falling-film-evaporator",
      "multi-jet-barometric-condenser",
    ],
    engineeringHighlights: [
      "Designed for low delta-T vapor bleeding to vacuum pans and juice heaters",
      "Pre-assembled nozzle manifolds minimized on-site piping fit-up hours",
      "Full hydro-static and dye-penetrant inspection completed prior to dispatch [Sample QA Scope]",
    ],
    images: [
      {
        src: "/images/projects/project-evaporation-plant.svg",
        alt: "Process layout diagram of 5,000 TCD falling film evaporation plant retrofit",
        caption: "Illustrative installation layout — 5,000 TCD Evaporation Station",
      },
    ],
    isFeatured: true,
    isSampleProject: true,
  },
  {
    id: "proj-02",
    slug: "4000-tcd-cane-milling-tandem-expansion",
    title: "4,000 TCD Cane Preparation & 4-Roller Mill Retrofit [Sample Case Study]",
    clientLabel: "[Sample Client: Integrated Agro-Sugar Complex]",
    industry: "Sugar Manufacturing",
    industrySlug: "sugar-manufacturing",
    location: "[Northern Belt — Sample Location]",
    completionPeriod: "[Off-Season Turnkey Supply — Sample Timeline]",
    plantCapacity: "4,000 TCD Crushing Line",
    scope: [
      "Swing-hammer cane fibrizer rotor and anvil fabrication",
      "Heavy 4-roller mill unit supply with hydraulic top-cap loading",
      "Dynamic rotor balancing and alignment commissioning support",
    ],
    summary:
      "Illustrative project showcasing front-end cane preparation and mill extraction upgrade using a swing-hammer fibrizer and 4-roller mill assembly.",
    description:
      "Sample Case Study Narrative: Designed to overcome high-fiber cane choking and elevated bagasse moisture, this illustrative scope pairs a VSP-CF-2200 fibrizer with a 4-roller mill unit engineered to drop onto modified existing foundation pedestals.",
    equipmentSupplied: [
      "Heavy-Duty Swing-Hammer Cane Fibrizer (2,000 mm width)",
      "4-Roller Heavy-Duty Cane Milling Unit (915 × 1,830 mm)",
    ],
    relatedProductSlugs: [
      "heavy-duty-cane-milling-tandem",
      "rotary-cane-fibrizer-shredder",
    ],
    engineeringHighlights: [
      "Adapter soleplates engineered to interface with existing civil pedestals",
      "Ultrasonic flaw testing documentation on all forged alloy mill shafts",
      "Trial shop-floor assembly of headstocks, bearings, and brasses prior to shipment",
    ],
    images: [
      {
        src: "/images/projects/project-milling-line.svg",
        alt: "Layout elevation of 4,000 TCD cane preparation and milling station",
        caption: "Illustrative installation schematic — Cane Preparation & Mill Line",
      },
    ],
    isFeatured: true,
    isSampleProject: true,
  },
  {
    id: "proj-03",
    slug: "refined-sugar-centrifugal-and-drying-line",
    title: "Refinery Continuous Pan, Centrifugal & Drying Battery [Sample Case Study]",
    clientLabel: "[Sample Client: Export Sugar Refinery]",
    industry: "Sugar Refining",
    industrySlug: "sugar-refining",
    location: "[Coastal Industrial Zone — Sample Location]",
    completionPeriod: "[Greenfield Refinery Package — Sample Timeline]",
    plantCapacity: "600 TPD Refined White Sugar Line",
    scope: [
      "Stainless-steel contact rotary sugar dryer-cooler drum",
      "High-G automatic batch centrifugal battery supply",
      "Wet-scrubber dust recovery and baghouse interface",
    ],
    summary:
      "Illustrative refinery back-end package delivering low-moisture, cooled refined crystal sugar ready for automated bulk bagging.",
    description:
      "Sample Case Study Narrative: Refined sugar requires stringent moisture control (<0.04%) and contamination prevention. This sample project outlines delivery of stainless steel continuous crystallization equipment, regenerative VFD centrifugals, and a two-zone cascade rotary dryer-cooler.",
    equipmentSupplied: [
      "High-G Automatic Batch Centrifugal Battery (4 × 1,750 kg)",
      "Rotary Cascade Sugar Dryer & Cooler Drum (SS 304 contact)",
      "Vertical Continuous Vacuum Pan (Low-Grade Recovery)",
    ],
    relatedProductSlugs: [
      "high-efficiency-batch-centrifugal-machine",
      "rotary-cascade-sugar-dryer-cooler",
      "vertical-continuous-vacuum-pan",
    ],
    engineeringHighlights: [
      "100% SS 304 wetted/contact fabrication with pickled and passivated welds",
      "Regenerative braking VFD panel integration reducing peak power draw",
      "Precision laser alignment of trunnion roller assemblies during installation",
    ],
    images: [
      {
        src: "/images/projects/project-refinery-line.svg",
        alt: "Schematic of refinery centrifugal and rotary sugar drying line",
        caption: "Illustrative installation layout — Refinery Purging & Drying Line",
      },
    ],
    isFeatured: true,
    isSampleProject: true,
  },
  {
    id: "proj-04",
    slug: "120-klpd-distillery-spent-wash-zld-evaporator",
    title: "120 KLPD Distillery Spent Wash Concentration Plant [Sample Case Study]",
    clientLabel: "[Sample Client: Integrated Sugar & Ethanol Complex]",
    industry: "Distillery & Allied Industries",
    industrySlug: "distillery-allied",
    location: "[Central Industrial Corridor — Sample Location]",
    completionPeriod: "[10-Month Supply & Commissioning — Sample Timeline]",
    plantCapacity: "120 KLPD Ethanol Zero Liquid Discharge Skid",
    scope: [
      "5-effect falling-film + forced-circulation evaporator package",
      "SS 316L / Duplex corrosion-resistant vessel fabrication",
      "Vapor condensate recovery integration",
    ],
    summary:
      "Illustrative zero-liquid-discharge evaporation plant concentrating molasses spent wash for slope-fired cogeneration boilers.",
    description:
      "Sample Case Study Narrative: Designed for integration alongside an existing sugar factory, this illustrative ZLD evaporator utilizes bleed vapor during the crushing season and independent steam during off-season operation to deliver 58% solids concentrate reliably.",
    equipmentSupplied: [
      "Multi-Effect Spent Wash Concentration Evaporator (VSP-SWE-800)",
      "Multi-Jet Barometric Condenser & Condensate Cooling Heat Exchangers",
    ],
    relatedProductSlugs: [
      "spent-wash-concentration-evaporator",
      "multi-jet-barometric-condenser",
    ],
    engineeringHighlights: [
      "High circulation pump velocity limits organic salt scaling inside finisher tubes",
      "Radiographic weld testing on critical SS 316L vapor chambers [Sample QA Protocol]",
      "Modular skid pipework minimizing erection footprint",
    ],
    images: [
      {
        src: "/images/projects/project-distillery-zld.svg",
        alt: "Process diagram of 120 KLPD multi-effect spent wash ZLD evaporator",
        caption: "Illustrative installation schematic — 120 KLPD Spent Wash Evaporator",
      },
    ],
    isFeatured: false,
    isSampleProject: true,
  },
];

export function getAllProjects(): ProjectCaseStudy[] {
  return projects;
}

export function getFeaturedProjects(): ProjectCaseStudy[] {
  return projects.filter((p) => p.isFeatured);
}

export function getProjectBySlug(slug: string): ProjectCaseStudy | undefined {
  return projects.find((p) => p.slug === slug);
}
