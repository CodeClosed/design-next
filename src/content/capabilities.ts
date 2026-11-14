import type { CapabilityItem } from "@/types/content";

export const capabilities: CapabilityItem[] = [
  {
    id: "cap-01",
    stepNumber: "01",
    title: "Process Engineering & Mechanical Design",
    summary:
      "Thermal mass-energy balances, pressure vessel mechanical sizing, and 3D CAD equipment detailing.",
    details:
      "Every vessel and rotating machine starts with verified heat-transfer, torque, and structural stress calculations. General arrangement (GA) drawings and nozzle orientation schedules are issued for client engineering approval before shop-floor plate cutting begins.",
    highlights: [
      "Evaporator and vacuum pan thermal surface and vapor velocity sizing",
      "Mill headstock, roller shaft, and pinion torsional stress analysis",
      "Detailed fabrication drawings, bill of materials (BOM), and civil load data",
    ],
    equipmentOrTools: [
      "3D CAD & Finite Element Modeling [Template Capability]",
      "Thermal Balance & Piping Layout Engineering",
      "ASME / IS Vessel Sizing Reference Workflows",
    ],
  },
  {
    id: "cap-02",
    stepNumber: "02",
    title: "Heavy Plate Fabrication & Forming",
    summary:
      "CNC plasma/oxy-fuel plate cutting, heavy plate rolling, dished-end fit-up, and submerged arc welding.",
    details:
      "Shells, vapor chambers, calandrias, and mill headstocks are fabricated in segregated carbon steel and stainless steel bays to prevent cross-contamination. Critical weldments undergo controlled pre-heating and stress-relieving sequences.",
    highlights: [
      "Segregated carbon steel and SS 304 / SS 316L fabrication zones",
      "Automated submerged arc welding (SAW) for longitudinal & circumferential shell seams",
      "Precision tube-sheet drilling and multi-pass tube expansion",
    ],
    equipmentOrTools: [
      "Heavy 3-Roll / 4-Roll Plate Bending Machines",
      "CNC Profile Cutting & Submerged Arc Welding Booms",
      "Multi-Spindle Tube Sheet Drilling Systems",
    ],
  },
  {
    id: "cap-03",
    stepNumber: "03",
    title: "Precision Heavy Machining",
    summary:
      "Large-diameter turning, horizontal boring, keyway milling, and flange facing for heavy rotating assemblies.",
    details:
      "Milling roller shafts, centrifugal baskets, dryer riding rings, and bearing housings require tight concentricity tolerances. Heavy machining cells finish mating faces after structural stress relief to preserve dimensional stability.",
    highlights: [
      "Shrink-fit shaft turning and grooving for cane mill rollers",
      "CNC horizontal boring for split bearing housings and gear frames",
      "Precision facing of large-diameter pressure vessel and calandria flanges",
    ],
    equipmentOrTools: [
      "Heavy-Duty Horizontal Boring & Milling Machines",
      "Large-Swing Vertical Turret Lathes (VTL)",
      "Long-Bed Heavy Centre Lathes",
    ],
  },
  {
    id: "cap-04",
    stepNumber: "04",
    title: "Trial Shop Assembly & Mechanical Run-In",
    summary:
      "Dry-fit trial erection of multi-part equipment, rotor balancing, and hydraulic actuation checks prior to dispatch.",
    details:
      "Before crating or loading onto trailers, rotating units and modular internals undergo full shop trial assembly. Match-marking of flanged sections accelerates on-site fit-up during constrained mill shutdown periods.",
    highlights: [
      "Dynamic two-plane balancing of fibrizer rotors and centrifugal baskets",
      "Dry-fit alignment of mill top caps, side caps, and scrapers",
      "Match-marked sectional internals for modular field erection",
    ],
    equipmentOrTools: [
      "Dynamic Rotor Balancing Stand",
      "Overhead EOT Crane Trial Assembly Bay",
      "Hydraulic Power Pack & Manifold Test Rig",
    ],
  },
  {
    id: "cap-05",
    stepNumber: "05",
    title: "Quality Inspection & Non-Destructive Testing",
    summary:
      "Stage-wise dimensional audits, hydro-static pressure testing, dye-penetrant checks, and MTC correlation.",
    details:
      "Quality checkpoints verify raw material mill test certificates (MTCs) upon receipt, weld joint integrity during fabrication, and final hydrostatic tightness before surface treatment and dispatch.",
    highlights: [
      "100% Positive Material Identification (PMI) checks on stainless alloys [Target Protocol]",
      "Ultrasonic (UT) testing on forged shafts and Radiographic (RT) inspection on butt welds",
      "Witnessed hydrostatic and vacuum leak testing prior to shipment",
    ],
    equipmentOrTools: [
      "Hydrostatic & Pneumatic Test Manifolds",
      "Ultrasonic & Dye-Penetrant Inspection Kits",
      "Calibrated Laser & Bore Dimensional Gauges",
    ],
  },
  {
    id: "cap-06",
    stepNumber: "06",
    title: "Site Erection Support & Commissioning",
    summary:
      "Field alignment supervision, civil pedestal verification, trial crushing runs, and operator handover.",
    details:
      "Engineering field supervisors coordinate with plant erection contractors to verify foundation elevation, shaft leveling, and hot-alignment checks during steam trials and initial cane crushing.",
    highlights: [
      "Pre-erection civil foundation and anchor-bolt verification checklists",
      "Supervision of vessel rigging, calandria expansion, and shaft alignment",
      "No-load trial run, steam leak check, and initial season performance handover",
    ],
    equipmentOrTools: [
      "Optical / Laser Shaft Alignment Instruments",
      "Commissioning Checklists & Trial Run Protocols",
    ],
  },
  {
    id: "cap-07",
    stepNumber: "07",
    title: "After-Sales Spares & Off-Season Retrofits",
    summary:
      "OEM replacement wear parts, mill roller re-shelling, tube bundle replacements, and off-season maintenance audits.",
    details:
      "Continuous availability of calibrated spares keeps seasonal crushing uninterrupted. Standard wear components—from fibrizer hammers and mill brasses to centrifugal screens—are documented by serial number for repeatable supply.",
    highlights: [
      "Serialized spare-parts traceability for rapid off-season ordering",
      "Emergency breakdown support during active crushing campaigns",
      "Off-season inspection and refurbishment of old evaporator tubes and mill units",
    ],
    equipmentOrTools: [
      "Serialized Spare Parts Catalogue",
      "Off-Season Health Audit & Retrofit Engineering",
    ],
  },
];
