import type { Metadata } from "next";
import { Download, FileText } from "lucide-react";
import { resourceDocuments, faqs } from "@/content/resources";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageContainer } from "@/components/shared/PageContainer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge, SampleNoticeBanner } from "@/components/ui/Badge";
import { FaqAccordion } from "@/components/resources/FaqAccordion";
import { EnquiryCtaBanner } from "@/components/home/EnquiryCtaBanner";

export const metadata: Metadata = {
  title: "Technical Resources & Brochures",
  description:
    "Download sample corporate profiles, equipment technical catalogues, RFQ checklists, and browse engineering FAQs.",
  alternates: {
    canonical: "/resources",
  },
};

export default function ResourcesPage() {
  return (
    <>
      <section className="border-b border-[#DCE2E6] bg-[#0E1F2B] py-14 text-white">
        <PageContainer>
          <Breadcrumbs items={[{ label: "Resources" }]} theme="dark" />
          <div className="max-w-3xl">
            <Badge variant="sample" className="mb-4 bg-[#142B3A] text-[#F5C573]">
              Demonstration Technical Files
            </Badge>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Brochures, Technical Catalogues &amp; FAQs
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#C5D5E0]">
              Access equipment specification sheets, sample company profiles,
              and procurement checklists designed for plant engineers and EPC
              teams.
            </p>
          </div>
        </PageContainer>
      </section>

      <section className="py-12 lg:py-16">
        <PageContainer>
          <SampleNoticeBanner
            title="Demonstration Download Files"
            description="All downloadable files linked below are clearly labeled plain-text sample demonstration sheets stored in public/brochures/. Replace them with approved PDF product brochures prior to launch."
            className="mb-8"
          />

          <SectionHeading
            eyebrow="Download Center"
            title="Equipment Brochures & Technical Checklists"
          />

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {resourceDocuments.map((doc) => (
              <article
                key={doc.id}
                className="flex flex-col justify-between rounded-sm border border-[#DCE2E6] bg-white p-6"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <Badge variant="steel">{doc.category}</Badge>
                    {doc.isSampleDocument ? (
                      <Badge variant="sample">Demo File</Badge>
                    ) : null}
                  </div>
                  <div className="mt-4 flex items-start gap-3">
                    <FileText
                      className="mt-1 h-5 w-5 shrink-0 text-[#D99A36]"
                      aria-hidden="true"
                    />
                    <h3 className="text-base font-bold text-[#142B3A]">
                      {doc.title}
                    </h3>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#546470]">
                    {doc.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-[#ECEFF2] pt-4">
                  <span className="font-mono-tech text-xs text-[#546470]">
                    {doc.fileFormat} · {doc.fileSize}
                  </span>
                  <a
                    href={doc.filePath}
                    download
                    className="inline-flex min-h-10 items-center gap-1.5 rounded-sm bg-[#142B3A] px-3.5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#31566D]"
                  >
                    <Download className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Download</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16">
            <SectionHeading
              eyebrow="Engineering & Procurement FAQ"
              title="Frequently Asked Questions"
            />
            <div className="mt-8">
              <FaqAccordion items={faqs} />
            </div>
          </div>
        </PageContainer>
      </section>

      <EnquiryCtaBanner />
    </>
  );
}
