import { notFound } from "next/navigation";
import { jobs } from "@/data/site";
export function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }));
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params,
    j = jobs.find((x) => x.slug === slug);
  if (!j) notFound();
  return (
    <article className="prose container py-20">
      <h1>{j.title}</h1>
      <p>
        {j.department} · {j.location} · {j.type}
      </p>
      <h2>Experience</h2>
      <p>{j.experience}</p>
      <h2>Skills</h2>
      <p>{j.skills.join(", ")}</p>
    </article>
  );
}
