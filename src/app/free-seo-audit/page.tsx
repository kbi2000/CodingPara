import { ContactForm } from "@/components/contact-form";
import { Breadcrumbs, PageHero } from "@/components/ui";
import { metadata } from "@/lib/seo";
export const generateMetadata = () =>
  metadata(
    "Free SEO Audit",
    "Request a focused website SEO review from CodingPara Technologies. Identify technical and search visibility priorities.",
    "/free-seo-audit",
  );
export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Free SEO Audit" }]} />
      <PageHero
        eyebrow="Free SEO audit"
        title="Find the issues limiting your search visibility."
        copy="Share your website and priorities. We’ll review the most important technical, content and local-search signals and recommend where to start."
      />
      <section className="section pt-0">
        <div className="container max-w-3xl">
          <ContactForm kind="audit" />
        </div>
      </section>
    </>
  );
}
