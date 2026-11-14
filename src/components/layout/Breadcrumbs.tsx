import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { buildBreadcrumbJsonLd, type BreadcrumbItem } from "@/lib/seo/structured-data";

export function Breadcrumbs({
  items,
  theme = "light",
}: {
  items: BreadcrumbItem[];
  theme?: "light" | "dark";
}) {
  const fullItems: BreadcrumbItem[] = [{ label: "Home", href: "/" }, ...items];
  const jsonLd = buildBreadcrumbJsonLd(fullItems);
  const isDark = theme === "dark";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol
          className={`flex flex-wrap items-center gap-1.5 text-xs font-medium ${
            isDark ? "text-[#B5C7D4]" : "text-[#546470]"
          }`}
        >
          {fullItems.map((item, idx) => {
            const isLast = idx === fullItems.length - 1;
            return (
              <li key={`${item.label}-${idx}`} className="inline-flex items-center gap-1.5">
                {idx > 0 ? (
                  <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
                ) : null}
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className={`hover:underline underline-offset-4 ${
                      isDark ? "hover:text-white" : "hover:text-[#142B3A]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className={isDark ? "text-[#D99A36]" : "text-[#142B3A] font-semibold"}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
