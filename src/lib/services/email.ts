import type { EnquiryFormValues } from "@/lib/validations/enquiry";

export interface EmailAttachmentSummary {
  fileName: string;
  sizeBytes: number;
  mimeType: string;
}

export interface EnquiryDispatchPayload {
  referenceId: string;
  submittedAtIso: string;
  enquiry: EnquiryFormValues;
  attachment?: EmailAttachmentSummary;
}

export interface EmailDispatchResult {
  delivered: boolean;
  deliveryMode: "development_preview" | "configured_provider";
  providerName: string;
  message: string;
}

export interface EmailProvider {
  readonly name: string;
  send(payload: EnquiryDispatchPayload): Promise<EmailDispatchResult>;
}

/**
 * Transparent local/development email provider used when external SMTP or Resend
 * credentials are intentionally absent in starter template deployments.
 */
export class MockPreviewEmailProvider implements EmailProvider {
  readonly name = "development-preview-log";

  async send(payload: EnquiryDispatchPayload): Promise<EmailDispatchResult> {
    if (process.env.NODE_ENV !== "test") {
      console.info(
        `[Enquiry Development Preview] Ref=${payload.referenceId} Type=${payload.enquiry.enquiryType} Company="${payload.enquiry.companyName}"`
      );
    }

    return {
      delivered: true,
      deliveryMode: "development_preview",
      providerName: this.name,
      message:
        "Enquiry validated and logged in development preview mode. No external email was transmitted because EMAIL_PROVIDER is set to mock/unconfigured.",
    };
  }
}

export class ResendEmailProvider implements EmailProvider {
  readonly name = "resend";

  async send(payload: EnquiryDispatchPayload): Promise<EmailDispatchResult> {
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.EMAIL_FROM;
    const to = process.env.EMAIL_TO_SALES;

    if (!apiKey || !from || !to) {
      throw new Error(
        "Resend provider selected, but RESEND_API_KEY, EMAIL_FROM, or EMAIL_TO_SALES is missing."
      );
    }

    const subjectPrefix = payload.enquiry.enquiryType === "rfq" ? "[RFQ]" : "[Enquiry]";
    const subject = `${subjectPrefix} ${payload.referenceId} — ${payload.enquiry.companyName}`;

    const textBody = [
      `Reference: ${payload.referenceId}`,
      `Type: ${payload.enquiry.enquiryType.toUpperCase()}`,
      `Name: ${payload.enquiry.fullName}`,
      `Company: ${payload.enquiry.companyName}`,
      `Designation: ${payload.enquiry.designation || "N/A"}`,
      `Email: ${payload.enquiry.email}`,
      `Phone: ${payload.enquiry.phone}`,
      `Country: ${payload.enquiry.country}`,
      `Selected Equipment: ${payload.enquiry.productSlug || "General"}`,
      `Capacity Requirement: ${payload.enquiry.capacityRequirement || "N/A"}`,
      `Project Timeline: ${payload.enquiry.projectTimeline || "N/A"}`,
      `Attachment: ${payload.attachment ? `${payload.attachment.fileName} (${payload.attachment.sizeBytes} bytes)` : "None"}`,
      "",
      "Message:",
      payload.enquiry.message,
    ].join("\n");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: payload.enquiry.email,
        subject,
        text: textBody,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Resend API error (${response.status}): ${errorText}`);
    }

    return {
      delivered: true,
      deliveryMode: "configured_provider",
      providerName: this.name,
      message: "Your enquiry has been transmitted to the engineering sales desk.",
    };
  }
}

export class SmtpEmailProvider implements EmailProvider {
  readonly name = "smtp";

  async send(): Promise<EmailDispatchResult> {
    const host = process.env.SMTP_HOST;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !user || !pass) {
      throw new Error(
        "SMTP provider selected, but SMTP_HOST, SMTP_USER, or SMTP_PASS is missing."
      );
    }

    throw new Error(
      "SMTP transport adapter requires installing nodemailer and wiring credentials in src/lib/services/email.ts."
    );
  }
}

export function resolveEmailProvider(): EmailProvider {
  const configured = (process.env.EMAIL_PROVIDER ?? "mock").trim().toLowerCase();

  switch (configured) {
    case "resend":
      return new ResendEmailProvider();
    case "smtp":
      return new SmtpEmailProvider();
    case "mock":
    case "":
    default:
      return new MockPreviewEmailProvider();
  }
}
