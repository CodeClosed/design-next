import type { Metadata } from "next";
import { CheckCircle2, Wrench } from "lucide-react";
import { capabilities } from "@/content/capabilities";
import { companyProfile } from "@/content/company";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageContainer } from "@/components/shared/PageContainer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge, SampleNoticeBanner } from "@/components/ui/Badge";
import { EnquiryCtaBanner } from "@/components/home/EnquiryCtaBanner";

export const metadata: Metadata = {
  title: "Engineering & Manufacturing Capabilities",
  description:
    "End-to-end engineering design, heavy plate fabrication, precision CNC machining, trial shop assembly, NDT inspection, site commissioning, and spares support.",
  alternates: {
    canonical: "/capabilities",
  },
};

export default function CapabilitiesPage() {
  return (
    <>
      <section className="border-b border-[#DCE2E6] bg-[#0E1F2B] py-14 text-white">
        <PageContainer>
          <Breadcrumbs items={[{ label: "Capabilities" }]} theme="dark" />
          <div className="max-w-3xl">
            <Badge variant="amber" className="mb-4">
              7-Stage Manufacturing Workflow
            </Badge>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Engineering &amp; Manufacturing Capabilities
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#C5D5E0]">
              Integrated capability stack spanning process calculations, heavy
              plate rolling, precision horizontal boring, trial assembly, NDT
              inspection, field commissioning, and seasonal spare-parts support.
            </p>
          </div>
        </PageContainer>
      </section>

      <section className="py-12 lg:py-16">
        <PageContainer>
          <SampleNoticeBanner
            title="Shop-Floor Inventory Notice"
            description="Machine tool listings and bay lifting metrics are structured starter template profiles. Replace with your audited workshop machinery list."
            className="mb-10"
          />

          <div className="space-y-6">
            {capabilities.map((cap) => (
              <article
                key={cap.id}
                className="grid grid-cols-1 gap-6 rounded-sm border border-[#DCE2E6] bg-white p-6 lg:grid-cols-12 lg:p-8"
              >
                <div className="lg:col-span-5">
                  <span className="font-mono-tech inline-block rounded-sm bg-[#142B3A] px-2.5 py-1 text-xs font-bold text-[#D99A36]">
                    STAGE {cap.stepNumber}
                  </span>
                  <h2 className="mt-3 text-2xl font-bold text-[#142B3A]">
                    {cap.title}
                  </h2>
                  <p className="mt-2.5 text-sm font-medium text-[#31566D]">
                    {cap.summary}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#546470]">
                    {cap.details}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6 border-t border-[#ECEFF2] pt-5 sm:grid-cols-2 lg:col-span-7 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#31566D]">
                      Execution Scope
                    </h3>
                    <ul className="mt-3 space-y-2.5 text-sm text-[#202A30]">
                      {cap.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2
                            className="mt-0.5 h-4 w-4 shrink-0 text-[#D99A36]"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#31566D]">
                      Representative Systems / Tools
                    </h3>
                    <ul className="mt-3 space-y-2.5 text-sm text-[#546470]">
                      {cap.equipmentOrTools.map((tool) => (
                        <li key={tool} className="flex items-start gap-2">
                          <Wrench
                            className="mt-0.5 h-4 w-4 shrink-0 text-[#31566D]"
                            aria-hidden="true"
                          />
                          <span>{tool}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="border-t border-[#DCE2E6] bg-white py-12 lg:py-16">
        <PageContainer>
          <SectionHeading
            eyebrow="Workshop Profile [Placeholder]"
            title="Summary of Shop-Floor Infrastructure"
          />
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {companyProfile.infrastructureSummary.map((line) => (
              <div
                key={line}
                className="rounded-sm border border-[#DCE2E6] bg-[#FAFBFD] p-5 text-sm text-[#202A30]"
              >
                {line}
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      <EnquiryCtaBanner />
    </>
  );
}
