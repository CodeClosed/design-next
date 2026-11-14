import { AlertCircle, CheckCircle2, Info } from "lucide-react";
import type { EnquiryResponse } from "@/types/content";

export function FormStatusAlert({
  response,
}: {
  response: EnquiryResponse | null;
}) {
  if (!response) return null;

  if (!response.success) {
    return (
      <div
        role="alert"
        className="rounded-sm border border-[#D98282] bg-[#FFF5F5] p-4 text-sm text-[#7D1D1D]"
      >
        <div className="flex items-start gap-3">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <div>
            <p className="font-bold">Enquiry Submission Error</p>
            <p className="mt-1">{response.message}</p>
          </div>
        </div>
      </div>
    );
  }

  const isPreviewMode = response.deliveryMode === "development_preview";

  return (
    <div
      role="status"
      aria-live="polite"
      className="rounded-sm border border-[#2D6A4F] bg-[#F2FBF6] p-5 text-sm text-[#143D2B]"
    >
      <div className="flex items-start gap-3">
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#2D6A4F]" aria-hidden="true" />
        <div className="space-y-2">
          <p className="text-base font-bold text-[#142B3A]">
            {isPreviewMode
              ? "Enquiry Recorded (Development Preview Mode)"
              : "Enquiry Submitted Successfully"}
          </p>
          <p>{response.message}</p>

          {response.referenceId ? (
            <p className="font-mono-tech inline-block rounded-sm bg-white px-3 py-1 text-xs font-semibold text-[#142B3A] border border-[#C6D4DE]">
              Reference ID: {response.referenceId}
            </p>
          ) : null}

          {response.attachmentSummary ? (
            <p className="text-xs text-[#202A30]">
              Validated Attachment: <strong>{response.attachmentSummary.fileName}</strong> (
              {Math.max(1, Math.round(response.attachmentSummary.sizeBytes / 1024))} KB)
            </p>
          ) : null}

          {isPreviewMode ? (
            <p className="flex items-start gap-2 rounded-sm border border-dashed border-[#D99A36] bg-[#FFF9EE] p-3 text-xs text-[#5C3B07]">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#B87D1E]" aria-hidden="true" />
              <span>
                To transmit live notification emails in production, configure{" "}
                <code>EMAIL_PROVIDER=resend</code> or <code>smtp</code> along with credentials in{" "}
                <code>.env.local</code>.
              </span>
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
