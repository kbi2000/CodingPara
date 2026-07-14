import { jobs } from "@/data/site";
import { PageHero } from "@/components/ui";
import { metadata } from "@/lib/seo";
export const generateMetadata = () =>
  metadata(
    "Careers",
    "Explore genuine open roles at CodingPara Technologies. Job listings and structured data appear only while roles are open.",
    "/career",
  );
export default function Page() {
  const open = jobs.filter((j) => j.status === "open");
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Help us build useful digital experiences."
        copy="We publish roles only when applications are genuinely open, with clear expectations and working arrangements."
      />
      <section className="container pb-20">
        <h2 className="h2">Current openings</h2>
        {open.length === 0 ? (
          <div className="card mt-7 p-8">
            <p className="muted">
              There are no confirmed open positions at this time. Please check
              this page again later.
            </p>
          </div>
        ) : null}
      </section>
    </>
  );
}
