import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: "https://platohiring.com",
    sitemap: "https://platohiring.com/sitemap.xml",
  };
}
