import { notFound } from "next/navigation";
import Image from "next/image";
import { posts } from "@/data/blog";
import { Breadcrumbs, CTA, FAQ, PageHero } from "@/components/ui";
import { metadata } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) return {};

  return {
    ...metadata(post.seoTitle, post.description, `/blog/${slug}`, post.image),
    keywords: post.keywords,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) notFound();

  return (
    <>
      <Breadcrumbs
        items={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
      />
      <PageHero
        eyebrow={post.category}
        title={post.title}
        copy={post.description}
      >
        <p className="mt-6 text-sm text-slate-400">
          By {post.author} · Published {post.published} · Updated {post.updated}{" "}
          · {post.minutes} min read
        </p>
      </PageHero>
      <div className="container pb-12">
        <Image
          src={post.image}
          alt={post.imageAlt}
          width={1536}
          height={1024}
          unoptimized
          priority
          sizes="(min-width: 1280px) 1152px, 100vw"
          className="brand-blue-image aspect-[3/2] max-h-[680px] w-full rounded-3xl border border-white/10 object-cover"
        />
      </div>
      <div className="container grid gap-10 pb-20 lg:grid-cols-[220px_1fr]">
        <aside>
          <h2 className="font-bold">On this page</h2>
          <ol className="muted mt-4 grid gap-2 text-sm">
            {post.sections.map((section, index) => (
              <li key={section.heading}>
                <a href={`#section-${index}`}>{section.heading}</a>
              </li>
            ))}
          </ol>
        </aside>
        <article className="prose">
          <p>{post.introduction}</p>
          {post.sections.map((section, index) => (
            <section id={`section-${index}`} key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
          <h2>Common questions</h2>
          <FAQ items={post.faqs} />
        </article>
      </div>
      <CTA />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          image: `https://www.codingpara.com${post.image}`,
          keywords: post.keywords.join(", "),
          datePublished: post.published,
          dateModified: post.updated,
          author: { "@type": "Organization", name: post.author },
          publisher: {
            "@type": "Organization",
            name: "CodingPara Technologies",
          },
          mainEntityOfPage: `https://www.codingpara.com/blog/${post.slug}`,
        }}
      />
    </>
  );
}
