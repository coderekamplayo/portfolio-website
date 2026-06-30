export const SITE_URL = "https://christianderek.dev";

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
  location?: string;
  bullets: string[];
  techStack: string[];
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

export interface ResumeData {
  contact: ContactInfo;
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

  experience: [
    {
      company: "Accenture",
      role: "SAP ABAP Bootcamp Intern",
      dates: "February 2026 – May 2026",
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
