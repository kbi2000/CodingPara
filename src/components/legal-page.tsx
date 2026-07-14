import { PageHero } from "./ui";
import { company } from "@/data/site";
const copy = {
  privacy: {
    title: "Privacy Policy",
    intro:
      "How CodingPara collects, uses and protects information shared through this website.",
    sections: [
      [
        "Information we collect",
        "We collect information you deliberately submit, such as your name, contact details and project requirements. Technical logs may include basic security and performance data.",
      ],
      [
        "How information is used",
        "Information is used to respond to enquiries, deliver requested services, protect the website and understand aggregate website performance.",
      ],
      [
        "Sharing and retention",
        "We do not sell personal information. Data is shared only with necessary service providers under suitable safeguards and retained only as long as required.",
      ],
      [
        "Your choices",
        "You may ask to access, correct or delete your information by contacting us.",
      ],
    ],
  },
  terms: {
    title: "Terms of Service",
    intro:
      "The general terms for using this website and engaging CodingPara Technologies.",
    sections: [
      [
        "Website use",
        "Use this website lawfully and do not attempt to disrupt its operation or misuse its content.",
      ],
      [
        "Project agreements",
        "Paid work is governed by a written proposal or agreement defining scope, payment, ownership, responsibilities and acceptance.",
      ],
      [
        "Intellectual property",
        "Website content belongs to its respective owner. Client deliverable ownership is specified in the project agreement.",
      ],
      [
        "Liability",
        "Services are provided with reasonable professional care. Specific limitations are defined in the relevant agreement.",
      ],
    ],
  },
  refund: {
    title: "Refund Policy",
    intro:
      "How cancellations and refunds are considered for professional services.",
    sections: [
      [
        "Custom services",
        "Because work is reserved and performed against an approved scope, payments for completed milestones and committed third-party costs are generally non-refundable.",
      ],
      [
        "Cancellation",
        "Tell us promptly if priorities change. The project agreement defines notice, work-in-progress charges and handover obligations.",
      ],
      [
        "Duplicate or incorrect payment",
        "Verified duplicate or erroneous payments will be corrected using the original payment method where practical.",
      ],
      [
        "Requesting a review",
        "Email the invoice number and reason for your request so we can review it against the signed agreement.",
      ],
    ],
  },
  cookies: {
    title: "Cookie Policy",
    intro:
      "How this website uses essential storage and optional measurement technologies.",
    sections: [
      [
        "Essential storage",
        "Essential technologies may remember security, form and consent state needed for the website to operate.",
      ],
      [
        "Analytics",
        "Optional analytics are loaded only when configured and permitted. They help us understand aggregate usage and conversions.",
      ],
      [
        "Managing preferences",
        "You can change browser controls and, where available, website consent preferences. Blocking essential storage may affect functionality.",
      ],
      [
        "Third parties",
        "Embedded or connected services may set their own technologies subject to their policies.",
      ],
    ],
  },
} as const;
export function LegalPage({ type }: { type: keyof typeof copy }) {
  const x = copy[type];
  return (
    <>
      <PageHero eyebrow="Legal" title={x.title} copy={x.intro} />
      <article className="prose container pb-20">
        <p>Last updated: 12 July 2026</p>
        {x.sections.map(([h, c]) => (
          <section key={h}>
            <h2>{h}</h2>
            <p>{c}</p>
          </section>
        ))}
        <h2>Contact</h2>
        <p>
          Questions may be sent to {company.email}, CodingPara Technologies,{" "}
          {company.location}.
        </p>
      </article>
    </>
  );
}
