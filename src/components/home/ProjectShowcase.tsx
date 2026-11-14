import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { getFeaturedProjects } from "@/content/projects";
import { PageContainer } from "@/components/shared/PageContainer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";

export function ProjectShowcase() {
  const featuredProjects = getFeaturedProjects().slice(0, 3);

  return (
    <section className="border-b border-[#DCE2E6] bg-white py-16 lg:py-22">
      <PageContainer>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Project Case Studies"
            title="Demonstrative Plant Installations & Retrofits"
            description="Structured project profiles linking scope of work, plant capacity, and supplied equipment. All entries below are clearly marked sample templates."
          />
          <LinkButton href="/projects" variant="outline" size="md">
            <span>View All Projects</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </LinkButton>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col overflow-hidden rounded-sm border border-[#DCE2E6] bg-[#FAFBFD]"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="relative block aspect-[16/10] border-b border-[#DCE2E6] bg-[#0E1F2B]"
              >
                <Image
                  src={project.images[0]?.src || "/images/projects/project-evaporation-plant.svg"}
                  alt={project.images[0]?.alt || project.title}
                  width={800}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </Link>

              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="navy">{project.industry}</Badge>
                    <Badge variant="sample">Sample Case Study</Badge>
                  </div>
                  <h3 className="mt-3 text-lg font-bold leading-snug text-[#142B3A]">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="hover:text-[#31566D] hover:underline"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-[#546470]">
                    <MapPin className="h-3.5 w-3.5 text-[#B87D1E]" aria-hidden="true" />
                    <span>{project.location}</span>
                    <span>·</span>
                    <span className="font-mono-tech font-semibold text-[#142B3A]">
                      {project.plantCapacity}
                    </span>
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#546470]">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-5 border-t border-[#DCE2E6] pt-4">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#142B3A] hover:text-[#B87D1E]"
                  >
                    <span>Review Case Study</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
