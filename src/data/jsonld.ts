import { resumeData, SITE_URL } from "./resume";

interface PostalAddressSchema {
  "@type": "PostalAddress";
  addressLocality: string;
  addressRegion: string;
  addressCountry: string;
}

interface OrganizationSchema {
  "@type": "Organization";
  name: string;
  alternateName?: string;
}

interface CollegeOrUniversitySchema {
  "@type": "CollegeOrUniversity";
  name: string;
}

interface CredentialSchema {
  "@type": "EducationalOccupationalCredential";
  name: string;
  credentialCategory: string;
  dateCreated?: string;
  recognizedBy?: OrganizationSchema;
  description?: string;
}

interface PersonSchema {
  "@type": "Person";
  "@id": string;
  name: string;
  jobTitle: string;
  email: string;
  telephone: string;
  address: PostalAddressSchema;
  sameAs: string[];
  knowsAbout: string[];
  alumniOf: CollegeOrUniversitySchema[];
  hasCredential: CredentialSchema[];
}

interface ProfilePageJsonLd {
  "@context": "https://schema.org";
  "@type": "ProfilePage";
  "@id": string;
  url: string;
  name: string;
  mainEntity: PersonSchema;
}

const { contact, skills, education, certifications } = resumeData;

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/#profilepage`,
  url: SITE_URL,
  name: `${contact.name} — ${contact.title}`,
  mainEntity: {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: contact.name,
    jobTitle: contact.title,
    email: contact.email,
    telephone: contact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sta. Ana, City of Manila",
      addressRegion: "Metro Manila",
      addressCountry: "PH",
    },
    sameAs: [`https://${contact.linkedIn}`],
    knowsAbout: skills.flatMap((category) => category.items),
    alumniOf: education.map((entry) => ({
      "@type": "CollegeOrUniversity",
      name: entry.institution,
    })),
    hasCredential: certifications.map((cert) => ({
      "@type": "EducationalOccupationalCredential",
      name: cert.name,
      credentialCategory: "Certification",
      dateCreated: cert.date,
      recognizedBy: {
        "@type": "Organization",
        name: cert.issuer,
        alternateName: "IITP",
      },
      description: cert.metrics
        ? `Proficiency scores — ${cert.metrics
            .map((metric) => `${metric.label}: ${metric.value}`)
            .join(", ")}.`
        : undefined,
    })),
  },
} satisfies ProfilePageJsonLd;
