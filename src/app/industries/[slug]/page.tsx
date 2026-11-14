import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AlertTriangle, CheckCircle2, FileSpreadsheet } from "lucide-react";
import { getAllIndustries, getIndustryBySlug } from "@/content/industries";
import { getProductBySlug } from "@/content/products";
import type { Product } from "@/types/content";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageContainer } from "@/components/shared/PageContainer";
import { ProductCard } from "@/components/products/ProductCard";
import { Badge, SampleNoticeBanner } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";
import { EnquiryCtaBanner } from "@/components/home/EnquiryCtaBanner";

export function generateStaticParams() {
  return getAllIndustries().map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return { title: "Industry Not Found" };

  return {
    title: industry.title,
    description: industry.summary,
    alternates: {
      canonical: `/industries/${industry.slug}`,
    },
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) {
    notFound();
  }

  const linkedProducts = industry.relatedProductSlugs
    .map((prodSlug) => getProductBySlug(prodSlug))
    .filter((item): item is Product => Boolean(item));

  return (
    <>
      <section className="border-b border-[#DCE2E6] bg-[#0E1F2B] py-14 text-white">
        <PageContainer>
          <Breadcrumbs
            items={[
              { label: "Industries", href: "/industries" },
              { label: industry.title },
            ]}
            theme="dark"
          />
          <div className="max-w-3xl">
            <div className="mb-4 flex flex-wrap gap-2">
              <Badge variant="amber">{industry.title}</Badge>
              <Badge variant="sample" className="bg-[#142B3A] text-[#F5C573]">
                Illustrative Template Scope
              </Badge>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {industry.headline}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#C5D5E0]">
              {industry.description}
            </p>
            <div className="mt-7">
              <LinkButton href="/contact?type=rfq" variant="primary" size="lg">
                <FileSpreadsheet className="h-4 w-4" aria-hidden="true" />
                <span>Discuss Plant Requirements</span>
              </LinkButton>
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="py-12 lg:py-16">
        <PageContainer>
          <SampleNoticeBanner
            title="Illustrative Industry Offering"
            description="Verify all process capabilities and engineering references against your organization's live project portfolio prior to publication."
            className="mb-8"
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-sm border border-[#DCE2E6] bg-white p-6">
              <div className="flex items-center gap-2.5 text-[#142B3A]">
                <AlertTriangle className="h-5 w-5 text-[#B87D1E]" aria-hidden="true" />
                <h2 className="text-xl font-bold">Typical Plant Process Challenges</h2>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-[#546470]">
                {industry.processChallenges.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B87D1E]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-sm border border-[#DCE2E6] bg-white p-6">
              <div className="flex items-center gap-2.5 text-[#142B3A]">
                <CheckCircle2 className="h-5 w-5 text-[#D99A36]" aria-hidden="true" />
                <h2 className="text-xl font-bold">Targeted Equipment Solutions</h2>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-[#202A30]">
                {industry.equipmentSolutions.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#D99A36]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {linkedProducts.length > 0 ? (
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-[#142B3A]">
                Applicable Equipment from Catalogue
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {linkedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
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
