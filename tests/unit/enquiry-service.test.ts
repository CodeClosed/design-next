import { describe, expect, it } from "vitest";
import { submitEnquiry } from "@/lib/services/enquiry";
import type { EmailProvider } from "@/lib/services/email";

describe("Enquiry Submission Service", () => {
  const validFields = {
    enquiryType: "rfq",
    fullName: "Anita Deshmukh",
    companyName: "Sahyadri Sugar Works",
    email: "anita@example.com",
    phone: "+91 20 2555 0100",
    country: "India",
    productSlug: "robert-type-falling-film-evaporator",
    message: "Please provide budgetary quote for 3,500 m2 falling film evaporator.",
    honeypot: "",
  };

  it("logs enquiry cleanly in development preview mode when no external provider is set", async () => {
    const result = await submitEnquiry({
      fields: validFields,
      attachment: {
        name: "steam-balance.pdf",
        size: 4096,
        type: "application/pdf",
      },
    });

    expect(result.status).toBe(200);
    expect(result.body.success).toBe(true);
    expect(result.body.deliveryMode).toBe("development_preview");
    expect(result.body.referenceId).toMatch(/^ENQ-\d{8}-[A-Z0-9]{4}$/);
    expect(result.body.attachmentSummary?.fileName).toBe("steam-balance.pdf");
  });

  it("rejects unsupported attachment formats server-side", async () => {
    const result = await submitEnquiry({
      fields: validFields,
      attachment: {
        name: "malicious.sh",
        size: 128,
        type: "text/x-shellscript",
      },
    });

    expect(result.status).toBe(400);
    expect(result.body.success).toBe(false);
    expect(result.body.fieldErrors?.attachment).toBeDefined();
  });

  it("reports external provider failures transparently without faking success", async () => {
    const failingProvider: EmailProvider = {
      name: "failing-provider",
      async send() {
        throw new Error("SMTP connection refused");
      },
    };

    const result = await submitEnquiry({ fields: validFields }, failingProvider);
    expect(result.status).toBe(503);
    expect(result.body.success).toBe(false);
    expect(result.body.message).toContain("SMTP connection refused");
  });
});
