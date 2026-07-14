import {
  Blocks,
  Bot,
  Brush,
  Code2,
  Globe2,
  Megaphone,
  PenTool,
  Search,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";

export const company = {
  name: "CodingPara Technologies",
  shortName: "CodingPara",
  url: "https://www.codingpara.com",
  email: "info@codingpara.com",
  phone: "+91 74798 33877",
  phoneHref: "+917479833877",
  location: "Noida, Uttar Pradesh, India",
  hours: "Monday–Saturday, 9:00–18:00 IST",
  whatsappMessage:
    "Hello CodingPara, I’m interested in your digital services. I would like to discuss my project.",
  stats: [
    { label: "Happy clients", value: null },
    { label: "Projects delivered", value: null },
    { label: "Years of experience", value: null },
    { label: "Support availability", value: "Ongoing" },
  ],
} as const;

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  intent: string;
  icon: LucideIcon;
  benefits: string[];
  technologies: string[];
  problems: string[];
};

export const services: Service[] = [
  {
    slug: "website-development",
    name: "Website Development",
    short:
      "Fast, persuasive websites built around your customers and search goals.",
    description:
      "Custom business websites engineered for clarity, speed, accessibility and qualified lead generation.",
    intent: "website development company in India",
    icon: Globe2,
    benefits: [
      "Responsive custom design",
      "Technical SEO foundation",
      "Conversion-ready journeys",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js"],
    problems: [
      "An outdated first impression",
      "Slow pages that lose visitors",
      "A website that generates few enquiries",
    ],
  },
  {
    slug: "ecommerce-development",
    name: "E-Commerce Development",
    short:
      "Frictionless storefronts that make products easy to discover and buy.",
    description:
      "Scalable online stores with thoughtful merchandising, reliable checkout and practical operations tooling.",
    intent: "e-commerce development company",
    icon: ShoppingCart,
    benefits: [
      "Streamlined checkout",
      "Product SEO",
      "Payment and shipping integrations",
    ],
    technologies: ["Shopify", "WooCommerce", "Next.js", "Razorpay"],
    problems: [
      "Cart abandonment",
      "Difficult catalogue management",
      "Poor mobile shopping",
    ],
  },
  {
    slug: "seo",
    name: "SEO Services",
    short: "Technical, on-page and content SEO grounded in search intent.",
    description:
      "A transparent organic search programme that fixes foundations and builds useful, discoverable content.",
    intent: "SEO company in Noida",
    icon: Search,
    benefits: [
      "Technical audits",
      "Content strategy",
      "Local search visibility",
    ],
    technologies: ["Search Console", "GA4", "Screaming Frog", "Schema.org"],
    problems: [
      "Low qualified traffic",
      "Indexing and crawl issues",
      "Weak local visibility",
    ],
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    short:
      "Measurable campaigns connecting the right audience with the right offer.",
    description:
      "Full-funnel digital strategy across paid search, social and landing-page optimisation.",
    intent: "digital marketing agency in Noida",
    icon: Megaphone,
    benefits: ["Campaign strategy", "Conversion tracking", "Clear reporting"],
    technologies: ["Google Ads", "Meta Ads", "GA4", "GTM"],
    problems: [
      "Unclear marketing ROI",
      "Wasted advertising spend",
      "Inconsistent lead quality",
    ],
  },
  {
    slug: "software-development",
    name: "Software Development",
    short:
      "Purpose-built software that simplifies operations and supports growth.",
    description:
      "Secure web applications, internal tools and integrations designed around real business workflows.",
    intent: "custom software development company",
    icon: Code2,
    benefits: [
      "Workflow automation",
      "API integrations",
      "Scalable architecture",
    ],
    technologies: ["React", "Node.js", "Python", "PostgreSQL"],
    problems: [
      "Manual repetitive work",
      "Disconnected systems",
      "Off-the-shelf limitations",
    ],
  },
  {
    slug: "wordpress-development",
    name: "WordPress Development",
    short:
      "Editable WordPress sites without compromising usability or performance.",
    description:
      "Custom WordPress builds and WooCommerce solutions your team can confidently maintain.",
    intent: "WordPress development company",
    icon: Blocks,
    benefits: [
      "Custom block editing",
      "Secure configuration",
      "Performance tuning",
    ],
    technologies: ["WordPress", "PHP", "MySQL", "WooCommerce"],
    problems: [
      "A difficult page builder",
      "Plugin bloat",
      "Security and update concerns",
    ],
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    short: "Clear interfaces shaped around user tasks and business outcomes.",
    description:
      "Research-led interface and experience design for websites, products and conversion journeys.",
    intent: "UI UX design agency in India",
    icon: PenTool,
    benefits: [
      "User journey mapping",
      "Responsive prototypes",
      "Accessible design systems",
    ],
    technologies: ["Figma", "FigJam", "Maze", "Storybook"],
    problems: [
      "Confusing navigation",
      "Inconsistent interfaces",
      "Low journey completion",
    ],
  },
  {
    slug: "branding-graphic-design",
    name: "Branding & Graphic Design",
    short: "A coherent visual identity that makes your business recognisable.",
    description:
      "Strategy-led identities and practical design systems for consistent communication across channels.",
    intent: "branding and graphic design agency",
    icon: Brush,
    benefits: ["Visual identity", "Brand guidelines", "Campaign assets"],
    technologies: ["Figma", "Illustrator", "Photoshop", "InDesign"],
    problems: [
      "Inconsistent visuals",
      "A forgettable identity",
      "Sales material that lacks trust",
    ],
  },
  {
    slug: "social-media-management",
    name: "Social Media Management",
    short:
      "Consistent social content shaped around useful audience conversations.",
    description:
      "Channel planning, content production and reporting that keeps your brand relevant without noise.",
    intent: "social media management services",
    icon: Bot,
    benefits: [
      "Content calendar",
      "Creative production",
      "Community reporting",
    ],
    technologies: ["Meta Business Suite", "LinkedIn", "Canva", "GA4"],
    problems: [
      "Irregular publishing",
      "Low engagement",
      "No clear content direction",
    ],
  },
];

export const technologies = [
  "React",
  "Next.js",
  "Angular",
  "TypeScript",
  "Node.js",
  "Python",
  "Django",
  "PHP",
  "WordPress",
  "AWS",
  "Docker",
  "MongoDB",
  "PostgreSQL",
  "Figma",
];
export const process = [
  "Discovery",
  "Research",
  "Strategy",
  "UI/UX design",
  "Development",
  "Testing",
  "Launch",
  "Growth & support",
];
export const faqs = [
  {
    q: "How much does a business website cost?",
    a: "Scope, content, integrations and design complexity determine cost. After a short discovery call, we provide an itemised proposal rather than a misleading one-size-fits-all price.",
  },
  {
    q: "How long does a website project take?",
    a: "A focused business website commonly takes several weeks. Larger e-commerce or software projects are planned in milestones after requirements are confirmed.",
  },
  {
    q: "When can SEO begin to show progress?",
    a: "Technical fixes can be measured quickly, while competitive organic growth often takes several months. We establish a baseline and report leading indicators as well as enquiries.",
  },
  {
    q: "Do you provide hosting and maintenance?",
    a: "Yes. We can recommend hosting, manage deployment and provide an ongoing maintenance plan matched to the platform and support needs.",
  },
  {
    q: "Will the website work well on mobile?",
    a: "Yes. Every interface is designed mobile-first, keyboard accessible and tested across representative viewport sizes before launch.",
  },
  {
    q: "What happens after launch?",
    a: "We monitor key journeys, resolve launch issues and can continue with maintenance, content, analytics, SEO and conversion improvements.",
  },
];

export const projects = [
  {
    slug: "travel-booking-platform",
    title: "Travel booking experience",
    industry: "Travel",
    services: "UX design, web development",
    tech: ["Next.js", "PostgreSQL"],
    description:
      "A reference case-study structure for a search-friendly booking journey. Client identity and measured outcomes are pending approval.",
    status: "Results awaiting verified client data",
  },
  {
    slug: "direct-commerce-store",
    title: "Direct commerce storefront",
    industry: "E-commerce",
    services: "Store strategy, development",
    tech: ["WooCommerce", "Razorpay"],
    description:
      "A reference commerce project showing catalogue, checkout and operational requirements without invented performance claims.",
    status: "Results awaiting verified client data",
  },
  {
    slug: "operations-dashboard",
    title: "Operations dashboard",
    industry: "Software",
    services: "Product design, software development",
    tech: ["React", "Node.js"],
    description:
      "A reference dashboard case study for consolidating workflows and management reporting.",
    status: "Results awaiting verified client data",
  },
];

export const jobs: Array<{
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  skills: string[];
  status: "open" | "closed";
}> = [];
