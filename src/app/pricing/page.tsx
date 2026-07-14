import Link from "next/link";
import { PageHero } from "@/components/ui";
import { metadata } from "@/lib/seo";
export const generateMetadata = () =>
  metadata(
    "Project Pricing",
    "Understand how CodingPara scopes and prices website, SEO, software and marketing engagements.",
    "/pricing",
  );
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Transparent scoping"
        title="Pricing shaped by outcomes, scope and responsibility."
        copy="We do not publish misleading fixed packages for custom work. These engagement types help you choose a starting point; your proposal will itemise the actual deliverables."
      />
      <section className="section pt-0">
        <div className="grid-auto container">
          {[
            [
              "Focused foundation",
              "For a defined website, audit or campaign setup with clear boundaries.",
            ],
            [
              "Growth engagement",
              "For ongoing SEO, content, optimisation or marketing with monthly priorities.",
            ],
            [
              "Custom product",
              "For commerce, software and integrations delivered through planned milestones.",
            ],
          ].map(([h, c]) => (
            <article className="card p-6" key={h}>
              <h2 className="text-xl font-bold">{h}</h2>
              <p className="muted mt-3">{c}</p>
              <Link className="btn btn-primary mt-6" href="/contact">
                Request an itemised quote
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
