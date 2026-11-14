import { FileText, PhoneCall } from "lucide-react";
import { companyProfile } from "@/content/company";
import { PageContainer } from "@/components/shared/PageContainer";
import { LinkButton } from "@/components/ui/Button";

export function EnquiryCtaBanner({
  title = "Planning an Off-Season Retrofit or Greenfield Sugar Plant?",
  description = "Share your crushing capacity (TCD), steam balance parameters, or GA drawings with our engineering desk for a structured equipment proposal.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-[#142B3A] py-14 text-white lg:py-16">
      <PageContainer>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <p className="font-mono-tech text-xs font-semibold uppercase tracking-widest text-[#D99A36]">
              Commercial &amp; Technical Desk
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">{title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#C5D5E0] sm:text-base">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <LinkButton href="/contact?type=rfq" variant="primary" size="lg">
              <FileText className="h-4 w-4" aria-hidden="true" />
              <span>Submit Technical RFQ</span>
            </LinkButton>
            <LinkButton href="/contact?type=general" variant="dark-outline" size="lg">
              <PhoneCall className="h-4 w-4 text-[#D99A36]" aria-hidden="true" />
              <span>Contact Sales ({companyProfile.shortName})</span>
            </LinkButton>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
