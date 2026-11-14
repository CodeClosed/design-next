import Link from "next/link";
import { ArrowRight, ClipboardCheck } from "lucide-react";
import { qualityPolicy } from "@/content/quality";
import { PageContainer } from "@/components/shared/PageContainer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SampleNoticeBanner } from "@/components/ui/Badge";

export function QualityPreviewSection() {
  return (
    <section className="border-b border-[#DCE2E6] bg-[#F7F8F6] py-16 lg:py-22">
      <PageContainer>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Quality Assurance"
              title="Inspection Traceability Over Unverified Claims"
              description={qualityPolicy.intro}
            />
            <SampleNoticeBanner
              title="Certification Policy"
              description={qualityPolicy.certificationNotice}
              className="mt-5"
            />
            <div className="mt-6">
              <Link
                href="/quality"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#142B3A] hover:text-[#B87D1E]"
              >
                <span>View Full 5-Stage Quality Plan</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {qualityPolicy.standardsPolicy.map((item) => (
              <div
                key={item.title}
                className="rounded-sm border border-[#DCE2E6] bg-white p-5"
              >
                <div className="flex items-center gap-2.5 text-[#142B3A]">
                  <ClipboardCheck className="h-5 w-5 shrink-0 text-[#D99A36]" aria-hidden="true" />
                  <h3 className="text-base font-bold">{item.title}</h3>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-[#546470]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
