import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { companyProfile } from "@/content/company";
import { PageContainer } from "@/components/shared/PageContainer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export function StatsSection() {
  return (
    <section className="border-b border-[#DCE2E6] bg-white py-14 lg:py-20">
      <PageContainer>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          {/* Company Intro */}
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Company Overview"
              title="Heavy Mechanical Reliability Backed by Process Engineering"
              description={companyProfile.description}
            />
            <p className="mt-4 text-sm leading-relaxed text-[#546470]">
              {companyProfile.manufacturingPhilosophy}
            </p>
            <div className="mt-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#142B3A] hover:text-[#B87D1E]"
              >
                <span>Read Company Profile &amp; Infrastructure</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Bento Statistics Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {companyProfile.statistics.map((stat, idx) => (
              <div
                key={stat.id}
                className={`flex flex-col justify-between rounded-sm border p-6 ${
                  idx === 0
                    ? "border-[#142B3A] bg-[#142B3A] text-white"
                    : "border-[#DCE2E6] bg-[#F7F8F6] text-[#142B3A]"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <span
                    className={`font-mono-tech text-3xl font-extrabold tracking-tight sm:text-4xl ${
                      idx === 0 ? "text-[#D99A36]" : "text-[#142B3A]"
                    }`}
                  >
                    {stat.value}
                  </span>
                  <Badge variant="sample">Sample Metric</Badge>
                </div>
                <div className="mt-5">
                  <p className="text-sm font-bold">{stat.label}</p>
                  <p
                    className={`mt-1 text-xs leading-relaxed ${
                      idx === 0 ? "text-[#B5C7D4]" : "text-[#546470]"
                    }`}
                  >
                    {stat.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
