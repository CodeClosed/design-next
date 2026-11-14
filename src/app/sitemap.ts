import type { MetadataRoute } from "next";
import { getAllProducts } from "@/content/products";
import { getAllProjects } from "@/content/projects";
import { getAllIndustries } from "@/content/industries";
import { getSiteUrl } from "@/lib/seo/structured-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/industries",
    "/capabilities",
    "/projects",
    "/quality",
    "/resources",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  getAllProducts().forEach((product) => {
    entries.push({
      url: `${siteUrl}/products/${product.slug}`,
      changeFrequency: "monthly",
      priority: 0.9,
    });
  });

  getAllIndustries().forEach((industry) => {
    entries.push({
      url: `${siteUrl}/industries/${industry.slug}`,
      changeFrequency: "monthly",
      priority: 0.75,
    });
  });

  getAllProjects().forEach((project) => {
    entries.push({
      url: `${siteUrl}/projects/${project.slug}`,
      changeFrequency: "monthly",
      priority: 0.75,
    });
  });

  return entries;
}
