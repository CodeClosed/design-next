import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, MapPin, Wrench } from "lucide-react";
import { getAllProjects, getProjectBySlug } from "@/content/projects";
import { getProductBySlug } from "@/content/products";
import type { Product } from "@/types/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageContainer } from "@/components/shared/PageContainer";
import { ProductCard } from "@/components/products/ProductCard";
import { Badge, SampleNoticeBanner } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";
import { EnquiryCtaBanner } from "@/components/home/EnquiryCtaBanner";

export function generateStaticParams() {
  return getAllProjects().map((proj) => ({
    slug: proj.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    notFound();
  }

  const relatedProducts = project.relatedProductSlugs
    .map((pSlug) => getProductBySlug(pSlug))
    .filter((item): item is Product => Boolean(item));

  return (
    <>
      <section className="border-b border-[#DCE2E6] bg-[#0E1F2B] py-14 text-white">
        <PageContainer>
          <Breadcrumbs
            items={[
              { label: "Projects", href: "/projects" },
              { label: project.title },
            ]}
            theme="dark"
          />
          <div className="max-w-4xl">
            <div className="mb-4 flex flex-wrap gap-2">
              <Badge variant="amber">{project.industry}</Badge>
              <Badge variant="sample" className="bg-[#142B3A] text-[#F5C573]">
                Sample Project Template
              </Badge>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {project.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-5 text-sm text-[#C5D5E0]">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-[#D99A36]" aria-hidden="true" />
                <span>{project.location}</span>
              </span>
              <span className="font-mono-tech text-[#F5C573]">
                {project.plantCapacity}
              </span>
              <span>{project.completionPeriod}</span>
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="py-12 lg:py-16">
        <PageContainer>
          <SampleNoticeBanner
            title="Illustrative Project Case Study"
            description={`Client Reference: ${project.clientLabel}. Replace placeholder figures, client attribution, and schematic visuals with approved actual project documentation.`}
            className="mb-8"
          />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="space-y-8 lg:col-span-7">
              <figure className="overflow-hidden rounded-sm border border-[#DCE2E6] bg-[#0E1F2B]">
                <Image
                  src={project.images[0]?.src || "/images/projects/project-evaporation-plant.svg"}
                  alt={project.images[0]?.alt || project.title}
                  width={800}
                  height={500}
                  priority
                  className="h-auto w-full object-cover"
                />
                <figcaption className="border-t border-[#26465B] bg-[#142B3A] px-4 py-2.5 text-xs text-[#C5D5E0]">
                  {project.images[0]?.caption}
                </figcaption>
              </figure>

              <div className="rounded-sm border border-[#DCE2E6] bg-white p-6">
                <h2 className="text-2xl font-bold text-[#142B3A]">
                  Project Overview &amp; Process Narrative
                </h2>
                <p className="mt-3 text-base leading-relaxed text-[#202A30]">
                  {project.description}
                </p>

                <h3 className="mt-6 text-base font-bold text-[#142B3A]">
                  Engineering Execution Highlights
                </h3>
                <ul className="mt-3 space-y-2.5 text-sm text-[#202A30]">
                  {project.engineeringHighlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#D99A36]"
                        aria-hidden="true"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="space-y-6 lg:col-span-5">
              <div className="rounded-sm border border-[#DCE2E6] bg-white p-6">
                <h2 className="text-lg font-bold text-[#142B3A]">Scope of Work</h2>
                <ul className="mt-4 space-y-2.5 text-sm text-[#546470]">
                  {project.scope.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D99A36]"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-sm border border-[#DCE2E6] bg-white p-6">
                <h2 className="text-lg font-bold text-[#142B3A]">
                  Equipment Supplied [Sample]
                </h2>
                <ul className="mt-4 space-y-2.5 text-sm text-[#202A30]">
                  {project.equipmentSupplied.map((eq) => (
                    <li key={eq} className="flex items-start gap-2.5">
                      <Wrench
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#31566D]"
                        aria-hidden="true"
                      />
                      <span>{eq}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-sm border border-[#142B3A] bg-[#142B3A] p-6 text-white">
                <h2 className="text-lg font-bold text-white">
                  Need a Similar Plant Configuration?
                </h2>
                <p className="mt-2 text-sm text-[#C5D5E0]">
                  Reference this case study in your RFQ or consult our process
                  engineering desk directly.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <LinkButton href="/contact?type=rfq" variant="primary" size="md">
                    Request Similar Proposal
                  </LinkButton>
                  <Link
                    href={`/industries/${project.industrySlug}`}
                    className="inline-flex min-h-11 items-center text-sm font-semibold text-[#D99A36] hover:underline"
                  >
                    View {project.industry}
                  </Link>
                </div>
              </div>
            </aside>
          </div>

          {relatedProducts.length > 0 ? (
            <div className="mt-14 border-t border-[#DCE2E6] pt-12">
              <h2 className="text-2xl font-bold text-[#142B3A]">
                Equipment Referenced in This Project
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedProducts.map((prod) => (
                  <ProductCard key={prod.id} product={prod} />
                ))}
              </div>
            </div>
          ) : null}
        </PageContainer>
      </section>

      <EnquiryCtaBanner />
    </>
  );
}
