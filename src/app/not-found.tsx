import Link from "next/link";
export default function NotFound() {
  return (
    <section className="section">
      <div className="container text-center">
        <p className="eyebrow">404</p>
        <h1 className="title mt-4">This page could not be found.</h1>
        <p className="muted mx-auto mt-5 max-w-xl">
          The link may be outdated or the page may have moved. Use the sitemap
          or return to the homepage.
        </p>
        <div className="mt-7 flex justify-center gap-3">
          <Link className="btn btn-primary" href="/">
            Go home
          </Link>
          <Link className="btn" href="/html-sitemap">
            View sitemap
          </Link>
        </div>
      </div>
    </section>
  );
}
