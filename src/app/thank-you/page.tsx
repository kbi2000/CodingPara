import Link from "next/link";
import { metadata } from "@/lib/seo";
export const generateMetadata = () => ({
  ...metadata(
    "Thank You",
    "Your message has been received by CodingPara Technologies.",
    "/thank-you",
  ),
  robots: { index: false, follow: true },
});
export default function Page() {
  return (
    <section className="section">
      <div className="card container max-w-3xl p-10 text-center">
        <p className="eyebrow">Message received</p>
        <h1 className="h2 mt-4">Thank you for contacting CodingPara.</h1>
        <p className="muted mt-5">
          We’ll review your message and respond through the contact details you
          provided.
        </p>
        <Link href="/" className="btn btn-primary mt-7">
          Return home
        </Link>
      </div>
    </section>
  );
}
