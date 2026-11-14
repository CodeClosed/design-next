import React from "react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Header } from "@/components/layout/Header";
import { ProductSpecsTable } from "@/components/products/ProductSpecsTable";

const replaceMock = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({ replace: replaceMock }),
  useSearchParams: () => new URLSearchParams(),
  usePathname: () => "/products",
}));

describe("Reusable UI Components", () => {
  beforeEach(() => {
    replaceMock.mockClear();
  });

  it("filters products interactively via search input and category buttons", () => {
    render(<ProductGrid />);

    expect(screen.getByText(/4-Roller Heavy-Duty Cane Milling Tandem/i)).toBeInTheDocument();

    const searchInput = screen.getByRole("searchbox");
    fireEvent.change(searchInput, { target: { value: "Centrifugal" } });

    expect(
      screen.getByText(/Fully Automatic High-G Batch Centrifugal/i)
    ).toBeInTheDocument();
    expect(
      screen.queryByText(/4-Roller Heavy-Duty Cane Milling Tandem/i)
    ).not.toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: "nonexistent-equipment-xyz" } });
    expect(screen.getByText(/No matching equipment found/i)).toBeInTheDocument();

    const resetBtn = screen.getByRole("button", { name: /Show All Equipment/i });
    fireEvent.click(resetBtn);
    expect(screen.getByText(/4-Roller Heavy-Duty Cane Milling Tandem/i)).toBeInTheDocument();
  });

  it("toggles accessible mobile menu drawer state in Header", () => {
    render(<Header />);

    const toggleButton = screen.getByRole("button", { name: /Open navigation menu/i });
    expect(toggleButton).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("navigation", { name: /Mobile Primary/i })).toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute("aria-expanded", "false");
  });

  it("renders ProductSpecsTable with semantic caption and scope attributes", () => {
    render(
      <ProductSpecsTable
        productName="Test Evaporator"
        specifications={[
          { parameter: "Heating Surface Area", value: "4,500", unit: "m²" },
        ]}
      />
    );

    expect(
      screen.getByRole("region", { name: /Technical Specifications — Test Evaporator/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("columnheader", { name: "Parameter" })).toHaveAttribute(
      "scope",
      "col"
    );
    expect(
      screen.getByRole("rowheader", { name: "Heating Surface Area" })
    ).toHaveAttribute("scope", "row");
  });
});
