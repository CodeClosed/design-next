export type ProductCategoryId =
  | "cane-milling"
  | "heating-evaporation"
  | "crystallization-centrifugals"
  | "drying-allied";

export interface ProductCategory {
  id: ProductCategoryId;
  name: string;
  shortName: string;
  description: string;
}

export interface ProductSpecification {
  parameter: string;
  value: string;
  unit?: string;
}

export interface ProductConfiguration {
  name: string;
  capacityRange: string;
  notes: string;
}

export interface Product {
  id: string;
  slug: string;
  modelCode: string;
  name: string;
  category: ProductCategoryId;
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  specifications: ProductSpecification[];
  applications: string[];
  configurations: ProductConfiguration[];
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  brochure: {
    title: string;
    filePath: string;
    fileSizeLabel: string;
    isSampleDocument: boolean;
  };
  relatedProductSlugs: string[];
  isFeatured?: boolean;
  isSampleContent: true;
}

export interface ProjectCaseStudy {
  id: string;
  slug: string;
  title: string;
  clientLabel: string;
  industry: string;
  industrySlug: string;
  location: string;
  completionPeriod: string;
  plantCapacity: string;
  scope: string[];
  summary: string;
  description: string;
  equipmentSupplied: string[];
  relatedProductSlugs: string[];
  engineeringHighlights: string[];
  images: {
    src: string;
    alt: string;
    caption: string;
  }[];
  isFeatured?: boolean;
  isSampleProject: true;
}

export interface IndustrySolution {
  id: string;
  slug: string;
  title: string;
  headline: string;
  summary: string;
  description: string;
  processChallenges: string[];
  equipmentSolutions: string[];
  applications: string[];
  relatedProductSlugs: string[];
  isSampleContent: true;
}

export interface CapabilityItem {
  id: string;
  stepNumber: string;
  title: string;
  summary: string;
  details: string;
  highlights: string[];
  equipmentOrTools: string[];
}

export interface QualityProcessStep {
  id: string;
  stage: string;
  title: string;
  description: string;
  recordsGenerated: string[];
}

export interface ResourceDocument {
  id: string;
  title: string;
  category: "Brochure" | "Technical Catalogue" | "Company Profile" | "Compliance Template";
  description: string;
  filePath: string;
  fileFormat: string;
  fileSize: string;
  isSampleDocument: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface StatisticItem {
  id: string;
  value: string;
  label: string;
  note: string;
  isSamplePlaceholder: true;
}

export interface MilestoneItem {
  period: string;
  title: string;
  description: string;
}

export interface LeadershipMember {
  name: string;
  role: string;
  department: string;
  bio: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  authorLabel: string;
  organizationLabel: string;
  projectScope: string;
  isSamplePlaceholder: true;
}

export interface CompanyProfile {
  name: string;
  shortName: string;
  legalName: string;
  tagline: string;
  description: string;
  templateNotice: string;
  isSampleBrand: true;
  contact: {
    salesEmail: string;
    supportEmail: string;
    phone: string;
    secondaryPhone: string;
    whatsappNumber: string;
    whatsappMessage: string;
    businessHours: string;
  };
  addresses: {
    corporateOffice: {
      label: string;
      lines: string[];
      coordinatesPlaceholder: string;
    };
    manufacturingWorks: {
      label: string;
      lines: string[];
      shopFloorAreaPlaceholder: string;
    };
  };
  socialLinks: {
    linkedin: string;
    youtube: string;
  };
  statistics: StatisticItem[];
  vision: string;
  mission: string;
  coreValues: { title: string; description: string }[];
  manufacturingPhilosophy: string;
  infrastructureSummary: string[];
  milestones: MilestoneItem[];
  leadership: LeadershipMember[];
  testimonials: TestimonialItem[];
}

export type EnquiryType = "general" | "rfq";

export interface EnquirySubmissionPayload {
  enquiryType: EnquiryType;
  fullName: string;
  companyName: string;
  designation?: string;
  email: string;
  phone: string;
  country: string;
  productSlug?: string;
  capacityRequirement?: string;
  projectTimeline?: string;
  message: string;
  honeypot?: string;
}

export interface EnquiryResponse {
  success: boolean;
  referenceId?: string;
  deliveryMode?: "development_preview" | "configured_provider";
  providerName?: string;
  message: string;
  attachmentSummary?: {
    fileName: string;
    sizeBytes: number;
    mimeType: string;
  };
  fieldErrors?: Record<string, string[]>;
}
