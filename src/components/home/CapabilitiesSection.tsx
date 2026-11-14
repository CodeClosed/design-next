import { ArrowRight, CheckCircle2 } from "lucide-react";
import { capabilities } from "@/content/capabilities";
import { companyProfile } from "@/content/company";
import { PageContainer } from "@/components/shared/PageContainer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { LinkButton } from "@/components/ui/Button";

export function CapabilitiesSection() {
  return (
    <section className="border-b border-[#1E3B4E] bg-[#142B3A] py-16 text-white lg:py-22">
      <PageContainer>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            theme="dark"
            eyebrow="Manufacturing Infrastructure"
            title="Integrated Design, Fabrication, Heavy Machining & Commissioning"
            description="Single-source control over thermal calculations, segregated stainless fabrication, CNC boring, dynamic balancing, and field commissioning."
          />
          <LinkButton href="/capabilities" variant="primary" size="md">
            <span>Explore Capabilities</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </LinkButton>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left Bento Capabilities Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8">
            {capabilities.slice(0, 4).map((cap) => (
              <article
                key={cap.id}
                className="flex flex-col justify-between rounded-sm border border-[#2D5066] bg-[#0E1F2B] p-6"
              >
                <div>
                  <span className="font-mono-tech text-xs font-semibold text-[#D99A36]">
                    STAGE {cap.stepNumber}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-white">{cap.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#B5C7D4]">
                    {cap.summary}
                  </p>
                </div>
                <ul className="mt-4 space-y-1.5 border-t border-[#224052] pt-3.5 text-xs text-[#C5D5E0]">
                  {cap.highlights.slice(0, 2).map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#D99A36]"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* Right Infrastructure Panel */}
          <aside className="flex flex-col justify-between rounded-sm border border-[#31566D] bg-[#193547] p-6 lg:col-span-4">
            <div>
              <p className="font-mono-tech text-xs font-semibold uppercase tracking-widest text-[#D99A36]">
                Workshop Bays [Sample Profile]
              </p>
              <h3 className="mt-2 text-xl font-bold text-white">
                Shop-Floor Readiness
              </h3>
              <ul className="mt-5 space-y-3.5 text-sm text-[#D6E2EA]">
                {companyProfile.infrastructureSummary.map((line) => (
                  <li key={line} className="flex items-start gap-2.5">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D99A36]"
                      aria-hidden="true"
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 border-t border-[#2E5269] pt-5">
              <p className="font-mono-tech text-xs text-[#A9C1D1]">
                {companyProfile.addresses.manufacturingWorks.shopFloorAreaPlaceholder}
              </p>
            </div>
          </aside>
        </div>
      </PageContainer>
    </section>
  );
}
