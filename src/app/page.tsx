import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Gauge,
  LockKeyhole,
  Smartphone,
  Search,
  Headphones,
} from "lucide-react";
import { CTA, FAQ, SectionHeading, ServiceCard } from "@/components/ui";
import {
  faqs,
  process,
  projects,
  services,
  technologies,
  company,
} from "@/data/site";
import { posts } from "@/data/blog";
export default function Home() {
  const problems = [
    "Outdated website",
    "Slow loading speed",
    "Low Google rankings",
    "Poor mobile experience",
    "Low lead conversion",
    "No online sales",
    "Difficult content management",
    "Weak brand identity",
  ];
  const reasons = [
    "Custom solutions",
    "SEO-ready architecture",
    "Performance-focused development",
    "Transparent communication",
    "Scalable technology",
    "Mobile-first design",
    "Security best practices",
    "Post-launch support",
  ];
  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#3b82f6]/10 blur-[110px]" />
        <div className="relative container grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="eyebrow">Digital excellence agency</p>
            <h1 className="title mt-4">
              A Premium Digital Agency for{" "}
              <span className="text-[#3b82f6]">Exceptional Brands.</span>
            </h1>
            <p className="muted mt-6 max-w-2xl text-lg leading-8">
              CodingPara helps ambitious businesses grow through custom
              development, strategic marketing, search optimisation and modern
              design.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn btn-primary" href="/contact">
                Get Started <ArrowRight size={17} />
              </Link>
              <Link className="btn" href="/services">
                Explore Services
              </Link>
              <a
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
                href={`https://wa.me/${company.phoneHref.slice(1)}?text=${encodeURIComponent(company.whatsappMessage)}`}
              >
                WhatsApp Us
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs text-slate-300">
              {[
                [Search, "SEO-focused development"],
                [Smartphone, "Mobile responsive"],
                [Gauge, "High-speed performance"],
                [LockKeyhole, "Secure development"],
                [Headphones, "Ongoing support"],
              ].map(([Icon, label]) => (
                <span className="flex items-center gap-2" key={String(label)}>
                  <Icon className="text-[#3b82f6]" size={16} />
                  {label as string}
                </span>
              ))}
            </div>
          </div>
          <div className="card relative p-5 shadow-2xl">
            <div className="flex gap-2 border-b border-white/10 pb-4">
              <i className="size-2.5 rounded-full bg-rose-400" />
              <i className="size-2.5 rounded-full bg-amber-300" />
              <i className="size-2.5 rounded-full bg-emerald-400" />
              <span className="ml-auto text-xs text-slate-500">
                codingpara / growth-system
              </span>
            </div>
            <div className="grid gap-4 py-5 sm:grid-cols-2">
              <div className="rounded-xl bg-[#151c28] p-5 sm:col-span-2">
                <span className="text-xs text-slate-500">
                  Organic visibility
                </span>
                <div className="mt-4 flex h-28 items-end gap-2">
                  {[25, 38, 31, 49, 62, 58, 78, 88].map((h, i) => (
                    <i
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-[#1d4ed8] to-[#60a5fa]"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
              <div className="rounded-xl bg-[#151c28] p-4">
                <span className="text-xs text-slate-500">Core Web Vitals</span>
                <b className="mt-2 block text-2xl text-[#3b82f6]">Ready</b>
              </div>
              <div className="rounded-xl bg-[#151c28] p-4">
                <span className="text-xs text-slate-500">
                  Conversion tracking
                </span>
                <b className="mt-2 block text-2xl">Connected</b>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        aria-label="Technologies"
        className="border-y border-white/10 py-6"
      >
        <div className="container flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm font-bold text-slate-400">
          {technologies.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </section>
      <section className="section section-light">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="About CodingPara"
              title="A more human way to build and connect."
              copy="We combine careful listening, clear strategy and capable technology. The result is a useful digital presence that reflects your business and is easier to grow."
            />
            <div className="flex gap-3">
              <Link className="btn btn-primary" href="/about">
                Learn about us
              </Link>
              <Link className="btn" href="/services">
                View services
              </Link>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {company.stats
              .filter((x) => x.value)
              .map((x) => (
                <div className="card p-6" key={x.label}>
                  <strong className="text-2xl">{x.value}</strong>
                  <span className="muted mt-2 block text-sm">{x.label}</span>
                </div>
              ))}
            {[
              "Find the right fit",
              "Focus on what matters",
              "Start with confidence",
            ].map((x) => (
              <div className="card p-6" key={x}>
                <CheckCircle2 className="text-[#3b82f6]" />
                <h3 className="mt-4 font-bold">{x}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-[#090d14]">
        <div className="container">
          <SectionHeading
            eyebrow="Our services"
            title="Complete digital solutions for growing businesses."
            copy="One accountable partner from digital foundations to sustainable demand."
          />
          <div className="grid-auto">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>
      <section className="section section-light">
        <div className="container">
          <SectionHeading
            eyebrow="Problems we solve"
            title="Remove the friction holding your digital growth back."
          />
          <div className="grid-auto">
            {problems.map((x) => (
              <div className="card p-5 font-bold" key={x}>
                <CheckCircle2 className="mb-4 text-[#3b82f6]" />
                {x}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-[#090d14]">
        <div className="container">
          <SectionHeading
            eyebrow="Why CodingPara"
            title="Engineered for performance. Managed with clarity."
          />
          <div className="grid-auto">
            {reasons.map((x) => (
              <div className="border-l border-[#3b82f6] px-5 py-2" key={x}>
                <h3 className="font-bold">{x}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-light">
        <div className="container">
          <SectionHeading
            eyebrow="Our process"
            title="Eight clear steps from idea to growth."
          />
          <ol className="grid-auto">
            {process.map((x, i) => (
              <li className="card p-5" key={x}>
                <span className="text-sm text-[#3b82f6]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-bold">{x}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section bg-[#090d14]">
        <div className="container">
          <SectionHeading
            eyebrow="Selected work"
            title="Project structures built for real business needs."
            copy="Client identities and result metrics remain unpublished until they are verified and approved."
          />
          <div className="grid-auto">
            {projects.map((p) => (
              <article className="card overflow-hidden" key={p.slug}>
                <div className="aspect-[16/9] bg-[radial-gradient(circle_at_30%_20%,#355574,#111722_65%)]" />
                <div className="p-6">
                  <span className="eyebrow">{p.industry}</span>
                  <h3 className="mt-3 text-xl font-bold">{p.title}</h3>
                  <p className="muted mt-3">{p.description}</p>
                  <Link
                    href={`/case-studies/${p.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-[#3b82f6]"
                  >
                    Read case study <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-light">
        <div className="container">
          <SectionHeading
            eyebrow="Service areas"
            title="Supporting businesses in Noida and across India."
            copy="Our primary location is Noida. We work remotely with businesses across Delhi NCR and India without claiming offices we do not operate."
          />
          <div className="flex flex-wrap gap-3">
            {[
              "Noida",
              "Delhi",
              "Gurgaon",
              "Patna",
              "Deoghar",
              "Ranchi",
              "Kolkata",
              "Mumbai",
              "Bengaluru",
              "Hyderabad",
              "India",
            ].map((x) => (
              <span
                className="rounded-full border border-white/10 px-4 py-2 text-sm"
                key={x}
              >
                {x}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-[#090d14]">
        <div className="container">
          <SectionHeading
            eyebrow="Insights"
            title="Practical guidance for digital decisions."
          />
          <div className="grid-auto">
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
                <h3 className="mt-4 text-xl font-bold">
                  <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                </h3>
                <p className="muted mt-3">{p.description}</p>
                <p className="mt-5 text-xs text-slate-500">
                  {p.minutes} min read
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-light">
        <div className="container">
          <SectionHeading eyebrow="FAQ" title="Answers before we begin." />
          <FAQ items={faqs} />
        </div>
      </section>
      <CTA />
    </>
  );
}
