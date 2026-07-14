"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const id = window.setTimeout(
      () => setVisible(!localStorage.getItem("cp-consent")),
      0,
    );
    return () => window.clearTimeout(id);
  }, []);
  if (!visible) return null;
  function choose(value: "essential" | "analytics") {
    localStorage.setItem("cp-consent", value);
    window.dispatchEvent(
      new CustomEvent("codingpara:consent", { detail: value }),
    );
    setVisible(false);
  }
  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed right-2 bottom-2 left-2 z-50 mx-auto max-h-[80vh] max-w-xl overflow-y-auto rounded-2xl border border-white/10 bg-[#111722] p-4 shadow-2xl sm:right-4 sm:bottom-4 sm:left-4 sm:p-5"
    >
      <p className="font-bold">Your privacy choices</p>
      <p className="muted mt-2 text-sm">
        We use essential storage for website operation. Optional analytics will
        load only when configured and accepted.{" "}
        <Link className="underline" href="/cookie-policy">
          Cookie policy
        </Link>
        .
      </p>
      <div className="mt-4 grid gap-2 sm:flex sm:flex-wrap">
        <button
          className="btn btn-primary w-full sm:w-auto"
          onClick={() => choose("analytics")}
        >
          Accept analytics
        </button>
        <button
          className="btn w-full sm:w-auto"
          onClick={() => choose("essential")}
        >
          Essential only
        </button>
      </div>
    </div>
  );
}
