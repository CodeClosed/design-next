import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProducts, productCategories } from "@/content/products";
import { PageContainer } from "@/components/shared/PageContainer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProductCard } from "@/components/products/ProductCard";
import { LinkButton } from "@/components/ui/Button";

export function ProductShowcase() {
  const featuredProducts = getFeaturedProducts().slice(0, 3);

  return (
    <section className="industrial-grid-bg border-b border-[#DCE2E6] py-16 lg:py-22">
      <PageContainer>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Equipment Catalogue"
            title="Core Sugar Processing & Allied Machinery"
            description="Centralized product specifications engineered for cane preparation, juice extraction, multi-effect evaporation, crystallization, centrifugal purging, and distillery ZLD."
          />
          <LinkButton href="/products" variant="secondary" size="md">
            <span>Browse Full Catalogue</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </LinkButton>
        </div>

        {/* Category Bento Strip */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((cat, idx) => (
            <Link
              key={cat.id}
              href={`/products?category=${cat.id}`}
              className="group flex flex-col justify-between rounded-sm border border-[#DCE2E6] bg-white p-5 transition-colors hover:border-[#142B3A]"
            >
              <div>
                <p className="font-mono-tech text-xs font-semibold text-[#B87D1E]">
                  {`0${idx + 1} // CATEGORY`}
                </p>
                <h3 className="mt-2 text-base font-bold text-[#142B3A] group-hover:text-[#31566D]">
                  {cat.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#546470]">
                  {cat.description}
                </p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#142B3A]">
                <span>Filter Category</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>

        {/* Featured Products Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
