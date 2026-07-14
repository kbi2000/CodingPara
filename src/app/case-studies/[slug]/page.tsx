import { notFound } from "next/navigation";
import { projects } from "@/data/site";
import { Breadcrumbs, CTA, PageHero } from "@/components/ui";
import { metadata } from "@/lib/seo";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params,
    p = projects.find((x) => x.slug === slug);
  return p
    ? metadata(`${p.title} Case Study`, p.description, `/case-studies/${slug}`)
    : {};
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params,
    p = projects.find((x) => x.slug === slug);
  if (!p) notFound();
  const sections = [
    [
      "Client challenge",
      "The project brief is represented as a general business scenario until the client approves publication.",
    ],
    [
      "Research",
      "Audience tasks, search demand, competitor patterns and operational constraints guide priorities.",
    ],
    ["Proposed solution", p.description],
    ["Technology used", p.tech.join(", ")],
    [
      "Development process",
      "Work moves through discovery, prototypes, incremental builds, accessibility checks and launch validation.",
    ],
    [
      "SEO work",
      "Information architecture, metadata, structured data, internal linking and performance are planned from the start.",
    ],
    [
      "Performance improvement",
      "Baseline and post-launch measurements are awaiting verified client data.",
    ],
    ["Results", p.status],
    [
      "Client testimonial",
      "No testimonial is published until supplied and explicitly approved by the client.",
    ],
  ];
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Case studies", href: "/case-studies" },
          { label: p.title },
        ]}
      />
      <PageHero
        eyebrow={`${p.industry} case study`}
        title={p.title}
        copy={p.description}
      />
      <article className="prose container pb-20">
        {sections.map(([h, c]) => (
          <section key={h}>
            <h2>{h}</h2>
            <p>{c}</p>
          </section>
        ))}
      </article>
      <CTA />
    </>
  );
}
