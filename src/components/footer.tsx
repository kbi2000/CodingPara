import Image from "next/image";
import Link from "next/link";
import { company, services } from "@/data/site";
export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#05070b]">
      <div className="container grid gap-10 py-14 md:grid-cols-4">
        <div>
          <Link href="/" className="inline-block" aria-label="CodingPara home">
            <span className="relative block h-12 w-60 overflow-hidden">
              <Image
                src="/coding-para-logo-blue-white.png"
                alt="CodingPara Technologies"
                fill
                sizes="240px"
                className="object-cover"
              />
            </span>
          </Link>
          <p className="muted mt-4 text-sm leading-6">
            Human-centred development, search and marketing for ambitious
            businesses.
          </p>
        </div>
        <div>
          <h2 className="font-bold">Services</h2>
          <div className="mt-4 grid gap-2 text-sm text-slate-400">
            {services.slice(0, 6).map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}>
                {s.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-bold">Company</h2>
          <div className="mt-4 grid gap-2 text-sm text-slate-400">
            {[
              ["About", "/about"],
              ["Portfolio", "/portfolio"],
              ["Case studies", "/case-studies"],
              ["Pricing", "/pricing"],
              ["Career", "/career"],
              ["Contact", "/contact"],
            ].map(([a, b]) => (
              <Link key={a} href={b}>
                {a}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-bold">Contact</h2>
          <address className="mt-4 grid gap-2 text-sm text-slate-400 not-italic">
            <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <span>{company.location}</span>
          </address>
        </div>
      </div>
      <div className="container flex flex-wrap justify-between gap-4 border-t border-white/10 py-6 text-xs text-slate-500">
        <span>
          © {new Date().getFullYear()} {company.name}
        </span>
        <div className="flex flex-wrap gap-4">
          {[
            ["Privacy", "/privacy-policy"],
            ["Terms", "/terms-of-service"],
            ["Refunds", "/refund-policy"],
            ["Cookies", "/cookie-policy"],
            ["Sitemap", "/html-sitemap"],
          ].map(([a, b]) => (
            <Link key={a} href={b}>
              {a}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
