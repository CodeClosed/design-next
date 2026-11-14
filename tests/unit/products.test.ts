import { describe, expect, it } from "vitest";
import {
  getAllProducts,
  getProductBySlug,
  getProductsByCategory,
  getRelatedProducts,
  searchAndFilterProducts,
} from "@/content/products";

describe("Product Catalogue Content Layer", () => {
  it("contains at least 6 sample equipment entries", () => {
    const all = getAllProducts();
    expect(all.length).toBeGreaterThanOrEqual(6);
    expect(all.every((item) => item.isSampleContent)).toBe(true);
  });

  it("retrieves an equipment item accurately by slug", () => {
    const product = getProductBySlug("heavy-duty-cane-milling-tandem");
    expect(product).toBeDefined();
    expect(product?.modelCode).toBe("VSP-MT-4R");
    expect(product?.specifications.length).toBeGreaterThan(0);
  });

  it("filters products strictly by category", () => {
    const filtered = getProductsByCategory("heating-evaporation");
    expect(filtered.length).toBeGreaterThan(0);
    expect(filtered.every((p) => p.category === "heating-evaporation")).toBe(true);
  });

  it("searches by keyword and model code while respecting category filter", () => {
    const matches = searchAndFilterProducts({
      query: "falling film",
      category: "heating-evaporation",
    });
    expect(matches.length).toBe(1);
    expect(matches[0]?.slug).toBe("robert-type-falling-film-evaporator");

    const mismatch = searchAndFilterProducts({
      query: "falling film",
      category: "cane-milling",
    });
    expect(mismatch).toHaveLength(0);
  });

  it("resolves valid related products without including the source product", () => {
    const source = getProductBySlug("robert-type-falling-film-evaporator");
    expect(source).toBeDefined();
    if (!source) return;
    const related = getRelatedProducts(source);
    expect(related.length).toBeGreaterThan(0);
    expect(related.some((r) => r.slug === source.slug)).toBe(false);
  });
});
