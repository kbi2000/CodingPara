import type { Metadata } from "next";
import { company } from "@/data/site";

export function metadata(
  title: string,
  description: string,
  path = "/",
  image = "/opengraph-image",
): Metadata {
  const url = new URL(path, company.url).toString();
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: company.name,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: company.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
