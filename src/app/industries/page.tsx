import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { getAllIndustries } from "@/content/industries";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageContainer } from "@/components/shared/PageContainer";
import { Badge, SampleNoticeBanner } from "@/components/ui/Badge";
import { EnquiryCtaBanner } from "@/components/home/EnquiryCtaBanner";

export const metadata: Metadata = {
  title: "Industries & Process Solutions",
  description:
    "Focused equipment and process solutions for cane sugar manufacturing, boiling house processing, sugar refining, and distillery zero-liquid-discharge plants.",
  alternates: {
    canonical: "/industries",
  },
};

export default function IndustriesPage() {
  const industries = getAllIndustries();

  return (
    <>
      <section className="border-b border-[#DCE2E6] bg-[#0E1F2B] py-14 text-white">
        <PageContainer>
          <Breadcrumbs items={[{ label: "Industries" }]} theme="dark" />
          <div className="max-w-3xl">
            <Badge variant="sample" className="mb-4 bg-[#142B3A] text-[#F5C573]">
              Sector Focus · Confirm Verified Capabilities Before Launch
            </Badge>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Industries &amp; Process Solutions
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#C5D5E0]">
              Explore dedicated engineering scopes mapped to cane crushing,
              energy-efficient boiling houses, white sugar refineries, and
              integrated ethanol distilleries.
            </p>
          </div>
        </PageContainer>
      </section>

      <section className="py-12 lg:py-16">
        <PageContainer>
          <SampleNoticeBanner
            title="Industry Representation Policy"
            description="Only publish industries your organization actively engineers and fabricates for. Each card below links to a structured sector template and matching product lines."
            className="mb-8"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {industries.map((ind) => (
              <article
                key={ind.id}
                className="flex flex-col justify-between rounded-sm border border-[#DCE2E6] bg-white p-7"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="navy">{ind.title}</Badge>
                    <Badge variant="sample">Illustrative Offering</Badge>
                  </div>

                  <h2 className="mt-4 text-2xl font-bold text-[#142B3A]">
                    <Link
                      href={`/industries/${ind.slug}`}
                      className="hover:text-[#31566D]"
                    >
                      {ind.headline}
                    </Link>
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-[#546470]">
                    {ind.description}
                  </p>

                  <h3 className="mt-5 text-xs font-semibold uppercase tracking-wider text-[#31566D]">
                    Sample Equipment Solutions
                  </h3>
                  <ul className="mt-2.5 space-y-2 text-sm text-[#202A30]">
                    {ind.equipmentSolutions.map((sol) => (
                      <li key={sol} className="flex items-start gap-2">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#D99A36]"
                          aria-hidden="true"
                        />
                        <span>{sol}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-[#ECEFF2] pt-4">
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#142B3A] hover:text-[#B87D1E]"
                  >
                    <span>Explore {ind.title}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </PageContainer>
      </section>

      <EnquiryCtaBanner />
    </>
  );
}
