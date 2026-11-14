import type { IndustrySolution } from "@/types/content";

export const industries: IndustrySolution[] = [
  {
    id: "ind-01",
    slug: "sugar-manufacturing",
    title: "Cane Sugar Manufacturing",
    headline: "Front-End Cane Handling, Fiber Preparation & High-Extraction Milling",
    summary:
      "Illustrative equipment solutions supporting greenfield crushing lines and existing mill capacity expansions from 1,250 to 12,000+ TCD.",
    description:
      "Primary cane sugar manufacturing demands relentless mechanical reliability across continuous crushing seasons. Our starter catalogue models heavy-duty cane preparation shredders, 4-roller underfeed milling units, and robust drive-interface assemblies built to maximize pol extraction and reduce bagasse moisture for captive boiler fuel.",
    processChallenges: [
      "High-fiber cane varieties causing mill choking and inconsistent feed blankets",
      "Bearing housing wear and shaft fatigue under fluctuating hydraulic crushing loads",
      "Tight off-season maintenance windows demanding standardized spare-part interchangeability",
    ],
    equipmentSolutions: [
      "Swing-hammer cane fibrizers targeting >90% preparation index",
      "4-roller mills with forced pressure feeders and hydraulic cap loading",
      "Heavy cast-steel / fabricated steel headstocks and replacement mill roller assemblies",
    ],
    applications: [
      "Greenfield sugar mill crushing tandems",
      "Mill capacity debottlenecking & 3-to-4 roller conversions",
      "Seasonal mill roller re-shelling and shaft replacement",
    ],
    relatedProductSlugs: [
      "heavy-duty-cane-milling-tandem",
      "rotary-cane-fibrizer-shredder",
    ],
    isSampleContent: true,
  },
  {
    id: "ind-02",
    slug: "sugar-processing",
    title: "Sugar Boiling House & Processing",
    headline: "Energy-Efficient Juice Heating, Evaporation & Continuous Crystallization",
    summary:
      "Illustrative thermal and crystallization machinery tailored for cogeneration-integrated plants minimizing process steam % cane.",
    description:
      "Modern sugar factories increasingly export surplus cogeneration power to the grid, requiring boiling house vessels that run stably on low-pressure bled vapors. This illustrative solution set covers tubular falling film evaporators, continuous vacuum pans, and high-vacuum condensers.",
    processChallenges: [
      "High color formation and sucrose inversion in high-retention legacy evaporators",
      "Peak boiler steam swings caused by discontinuous batch vacuum pan strikes",
      "Condensate contamination and entrainment carryover across evaporator effects",
    ],
    equipmentSolutions: [
      "Falling film evaporator bodies with rapid <90-second residence time",
      "Multi-chamber vertical continuous vacuum pans operating on 2nd/3rd vapor bleeds",
      "High-efficiency centrifugal entrainment separators and multi-jet condensers",
    ],
    applications: [
      "Quintuple-effect evaporation stations with cogeneration vapor bleeding",
      "A, B, and C massecuite continuous boiling stations",
      "Condensate heat recovery and barometric condensing retrofits",
    ],
    relatedProductSlugs: [
      "robert-type-falling-film-evaporator",
      "vertical-continuous-vacuum-pan",
      "multi-jet-barometric-condenser",
    ],
    isSampleContent: true,
  },
  {
    id: "ind-03",
    slug: "sugar-refining",
    title: "Sugar Refining & Conditioning",
    headline: "High-Purity Stainless Processing, Centrifugal Purging & Crystal Drying",
    summary:
      "Illustrative stainless-steel refining vessels, high-G automatic centrifugals, and rotary sugar dryer-coolers for ICUMSA-compliant output.",
    description:
      "Refining raw cane sugar into high-purity white crystals requires strict metallurgy control, consistent crystal size distribution, and gentle moisture extraction. Our sample refining portfolio covers regenerative batch centrifugal machines and SS 304 rotary cascade dryer-cooler systems.",
    processChallenges: [
      "Iron contamination or crystal discoloration from mild-steel contact surfaces",
      "High centrifugal cycle power demand and inconsistent wash-water distribution",
      "Sugar caking in bulk silos caused by elevated bagging temperatures or residual moisture",
    ],
    equipmentSolutions: [
      "PLC-automated high-G batch centrifugals with regenerative VFD drives",
      "All-stainless-steel contact rotary cascade dryer-coolers achieving <0.04% moisture",
      "Integrated wet scrubber dust collection and sugar recovery loops",
    ],
    applications: [
      "Backend plantation white sugar and stand-alone raw sugar refineries",
      "Bulk silo conditioning lines and export bagging stations",
    ],
    relatedProductSlugs: [
      "high-efficiency-batch-centrifugal-machine",
      "rotary-cascade-sugar-dryer-cooler",
      "vertical-continuous-vacuum-pan",
    ],
    isSampleContent: true,
  },
  {
    id: "ind-04",
    slug: "distillery-allied",
    title: "Distillery & Allied Process Systems",
    headline: "Zero-Liquid-Discharge Concentration & Co-Product Process Vessels",
    summary:
      "Illustrative multi-effect evaporation and heat-exchange systems for molasses/grain distilleries integrated with sugar mills.",
    description:
      "Integrated sugar-ethanol complexes require corrosion-resistant evaporation equipment capable of handling high-fouling distillery spent wash streams. Our sample allied engineering scope features forced-circulation and falling-film ZLD evaporator trains built in SS 316L and duplex grades.",
    processChallenges: [
      "Severe chloride and organic acid corrosion on wetted evaporator surfaces",
      "Rapid tube scaling at high solids concentrations (45–60% w/w)",
      "Balancing thermal integration between seasonal sugar crushing and year-round ethanol production",
    ],
    equipmentSolutions: [
      "Multi-effect spent wash concentration evaporators with forced-circulation finishers",
      "Dual-mode steam/vapor integration skids compatible with mill bleed or live steam",
      "Heavy-duty barometric spray condensers and shell-and-tube condensate coolers",
    ],
    applications: [
      "Molasses and grain ethanol distillery zero-liquid-discharge (ZLD) plants",
      "Slope-fired incineration boiler fuel concentration stations",
      "Allied chemical and bio-energy evaporation packages",
    ],
    relatedProductSlugs: [
      "spent-wash-concentration-evaporator",
      "multi-jet-barometric-condenser",
    ],
    isSampleContent: true,
  },
];

export function getAllIndustries(): IndustrySolution[] {
  return industries;
}

export function getIndustryBySlug(slug: string): IndustrySolution | undefined {
  return industries.find((ind) => ind.slug === slug);
}
