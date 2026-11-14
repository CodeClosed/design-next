import { companyProfile } from "@/content/company";
import type { Product } from "@/types/content";

export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured && /^https?:\/\//.test(configured)) {
    return configured.replace(/\/+$/, "");
  }
  return "http://localhost:3000";
}

export function buildOrganizationJsonLd() {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyProfile.name,
    url: siteUrl,
    description: companyProfile.description,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: companyProfile.contact.salesEmail,
        telephone: companyProfile.contact.phone,
      },
    ],
  };
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.label,
      ...(item.href ? { item: `${siteUrl}${item.href}` } : {}),
    })),
  };
}

export function buildProductJsonLd(product: Product) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    sku: product.modelCode,
    category: product.categoryLabel,
    description: product.shortDescription,
    url: `${siteUrl}/products/${product.slug}`,
    brand: {
      "@type": "Brand",
      name: companyProfile.name,
    },
    image: product.images[0] ? `${siteUrl}${product.images[0].src}` : undefined,
  };
}
