export const SITE_URL = "https://christianderek.vercel.app";

export interface ContactInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedIn: string;
  github?: string;
}

export interface Experience {
  company: string;
  role: string;
  dates: string;
  /** Short event-log category, e.g. CONTRACT, BACKEND, TRAINING. */
  category: string;
  /** One-sentence shipped-work summary for the event log. */
  summary: string;
  location?: string;
  bullets: string[];
  techStack: string[];
}

export interface HeroContent {
  overline: string;
  heading: string;
  supporting: string;
  availability: string;
  proofStrip: string[];
}

export interface Identity {
  focus: string;
  core: string;
  summary: string;
}

export interface AevaTab {
  id: "flow" | "handlers" | "integrations" | "reliability";
  label: string;
  points: string[];
}

export interface AevaContent {
  title: string;
  meta: string;
  route: string[];
  tabs: AevaTab[];
}

export interface AcademicExperience {
  institution: string;
  role: string;
  dates: string;
  description: string;
  bullets: string[];
}

export interface Hackathon {
  name: string;
  role: string;
  dates: string;
  achievements: string[];
  bullets: string[];
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface CertificationMetric {
  label: string;
  value: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  metrics?: CertificationMetric[];
}

export interface Education {
  degree: string;
  institution: string;
  dates: string;
  location: string;
}

export interface ResumeFile {
  filename: string;
  sizeLabel: string;
}

export interface ResumeData {
  contact: ContactInfo;
  summary: string;
  hero: HeroContent;
  identity: Identity;
  aeva: AevaContent;
  resumeFile: ResumeFile;
  experience: Experience[];
  academicExperience: AcademicExperience[];
  hackathons: Hackathon[];
  certifications: Certification[];
  education: Education[];
  skills: SkillCategory[];
}

export const resumeData: ResumeData = {
  contact: {
    name: "Christian Derek S. Amplayo",
    title: "Software Engineer",
    email: "coderek.amplayo@gmail.com",
    phone: "09499881224",
    location: "Sta. Ana, City of Manila, Philippines",
    linkedIn: "linkedin.com/in/christian-derek-amplayo",
  },

  summary:
    "Backend development and AI-integrated systems — Node.js/TypeScript and SAP ABAP.",

  hero: {
    overline: "SOFTWARE ENGINEER // SYSTEMS, AGENTS, BACKENDS",
    heading:
      "I build production systems for voice AI, enterprise workflows, and modern web platforms.",
    supporting:
      "From AEVA's voice-agent integrations to Next.js server actions and SAP ABAP enterprise work, I build software around clarity, reliability, and measurable behavior.",
    availability: "AVAILABLE FOR SOFTWARE ENGINEERING OPPORTUNITIES",
    proofStrip: [
      "TOPCIT L3",
      "AEVA / CONCISIUM",
      "TMG HRIS",
      "ACCENTURE",
      "CEB-I HACKS TOP 25",
      "ICMFS 2025",
    ],
  },

  identity: {
    focus: "Voice AI systems, backend engineering, enterprise workflows",
    core: "Node.js / TypeScript / Next.js / Prisma / SAP ABAP",
    summary:
      "Systems-minded engineer who migrates fragile automations into typed, server-side architectures with measurable behavior.",
  },

  aeva: {
    title: "AEVA — AI-Powered Voice Agent Platform",
    meta: "Concisium / Independent Contractor / January 2026 – April 2026",
    route: ["CALLER", "VAPI", "TOOL HANDLER", "CLINIKO", "POSTMARK / NOTIFICATION"],
    tabs: [
      {
        id: "flow",
        label: "FLOW",
        points: [
          "Migrated 9 Make.com automation blueprints to a production Node.js/TypeScript server-side architecture.",
          "Each live call routes through VAPI tool handlers into Cliniko scheduling and Postmark notifications.",
        ],
      },
      {
        id: "handlers",
        label: "HANDLERS",
        points: [
          "High-performance VAPI tool handlers with dynamic live-call data lookup.",
          "Appointment booking and rescheduling workflows executed in real time during calls.",
          "Multi-location availability logic for practice scheduling.",
        ],
      },
      {
        id: "integrations",
        label: "INTEGRATIONS",
        points: [
          "Deep Cliniko PMS integration: booking, rescheduling, and availability checks.",
          "Postmark integration wrappers behind a composable email architecture.",
          "13+ transactional email types generated from shared HTML building blocks.",
        ],
      },
      {
        id: "reliability",
        label: "RELIABILITY",
        points: [
          "Replaced no-code automations that caused synchronization issues and vendor delays.",
          "Typed TypeScript contracts across tool handlers and integration boundaries.",
          "Composable server-side modules instead of nine disconnected blueprints.",
        ],
      },
    ],
  },

  resumeFile: {
    filename: "Resume_Christian_Derek_Amplayo.pdf",
    sizeLabel: "780KB",
  },

  experience: [
    {
      company: "Accenture",
      role: "SAP ABAP Bootcamp Intern",
      dates: "February 2026 – May 2026",
      category: "TRAINING",
      summary:
        "Completed SAP ABAP enterprise-development training covering DDIC, Open SQL, custom reports, and ALV reporting.",
      bullets: [
        "Enterprise Systems Training (SAP ABAP, ERP customization)",
        "Backend Development (ABAP reports, ABAP Open SQL)",
        "Data Dictionary Configuration (DDIC objects, custom tables)",
        "ALV Programming (ABAP List Viewer, filtering/sorting)",
      ],
      techStack: ["SAP ABAP", "ABAP Open SQL", "DDIC", "ALV", "ERP"],
    },
    {
      company: "Concisium",
      role: "Software Engineer (Independent Contractor)",
      dates: "January 2026 – April 2026",
      category: "CONTRACT",
      summary:
        "Built AEVA voice-agent integrations: Cliniko scheduling handlers, VAPI tooling, and composable Postmark notification systems.",
      location: "Remote",
      bullets: [
        "Project: AEVA (AI-Powered Voice Agent Platform) — migrated 9 complex Make.com automation blueprints to a production-grade Node.js/TypeScript server-side architecture.",
        "PMS Architecture (Cliniko PMS integration: booking, reschedule, multi-location availability checks)",
        "Real-time Tooling (high-performance VAPI tool handlers with dynamic live-call data lookup)",
        "Notification Systems (HTML email architecture across 13+ transaction types via Postmark with custom wrappers)",
      ],
      techStack: [
        "Node.js",
        "TypeScript",
        "Make.com",
        "Cliniko API",
        "VAPI",
        "Postmark",
      ],
    },
    {
      company: "TMG HRIS",
      role: "Backend Developer (Project-Based)",
      dates: "January 2026 – March 2026",
      category: "BACKEND",
      summary:
        "Implemented Prisma-backed attendance and leave models, Next.js Server Actions for clock-in/out, and system-aware dark mode.",
      location: "Remote",
      bullets: [
        "Database Engineering (relational database schemas with Prisma for Attendance & Leave management)",
        "Server Actions (Next.js Server Actions for clock-in/out logic and status)",
        "Frontend Optimization (Tailwind CSS v4 custom variants, next-themes dark mode)",
      ],
      techStack: [
        "Prisma",
        "Next.js",
        "Server Actions",
        "Tailwind CSS v4",
        "next-themes",
      ],
    },
  ],

  academicExperience: [
    {
      institution: "ICMFS 2025 — University of Santo Tomas",
      role: "Research Presenter & University Representative",
      dates: "September 2025",
      description:
        "Represented University of Southern Philippines Foundation (USPF) at the University of Santo Tomas.",
      bullets: [
        "Defended technical architecture and gamification strategies to academic panels.",
      ],
    },
  ],

  hackathons: [
    {
      name: "CEB-I Hacks 2025 (Mactan-Cebu International Airport & Google)",
      role: "Team Lead — Team ATXI",
      dates: "October 2025 – January 2026",
      achievements: ["Top 25 Innovators"],
      bullets: [
        "Led Team ATXI to the Top 25 Innovators.",
        "Presented solution feasibility to Google and MCIA panels.",
      ],
    },
  ],

  certifications: [
    {
      name: "TOPCIT Level 3",
      issuer:
        "Institute for Information & Communications Technology Promotion (IITP)",
      date: "December 2025",
      metrics: [
        { label: "IT Business & Ethics", value: "89.5%" },
        { label: "System Architecture", value: "80.0%" },
      ],
    },
  ],

  education: [
    {
      degree: "BS in Information Technology",
      institution: "University of Southern Philippines Foundation",
      dates: "2023 – 2026",
      location: "Cebu City, Philippines",
    },
    {
      degree: "BS in Information Technology",
      institution: "Systems Technology Institute (STI)",
      dates: "2021 – 2023",
      location: "Pasay City, Philippines",
    },
  ],

  skills: [
    {
      name: "Languages",
      items: [
        "PHP",
        "JavaScript (ES6+)",
        "TypeScript",
        "SQL",
        "HTML5",
        "CSS3",
        "GDScript (Godot)",
      ],
    },
    {
      name: "Frameworks/Engines",
      items: [
        "Next.js",
        "Laravel",
        "React Native",
        "Godot Engine",
        "WordPress Custom Dev",
      ],
    },
    {
      name: "AI & Backend",
      items: [
        "Vercel AI SDK",
        "OpenClaw Framework",
        "Prisma",
        "Supabase",
        "Node.js",
        "Express",
      ],
    },
    {
      name: "DevOps & Tools",
      items: [
        "Docker",
        "Git/GitHub",
        "CI/CD Pipelines",
        "Linux (Shell/Cron)",
        "Postman",
        "Heroku",
      ],
    },
  ],
};
