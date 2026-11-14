import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2, Download, FileSpreadsheet, Layers } from "lucide-react";
import {
  getAllProducts,
  getProductBySlug,
  getRelatedProducts,
} from "@/content/products";
import { buildProductJsonLd } from "@/lib/seo/structured-data";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageContainer } from "@/components/shared/PageContainer";
import { Badge, SampleNoticeBanner } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";
import { ProductSpecsTable } from "@/components/products/ProductSpecsTable";
import { RelatedProducts } from "@/components/products/RelatedProducts";
import { EnquiryCtaBanner } from "@/components/home/EnquiryCtaBanner";

export function generateStaticParams() {
  return getAllProducts().map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return { title: "Equipment Not Found" };
  }

  return {
    title: `${product.name} (${product.modelCode})`,
    description: product.shortDescription,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product);
  const productJsonLd = buildProductJsonLd(product);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <section className="border-b border-[#DCE2E6] bg-white py-10 lg:py-14">
        <PageContainer>
          <Breadcrumbs
            items={[
              { label: "Products", href: "/products" },
              { label: product.name },
            ]}
          />

          <div className="mt-4 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            {/* Visual Schematic */}
            <div className="lg:col-span-6">
              <figure className="overflow-hidden rounded-sm border border-[#DCE2E6] bg-[#F0F3F5]">
                <Image
                  src={product.images[0]?.src || "/images/products/cane-mill-tandem.svg"}
                  alt={product.images[0]?.alt || product.name}
                  width={800}
                  height={520}
                  priority
                  className="h-auto w-full object-cover"
                />
                {product.images[0]?.caption ? (
                  <figcaption className="border-t border-[#DCE2E6] bg-[#FAFBFD] px-4 py-2.5 text-xs text-[#546470]">
                    {product.images[0].caption}
                  </figcaption>
                ) : null}
              </figure>
            </div>

            {/* Product Summary & CTAs */}
            <div className="lg:col-span-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="navy">{product.modelCode}</Badge>
                <Badge variant="steel">{product.categoryLabel}</Badge>
                <Badge variant="sample">Sample Specification</Badge>
              </div>

              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#142B3A] sm:text-4xl">
                {product.name}
              </h1>

              <p className="mt-4 text-base leading-relaxed text-[#202A30]">
                {product.fullDescription}
              </p>

              <SampleNoticeBanner
                title="Sample Technical Data"
                description="All capacity ranges, dimensions, and downloadable spec sheets on this page are illustrative starter template entries requiring review by your mechanical engineering team."
                className="mt-5"
              />

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <LinkButton
                  href={`/contact?type=rfq&product=${encodeURIComponent(product.slug)}`}
                  variant="primary"
                  size="lg"
                >
                  <FileSpreadsheet className="h-4 w-4" aria-hidden="true" />
                  <span>Request Quote for This Equipment</span>
                </LinkButton>

                <a
                  href={product.brochure.filePath}
                  download
                  className="inline-flex min-h-12 items-center gap-2 rounded border border-[#31566D] bg-white px-5 py-3 text-sm font-semibold text-[#142B3A] transition-colors hover:bg-[#142B3A] hover:text-white"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span>Download Datasheet ({product.brochure.fileSizeLabel})</span>
                </a>
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Specs Table, Features, Configurations & Applications */}
      <section className="py-12 lg:py-16">
        <PageContainer>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="space-y-10 lg:col-span-7">
              <div>
                <h2 className="mb-4 text-2xl font-bold text-[#142B3A]">
                  Mechanical &amp; Process Specifications
                </h2>
                <ProductSpecsTable
                  productName={product.name}
                  specifications={product.specifications}
                />
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-bold text-[#142B3A]">
                  Available Standard Configurations
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {product.configurations.map((config) => (
                    <div
                      key={config.name}
                      className="rounded-sm border border-[#DCE2E6] bg-white p-5"
                    >
                      <div className="flex items-center gap-2 text-[#142B3A]">
                        <Layers className="h-4 w-4 text-[#D99A36]" aria-hidden="true" />
                        <h3 className="text-base font-bold">{config.name}</h3>
                      </div>
                      <p className="font-mono-tech mt-2 text-xs font-semibold text-[#31566D]">
                        {config.capacityRange}
                      </p>
                      <p className="mt-2 text-sm text-[#546470]">{config.notes}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8 lg:col-span-5">
              <div className="rounded-sm border border-[#DCE2E6] bg-white p-6">
                <h2 className="text-xl font-bold text-[#142B3A]">
                  Key Engineering Features
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-[#202A30]">
                  {product.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#D99A36]"
                        aria-hidden="true"
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-sm border border-[#DCE2E6] bg-white p-6">
                <h2 className="text-xl font-bold text-[#142B3A]">
                  Industrial Applications
                </h2>
                <ul className="mt-4 space-y-2.5 text-sm text-[#546470]">
                  {product.applications.map((app) => (
                    <li key={app} className="flex items-start gap-2.5">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#31566D]"
                        aria-hidden="true"
                      />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <RelatedProducts products={relatedProducts} />
        </PageContainer>
      </section>

      <EnquiryCtaBanner
        title={`Need Custom Sizing for ${product.name}?`}
        description="Attach your heat balance, cane capacity, or footprint constraints in our RFQ portal for tailored mechanical sizing."
      />
    </>
  );
}
