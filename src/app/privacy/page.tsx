import type { Metadata } from "next";
import { companyProfile } from "@/content/company";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageContainer } from "@/components/shared/PageContainer";
import { SampleNoticeBanner } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Privacy Policy (Template)",
  description:
    "Starter privacy policy template governing corporate contact and technical RFQ submissions.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <section className="py-12 lg:py-16">
      <PageContainer className="max-w-4xl">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
        <h1 className="text-3xl font-extrabold text-[#142B3A] sm:text-4xl">
          Privacy Policy [Template Document]
        </h1>

        <SampleNoticeBanner
          title="Legal Review Required"
          description="This page is a starter template privacy notice. Have legal counsel customize and verify compliance with applicable data protection laws (DPDP Act, GDPR, etc.) before going live."
          className="mt-6"
        />

        <div className="mt-8 space-y-6 rounded-sm border border-[#DCE2E6] bg-white p-6 text-sm leading-relaxed text-[#202A30] sm:p-8">
          <section>
            <h2 className="text-lg font-bold text-[#142B3A]">
              1. Information Collected via Enquiry &amp; RFQ Forms
            </h2>
            <p className="mt-2 text-[#546470]">
              When prospective clients submit an enquiry or Request for Quotation
              (RFQ) to {companyProfile.legalName}, the website collects contact
              identifiers (full name, organization, designation, corporate email,
              telephone number, country) and optional technical attachment files
              solely to evaluate engineering scope and respond commercially.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#142B3A]">
              2. Confidentiality of Technical Specifications &amp; Drawings
            </h2>
            <p className="mt-2 text-[#546470]">
              Uploaded General Arrangement (GA) drawings, plant capacities, and
              process datasheets should be handled under strict commercial
              confidentiality and utilized strictly for quotation preparation.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#142B3A]">
              3. Cookies &amp; Analytics
            </h2>
            <p className="mt-2 text-[#546470]">
              This starter template sets no third-party advertising trackers by
              default. If optional analytics measurement (`NEXT_PUBLIC_ANALYTICS_ID`)
              is enabled in production, update this section and configure a
              corresponding consent notice as required by your jurisdiction.
            </p>
          </section>
        </div>
      </PageContainer>
    </section>
  );
}
