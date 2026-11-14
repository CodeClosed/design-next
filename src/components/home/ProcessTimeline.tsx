import { capabilities } from "@/content/capabilities";
import { PageContainer } from "@/components/shared/PageContainer";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function ProcessTimeline() {
  return (
    <section className="border-b border-[#DCE2E6] bg-white py-16 lg:py-22">
      <PageContainer>
        <SectionHeading
          eyebrow="Project Execution Workflow"
          title="From Technical Consultation to Commissioning"
          description="Structured stage-gate execution keeps fabrication drawings, workshop milestones, NDT audits, and off-season delivery dates predictable."
        />

        <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          {capabilities.map((step) => (
            <li
              key={step.id}
              className="flex flex-col justify-between rounded-sm border border-[#DCE2E6] bg-[#FAFBFD] p-4"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono-tech text-xs font-bold text-[#B87D1E]">
                    STEP {step.stepNumber}
                  </span>
                  <span className="h-1.5 w-6 bg-[#142B3A]" aria-hidden="true" />
                </div>
                <h3 className="mt-3 text-sm font-bold leading-snug text-[#142B3A]">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#546470]">
                  {step.summary}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </PageContainer>
    </section>
  );
}
