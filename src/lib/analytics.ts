export type EventName =
  | "contact_submit"
  | "quote_request"
  | "seo_audit_request"
  | "phone_click"
  | "email_click"
  | "whatsapp_click"
  | "portfolio_view"
  | "service_cta_click"
  | "career_application"
  | "newsletter_signup";
export function track(name: EventName, params: Record<string, string> = {}) {
  if (typeof window !== "undefined")
    window.dispatchEvent(
      new CustomEvent("codingpara:analytics", { detail: { name, params } }),
    );
}
