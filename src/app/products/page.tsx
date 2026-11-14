import * as React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageContainer } from "@/components/shared/PageContainer";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Badge, SampleNoticeBanner } from "@/components/ui/Badge";
import { EnquiryCtaBanner } from "@/components/home/EnquiryCtaBanner";

export const metadata: Metadata = {
  title: "Products & Equipment Catalogue",
  description:
    "Browse sugar processing equipment including 4-roller cane mills, fibrizers, falling film evaporators, continuous vacuum pans, batch centrifugals, and distillery ZLD evaporators.",
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return (
    <>
      <section className="border-b border-[#DCE2E6] bg-[#0E1F2B] py-14 text-white">
        <PageContainer>
          <Breadcrumbs items={[{ label: "Products" }]} theme="dark" />
          <div className="max-w-3xl">
            <Badge variant="sample" className="mb-4 bg-[#142B3A] text-[#F5C573]">
              8 Illustrative Equipment Lines · Centralized Data Layer
            </Badge>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Sugar Processing Equipment Catalogue
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#C5D5E0]">
              Search by model designation, capacity, or process application, or
              filter by plant station to inspect full mechanical and thermal
              specification tables.
            </p>
          </div>
        </PageContainer>
      </section>

      <section className="py-12 lg:py-16">
        <PageContainer>
          <SampleNoticeBanner
            title="Illustrative Catalogue"
            description="Specifications, capacity ranges, and model designations shown below are realistic starter template entries in src/content/products/index.ts awaiting company-specific engineering approval."
            className="mb-8"
          />

          <React.Suspense
            fallback={
              <div className="rounded-sm border border-[#DCE2E6] bg-white p-8 text-sm text-[#546470]">
                Loading equipment catalogue...
              </div>
            }
          >
            <ProductGrid />
          </React.Suspense>
        </PageContainer>
      </section>

      <EnquiryCtaBanner />
    </>
  );
}
