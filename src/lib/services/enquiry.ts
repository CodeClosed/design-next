import {
  enquiryFormSchema,
  sanitizePlainText,
  validateSpecificationFile,
  type EnquiryFormValues,
} from "@/lib/validations/enquiry";
import {
  resolveEmailProvider,
  type EmailAttachmentSummary,
  type EmailProvider,
} from "@/lib/services/email";
import { formatEnquiryReference } from "@/lib/utils";
import type { EnquiryResponse } from "@/types/content";

export interface RawEnquiryInput {
  fields: Record<string, unknown>;
  attachment?: {
    name: string;
    size: number;
    type?: string;
  } | null;
}

export async function submitEnquiry(
  input: RawEnquiryInput,
  providerOverride?: EmailProvider
): Promise<{ status: number; body: EnquiryResponse }> {
  const sanitizedFields: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(input.fields)) {
    sanitizedFields[key] = typeof value === "string" ? sanitizePlainText(value) : value;
  }

  const parsed = enquiryFormSchema.safeParse(sanitizedFields);
  if (!parsed.success) {
    const flattened = parsed.error.flatten().fieldErrors;
    return {
      status: 400,
      body: {
        success: false,
        message: "Please review the highlighted fields before submitting.",
        fieldErrors: flattened as Record<string, string[]>,
      },
    };
  }

  const validData: EnquiryFormValues = parsed.data;

  // Reject automated honeypot submissions
  if (validData.honeypot && validData.honeypot.length > 0) {
    return {
      status: 400,
      body: {
        success: false,
        message: "Submission failed anti-spam verification.",
      },
    };
  }

  let attachmentSummary: EmailAttachmentSummary | undefined;
  if (input.attachment && input.attachment.name) {
    const fileCheck = validateSpecificationFile(input.attachment);
    if (!fileCheck.valid) {
      return {
        status: 400,
        body: {
          success: false,
          message: fileCheck.error ?? "Invalid specification attachment.",
          fieldErrors: {
            attachment: [fileCheck.error ?? "Invalid specification attachment."],
          },
        },
      };
    }

    attachmentSummary = {
      fileName: sanitizePlainText(input.attachment.name),
      sizeBytes: input.attachment.size,
      mimeType: input.attachment.type || "application/octet-stream",
    };
  }

  const referenceId = formatEnquiryReference();
  const provider = providerOverride ?? resolveEmailProvider();

  try {
    const dispatchResult = await provider.send({
      referenceId,
      submittedAtIso: new Date().toISOString(),
      enquiry: validData,
      attachment: attachmentSummary,
    });

    return {
      status: 200,
      body: {
        success: true,
        referenceId,
        deliveryMode: dispatchResult.deliveryMode,
        providerName: dispatchResult.providerName,
        message: dispatchResult.message,
        attachmentSummary,
      },
    };
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Email delivery integration unavailable.";
    return {
      status: 503,
      body: {
        success: false,
        referenceId,
        message: `Enquiry validation passed (Ref: ${referenceId}), but external email integration failed: ${errorMessage}`,
      },
    };
  }
}
