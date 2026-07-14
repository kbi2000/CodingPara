import { notFound } from "next/navigation";
import Link from "next/link";
import { Check } from "lucide-react";
import {
  Breadcrumbs,
  CTA,
  FAQ,
  PageHero,
  SectionHeading,
  ServiceCard,
} from "@/components/ui";
import { faqs, process, projects, services } from "@/data/site";
import { metadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return s
    ? metadata(
        `${s.name}`,
        `${s.description} Talk to CodingPara Technologies about ${s.intent}.`,
        `/services/${s.slug}`,
      )
    : {};
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const related = services.filter((x) => x.slug !== s.slug).slice(0, 3);
  const serviceFaq = [
    {
      q: `What is included in ${s.name.toLowerCase()}?`,
      a: `We shape scope around your goals. A proposal identifies discovery, deliverables, responsibilities, milestones, testing and post-launch support before work begins.`,
    },
    {
      q: "Can you work with our existing systems?",
      a: `Yes. We review the current technology, content and constraints before recommending a rebuild, migration or targeted improvement.`,
    },
    ...faqs.slice(0, 2),
  ];
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Services", href: "/services" }, { label: s.name }]}
      />
      <PageHero
        eyebrow={s.intent}
        title={`${s.name} built around measurable growth.`}
        copy={s.description}
      >
        <div className="mt-8 flex gap-3">
          <Link href="/contact" className="btn btn-primary">
            Request a proposal
          </Link>
          <Link href="/portfolio" className="btn">
            See relevant work
          </Link>
        </div>
      </PageHero>
      <section className="section bg-[#090d14]">
        <div className="container">
          <SectionHeading
            eyebrow="Overview"
            title={`A practical approach to ${s.name.toLowerCase()}.`}
            copy={`${s.short} We start with the user journey and business constraint, then select the leanest technology and delivery plan that fits.`}
          />
          <div className="grid-auto">
            {s.benefits.map((x) => (
              <div className="card p-6" key={x}>
                <Check className="text-[#3b82f6]" />
                <h3 className="mt-4 text-lg font-bold">{x}</h3>
                <p className="muted mt-2">
                  Delivered with clear acceptance criteria, quality checks and
                  documentation.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Challenges"
              title="Problems this service solves."
            />
            <ul className="grid gap-3">
              {s.problems.map((x) => (
                <li className="card p-4" key={x}>
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading
              eyebrow="Benefits"
              title="A foundation you can build on."
            />
            <ul className="grid gap-3">
              {[
                ...s.benefits,
                "Accessible, mobile-first experience",
                "Measurement and handover plan",
              ].map((x) => (
                <li className="flex gap-3" key={x}>
                  <Check className="text-[#3b82f6]" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section bg-[#090d14]">
        <div className="container">
          <SectionHeading
            eyebrow="Process"
            title="From context to confident delivery."
          />
          <ol className="grid-auto">
            {process.map((x, i) => (
              <li className="card p-5" key={x}>
                <span className="text-[#3b82f6]">{i + 1}</span>
                <h3 className="mt-3 font-bold">{x}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Technology"
            title="Tools selected for the job, not the trend."
          />
          <div className="flex flex-wrap gap-3">
            {s.technologies.map((x) => (
              <span
                className="rounded-full border border-white/10 px-4 py-2"
                key={x}
              >
                {x}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-[#090d14]">
        <div className="container">
          <SectionHeading
            eyebrow="Relevant work"
            title="Project patterns related to this service."
          />
          <div className="grid-auto">
            {projects.slice(0, 2).map((p) => (
              <div className="card p-6" key={p.slug}>
                <span className="eyebrow">{p.industry}</span>
                <h3 className="mt-3 text-xl font-bold">{p.title}</h3>
                <p className="muted mt-3">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Questions"
            title={`Common questions about ${s.name.toLowerCase()}.`}
          />
          <FAQ items={serviceFaq} />
        </div>
      </section>
      <section className="section bg-[#090d14]">
        <div className="container">
          <SectionHeading
            eyebrow="Related services"
            title="Connect the next part of the journey."
          />
          <div className="grid-auto">
            {related.map((x) => (
              <ServiceCard key={x.slug} service={x} />
            ))}
          </div>
        </div>
      </section>
      <CTA />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.name,
          description: s.description,
          provider: {
            "@type": "Organization",
            name: "CodingPara Technologies",
          },
          areaServed: "India",
          url: `https://www.codingpara.com/services/${s.slug}`,
        }}
      />
    </>
  );
}
