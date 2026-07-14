"use client";
import { MessageCircle } from "lucide-react";
import { company } from "@/data/site";
import { track } from "@/lib/analytics";
export function WhatsApp() {
  const href = `https://wa.me/${company.phoneHref.slice(1)}?text=${encodeURIComponent(company.whatsappMessage)}`;
  return (
    <a
      onClick={() => track("whatsapp_click", { placement: "floating" })}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with CodingPara on WhatsApp"
      className="fixed right-5 bottom-5 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-black shadow-xl transition hover:scale-105"
    >
      <MessageCircle />
    </a>
  );
}
