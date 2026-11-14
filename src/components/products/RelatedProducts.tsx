import type { Product } from "@/types/content";
import { ProductCard } from "@/components/products/ProductCard";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function RelatedProducts({ products }: { products: Product[] }) {
  if (products.length === 0) return null;

  return (
    <section aria-labelledby="related-equipment-heading" className="mt-16 border-t border-[#DCE2E6] pt-12">
      <SectionHeading
        eyebrow="Complementary Plant Equipment"
        title="Related Process Machinery"
        description="Equipment commonly specified alongside this unit in sugar plant expansions and turnkey installations."
      />
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
