import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllIndustries } from "@/content/industries";
import { PageContainer } from "@/components/shared/PageContainer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export function IndustryShowcase() {
  const industries = getAllIndustries();

  return (
    <section className="border-b border-[#DCE2E6] bg-[#F7F8F6] py-16 lg:py-22">
      <PageContainer>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Industries Served"
            title="Focused Expertise Across Sugar & Bio-Energy Plants"
            description="Every industry page maps verified plant process challenges directly to matching machinery from our centralized equipment catalogue."
          />
          <Link
            href="/industries"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#142B3A] hover:text-[#B87D1E]"
          >
            <span>All Industry Solutions</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {industries.map((ind) => (
            <article
              key={ind.id}
              className="flex flex-col justify-between rounded-sm border border-[#DCE2E6] bg-white p-6"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="steel">{ind.title}</Badge>
                  <Badge variant="sample">Illustrative Scope</Badge>
                </div>
                <h3 className="mt-4 text-xl font-bold text-[#142B3A]">
                  <Link href={`/industries/${ind.slug}`} className="hover:text-[#31566D]">
                    {ind.headline}
                  </Link>
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#546470]">
                  {ind.summary}
                </p>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-[#ECEFF2] pt-4">
                <span className="font-mono-tech text-xs text-[#546470]">
                  {ind.relatedProductSlugs.length} Linked Equipment Lines
                </span>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#142B3A] hover:text-[#B87D1E]"
                >
                  <span>View Solutions</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
