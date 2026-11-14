import type { Metadata } from "next";
import { companyProfile } from "@/content/company";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageContainer } from "@/components/shared/PageContainer";
import { SampleNoticeBanner } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Terms & Conditions (Template)",
  description:
    "Starter terms and conditions template covering technical documentation usage and commercial quotations.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <section className="py-12 lg:py-16">
      <PageContainer className="max-w-4xl">
        <Breadcrumbs items={[{ label: "Terms & Conditions" }]} />
        <h1 className="text-3xl font-extrabold text-[#142B3A] sm:text-4xl">
          Terms &amp; Conditions [Template Document]
        </h1>

        <SampleNoticeBanner
          title="Legal Review Required"
          description="Replace this template agreement with corporate terms approved by legal counsel prior to production release."
          className="mt-6"
        />

        <div className="mt-8 space-y-6 rounded-sm border border-[#DCE2E6] bg-white p-6 text-sm leading-relaxed text-[#202A30] sm:p-8">
          <section>
            <h2 className="text-lg font-bold text-[#142B3A]">
              1. Indicative Engineering Specifications
            </h2>
            <p className="mt-2 text-[#546470]">
              Equipment specifications, capacities, and schematics displayed on
              this website are indicative engineering reference figures. Formal
              equipment sizing and performance guarantees are governed
              exclusively by written commercial proposals and signed contracts
              issued by {companyProfile.legalName}.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#142B3A]">
              2. Intellectual Property
            </h2>
            <p className="mt-2 text-[#546470]">
              Technical brochures, schematic layouts, and engineering documents
              made available for download are intended solely for procurement
              evaluation by prospective customers and EPC consultants.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#142B3A]">
              3. Governing Law Placeholder
            </h2>
            <p className="mt-2 text-[#546470]">
              Insert applicable governing jurisdiction, arbitration clauses, and
              standard warranty boundaries here before public deployment.
            </p>
          </section>
        </div>
      </PageContainer>
    </section>
  );
}
