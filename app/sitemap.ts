import type { MetadataRoute } from "next";

import { blogPosts } from "@/lib/blog";
import { categories } from "@/lib/services";

const baseUrl = "https://www.aestheticdentalbismarck.com";
const lastModified = new Date("2026-11-12");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/services", priority: 0.9 },
    { path: "/new-patients", priority: 0.8 },
    { path: "/testimonials", priority: 0.7 },
    { path: "/blog", priority: 0.7 },
    { path: "/prosthodontist", priority: 0.7 },
    { path: "/patient-referral", priority: 0.6 },
    { path: "/cherry-financing", priority: 0.6 },
    { path: "/contact", priority: 0.9 },
    { path: "/privacy-policy", priority: 0.3 },
    { path: "/hipaa-privacy-policy", priority: 0.3 },
    { path: "/disclaimer", priority: 0.3 },
    { path: "/accessibility-statement", priority: 0.3 },
    { path: "/sitemap", priority: 0.2 },
  ];

  const categoryRoutes = categories.flatMap((category) => [
    {
      path: `/services/${category.slug}`,
      priority: 0.8,
    },
    ...category.treatments.map((treatment) => ({
      path: `/services/${category.slug}/${treatment.slug}`,
      priority: 0.6,
    })),
  ]);

  const blogRoutes = blogPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    priority: 0.5,
  }));

  return [...staticRoutes, ...categoryRoutes, ...blogRoutes].map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.path === "" ? "weekly" : "monthly",
    priority: route.priority,
  }));
}
