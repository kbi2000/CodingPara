import Link from "next/link";
import Image from "next/image";
import { blogPage, posts } from "@/data/blog";
import { PageHero } from "@/components/ui";
import { metadata } from "@/lib/seo";
export const generateMetadata = () =>
  metadata(blogPage.seoTitle, blogPage.seoDescription, "/blog");
export default function Page() {
  return (
    <>
      <PageHero
        eyebrow={blogPage.eyebrow}
        title={blogPage.title}
        copy={blogPage.description}
      />
      <section className="section pt-0">
        <div className="grid-auto container">
          {posts.map((p) => (
            <article className="card p-6" key={p.slug}>
              <Link href={`/blog/${p.slug}`} tabIndex={-1}>
                <Image
                  src={p.image}
                  alt={p.imageAlt}
                  width={1536}
                  height={1024}
                  unoptimized
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="brand-blue-image mb-6 aspect-[3/2] w-full rounded-xl object-cover"
                />
              </Link>
              <span className="eyebrow">{p.category}</span>
              <h2 className="mt-4 text-xl font-bold">
                <Link href={`/blog/${p.slug}`}>{p.title}</Link>
              </h2>
              <p className="muted mt-3">{p.description}</p>
              <p className="mt-5 text-xs text-slate-500">
                {p.author} · {p.published} · {p.minutes} min
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
