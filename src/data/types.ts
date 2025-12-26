export type SocialLink = {
  label: string;
  href: string;
};

export type Experience = {
  role: string;
  company: string;
  location?: string;
  period: string;
  description?: string;
  responsibilities: string[];
  technologies?: string[];
};

export type EducationProject = {
  title: string;
  description: string[];
};

export type Education = {
  degree: string;
  major?: string;
  university: string;
  location?: string;
  period: string;
  gpa?: string;
  projects: EducationProject[];
};

export type Project = {
  name: string;
  role?: string;
  period?: string;
  description?: string;
  impact: string[];
  technologies: string[];
  links?: SocialLink[];
};

export type Certification = {
  name: string;
  issuer?: string;
  year?: string;
};

export type Language = {
  language: string;
  level?: string;
};

export type ResumeSkills = {
  raw: string[];
  projectManagement: string[];
  itStrategyAndRisk: string[];
  softwareDevelopment: string[];
  dataAnalyticsAndAutomation: string[];
  cloudAndApi: string[];
  leadershipAndCommunication: string[];
};

export type ResumeData = {
  locale: 'en' | 'th';
  basics: {
    name: string;
    title: string;
    yearsOfExperience?: string;
    location: string;
    email: string;
    phone: string;
    website?: string;
    linkedin?: string;
    github?: string;
    socials: SocialLink[];
  };
  summary: string;
  highlights: string[];
  experiences: Experience[];
  education: Education[];
  skills: ResumeSkills;
  projects: Project[];
  certifications: Certification[];
  achievements: string[];
  languages: Language[];
};
