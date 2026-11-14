import type { Product, ProductCategory, ProductCategoryId } from "@/types/content";

export const productCategories: ProductCategory[] = [
  {
    id: "cane-milling",
    name: "Cane Preparation & Milling Systems",
    shortName: "Cane Milling",
    description:
      "High-torque cane preparation knives, swing-hammer fibrizers, and multi-roller crushing mill tandems engineered for high sucrose extraction.",
  },
  {
    id: "heating-evaporation",
    name: "Juice Heating & Evaporation Plants",
    shortName: "Evaporation & Heating",
    description:
      "Multi-effect falling film evaporators, Robert evaporators, tubular juice heaters, and high-vacuum condensing vessels built for steam economy.",
  },
  {
    id: "crystallization-centrifugals",
    name: "Crystallization & Centrifugal Machinery",
    shortName: "Pans & Centrifugals",
    description:
      "Continuous and batch vacuum pans, crystallizers, and high-G automatic centrifugal separators for consistent crystal uniformity.",
  },
  {
    id: "drying-allied",
    name: "Sugar Drying, Handling & Distillery Systems",
    shortName: "Drying & Distillery",
    description:
      "Rotary cascade sugar dryer-coolers, multi-jet condensers, and spent-wash concentration systems for integrated sugar-distillery complexes.",
  },
];

export const products: Product[] = [
  {
    id: "prod-01",
    slug: "heavy-duty-cane-milling-tandem",
    modelCode: "VSP-MT-4R",
    name: "4-Roller Heavy-Duty Cane Milling Tandem",
    category: "cane-milling",
    categoryLabel: "Cane Preparation & Milling Systems",
    shortDescription:
      "Heavy cast-steel 4-roller crushing mill with underfeed pressure feeder and hydraulic cap loading for 2,500 to 10,000 TCD sugar plants.",
    fullDescription:
      "Illustrative sample specification: Engineered for continuous high-torque cane juice extraction, the VSP-MT-4R 4-roller mill tandem integrates thick-walled forged steel shafts, shrink-fitted coarse-grained cast iron shells, and heavy fabricated steel headstocks. Designed to minimize bagasse moisture while permitting rapid top-roller assembly lift during off-season maintenance.",
    features: [
      "Cast-steel or heavy fabricated steel headstocks with precision-bored bearing guides",
      "Integrated 4th underfeed pressure roller for uniform blanket feeding and reduced slip",
      "Forged alloy-steel roller shafts with ultrasonic testing prior to shell shrink-fitting",
      "Hydraulic accumulator top-cap loading for constant extraction pressure across cane fiber variations",
      "Centralized automatic forced-feed grease lubrication system for brass bearings",
    ],
    specifications: [
      { parameter: "Nominal Crushing Capacity", value: "2,500 – 10,000", unit: "TCD" },
      { parameter: "Roller Size Range (Dia × Length)", value: "760 × 1,525 to 1,150 × 2,300", unit: "mm" },
      { parameter: "Target Bagasse Moisture", value: "47.5 – 49.0", unit: "% (Process Dependent)" },
      { parameter: "Roller Peripheral Speed", value: "12 – 18", unit: "m/min" },
      { parameter: "Drive Compatibility", value: "Planetary Gearbox / AC VFD / Steam Turbine", unit: "Drive Type" },
      { parameter: "Shaft Material", value: "EN-19 / 42CrMo4 Forged Alloy Steel", unit: "Material" },
    ],
    applications: [
      "Greenfield cane sugar crushing tandems (4-mill to 6-mill trains)",
      "Existing mill capacity expansion and 3-roller to 4-roller retrofits",
      "High-fiber cane varieties requiring positive forced feeding",
    ],
    configurations: [
      {
        name: "VSP-MT-3672 (Mid-Capacity)",
        capacityRange: "3,500 – 5,000 TCD",
        notes: "915 × 1,830 mm rollers, dual planetary drive ready.",
      },
      {
        name: "VSP-MT-4284 (High-Capacity)",
        capacityRange: "6,500 – 10,000 TCD",
        notes: "1,065 × 2,135 mm rollers with heavy-duty Donnelly chute.",
      },
    ],
    images: [
      {
        src: "/images/products/cane-mill-tandem.svg",
        alt: "Technical cross-section schematic of 4-roller heavy-duty cane milling tandem",
        caption: "Illustrative technical schematic — VSP-MT-4R 4-Roller Mill Architecture",
      },
    ],
    brochure: {
      title: "VSP-MT-4R Milling Tandem Specification Sheet (Sample)",
      filePath: "/brochures/sample-cane-milling-tandem-spec.txt",
      fileSizeLabel: "Sample Technical Sheet (TXT)",
      isSampleDocument: true,
    },
    relatedProductSlugs: [
      "rotary-cane-fibrizer-shredder",
      "robert-type-falling-film-evaporator",
    ],
    isFeatured: true,
    isSampleContent: true,
  },
  {
    id: "prod-02",
    slug: "rotary-cane-fibrizer-shredder",
    modelCode: "VSP-CF-2200",
    name: "Heavy-Duty Swing-Hammer Cane Fibrizer",
    category: "cane-milling",
    categoryLabel: "Cane Preparation & Milling Systems",
    shortDescription:
      "High-inertia swing-hammer cane shredder delivering >90% preparation index (PI) for improved primary mill extraction.",
    fullDescription:
      "Illustrative sample specification: Positioned upstream of the first mill, the VSP-CF-2200 swing-hammer fibrizer ruptures cane cells thoroughly before juice compression. Dynamic rotor balancing, hard-faced reversible hammers, and an adjustable grid pocket ensure high preparation index with controlled power consumption.",
    features: [
      "Statically and dynamically balanced heavy rotor assembly (ISO G6.3 grade target)",
      "Reversible tungsten-carbide hard-faced swing hammers on alloy steel pivot pins",
      "Heavy ribbed anvil pocket with externally adjustable clearance mechanism",
      "Split-casing hinged hood for streamlined hammer inspection and pin replacement",
      "Spherical roller bearings in heavy plummer blocks with vibration monitoring ports",
    ],
    specifications: [
      { parameter: "Throughput Capacity", value: "120 – 450", unit: "TCH" },
      { parameter: "Preparation Index (Target)", value: "88 – 92+", unit: "% PI" },
      { parameter: "Sweep Diameter", value: "1,650 – 1,900", unit: "mm" },
      { parameter: "Rotor Operating Speed", value: "740 / 980", unit: "RPM" },
      { parameter: "Installed Motor Power", value: "800 – 2,200", unit: "kW" },
    ],
    applications: [
      "Primary cane preparation ahead of mill tandems or diffusers",
      "Capacity debottlenecking for mills targeting higher pol extraction",
    ],
    configurations: [
      {
        name: "VSP-CF-1800",
        capacityRange: "120 – 220 TCH",
        notes: "1,800 mm width rotor with 112 swing hammers.",
      },
      {
        name: "VSP-CF-2200",
        capacityRange: "250 – 450 TCH",
        notes: "2,200 mm width heavy-duty rotor for large tandems.",
      },
    ],
    images: [
      {
        src: "/images/products/cane-fibrizer.svg",
        alt: "Technical drawing of heavy-duty swing-hammer cane fibrizer rotor and anvil",
        caption: "Illustrative technical schematic — VSP-CF-2200 Swing-Hammer Fibrizer",
      },
    ],
    brochure: {
      title: "VSP-CF-2200 Cane Fibrizer Technical Datasheet (Sample)",
      filePath: "/brochures/sample-cane-fibrizer-spec.txt",
      fileSizeLabel: "Sample Technical Sheet (TXT)",
      isSampleDocument: true,
    },
    relatedProductSlugs: [
      "heavy-duty-cane-milling-tandem",
      "robert-type-falling-film-evaporator",
    ],
    isFeatured: true,
    isSampleContent: true,
  },
  {
    id: "prod-03",
    slug: "robert-type-falling-film-evaporator",
    modelCode: "VSP-FFE-4500",
    name: "Tubular Falling Film Evaporator Body",
    category: "heating-evaporation",
    categoryLabel: "Juice Heating & Evaporation Plants",
    shortDescription:
      "High-heat-transfer stainless-tube falling film evaporator designed for low juice retention time, minimal color formation, and maximum steam economy.",
    fullDescription:
      "Illustrative sample specification: Designed for modern quintuple-effect evaporation stations, the VSP-FFE-4500 operates at low temperature differentials across effects, preserving sucrose quality while supplying low-pressure vapor bleeds to pans and juice heaters.",
    features: [
      "Precision perforated multi-stage juice distribution plate for uniform tube wetting",
      "SS 304 / SS 316L welded or seamless heat-exchanger tubes expanded into clad tube sheets",
      "Low hydrostatic head eliminating boiling point elevation losses",
      "High-efficiency centrifugal entrainment separator minimizing sugar carryover in condensate",
      "Integrated CIP spray-ball nozzles for controlled chemical cleaning",
    ],
    specifications: [
      { parameter: "Heating Surface Area (HSA)", value: "1,000 – 5,500", unit: "m²" },
      { parameter: "Tube Material & Dimensions", value: "SS 304 / SS 316L, 45 mm OD × 1.2 mm", unit: "Standard" },
      { parameter: "Typical Delta-T Requirement", value: "4.5 – 6.5", unit: "°C" },
      { parameter: "Juice Retention Time", value: "< 90", unit: "Seconds" },
      { parameter: "Operating Pressure Range", value: "1.5 bar(g) to -0.85 bar(g)", unit: "Pressure" },
    ],
    applications: [
      "1st and 2nd effects of energy-efficient cane sugar evaporation stations",
      "Cogeneration-linked sugar plants reducing process steam % cane below 34%",
      "Beet sugar & refinery liquor concentration stations",
    ],
    configurations: [
      {
        name: "Single-Pass Distribution FFE",
        capacityRange: "1,000 – 3,000 m² HSA",
        notes: "Standard 6–8 m tube length for medium plants.",
      },
      {
        name: "High-Surface Modular FFE",
        capacityRange: "3,500 – 5,500 m² HSA",
        notes: "9–10 m tube length with dedicated vapor-liquid pre-separator.",
      },
    ],
    images: [
      {
        src: "/images/products/falling-film-evaporator.svg",
        alt: "Elevation schematic of tubular falling film evaporator body and entrainment separator",
        caption: "Illustrative technical schematic — VSP-FFE-4500 Falling Film Evaporator",
      },
    ],
    brochure: {
      title: "VSP-FFE-4500 Falling Film Evaporator Brochure (Sample)",
      filePath: "/brochures/sample-falling-film-evaporator-spec.txt",
      fileSizeLabel: "Sample Technical Sheet (TXT)",
      isSampleDocument: true,
    },
    relatedProductSlugs: [
      "vertical-continuous-vacuum-pan",
      "multi-jet-barometric-condenser",
    ],
    isFeatured: true,
    isSampleContent: true,
  },
  {
    id: "prod-04",
    slug: "vertical-continuous-vacuum-pan",
    modelCode: "VSP-CVP-120",
    name: "Vertical Continuous Vacuum Pan (VCP)",
    category: "crystallization-centrifugals",
    categoryLabel: "Crystallization & Centrifugal Machinery",
    shortDescription:
      "Multi-chamber vertical continuous vacuum pan for steady A, B, or C massecuite boiling with low-pressure exhaust or 2nd/3rd vapor utilization.",
    fullDescription:
      "Illustrative sample specification: The VSP-CVP-120 converts erratic batch boiling loads into steady continuous steam demand. Divided into baffled crystallization cells arranged vertically or concentrically, it ensures narrow residence-time distribution and uniform crystal coefficient of variation (CV).",
    features: [
      "Multi-compartment plug-flow crystal growth path eliminating fine grain bypass",
      "Honeycomb / floating calandria design engineered for low-grade vapor operation",
      "Dedicated J-tube condensate removal and multi-point non-condensable gas venting",
      "Sight glasses, washout steam ring, and instrumentation nozzles on every compartment",
      "Reduced peak boiler steam load fluctuations compared to conventional batch pans",
    ],
    specifications: [
      { parameter: "Massecuite Output Capacity", value: "25 – 85", unit: "Tons/hr" },
      { parameter: "Strike Volume Equivalent", value: "60 – 140", unit: "Tons" },
      { parameter: "Number of Compartments", value: "8 – 12", unit: "Cells" },
      { parameter: "Heating Steam / Vapor Pressure", value: "0.25 – 0.65", unit: "bar(a)" },
      { parameter: "Calandria Tube Material", value: "SS 304 / Carbon Steel (Per Spec)", unit: "Material" },
    ],
    applications: [
      "Continuous C-massecuite and B-massecuite boiling stations",
      "A-massecuite continuous crystallization in large white sugar factories",
      "Refinery boiling house modernization",
    ],
    configurations: [
      {
        name: "8-Cell Compact Vertical VCP",
        capacityRange: "25 – 45 TPH Massecuite",
        notes: "Compact footprint suitable for existing pan floor retrofits.",
      },
      {
        name: "12-Cell High-Exhaustion VCP",
        capacityRange: "50 – 85 TPH Massecuite",
        notes: "Dual calandria zones with independent vapor control.",
      },
    ],
    images: [
      {
        src: "/images/products/continuous-vacuum-pan.svg",
        alt: "Cutaway diagram of vertical continuous vacuum pan calandria chambers",
        caption: "Illustrative technical schematic — VSP-CVP-120 Vertical Continuous Pan",
      },
    ],
    brochure: {
      title: "VSP-CVP-120 Continuous Vacuum Pan Datasheet (Sample)",
      filePath: "/brochures/sample-continuous-vacuum-pan-spec.txt",
      fileSizeLabel: "Sample Technical Sheet (TXT)",
      isSampleDocument: true,
    },
    relatedProductSlugs: [
      "high-efficiency-batch-centrifugal-machine",
      "robert-type-falling-film-evaporator",
    ],
    isFeatured: true,
    isSampleContent: true,
  },
  {
    id: "prod-05",
    slug: "high-efficiency-batch-centrifugal-machine",
    modelCode: "VSP-BC-1750",
    name: "Fully Automatic High-G Batch Centrifugal",
    category: "crystallization-centrifugals",
    categoryLabel: "Crystallization & Centrifugal Machinery",
    shortDescription:
      "Regenerative VFD-driven batch centrifugal separator (1,250–1,750 kg/charge) for A-massecuite and refined white sugar purging.",
    fullDescription:
      "Illustrative sample specification: Engineered for high-cycle white sugar separation, the VSP-BC-1750 delivers rapid acceleration, precise laser/paddle cake-thickness sensing, hot-water/steam washing sequences, and regenerative braking energy feedback to the plant bus.",
    features: [
      "High-tensile stainless steel perforated basket dynamically balanced to tight vibration limits",
      "Pneumatically actuated bottom discharge valve and plough mechanism with mechanical interlocks",
      "PLC + HMI cycle recipe control for feeding, primary wash, steam wash, and spinning",
      "Regenerative AC VFD motor drive cutting net power consumption per ton of sugar",
      "Dual-lip vapour-tight outer monitor casing with hot-water wash header",
    ],
    specifications: [
      { parameter: "Charge Capacity per Cycle", value: "1,250 / 1,500 / 1,750", unit: "kg Massecuite" },
      { parameter: "Basket Dimensions (Dia × Height)", value: "1,370 × 915 to 1,525 × 1,000", unit: "mm" },
      { parameter: "Maximum Operating Speed", value: "1,050 – 1,200", unit: "RPM" },
      { parameter: "Centrifugal Gravity Factor", value: "950 – 1,100", unit: "G" },
      { parameter: "Cycle Rate", value: "18 – 24", unit: "Cycles/hr" },
    ],
    applications: [
      "White plantation sugar (A-massecuite) purging stations",
      "High-purity refined sugar (R1/R2/R3) centrifugal batteries",
    ],
    configurations: [
      {
        name: "VSP-BC-1250",
        capacityRange: "1,250 kg/charge",
        notes: "Suitable for 2,500–4,000 TCD A-massecuite lines.",
      },
      {
        name: "VSP-BC-1750",
        capacityRange: "1,750 kg/charge",
        notes: "High-throughput station for 5,000+ TCD plants and refineries.",
      },
    ],
    images: [
      {
        src: "/images/products/batch-centrifugal.svg",
        alt: "Engineering elevation of high-G automatic batch centrifugal separator",
        caption: "Illustrative technical schematic — VSP-BC-1750 Batch Centrifugal",
      },
    ],
    brochure: {
      title: "VSP-BC-1750 Automatic Batch Centrifugal Spec (Sample)",
      filePath: "/brochures/sample-batch-centrifugal-spec.txt",
      fileSizeLabel: "Sample Technical Sheet (TXT)",
      isSampleDocument: true,
    },
    relatedProductSlugs: [
      "vertical-continuous-vacuum-pan",
      "rotary-cascade-sugar-dryer-cooler",
    ],
    isFeatured: true,
    isSampleContent: true,
  },
  {
    id: "prod-06",
    slug: "rotary-cascade-sugar-dryer-cooler",
    modelCode: "VSP-SDC-60",
    name: "Rotary Cascade Sugar Dryer & Cooler Drum",
    category: "drying-allied",
    categoryLabel: "Sugar Drying, Handling & Distillery Systems",
    shortDescription:
      "Single-shell two-zone stainless steel rotary cascade drum delivering <0.04% outlet moisture and safe bagging temperatures.",
    fullDescription:
      "Illustrative sample specification: Designed to dry and cool crystal sugar gently without crystal attrition or dust explosion risk, the VSP-SDC-60 combines counter-current conditioned air flow with carefully profiled radial lifting flights inside an all-SS-304 contact drum.",
    features: [
      "All sugar-contact surfaces fabricated in SS 304 / SS 316 with smooth internal welds",
      "Graduated lifting flight geometry providing uniform sugar curtain dispersion",
      "Integrated hot-air drying zone and ambient/chilled-air cooling zone in one drum",
      "Dual hardened forged-steel riding rings supported on adjustable trunnion rollers",
      "Matched wet scrubber dust-recovery unit returning fine sugar dust to process",
    ],
    specifications: [
      { parameter: "Sugar Throughput Capacity", value: "15 – 75", unit: "TPH" },
      { parameter: "Inlet Sugar Moisture", value: "1.0 – 1.8", unit: "%" },
      { parameter: "Outlet Sugar Moisture", value: "< 0.04", unit: "%" },
      { parameter: "Outlet Sugar Temperature", value: "36 – 40", unit: "°C (Ambient + 5°C)" },
      { parameter: "Drum Contact Material", value: "ASTM A240 SS 304", unit: "Material" },
    ],
    applications: [
      "Plantation white sugar drying prior to vibro-screening and bagging",
      "Refined sugar conditioning ahead of bulk silo storage",
    ],
    configurations: [
      {
        name: "VSP-SDC-30",
        capacityRange: "15 – 35 TPH",
        notes: "2,200 mm × 10,000 mm single-drum dryer-cooler.",
      },
      {
        name: "VSP-SDC-60",
        capacityRange: "40 – 75 TPH",
        notes: "2,800 mm × 13,500 mm heavy-duty refinery grade unit.",
      },
    ],
    images: [
      {
        src: "/images/products/sugar-dryer-cooler.svg",
        alt: "Side elevation diagram of rotary cascade sugar dryer and cooler drum",
        caption: "Illustrative technical schematic — VSP-SDC-60 Rotary Sugar Dryer & Cooler",
      },
    ],
    brochure: {
      title: "VSP-SDC-60 Rotary Sugar Dryer & Cooler Spec (Sample)",
      filePath: "/brochures/sample-sugar-dryer-spec.txt",
      fileSizeLabel: "Sample Technical Sheet (TXT)",
      isSampleDocument: true,
    },
    relatedProductSlugs: [
      "high-efficiency-batch-centrifugal-machine",
      "multi-jet-barometric-condenser",
    ],
    isFeatured: false,
    isSampleContent: true,
  },
  {
    id: "prod-07",
    slug: "multi-jet-barometric-condenser",
    modelCode: "VSP-MBC-3000",
    name: "High-Vacuum Multi-Jet Barometric Condenser",
    category: "heating-evaporation",
    categoryLabel: "Juice Heating & Evaporation Plants",
    shortDescription:
      "Self-evacuating multi-jet spray barometric condenser eliminating external vacuum pumps on evaporator and vacuum pan stations.",
    fullDescription:
      "Illustrative sample specification: Built for reliable high-vacuum generation in sugar boiling houses, the VSP-MBC-3000 utilizes calibrated spiral/swirl spray nozzles and a converging-diverging venturi cone to extract both condensable vapor and non-condensable gases simultaneously.",
    features: [
      "Low-pressure-drop injection water manifold with easily inspectable non-clogging nozzles",
      "Eliminates mechanical vacuum pump maintenance on individual pan stations",
      "Available in SS 304 / SS 316L clad or FRP-lined mild steel corrosion-resistant shells",
      "Low approach temperature minimizing injection water circulation requirement",
    ],
    specifications: [
      { parameter: "Vapor Condensing Capacity", value: "5 – 45", unit: "TPH Vapor" },
      { parameter: "Achievable Operating Vacuum", value: "630 – 660", unit: "mmHg" },
      { parameter: "Injection Water Pressure", value: "1.4 – 1.8", unit: "bar(g)" },
      { parameter: "Approach Temperature", value: "3.0 – 5.0", unit: "°C" },
      { parameter: "Shell Material", value: "SS 304 / SS 316L / MS + Epoxy", unit: "Material" },
    ],
    applications: [
      "Final evaporator effect vacuum condensing",
      "Individual batch and continuous vacuum pan stations",
    ],
    configurations: [
      {
        name: "Single-Stage Pan Condenser",
        capacityRange: "5 – 18 TPH Vapor",
        notes: "Direct-mounted barometric leg design.",
      },
      {
        name: "Twin-Cone Evaporator Condenser",
        capacityRange: "20 – 45 TPH Vapor",
        notes: "Dual-zone air evacuation for large quintuple-effect sets.",
      },
    ],
    images: [
      {
        src: "/images/products/barometric-condenser.svg",
        alt: "Vertical schematic of multi-jet barometric spray condenser",
        caption: "Illustrative technical schematic — VSP-MBC-3000 Barometric Condenser",
      },
    ],
    brochure: {
      title: "VSP-MBC-3000 Barometric Condenser Spec Sheet (Sample)",
      filePath: "/brochures/sample-barometric-condenser-spec.txt",
      fileSizeLabel: "Sample Technical Sheet (TXT)",
      isSampleDocument: true,
    },
    relatedProductSlugs: [
      "robert-type-falling-film-evaporator",
      "vertical-continuous-vacuum-pan",
    ],
    isFeatured: false,
    isSampleContent: true,
  },
  {
    id: "prod-08",
    slug: "spent-wash-concentration-evaporator",
    modelCode: "VSP-SWE-800",
    name: "Multi-Effect Distillery Spent Wash Evaporator",
    category: "drying-allied",
    categoryLabel: "Sugar Drying, Handling & Distillery Systems",
    shortDescription:
      "Forced-circulation and falling-film integrated evaporator system engineered to concentrate distillery spent wash up to 55–60% solids for zero liquid discharge.",
    fullDescription:
      "Illustrative sample specification: Engineered specifically for molasses and grain-based ethanol distilleries integrated with sugar complexes, the VSP-SWE-800 handles fouling-prone spent wash streams using high-velocity forced-circulation finisher bodies paired with falling-film pre-concentrators.",
    features: [
      "High tube-side velocity in forced-circulation effects to suppress scaling and fouling",
      "SS 316L and duplex stainless wetted assemblies resistant to chloride/organic acid corrosion",
      "Vapor condensate polishing compatibility for fermentation water recycling",
      "Integrated heat recovery pre-heaters minimizing live steam consumption",
    ],
    specifications: [
      { parameter: "Feed Spent Wash Rate", value: "300 – 1,500", unit: "m³/day" },
      { parameter: "Feed Solids Concentration", value: "8 – 12", unit: "% w/w" },
      { parameter: "Concentrate Outlet Solids", value: "55 – 60", unit: "% w/w (Slope Boiler Grade)" },
      { parameter: "Evaporator Configuration", value: "4-Effect to 6-Effect + Finisher", unit: "Effects" },
      { parameter: "Wetted Metallurgy", value: "SS 316L / UNS S32205 Duplex", unit: "Material" },
    ],
    applications: [
      "Molasses-based distillery zero liquid discharge (ZLD) plants",
      "Concentrated spent wash preparation for incineration slope boilers",
      "Bio-composting concentration trains",
    ],
    configurations: [
      {
        name: "Integrated Distillery Standalone Set",
        capacityRange: "45 – 120 KLPD Ethanol Equiv.",
        notes: "Thermal vapor recompression (TVR) assisted 5-effect skid.",
      },
      {
        name: "Sugar-Integrated Vapor Bled Set",
        capacityRange: "150 – 300 KLPD Ethanol Equiv.",
        notes: "Operates on sugar mill evaporator bleed steam during crushing.",
      },
    ],
    images: [
      {
        src: "/images/products/spent-wash-evaporator.svg",
        alt: "Process diagram of multi-effect distillery spent wash evaporator system",
        caption: "Illustrative technical schematic — VSP-SWE-800 Spent Wash Evaporator",
      },
    ],
    brochure: {
      title: "VSP-SWE-800 Spent Wash Evaporator Spec Sheet (Sample)",
      filePath: "/brochures/sample-spent-wash-evaporator-spec.txt",
      fileSizeLabel: "Sample Technical Sheet (TXT)",
      isSampleDocument: true,
    },
    relatedProductSlugs: [
      "robert-type-falling-film-evaporator",
      "multi-jet-barometric-condenser",
    ],
    isFeatured: true,
    isSampleContent: true,
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategoryId | "all"): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}

export function getRelatedProducts(product: Product): Product[] {
  return product.relatedProductSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((item): item is Product => item !== undefined && item.slug !== product.slug);
}

export function searchAndFilterProducts(params: {
  query?: string;
  category?: string;
}): Product[] {
  const normalizedQuery = (params.query ?? "").trim().toLowerCase();
  const normalizedCategory = (params.category ?? "all").trim();

  return products.filter((product) => {
    const matchesCategory =
      normalizedCategory === "all" ||
      normalizedCategory === "" ||
      product.category === normalizedCategory;

    if (!matchesCategory) return false;
    if (!normalizedQuery) return true;

    const searchableText = [
      product.name,
      product.modelCode,
      product.categoryLabel,
      product.shortDescription,
      product.fullDescription,
      ...product.applications,
      ...product.specifications.map((s) => `${s.parameter} ${s.value}`),
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });
}
