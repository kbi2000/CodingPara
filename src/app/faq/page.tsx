import { FAQ, PageHero } from "@/components/ui";
import { faqs } from "@/data/site";
import { metadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
export const generateMetadata = () =>
  metadata(
    "Frequently Asked Questions",
    "Answers about CodingPara website development, SEO, pricing, timelines, hosting and support.",
    "/faq",
  );
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Useful answers before we work together."
        copy="Learn how we scope, deliver and support digital projects."
      />
      <section className="container max-w-4xl pb-20">
        <FAQ items={faqs} />
      </section>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((x) => ({
            "@type": "Question",
            name: x.q,
            acceptedAnswer: { "@type": "Answer", text: x.a },
          })),
        }}
      />
    </>
  );
}
