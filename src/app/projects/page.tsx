import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { getAllProjects } from "@/content/projects";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageContainer } from "@/components/shared/PageContainer";
import { Badge, SampleNoticeBanner } from "@/components/ui/Badge";
import { EnquiryCtaBanner } from "@/components/home/EnquiryCtaBanner";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description:
    "Demonstrative sugar plant project case studies detailing equipment supplied, plant capacity, scope of work, and engineering highlights.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  const allProjects = getAllProjects();

  return (
    <>
      <section className="border-b border-[#DCE2E6] bg-[#0E1F2B] py-14 text-white">
        <PageContainer>
          <Breadcrumbs items={[{ label: "Projects" }]} theme="dark" />
          <div className="max-w-3xl">
            <Badge variant="sample" className="mb-4 bg-[#142B3A] text-[#F5C573]">
              Sample Case Study Portfolio · Replace with Verified Installations
            </Badge>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Projects &amp; Installation Case Studies
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#C5D5E0]">
              Structured project documentation showcasing how equipment packages
              integrate across cane milling, evaporation, refinery curing, and
              distillery ZLD applications.
            </p>
          </div>
        </PageContainer>
      </section>

      <section className="py-12 lg:py-16">
        <PageContainer>
          <SampleNoticeBanner
            title="Zero Fabricated References Policy"
            description="Every installation profile below is an illustrative template placeholder. Replace client labels, locations, capacities, and photographs strictly with verified customer installations where permission has been obtained."
            className="mb-8"
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {allProjects.map((project) => (
              <article
                key={project.id}
                className="flex flex-col overflow-hidden rounded-sm border border-[#DCE2E6] bg-white"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="block aspect-[16/10] border-b border-[#DCE2E6] bg-[#0E1F2B]"
                >
                  <Image
                    src={project.images[0]?.src || "/images/projects/project-evaporation-plant.svg"}
                    alt={project.images[0]?.alt || project.title}
                    width={800}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                </Link>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="navy">{project.industry}</Badge>
                      <Badge variant="sample">Sample Case Study</Badge>
                    </div>
                    <h2 className="mt-3 text-xl font-bold text-[#142B3A]">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="hover:text-[#31566D] hover:underline"
                      >
                        {project.title}
                      </Link>
                    </h2>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-[#546470]">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-[#B87D1E]" aria-hidden="true" />
                        {project.location}
                      </span>
                      <span className="font-mono-tech font-semibold text-[#142B3A]">
                        {project.plantCapacity}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[#546470]">
                      {project.summary}
                    </p>
                    <ul className="mt-4 space-y-1.5 border-t border-[#ECEFF2] pt-3 text-xs text-[#202A30]">
                      {project.equipmentSupplied.map((eq) => (
                        <li key={eq}>• {eq}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 border-t border-[#ECEFF2] pt-4">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#142B3A] hover:text-[#B87D1E]"
                    >
                      <span>View Project Case Study</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
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
