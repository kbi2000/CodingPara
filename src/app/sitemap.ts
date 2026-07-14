import type { MetadataRoute } from "next";
import { company, projects, services } from "@/data/site";
import { posts } from "@/data/blog";
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    "",
    "about",
    "services",
    "portfolio",
    "case-studies",
    "pricing",
    "blog",
    "career",
    "contact",
    "faq",
    "free-seo-audit",
    "privacy-policy",
    "terms-of-service",
    "refund-policy",
    "cookie-policy",
    "html-sitemap",
  ];
  return [
    ...pages.map((x) => ({
      url: `${company.url}/${x}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: x === "" ? 1 : 0.7,
    })),
    ...services.map((x) => ({
      url: `${company.url}/services/${x.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...posts.map((x) => ({
      url: `${company.url}/blog/${x.slug}`,
      lastModified: new Date(x.updated),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...projects.map((x) => ({
      url: `${company.url}/case-studies/${x.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
