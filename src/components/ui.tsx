import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";
import type { Service } from "@/data/site";
export function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h2 mt-3">{title}</h2>
      {copy && <p className="muted mt-4 text-lg leading-8">{copy}</p>}
    </div>
  );
}
export function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index?: number;
}) {
  const Icon = service.icon;
  return (
    <Link
      href={`/services/${service.slug}`}
      className="card group block p-6 transition hover:-translate-y-1 hover:border-slate-500"
    >
      <div className="flex items-start justify-between">
        <span className="grid size-11 place-items-center rounded-xl bg-[#3b82f6]/10 text-[#3b82f6]">
          <Icon size={22} />
        </span>
        {index !== undefined && (
          <span className="text-sm text-slate-600">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>
      <h3 className="mt-6 text-xl font-bold">{service.name}</h3>
      <p className="muted mt-3 leading-7">{service.short}</p>
      <ul className="mt-5 grid gap-2 text-sm text-slate-300">
        {service.benefits.map((x) => (
          <li className="flex gap-2" key={x}>
            <Check className="mt-0.5 text-[#3b82f6]" size={16} />
            {x}
          </li>
        ))}
      </ul>
      <span className="mt-6 flex items-center gap-2 font-bold text-[#3b82f6]">
        Explore service{" "}
        <ArrowRight
          className="transition group-hover:translate-x-1"
          size={17}
        />
      </span>
    </Link>
  );
}
export function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="container pt-8 text-sm text-slate-400"
    >
      <ol className="flex flex-wrap gap-2">
        <li>
          <Link href="/">Home</Link>
        </li>
        {items.map((x) => (
          <li key={x.label} className="before:mr-2 before:content-['/']">
            {x.href ? (
              <Link href={x.href}>{x.label}</Link>
            ) : (
              <span aria-current="page">{x.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
export function CTA() {
  return (
    <section className="section">
      <div className="card container overflow-hidden p-8 text-center md:p-14">
        <p className="eyebrow">Let’s build what’s next</p>
        <h2 className="h2 mx-auto mt-3 max-w-3xl">
          Ready to grow your business online?
        </h2>
        <p className="muted mx-auto mt-4 max-w-2xl">
          Tell us what you are trying to improve. We’ll recommend a practical
          next step with no obligation.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link className="btn btn-primary" href="/contact">
            Start your project
          </Link>
          <Link className="btn" href="/free-seo-audit">
            Get a free SEO audit
          </Link>
        </div>
      </div>
    </section>
  );
}
export function PageHero({
  eyebrow,
  title,
  copy,
  children,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  children?: ReactNode;
}) {
  return (
    <section className="section pb-14">
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="title mt-4 max-w-5xl">{title}</h1>
        <p className="muted mt-6 max-w-3xl text-lg leading-8">{copy}</p>
        {children}
      </div>
    </section>
  );
}
export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="grid gap-3">
      {items.map((x) => (
        <details key={x.q} className="card group p-5">
          <summary className="cursor-pointer list-none pr-8 font-bold">
            {x.q}
            <span className="float-right text-[#3b82f6] group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="muted mt-4 leading-7">{x.a}</p>
        </details>
      ))}
    </div>
  );
}
