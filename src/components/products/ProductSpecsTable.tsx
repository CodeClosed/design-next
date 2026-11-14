import * as React from "react";
import type { ProductSpecification } from "@/types/content";

export function ProductSpecsTable({
  productName,
  specifications,
}: {
  productName: string;
  specifications: ProductSpecification[];
}) {
  const captionId = `specs-caption-${productName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <div
      tabIndex={0}
      role="region"
      aria-labelledby={captionId}
      className="spec-table-wrapper"
    >
      <table className="spec-table text-left text-sm">
        <caption
          id={captionId}
          className="border-b border-[#DCE2E6] bg-[#F7F8F6] px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[#31566D]"
        >
          Technical Specifications — {productName} (Sample Design Parameters)
        </caption>
        <thead>
          <tr className="bg-[#142B3A] text-xs font-semibold uppercase tracking-wider text-white">
            <th scope="col" className="px-4 py-3">
              Parameter
            </th>
            <th scope="col" className="px-4 py-3">
              Specification / Range
            </th>
            <th scope="col" className="px-4 py-3">
              Unit / Basis
            </th>
          </tr>
        </thead>
        <tbody>
          {specifications.map((spec) => (
            <tr
              key={spec.parameter}
              className="border-t border-[#ECEFF2] hover:bg-[#FAFBFD]"
            >
              <th
                scope="row"
                className="px-4 py-3.5 font-semibold text-[#142B3A]"
              >
                {spec.parameter}
              </th>
              <td className="font-mono-tech px-4 py-3.5 font-medium text-[#202A30]">
                {spec.value}
              </td>
              <td className="px-4 py-3.5 text-[#546470]">{spec.unit || "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
