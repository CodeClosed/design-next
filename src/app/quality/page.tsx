import type { Metadata } from "next";
import { ClipboardCheck, FileCheck2, ShieldAlert } from "lucide-react";
import { qualityPolicy } from "@/content/quality";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageContainer } from "@/components/shared/PageContainer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge, SampleNoticeBanner } from "@/components/ui/Badge";
import { EnquiryCtaBanner } from "@/components/home/EnquiryCtaBanner";

export const metadata: Metadata = {
  title: "Quality Assurance & Inspection",
  description:
    "Quality management philosophy, 5-stage fabrication inspection checkpoints, material traceability, and strict factual certification policy.",
  alternates: {
    canonical: "/quality",
  },
};

export default function QualityPage() {
  return (
    <>
      <section className="border-b border-[#DCE2E6] bg-[#0E1F2B] py-14 text-white">
        <PageContainer>
          <Breadcrumbs items={[{ label: "Quality" }]} theme="dark" />
          <div className="max-w-3xl">
            <Badge variant="amber" className="mb-4">
              Traceable QAP Framework
            </Badge>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {qualityPolicy.headline}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#C5D5E0]">
              {qualityPolicy.intro}
            </p>
          </div>
        </PageContainer>
      </section>

      <section className="py-12 lg:py-16">
        <PageContainer>
          {/* Strict Certification Policy Banner */}
          <div className="mb-10 rounded-sm border-2 border-[#D99A36] bg-[#FFF9EE] p-6">
            <div className="flex items-start gap-3">
              <ShieldAlert
                className="mt-0.5 h-6 w-6 shrink-0 text-[#B87D1E]"
                aria-hidden="true"
              />
              <div>
                <h2 className="text-lg font-bold text-[#142B3A]">
                  Certifications &amp; Compliance Disclosure
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-[#5C3B07]">
                  {qualityPolicy.certificationNotice}
                </p>
              </div>
            </div>
          </div>

          <SectionHeading
            eyebrow="Quality Management Pillars"
            title="Core Material, Welding & Safety Standards"
          />

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {qualityPolicy.standardsPolicy.map((item) => (
              <article
                key={item.title}
                className="rounded-sm border border-[#DCE2E6] bg-white p-6"
              >
                <div className="flex items-center gap-2.5 text-[#142B3A]">
                  <ClipboardCheck
                    className="h-5 w-5 shrink-0 text-[#D99A36]"
                    aria-hidden="true"
                  />
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-[#546470]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          {/* 5-Stage Inspection Checkpoints */}
          <div className="mt-16">
            <SectionHeading
              eyebrow="Shop-Floor Inspection Sequence"
              title="5-Stage Quality Assurance Plan (QAP)"
              description="Each fabricated vessel and rotating machine progresses through documented inspection hold points prior to dispatch."
            />

            <div className="mt-8 space-y-4">
              {qualityPolicy.inspectionSteps.map((step) => (
                <article
                  key={step.id}
                  className="grid grid-cols-1 gap-5 rounded-sm border border-[#DCE2E6] bg-white p-6 lg:grid-cols-12 lg:items-center"
                >
                  <div className="lg:col-span-3">
                    <span className="font-mono-tech rounded-sm bg-[#142B3A] px-2.5 py-1 text-xs font-bold text-[#D99A36]">
                      {step.stage}
                    </span>
                    <h3 className="mt-2.5 text-lg font-bold text-[#142B3A]">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-[#546470] lg:col-span-5">
                    {step.description}
                  </p>

                  <div className="lg:col-span-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#31566D]">
                      Inspection Records Generated
                    </p>
                    <ul className="mt-2 space-y-1.5 text-xs text-[#202A30]">
                      {step.recordsGenerated.map((record) => (
                        <li key={record} className="flex items-center gap-2">
                          <FileCheck2
                            className="h-4 w-4 shrink-0 text-[#D99A36]"
                            aria-hidden="true"
                          />
                          <span>{record}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <SampleNoticeBanner
            title="Verified Certificates Slot"
            description="Once your organization supplies scanned copies of ISO 9001, IBR, or welding procedure approvals, add a verified certificate table on this page."
            className="mt-10"
          />
        </PageContainer>
      </section>

      <EnquiryCtaBanner />
    </>
  );
}
