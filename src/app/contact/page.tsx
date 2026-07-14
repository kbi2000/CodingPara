import { ContactForm } from "@/components/contact-form";
import { Breadcrumbs, PageHero } from "@/components/ui";
import { company } from "@/data/site";
import { metadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";
export const generateMetadata = () =>
  metadata(
    "Contact CodingPara",
    "Discuss a website, SEO, software or digital marketing project with CodingPara Technologies in Noida.",
    "/contact",
  );
export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <PageHero
        eyebrow="Contact"
        title="Tell us what you want to improve."
        copy="Share your goal, timing and constraints. We’ll reply with useful questions and a practical next step."
      />
      <section className="section pt-0">
        <div className="container grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
          <aside className="card h-fit p-6">
            <h2 className="text-xl font-bold">Contact details</h2>
            <address className="muted mt-5 grid gap-4 not-italic">
              <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <span>{company.location}</span>
              <span>{company.hours}</span>
            </address>
            <div
              className="mt-7 aspect-video rounded-xl border border-white/10 bg-[radial-gradient(circle_at_center,#172c4d,#0b0f16)] p-5 text-sm text-slate-300"
              aria-label="Map area placeholder for Noida, Uttar Pradesh"
            >
              Map integration: Noida, Uttar Pradesh
            </div>
          </aside>
          <ContactForm />
        </div>
      </section>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact CodingPara Technologies",
          url: `${company.url}/contact`,
        }}
      />
    </>
  );
}
