import { CTA, PageHero, SectionHeading } from "@/components/ui";
import { metadata } from "@/lib/seo";
export const generateMetadata = () =>
  metadata(
    "About Us",
    "Meet CodingPara Technologies, a human-centred digital agency serving businesses from Noida and across India.",
    "/about",
  );
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="About CodingPara"
        title="Built on careful thinking, clear communication and useful technology."
        copy="CodingPara Technologies helps businesses create better digital foundations without unnecessary complexity."
      />
      <section className="section pt-0">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Our approach"
              title="A more human way to build."
            />
            <p className="muted leading-8">
              We begin by understanding the people behind a business and the
              customers it needs to serve. Strategy, design, technology and
              measurement then work together around that shared context.
            </p>
          </div>
          <div className="grid gap-3">
            {[
              [
                "Mission",
                "Make capable digital services accessible through honest advice and careful delivery.",
              ],
              [
                "Vision",
                "Become a trusted long-term digital partner for growing Indian businesses.",
              ],
              [
                "Values",
                "Clarity, craftsmanship, curiosity, responsibility and respect for the user.",
              ],
            ].map(([a, b]) => (
              <div className="card p-6" key={a}>
                <h3 className="font-bold">{a}</h3>
                <p className="muted mt-2">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
