// Single source of truth for site content.
// Every value here is drawn directly from Lhakpa's CV — nothing invented.

export const profile = {
  name: "Lhakpa Tenji Sherpa",
  title: "Full-Stack Developer",
  tagline: "Building clean, scalable web applications",
  location: "Gokarneshor-9, Kathmandu",
  email: "lhakpaxerpa10@gmail.com",
  phone: "+977 9867983766",
  github: "https://github.com/Lhakpa56",
  resumeFile: "/Lhakpa-Tenji-Sherpa-Resume.pdf",
};

export const summary =
  "Full-stack developer focused on building clean, scalable web applications with modern technologies. Comfortable across the entire stack — from responsive frontend interfaces to reliable backend systems — turning ideas into practical digital products. Currently deepening Python backend skills with Django.";

export const coreStrengths = [
  "Rapid MVP development and iterative prototyping under tight deadlines",
  "Clean, maintainable code with a focus on scalability and UX",
  "Cross-stack collaboration — bridging frontend and backend work",
  "Fast learner — actively strengthening Python and Django skills",
];

export const socials = [
  { label: "GitHub", href: "https://github.com/Lhakpa56" },
  { label: "Email", href: "mailto:lhakpaxerpa10@gmail.com" },
  { label: "Phone", href: "tel:+9779867983766" },
];

export const skillGroups = [
  {
    label: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "Responsive Design", "React"],
  },
  {
    label: "Backend",
    items: ["Python", "Django", "REST APIs"],
  },
  {
    label: "Databases & DevOps",
    items: ["PostgreSQL / SQL", "Git", "Basic Deployment"],
  },
  {
    label: "Other",
    items: ["UI / Graphic Design", "Marketing & Product Collateral"],
  },
];

export const projects = [
  {
    name: "Ecommerce Starter-Kit",
    role: "Full-stack developer",
    description:
      "Built the responsive frontend, integrated backend APIs and the checkout/payment flow for a starter ecommerce storefront with product listing, cart, and checkout.",
    tech: ["React", "Python / Django", "PostgreSQL"],
    link: "https://github.com/Lhakpa56/ecommerce-starter-kit",
  },
  {
    name: "SaaS Application",
    role: "Frontend & integration",
    description:
      "Implemented dashboards, forms, and API integration for an MVP SaaS admin UI with user management and billing-ready flows.",
    tech: ["React", "Django / API"],
    link: "https://github.com/Lhakpa56/saas-application",
  },
];

export const experience = [
  {
    role: "Marketing & Design",
    org: "Boss Adventure Pvt Ltd",
    bullets: [
      "Designed marketing assets and promotional materials",
      "Supported product/UX design and brand visuals",
      "Collaborated with cross-functional teams to align marketing with product features",
    ],
  },
];

export const hackathons = {
  heading: "Hackathon Roles",
  bullets: [
    "Full-stack developer — rapid prototyping, end-to-end integration",
    "Frontend & responsive UI implementation",
    "Backend API design & Python/Django integration",
  ],
};

export const education = [
  {
    program: "B.Sc. CSIT (ongoing) — 6th Semester",
    school: "St. Lawrence College",
  },
  {
    program: "Grade 11–12",
    school: "Jana Jagriti School",
  },
  {
    program: "Up to Grade 10",
    school: "White Hills School",
  },
];

export const awards = [
  "3-Day AI Chatbot Certificate",
  "Python & Django Framework — 2-Month Certificate",
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Education", to: "/education" },
  { label: "Contact", to: "/contact" },
];
