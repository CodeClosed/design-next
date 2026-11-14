import type { QualityProcessStep } from "@/types/content";

export const qualityPolicy = {
  headline: "Documented Quality Assurance & Traceable Inspection",
  intro:
    "In continuous sugar processing, unscheduled mid-season downtime carries severe agricultural and financial penalties. Our template quality framework structures inspection around verifiable engineering records rather than generic marketing claims.",
  certificationNotice:
    "Template Verification Notice: This starter website intentionally makes NO unverified claims of ISO 9001, ASME U-Stamp, PED, or IBR certification. Update this section strictly with active, audited certificate numbers and issuing bodies held by the target company.",
  standardsPolicy: [
    {
      title: "Material Traceability & Receiving Inspection",
      description:
        "Incoming plates, seamless/welded tubes, and alloy steel forgings are correlated against vendor Mill Test Certificates (MTCs) and heat numbers prior to cutting.",
    },
    {
      title: "Qualified Welding Procedures",
      description:
        "Structural and pressure-retaining seams follow documented Welding Procedure Specifications (WPS) with stage-wise root, visual, and NDT checks appropriate to vessel service.",
    },
    {
      title: "Pressure & Vacuum Integrity Verification",
      description:
        "Calandrias, steam jackets, and shell vessels undergo witnessed hydrostatic testing against approved General Arrangement (GA) test pressures before dispatch.",
    },
    {
      title: "Safety & Environmental Housekeeping",
      description:
        "Segregated stainless steel pickling/passivation workflows, calibrated lifting tackles, and documented rigging checklists protect both equipment metallurgy and personnel.",
    },
  ],
  inspectionSteps: [
    {
      id: "qa-01",
      stage: "Stage 01",
      title: "Raw Material Verification",
      description:
        "Heat-number correlation, plate thickness ultrasonic checks, and chemical verification on stainless steel tubes and forged alloy shafts.",
      recordsGenerated: ["Incoming Material Inspection Report", "Heat-Number Mapping Sheet"],
    },
    {
      id: "qa-02",
      stage: "Stage 02",
      title: "Fit-Up & Weld Seam Inspection",
      description:
        "Edge preparation verification, root-run visual audit, and Dye Penetrant (DPT) / Radiographic Testing (RT) on pressure joints.",
      recordsGenerated: ["Weld Map & Fit-Up Sign-Off", "NDT Examination Report"],
    },
    {
      id: "qa-03",
      stage: "Stage 03",
      title: "Machining & Dynamic Balancing",
      description:
        "Bore concentricity, bearing seat tolerance, flange flatness, and ISO rotor balancing validation prior to assembly.",
      recordsGenerated: ["Dimensional Inspection Sheet", "Dynamic Balancing Certificate"],
    },
    {
      id: "qa-04",
      stage: "Stage 04",
      title: "Hydrostatic & Trial Assembly Testing",
      description:
        "Calibrated pressure gauge hold tests on calandrias/shells and dry-fit alignment of mating housings.",
      recordsGenerated: ["Hydro-Test Witness Certificate", "Trial Assembly Checklist"],
    },
    {
      id: "qa-05",
      stage: "Stage 05",
      title: "Surface Protection & Dispatch Clearance",
      description:
        "Blast cleaning, industrial epoxy/zinc primer Dry Film Thickness (DFT) checks, stainless passivation, and final packing list audit.",
      recordsGenerated: ["Surface Coating DFT Log", "Final Quality Dossier & Packing List"],
    },
  ] as QualityProcessStep[],
};
