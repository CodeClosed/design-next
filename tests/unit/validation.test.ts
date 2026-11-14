import { describe, expect, it } from "vitest";
import {
  enquiryFormSchema,
  MAX_SPEC_FILE_BYTES,
  validateSpecificationFile,
} from "@/lib/validations/enquiry";

describe("Enquiry & File Validation Schemas", () => {
  const validRfqPayload = {
    enquiryType: "rfq" as const,
    fullName: "Rajesh Kulkarni",
    companyName: "Deccan Process Mills Ltd.",
    designation: "Chief Engineer",
    email: "r.kulkarni@example.com",
    phone: "+91 98220 12345",
    country: "India",
    productSlug: "heavy-duty-cane-milling-tandem",
    capacityRequirement: "5000 TCD",
    projectTimeline: "Q3 2027",
    message: "Requesting GA drawing and budgetary quotation for 4-roller mill unit.",
    honeypot: "",
  };

  it("accepts a valid RFQ submission payload", () => {
    const parsed = enquiryFormSchema.safeParse(validRfqPayload);
    expect(parsed.success).toBe(true);
  });

  it("accepts a general enquiry without product selection", () => {
    const parsed = enquiryFormSchema.safeParse({
      ...validRfqPayload,
      enquiryType: "general",
      productSlug: "",
    });
    expect(parsed.success).toBe(true);
  });

  it("rejects an RFQ submission when productSlug is missing", () => {
    const parsed = enquiryFormSchema.safeParse({
      ...validRfqPayload,
      productSlug: "",
    });
    expect(parsed.success).toBe(false);
  });

  it("rejects invalid emails and non-empty honeypot fields", () => {
    const invalidEmail = enquiryFormSchema.safeParse({
      ...validRfqPayload,
      email: "invalid-email",
    });
    expect(invalidEmail.success).toBe(false);

    const botSubmission = enquiryFormSchema.safeParse({
      ...validRfqPayload,
      honeypot: "http://spam.example",
    });
    expect(botSubmission.success).toBe(false);
  });

  it("validates allowed specification file formats and enforces 10 MB limit", () => {
    expect(
      validateSpecificationFile({
        name: "mill-layout.pdf",
        size: 1024 * 450,
        type: "application/pdf",
      }).valid
    ).toBe(true);

    expect(
      validateSpecificationFile({
        name: "plant-drawing.dwg",
        size: 1024 * 800,
        type: "application/octet-stream",
      }).valid
    ).toBe(true);

    expect(
      validateSpecificationFile({
        name: "payload.exe",
        size: 2048,
        type: "application/x-msdownload",
      }).valid
    ).toBe(false);

    expect(
      validateSpecificationFile({
        name: "oversized.pdf",
        size: MAX_SPEC_FILE_BYTES + 1,
        type: "application/pdf",
      }).valid
    ).toBe(false);
  });
});
