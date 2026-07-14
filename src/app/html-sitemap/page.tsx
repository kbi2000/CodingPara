import Link from "next/link";
import { services } from "@/data/site";
import { posts } from "@/data/blog";
import { PageHero } from "@/components/ui";
import { metadata } from "@/lib/seo";
export const generateMetadata = () =>
  metadata(
    "HTML Sitemap",
    "Browse every main public page on the CodingPara Technologies website.",
    "/html-sitemap",
  );
export default function Page() {
  const groups = [
    {
      name: "Company",
      links: [
        ["Home", "/"],
        ["About", "/about"],
        ["Portfolio", "/portfolio"],
        ["Case studies", "/case-studies"],
        ["Pricing", "/pricing"],
        ["Blog", "/blog"],
        ["Career", "/career"],
        ["Contact", "/contact"],
        ["FAQ", "/faq"],
        ["Free SEO audit", "/free-seo-audit"],
      ],
    },
    {
      name: "Services",
      links: services.map((s) => [s.name, `/services/${s.slug}`]),
    },
    { name: "Articles", links: posts.map((p) => [p.title, `/blog/${p.slug}`]) },
    {
      name: "Policies",
      links: [
        ["Privacy policy", "/privacy-policy"],
        ["Terms of service", "/terms-of-service"],
        ["Refund policy", "/refund-policy"],
        ["Cookie policy", "/cookie-policy"],
      ],
    },
  ];
  return (
    <>
      <PageHero
        eyebrow="Navigation"
        title="HTML sitemap"
        copy="A human-readable directory of canonical public pages."
      />
      <section className="grid-auto container pb-20">
        {groups.map((g) => (
          <section className="card p-6" key={g.name}>
            <h2 className="text-xl font-bold">{g.name}</h2>
            <ul className="muted mt-4 grid gap-2">
              {g.links.map(([a, b]) => (
                <li key={b}>
                  <Link href={b}>{a}</Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </section>
    </>
  );
}
