import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import type { Product } from "@/types/content";
import { Badge } from "@/components/ui/Badge";

export function ProductCard({ product }: { product: Product }) {
  const heroSpec = product.specifications[0];
  const secondarySpec = product.specifications[1];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-[#DCE2E6] bg-white transition-colors hover:border-[#31566D]">
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-[16/10] w-full overflow-hidden border-b border-[#DCE2E6] bg-[#F0F3F5]"
      >
        <Image
          src={product.images[0]?.src || "/images/products/cane-mill-tandem.svg"}
          alt={product.images[0]?.alt || product.name}
          width={800}
          height={520}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
        <span className="font-mono-tech absolute top-3 left-3 rounded-sm bg-[#142B3A]/95 px-2.5 py-1 text-[11px] font-semibold text-white">
          {product.modelCode}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2">
          <Badge variant="steel">{product.categoryLabel}</Badge>
          {product.isSampleContent ? (
            <Badge variant="sample">Sample Entry</Badge>
          ) : null}
        </div>

        <h3 className="text-lg font-bold leading-snug text-[#142B3A]">
          <Link
            href={`/products/${product.slug}`}
            className="hover:text-[#31566D] hover:underline underline-offset-4"
          >
            {product.name}
          </Link>
        </h3>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#546470]">
          {product.shortDescription}
        </p>

        {heroSpec ? (
          <dl className="mt-4 grid grid-cols-2 gap-3 border-t border-[#ECEFF2] pt-3.5 text-xs">
            <div>
              <dt className="text-[#546470]">{heroSpec.parameter}</dt>
              <dd className="font-mono-tech mt-0.5 font-semibold text-[#142B3A]">
                {heroSpec.value} {heroSpec.unit}
              </dd>
            </div>
            {secondarySpec ? (
              <div>
                <dt className="text-[#546470]">{secondarySpec.parameter}</dt>
                <dd className="font-mono-tech mt-0.5 font-semibold text-[#142B3A]">
                  {secondarySpec.value} {secondarySpec.unit}
                </dd>
              </div>
            ) : null}
          </dl>
        ) : null}

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#ECEFF2] pt-4">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#142B3A] hover:text-[#B87D1E]"
          >
            <span>View Technical Specs</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href={`/contact?type=rfq&product=${encodeURIComponent(product.slug)}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#31566D] hover:text-[#142B3A] hover:underline"
          >
            <FileText className="h-3.5 w-3.5" aria-hidden="true" />
            <span>RFQ</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
