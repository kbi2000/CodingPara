import { CTA, PageHero, ServiceCard } from "@/components/ui";
import { services } from "@/data/site";
import { metadata } from "@/lib/seo";
export const generateMetadata = () =>
  metadata(
    "Digital Services",
    "Explore website, e-commerce, SEO, marketing, software, WordPress, branding and social media services.",
    "/services",
  );
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Digital services"
        title="Strategy, design and technology working as one."
        copy="Choose a focused engagement or combine disciplines around a measurable business goal."
      />
      <section className="section pt-0">
        <div className="grid-auto container">
          {services.map((s, i) => (
            <ServiceCard service={s} index={i} key={s.slug} />
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
