import Link from "next/link";
import { projects } from "@/data/site";
import { PageHero } from "@/components/ui";
import { metadata } from "@/lib/seo";
export const generateMetadata = () =>
  metadata(
    "Case Studies",
    "Explore how CodingPara approaches website, commerce and software challenges without unverified performance claims.",
    "/case-studies",
  );
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="The thinking behind purposeful digital work."
        copy="These reference studies demonstrate process and architecture. Results remain clearly marked until verified client data is supplied."
      />
      <section className="section pt-0">
        <div className="grid-auto container">
          {projects.map((p) => (
            <article className="card p-6" key={p.slug}>
              <span className="eyebrow">{p.industry}</span>
              <h2 className="mt-3 text-xl font-bold">{p.title}</h2>
              <p className="muted mt-3">{p.description}</p>
              <span className="mt-4 block text-xs text-amber-300">
                {p.status}
              </span>
              <Link
                className="mt-5 inline-block text-[#3b82f6]"
                href={`/case-studies/${p.slug}`}
              >
                Read study →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
