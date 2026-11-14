import type { Metadata } from "next";
import { Building2, Compass, ShieldCheck, Target, Users } from "lucide-react";
import { companyProfile } from "@/content/company";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageContainer } from "@/components/shared/PageContainer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge, SampleNoticeBanner } from "@/components/ui/Badge";
import { EnquiryCtaBanner } from "@/components/home/EnquiryCtaBanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Company overview, engineering philosophy, manufacturing infrastructure, milestones, and leadership placeholders.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="border-b border-[#DCE2E6] bg-[#0E1F2B] py-14 text-white">
        <PageContainer>
          <Breadcrumbs items={[{ label: "About Us" }]} theme="dark" />
          <div className="max-w-3xl">
            <Badge variant="sample" className="mb-4 bg-[#142B3A] text-[#F5C573]">
              Company Profile Template · Replace Placeholders
            </Badge>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              About {companyProfile.name}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#C5D5E0]">
              {companyProfile.description}
            </p>
          </div>
        </PageContainer>
      </section>

      {/* Overview & Vision/Mission */}
      <section className="border-b border-[#DCE2E6] bg-white py-14 lg:py-18">
        <PageContainer>
          <SampleNoticeBanner
            title="Placeholder Content Policy"
            description={companyProfile.templateNotice}
            className="mb-10"
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="Manufacturing Philosophy"
                title="Built for Continuous Crushing Seasons"
                description={companyProfile.manufacturingPhilosophy}
              />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-6">
              <article className="rounded-sm border border-[#DCE2E6] bg-[#FAFBFD] p-6">
                <div className="flex items-center gap-2.5 text-[#142B3A]">
                  <Compass className="h-5 w-5 text-[#D99A36]" aria-hidden="true" />
                  <h2 className="text-lg font-bold">Vision</h2>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#546470]">
                  {companyProfile.vision}
                </p>
              </article>

              <article className="rounded-sm border border-[#DCE2E6] bg-[#FAFBFD] p-6">
                <div className="flex items-center gap-2.5 text-[#142B3A]">
                  <Target className="h-5 w-5 text-[#D99A36]" aria-hidden="true" />
                  <h2 className="text-lg font-bold">Mission</h2>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#546470]">
                  {companyProfile.mission}
                </p>
              </article>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Core Values */}
      <section className="border-b border-[#DCE2E6] bg-[#F7F8F6] py-14 lg:py-18">
        <PageContainer>
          <SectionHeading
            eyebrow="Operating Principles"
            title="Core Engineering & Commercial Values"
          />
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {companyProfile.coreValues.map((value) => (
              <article
                key={value.title}
                className="rounded-sm border border-[#DCE2E6] bg-white p-5"
              >
                <ShieldCheck className="h-5 w-5 text-[#D99A36]" aria-hidden="true" />
                <h3 className="mt-3 text-base font-bold text-[#142B3A]">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#546470]">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Infrastructure & Facilities */}
      <section className="border-b border-[#DCE2E6] bg-white py-14 lg:py-18">
        <PageContainer>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Infrastructure & Facilities"
                title="Workshop Bays & Heavy Equipment Handling"
                description="Structured template overview of fabrication, machining, and trial assembly facilities."
              />
              <div className="mt-6 rounded-sm border border-[#DCE2E6] bg-[#FAFBFD] p-5 text-sm">
                <div className="flex items-center gap-2 font-bold text-[#142B3A]">
                  <Building2 className="h-4 w-4 text-[#D99A36]" aria-hidden="true" />
                  <span>{companyProfile.addresses.manufacturingWorks.label}</span>
                </div>
                <p className="mt-2 text-[#546470]">
                  {companyProfile.addresses.manufacturingWorks.lines.join(", ")}
                </p>
                <p className="font-mono-tech mt-2 text-xs text-[#31566D]">
                  {companyProfile.addresses.manufacturingWorks.shopFloorAreaPlaceholder}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ul className="space-y-4">
                {companyProfile.infrastructureSummary.map((item, idx) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 rounded-sm border border-[#DCE2E6] bg-[#FAFBFD] p-4"
                  >
                    <span className="font-mono-tech rounded-sm bg-[#142B3A] px-2.5 py-1 text-xs font-bold text-[#D99A36]">
                      0{idx + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-[#202A30]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* History Milestones */}
      <section className="border-b border-[#DCE2E6] bg-[#F7F8F6] py-14 lg:py-18">
        <PageContainer>
          <SectionHeading
            eyebrow="Company History [Template]"
            title="Illustrative Growth Milestones"
            description="Replace these chronological placeholder entries with your company's actual founding year, facility expansions, and key equipment milestones."
          />

          <ol className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {companyProfile.milestones.map((m) => (
              <li
                key={m.title}
                className="rounded-sm border border-[#DCE2E6] bg-white p-5"
              >
                <p className="font-mono-tech text-xs font-bold text-[#B87D1E]">
                  {m.period}
                </p>
                <h3 className="mt-2 text-base font-bold text-[#142B3A]">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#546470]">
                  {m.description}
                </p>
              </li>
            ))}
          </ol>
        </PageContainer>
      </section>

      {/* Leadership */}
      <section className="bg-white py-14 lg:py-18">
        <PageContainer>
          <SectionHeading
            eyebrow="Leadership & Management [Template]"
            title="Executive Engineering & Operations Leadership"
          />

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {companyProfile.leadership.map((leader) => (
              <article
                key={leader.role}
                className="rounded-sm border border-[#DCE2E6] bg-[#FAFBFD] p-6"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#142B3A] text-[#D99A36]">
                    <Users className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <Badge variant="sample">Placeholder Profile</Badge>
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#142B3A]">
                  {leader.name}
                </h3>
                <p className="text-sm font-semibold text-[#31566D]">{leader.role}</p>
                <p className="font-mono-tech mt-0.5 text-xs text-[#546470]">
                  {leader.department}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#546470]">
                  {leader.bio}
                </p>
              </article>
            ))}
          </div>
        </PageContainer>
      </section>

      <EnquiryCtaBanner />
    </>
  );
}
