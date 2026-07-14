"use client";
import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/site";
import { PageHero } from "@/components/ui";
export default function Page() {
  const cats = [
    "All",
    "Business websites",
    "E-commerce",
    "Software",
    "Travel",
    "Hotel",
    "Education",
    "Healthcare",
    "Real estate",
  ];
  const [filter, setFilter] = useState("All");
  const visible =
    filter === "All"
      ? projects
      : projects.filter(
          (p) => p.industry.toLowerCase() === filter.toLowerCase(),
        );
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Digital work shaped around real customer journeys."
        copy="Browse reference project structures. Published client names, live links and measured results are included only after verification and approval."
      />
      <section className="section pt-0">
        <div className="container">
          <div
            className="mb-8 flex flex-wrap gap-2"
            role="group"
            aria-label="Filter projects"
          >
            {cats.map((x) => (
              <button
                aria-pressed={filter === x}
                onClick={() => setFilter(x)}
                className={`btn ${filter === x ? "btn-primary" : ""}`}
                key={x}
              >
                {x}
              </button>
            ))}
          </div>
          <div className="grid-auto">
            {visible.map((p) => (
              <article className="card overflow-hidden" key={p.slug}>
                <div className="aspect-[16/9] bg-[linear-gradient(135deg,#19345f,#101722)]" />
                <div className="p-6">
                  <span className="eyebrow">{p.industry}</span>
                  <h2 className="mt-3 text-xl font-bold">{p.title}</h2>
                  <p className="muted mt-3">{p.description}</p>
                  <p className="mt-4 text-sm">{p.tech.join(" · ")}</p>
                  <Link
                    className="mt-5 inline-block text-[#3b82f6]"
                    href={`/case-studies/${p.slug}`}
                  >
                    View case study →
                  </Link>
                </div>
              </article>
            ))}
          </div>
          {visible.length === 0 && (
            <p className="muted">
              Verified projects in this category will be published when client
              approval is available.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
