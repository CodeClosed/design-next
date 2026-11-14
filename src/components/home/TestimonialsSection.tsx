import { Quote } from "lucide-react";
import { companyProfile } from "@/content/company";
import { PageContainer } from "@/components/shared/PageContainer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export function TestimonialsSection() {
  return (
    <section className="border-b border-[#DCE2E6] bg-white py-16 lg:py-20">
      <PageContainer>
        <SectionHeading
          eyebrow="Client References [Placeholder Template]"
          title="Engineering Partnerships & Plant Feedback"
          description="Placeholder slots structured for verified quotes from mill managing directors, chief engineers, and EPC consultants."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {companyProfile.testimonials.map((t) => (
            <figure
              key={t.id}
              className="flex flex-col justify-between rounded-sm border border-[#DCE2E6] bg-[#FAFBFD] p-6"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <Quote className="h-6 w-6 text-[#D99A36]" aria-hidden="true" />
                  <Badge variant="sample">Placeholder Quote</Badge>
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-[#202A30]">
                  “{t.quote}”
                </blockquote>
              </div>
              <figcaption className="mt-6 border-t border-[#DCE2E6] pt-4 text-xs">
                <p className="font-bold text-[#142B3A]">{t.authorLabel}</p>
                <p className="text-[#546470]">{t.organizationLabel}</p>
                <p className="font-mono-tech mt-1 text-[#31566D]">{t.projectScope}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
