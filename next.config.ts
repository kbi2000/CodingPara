import type { NextConfig } from "next";

const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self' https://www.google-analytics.com",
  "frame-src https://www.google.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  compress: true,
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      ["/service-web-development/:path*", "/services/website-development"],
      ["/service-ecommerce/:path*", "/services/ecommerce-development"],
      ["/service-seo/:path*", "/services/seo"],
      ["/service-digital-marketing/:path*", "/services/digital-marketing"],
      [
        "/service-software-development/:path*",
        "/services/software-development",
      ],
      ["/service-wordpress/:path*", "/services/wordpress-development"],
      ["/service-branding/:path*", "/services/branding-graphic-design"],
      ["/service-graphic-design/:path*", "/services/branding-graphic-design"],
      ["/service-social-media/:path*", "/services/social-media-management"],
      ["/service-ui-ux/:path*", "/services/ui-ux-design"],
      ["/service-local-seo/:path*", "/services/seo"],
    ].map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          { key: "X-Frame-Options", value: "DENY" },
        ],
      },
    ];
  },
};

export default nextConfig;
