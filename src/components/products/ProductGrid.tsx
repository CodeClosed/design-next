"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import {
  getAllProducts,
  productCategories,
  searchAndFilterProducts,
} from "@/content/products";
import { ProductFilter } from "@/components/products/ProductFilter";
import { ProductCard } from "@/components/products/ProductCard";
import { EmptyState } from "@/components/shared/EmptyState";

export function ProductGrid({
  initialCategory = "all",
  initialQuery = "",
}: {
  initialCategory?: string;
  initialQuery?: string;
}) {
  const searchParams = useSearchParams();
  const allProducts = getAllProducts();

  const urlKey = searchParams?.toString() ?? "";
  const urlCategory = searchParams?.get("category") || initialCategory;
  const urlQuery = searchParams?.get("q") || initialQuery;

  const [override, setOverride] = React.useState<{
    urlKey: string;
    category: string;
    query: string;
  } | null>(null);

  const category = override?.urlKey === urlKey ? override.category : urlCategory;
  const query = override?.urlKey === urlKey ? override.query : urlQuery;

  const updateUrl = React.useCallback((nextCat: string, nextQ: string) => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams();
    if (nextCat && nextCat !== "all") params.set("category", nextCat);
    if (nextQ.trim()) params.set("q", nextQ.trim());
    const qs = params.toString();
    const targetUrl = qs ? `/products?${qs}` : "/products";
    window.history.replaceState(null, "", targetUrl);
  }, []);

  const handleCategoryChange = (nextCategory: string) => {
    setOverride({ urlKey, category: nextCategory, query });
    updateUrl(nextCategory, query);
  };

  const handleSearchChange = (nextQuery: string) => {
    setOverride({ urlKey, category, query: nextQuery });
    updateUrl(category, nextQuery);
  };

  const handleReset = () => {
    setOverride({ urlKey, category: "all", query: "" });
    updateUrl("all", "");
  };

  const filteredProducts = React.useMemo(
    () => searchAndFilterProducts({ query, category }),
    [query, category]
  );

  return (
    <div className="space-y-8">
      <ProductFilter
        categories={productCategories}
        selectedCategory={category}
        searchQuery={query}
        resultCount={filteredProducts.length}
        totalCount={allProducts.length}
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
        onReset={handleReset}
      />

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No matching equipment found"
          description="Try broadening your search keyword (e.g., 'evaporator', 'mill', 'pan') or resetting the equipment category filter."
          actionLabel="Show All Equipment"
          onReset={handleReset}
        />
      )}
    </div>
  );
}
