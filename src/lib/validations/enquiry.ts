import { z } from "zod";

export const MAX_SPEC_FILE_BYTES = 10 * 1024 * 1024; // 10 MB

export const ALLOWED_SPEC_EXTENSIONS = [
  ".pdf",
  ".doc",
  ".docx",
  ".dwg",
  ".dxf",
  ".png",
  ".jpg",
  ".jpeg",
] as const;

export const ALLOWED_SPEC_MIME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/acad",
  "application/x-acad",
  "application/dxf",
  "image/vnd.dwg",
  "image/vnd.dxf",
  "image/png",
  "image/jpeg",
  "application/octet-stream",
] as const;

export const enquiryFormSchema = z
  .object({
    enquiryType: z.enum(["general", "rfq"]),
    fullName: z
      .string()
      .trim()
      .min(2, "Please enter your full name (at least 2 characters).")
      .max(100, "Full name must not exceed 100 characters."),
    companyName: z
      .string()
      .trim()
      .min(2, "Please enter your company or plant name.")
      .max(140, "Company name must not exceed 140 characters."),
    designation: z
      .string()
      .trim()
      .max(100, "Designation must not exceed 100 characters.")
      .optional()
      .or(z.literal("")),
    email: z
      .string()
      .trim()
      .email("Please enter a valid corporate email address.")
      .max(150, "Email address is too long."),
    phone: z
      .string()
      .trim()
      .min(7, "Please enter a valid contact phone number (at least 7 digits).")
      .max(30, "Phone number must not exceed 30 characters.")
      .regex(/^[+\d\s().-]+$/, "Phone number contains unsupported characters."),
    country: z
      .string()
      .trim()
      .min(2, "Please specify your plant location or country.")
      .max(80, "Country name is too long."),
    productSlug: z.string().trim().optional().or(z.literal("")),
    capacityRequirement: z
      .string()
      .trim()
      .max(120, "Capacity requirement must not exceed 120 characters.")
      .optional()
      .or(z.literal("")),
    projectTimeline: z
      .string()
      .trim()
      .max(100, "Project timeline must not exceed 100 characters.")
      .optional()
      .or(z.literal("")),
    message: z
      .string()
      .trim()
      .min(15, "Please provide technical scope or enquiry details (at least 15 characters).")
      .max(3000, "Message must not exceed 3,000 characters."),
    honeypot: z.string().max(0, "Invalid submission.").optional().or(z.literal("")),
  })
  .superRefine((data, ctx) => {
    if (data.enquiryType === "rfq" && !data.productSlug) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["productSlug"],
        message: "Please select an equipment category or 'Custom Process System' for an RFQ.",
      });
    }
  });

export type EnquiryFormValues = z.infer<typeof enquiryFormSchema>;

export interface FileValidationResult {
  valid: boolean;
  error?: string;
  extension?: string;
}

export function getFileExtension(fileName: string): string {
  const lastDot = fileName.lastIndexOf(".");
  if (lastDot === -1) return "";
  return fileName.slice(lastDot).toLowerCase();
}

export function validateSpecificationFile(file: {
  name: string;
  size: number;
  type?: string;
}): FileValidationResult {
  if (!file || !file.name) {
    return { valid: false, error: "Uploaded file is missing a filename." };
  }

  const extension = getFileExtension(file.name);
  if (!ALLOWED_SPEC_EXTENSIONS.includes(extension as (typeof ALLOWED_SPEC_EXTENSIONS)[number])) {
    return {
      valid: false,
      error: `Unsupported file format (${extension || "unknown"}). Accepted formats: ${ALLOWED_SPEC_EXTENSIONS.join(", ")}.`,
    };
  }

  if (file.size <= 0) {
    return { valid: false, error: "Uploaded specification file cannot be empty." };
  }

  if (file.size > MAX_SPEC_FILE_BYTES) {
    return {
      valid: false,
      error: "File exceeds the 10 MB maximum attachment limit.",
    };
  }

  if (
    file.type &&
    file.type !== "" &&
    !ALLOWED_SPEC_MIME_TYPES.includes(file.type as (typeof ALLOWED_SPEC_MIME_TYPES)[number])
  ) {
    return {
      valid: false,
      error: `Unsupported file MIME type (${file.type}). Please upload PDF, DOC/DOCX, DWG/DXF, PNG, or JPG.`,
    };
  }

  return { valid: true, extension };
}

export function sanitizePlainText(input: string): string {
  return input.replace(/[\u0000-\u0008\u000B-\u000C\u000E-\u001F\u007F]/g, "").trim();
}
