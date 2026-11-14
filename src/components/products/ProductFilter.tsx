"use client";

import * as React from "react";
import { Search, X } from "lucide-react";
import type { ProductCategory } from "@/types/content";
import { cn } from "@/lib/utils";

export interface ProductFilterProps {
  categories: ProductCategory[];
  selectedCategory: string;
  searchQuery: string;
  resultCount: number;
  totalCount: number;
  onCategoryChange: (categoryId: string) => void;
  onSearchChange: (query: string) => void;
  onReset: () => void;
}

export function ProductFilter({
  categories,
  selectedCategory,
  searchQuery,
  resultCount,
  totalCount,
  onCategoryChange,
  onSearchChange,
  onReset,
}: ProductFilterProps) {
  const inputId = React.useId();
  const hasActiveFilter = selectedCategory !== "all" || searchQuery.trim().length > 0;

  return (
    <search className="rounded-sm border border-[#DCE2E6] bg-white p-5">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-5"
        aria-label="Filter equipment catalogue"
      >
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <label
              htmlFor={inputId}
              className="mb-1.5 block text-sm font-semibold text-[#142B3A]"
            >
              Search equipment, model code, or process application
            </label>
            <div className="relative">
              <Search
                className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-[#546470]"
                aria-hidden="true"
              />
              <input
                id={inputId}
                type="search"
                name="q"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="e.g., Evaporator, VSP-MT-4R, 5000 TCD, Centrifugal..."
                autoCorrect="off"
                autoCapitalize="none"
                spellCheck={false}
                className="form-control w-full rounded-sm border border-[#B9C6D0] bg-white py-2.5 pr-10 pl-10 text-sm text-[#202A30] placeholder:text-[#6B7A85]"
              />
              {searchQuery ? (
                <button
                  type="button"
                  onClick={() => onSearchChange("")}
                  aria-label="Clear search query"
                  className="absolute top-1/2 right-2.5 -translate-y-1/2 rounded-sm p-1 text-[#546470] hover:bg-[#EEF3F6] hover:text-[#142B3A]"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              ) : null}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 lg:col-span-6 lg:justify-end">
            <p className="font-mono-tech text-xs text-[#546470]" aria-live="polite">
              Showing <strong className="text-[#142B3A]">{resultCount}</strong> of{" "}
              <strong className="text-[#142B3A]">{totalCount}</strong> equipment units
            </p>
            {hasActiveFilter ? (
              <button
                type="button"
                onClick={onReset}
                className="inline-flex min-h-10 items-center gap-1.5 rounded-sm border border-[#C6D4DE] bg-[#F7F8F6] px-3 py-1.5 text-xs font-semibold text-[#142B3A] hover:bg-[#E7EDF1]"
              >
                <X className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Reset Filters</span>
              </button>
            ) : null}
          </div>
        </div>

        {/* Category Filter Buttons */}
        <div role="group" aria-label="Equipment categories" className="flex flex-wrap gap-2">
          <button
            type="button"
            aria-pressed={selectedCategory === "all"}
            onClick={() => onCategoryChange("all")}
            className={cn(
              "min-h-10 rounded-sm border px-3.5 py-2 text-xs font-semibold transition-colors",
              selectedCategory === "all"
                ? "border-[#142B3A] bg-[#142B3A] text-white"
                : "border-[#DCE2E6] bg-[#F7F8F6] text-[#202A30] hover:border-[#31566D]"
            )}
          >
            All Equipment ({totalCount})
          </button>
          {categories.map((cat) => {
            const active = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                aria-pressed={active}
                onClick={() => onCategoryChange(cat.id)}
                className={cn(
                  "min-h-10 rounded-sm border px-3.5 py-2 text-xs font-semibold transition-colors",
                  active
                    ? "border-[#142B3A] bg-[#142B3A] text-white"
                    : "border-[#DCE2E6] bg-[#F7F8F6] text-[#202A30] hover:border-[#31566D]"
                )}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </form>
    </search>
  );
}
