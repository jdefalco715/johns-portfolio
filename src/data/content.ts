/**
 * Site content — extracted from the design so adding a role or project
 * is a one-line data edit, not a JSX edit.
 * Copy text is final. Do not rewrite it.
 */

export const PROFILE = {
  name: "John DeFalco",
  title: "Front End Developer",
  location: "Hoboken, NJ",
  availability: "Available for new work",
  email: "john.defalco321@gmail.com",
  phone: "(201) 421-0630",
  phoneHref: "tel:+12014210630",
  linkedin: "https://www.linkedin.com/in/john-s-defalco/",
  linkedinLabel: "john-s-defalco",
  github: "https://github.com/jdefalco715",
  githubLabel: "jdefalco715",
  resume: "/resume.pdf",
};

export const HERO_INTRO =
  "Five-plus years translating Figma designs into polished, production-ready interfaces across high-traffic ecommerce platforms. Currently a Front End Developer at Catalyst Brands, owning customer-facing content for Lucky Brand, Aeropostale, and Nautica.";

/** The hero "spec sheet" plate — rendered as a <dl>, key left / value right. */
export const SPEC_SHEET: [string, string][] = [
  ["Role", "Front End Developer"],
  ["Company", "Catalyst Brands"],
  ["Experience", "5+ years"],
  ["Focus", "Ecommerce front end"],
  ["Stack", "JS · TS · React · SCSS"],
  ["Degree", "B.S. Comp Sci, 2019"],
  ["Cert", "AWS Cloud Practitioner"],
];

/** Marquee strip. Rendered twice (second copy aria-hidden) for the seamless loop. */
export const MARQUEE = [
  "JavaScript", "TypeScript", "React", "Sass / SCSS", "Figma to code",
  "Salesforce Commerce Cloud", "jQuery", "Node.js", "Agile", "AWS",
];

export const ABOUT = [
  "Based in Hoboken, NJ. I'm a front-end developer with five-plus years turning Figma designs into production interfaces on high-traffic ecommerce platforms — responsive, accessible, and built to hold up on real devices.",
  "What I'm known for is attention to visual detail and a proactive eye for usability: I flag and propose interface improvements during design-to-code handoff rather than building strictly to spec. Day to day that means JavaScript, TypeScript, and Sass, with growing hands-on React work.",
  "I earned my AWS Cloud Practitioner certification in 2025 and I'm always looking to pick up what I don't know yet — if there's something you think I should have in my toolkit, I'd genuinely like to hear it.",
];

export const ABOUT_ASIDE =
  "Off the clock: skiing and snowboarding whenever there's snow, plus golf, guitar, cooking, and a fair amount of video games.";

export const ROLES = [
  {
    title: "Front End Developer — Catalyst Brands",
    years: "2025 — Present",
    brands: ["Lucky Brand", "Aeropostale", "Nautica"],
    bullets: [
      "Own end-to-end delivery of customer-facing content for three brands — accountable for visual quality, timelines, and brand consistency; drive each brand's monthly cross-functional review meetings, delivering 100% of updates on schedule.",
      "Translate Figma designs into performance-optimized, mobile-first production interfaces within 2–3 days of handoff, proposing usability and visual-craft improvements during implementation rather than building strictly to spec.",
      "Improved development throughput by 50% by redesigning the weekly mockup schedule, cutting turnaround from 4 days to 2 while maintaining design fidelity.",
      "Support end-to-end feature development within Agile sprints; Git-based workflows across GitHub and Bitbucket with branch-per-ticket and code review.",
      "Partner closely with design and product stakeholders on interface details and shared implementation patterns; actively expanding hands-on React and TypeScript proficiency.",
    ],
  },
  {
    title: "Junior Front End Developer — SPARC Group LLC",
    years: "2021 — 2024",
    brands: ["Salesforce B2C Commerce Cloud"],
    bullets: [
      "Designed, built, and delivered custom interactive components and responsive landing pages with HTML5/CSS3, JavaScript, jQuery, and Sass/SCSS, supporting high-traffic sites averaging 3,500+ daily unique visitors.",
      "Accelerated team delivery by supporting the team lead and adopting standard business workflows; produced content across multiple brand websites and executed A/B tests to inform data-driven interface decisions.",
      "Served as point of contact for cross-functional partners, translating business requirements into polished front-end solutions and advising on feasibility, usability, and site functionality.",
    ],
  },
];

export const EDUCATION: {
  when: string;
  title: string;
  body: string;
  note?: string;
  link?: { label: string; href: string };
}[] = [
  {
    when: "2015 — 2019",
    title: "Marist University",
    body: "B.S. Computer Science — Concentration in Software Development",
    note: "Minors in Information Systems and Information Technologies. Spring 2018 abroad at Dublin Business School, Ireland.",
  },
  {
    when: "2025",
    title: "AWS Cloud Practitioner",
    body: "Foundational certification, verified on Credly.",
    link: {
      label: "View badge →",
      href: "https://www.credly.com/badges/c91a39d6-b79b-44e8-9495-182422c6ecc6",
    },
  },
];

export const SKILL_GROUPS = [
  { num: "A", name: "Languages & Frameworks", items: ["JavaScript", "TypeScript", "React", "HTML5 / CSS3", "Sass / SCSS", "jQuery", "Node.js"] },
  { num: "B", name: "Design & Craft", items: ["Figma-to-code implementation", "Responsive / mobile-first", "Visual QA", "Usability review", "ADA compliance"] },
  { num: "C", name: "Tools & Practices", items: ["Git · GitHub · Bitbucket", "NPM / Yarn", "Figma", "Agile / Scrum", "A/B testing", "AWS (CCP)"] },
];

export const PROJECTS = [
  {
    num: "01",
    name: "This Website",
    status: "Live",
    desc: "A responsive portfolio site built with Next.js, Tailwind CSS, and Framer Motion.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
    href: "https://github.com/jdefalco715/johns-portfolio",
  },
  {
    num: "02",
    name: "Coin Bag",
    status: "Work in progress",
    desc: "A cryptocurrency portfolio tracker and research tool with live market data.",
    tech: ["Next.js", "TypeScript", "Tailwind", "WebSockets", "Binance.US"],
    href: "https://github.com/jdefalco715/coin-bag",
  },
];

export const SECTIONS = [
  { num: "01", kicker: "About",        heading: "Who I am",              id: "about" },
  { num: "02", kicker: "Track record", heading: "Experience",            id: "experience" },
  { num: "03", kicker: "Credentials",  heading: "Education",             id: "experience" },
  { num: "04", kicker: "Toolkit",      heading: "Capabilities",          id: "capabilities" },
  { num: "05", kicker: "Selected work", heading: "Projects",             id: "projects" },
  { num: "06", kicker: "Contact",      heading: "Let's build something", id: "contact" },
];
