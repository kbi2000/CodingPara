"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { services } from "@/data/site";
import { track } from "@/lib/analytics";
const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  email: z.string().email("Enter a valid email"),
  phone: z.string().trim().min(8, "Enter a valid phone number").max(20),
  service: z.string().min(1, "Choose a service"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z
    .string()
    .trim()
    .min(20, "Please add at least 20 characters")
    .max(3000),
  consent: z.literal(true, { error: "Consent is required" }),
  website: z.string().max(0).optional(),
  startedAt: z.number(),
});
type FormData = z.infer<typeof schema>;
export function ContactForm({
  kind = "contact",
}: {
  kind?: "contact" | "audit";
}) {
  const [state, setState] = useState<"idle" | "success" | "error">("idle");
  const [startedAt] = useState(() => Date.now());
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      service: kind === "audit" ? "seo" : "",
      consent: false as true,
      website: "",
      startedAt,
    },
  });
  async function submit(data: FormData) {
    setState("idle");
    const r = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, kind }),
    });
    if (r.ok) {
      setState("success");
      track(kind === "audit" ? "seo_audit_request" : "contact_submit");
      reset();
    } else setState("error");
  }
  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="card grid gap-5 p-6"
      noValidate
      aria-label={kind === "audit" ? "Free SEO audit form" : "Contact form"}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name?.message}>
          <input
            className="input"
            autoComplete="name"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input
            className="input"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <input
            className="input"
            type="tel"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
        </Field>
        <Field label="Service" error={errors.service?.message}>
          <select
            className="input"
            aria-invalid={!!errors.service}
            {...register("service")}
          >
            <option value="">Choose a service</option>
            {services.map((s) => (
              <option value={s.slug} key={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Budget range">
          <select className="input" {...register("budget")}>
            <option value="">Not decided</option>
            <option>Under ₹50,000</option>
            <option>₹50,000–₹1,50,000</option>
            <option>₹1,50,000–₹5,00,000</option>
            <option>₹5,00,000+</option>
          </select>
        </Field>
        <Field label="Timeline">
          <select className="input" {...register("timeline")}>
            <option value="">Flexible</option>
            <option>Within 1 month</option>
            <option>1–3 months</option>
            <option>3–6 months</option>
          </select>
        </Field>
      </div>
      <Field
        label={
          kind === "audit"
            ? "Website URL and what you want to improve"
            : "Tell us about your project"
        }
        error={errors.message?.message}
      >
        <textarea
          className="input min-h-32"
          aria-invalid={!!errors.message}
          {...register("message")}
        />
      </Field>
      <input
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        {...register("website")}
      />
      <input
        type="hidden"
        {...register("startedAt", { valueAsNumber: true })}
      />
      <label className="flex items-start gap-3 text-sm text-slate-300">
        <input
          type="checkbox"
          className="mt-1 size-4"
          {...register("consent")}
        />
        I agree that CodingPara may use these details to respond to my enquiry.
      </label>
      {errors.consent && (
        <p className="error" role="alert">
          {errors.consent.message}
        </p>
      )}
      <button
        disabled={isSubmitting}
        className="btn btn-primary justify-self-start"
      >
        {isSubmitting
          ? "Sending…"
          : kind === "audit"
            ? "Request free audit"
            : "Send enquiry"}
      </button>
      <div aria-live="polite">
        {state === "success" && (
          <p className="text-[#3b82f6]">
            Thanks — your enquiry was received. We’ll respond using the contact
            details provided.
          </p>
        )}
        {state === "error" && (
          <p className="error">
            We couldn’t send this right now. Please email info@codingpara.com.
          </p>
        )}
      </div>
    </form>
  );
}
function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="field">
      <span className="text-sm font-bold">{label}</span>
      {children}
      {error && (
        <span className="error" role="alert">
          {error}
        </span>
      )}
    </label>
  );
}
