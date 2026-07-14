"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { services } from "@/data/site";

const nav = [
  ["/", "Home"],
  ["/about", "About"],
  ["/portfolio", "Portfolio"],
  ["/blog", "Blog"],
  ["/career", "Career"],
  ["/contact", "Contact"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();
  useEffect(() => {
    const onScroll = () => setScrolled(scrollY > 24);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);
  const item = ([href, label]: (typeof nav)[number]) => (
    <Link
      onClick={() => setOpen(false)}
      key={label}
      className={
        path === href ? "text-[#3b82f6]" : "text-slate-300 hover:text-white"
      }
      href={href}
    >
      {label}
    </Link>
  );
  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/8 transition-all ${scrolled ? "bg-[#070a0fef] py-2 backdrop-blur" : "bg-[#070a0fcc] py-4"}`}
    >
      <div className="container flex min-w-0 items-center justify-between gap-3">
        <Link href="/" className="shrink-0" aria-label="CodingPara home">
          <span className="relative block h-10 w-48 overflow-hidden sm:h-11 sm:w-56">
            <Image
              src="/coding-para-logo-blue-white.png"
              alt="CodingPara Technologies"
              fill
              priority
              sizes="224px"
              className="object-cover"
            />
          </span>
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 lg:flex"
        >
          {nav.slice(0, 2).map(item)}
          <div className="group relative">
            <Link
              href="/services"
              className={`flex items-center gap-1 ${path.startsWith("/services") ? "text-[#3b82f6]" : "text-slate-300"}`}
            >
              Services <ChevronDown size={15} />
            </Link>
            <div className="invisible absolute top-full left-1/2 grid w-[620px] -translate-x-1/2 grid-cols-2 gap-1 rounded-2xl border border-white/10 bg-[#0e131c] p-3 opacity-0 shadow-2xl transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              {services.map((s) => (
                <Link
                  className="rounded-xl p-3 hover:bg-white/5"
                  href={`/services/${s.slug}`}
                  key={s.slug}
                >
                  <b className="block text-sm">{s.name}</b>
                  <span className="text-xs text-slate-400">{s.short}</span>
                </Link>
              ))}
            </div>
          </div>
          {nav.slice(2).map(item)}
        </nav>
        <div className="hidden gap-2 xl:flex">
          <Link className="btn" href="/free-seo-audit">
            Free SEO Audit
          </Link>
          <Link className="btn btn-primary" href="/contact">
            Get Started
          </Link>
        </div>
        <button
          className="focusable shrink-0 rounded-lg p-2 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="container grid gap-1 border-t border-white/10 py-4 lg:hidden"
        >
          {nav.map(([href, label]) => (
            <Link
              className="rounded-lg px-3 py-3 hover:bg-white/5"
              key={label}
              href={href}
            >
              {label}
            </Link>
          ))}
          <Link className="rounded-lg px-3 py-3" href="/services">
            All Services
          </Link>
          {services.map((s) => (
            <Link
              className="ml-3 rounded-lg px-3 py-2 text-sm text-slate-300"
              href={`/services/${s.slug}`}
              key={s.slug}
            >
              {s.name}
            </Link>
          ))}
          <Link className="btn btn-primary mt-2" href="/free-seo-audit">
            Free SEO Audit
          </Link>
        </nav>
      )}
    </header>
  );
}
