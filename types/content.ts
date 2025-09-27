export type Link = {
  label: string;
  href: string;
};

export type AboutContent = {
  name: string;
  role: string;
  location: string;
  heroHeadline: string;
  summary: string;
  pronunciation: string;
  availability: string;
  image?: string;
  imageAlt?: string;
  links: Link[];
  narrative: string[];
  heroActions: {
    primary: Link;
    secondary: Link;
  };
};

export type SkillCategory = {
  title: string;
  items: string[];
};

export type SkillsContent = {
  categories: SkillCategory[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  summary: string;
  achievements: string[];
};

export type ExperienceContent = {
  experiences: ExperienceItem[];
};

export type ProjectLinks = {
  live?: string;
  repo?: string;
};

export type ProjectItem = {
  name: string;
  description: string;
  tags: string[];
  links: ProjectLinks;
};

export type ProjectsContent = {
  projects: ProjectItem[];
};

export type EducationItem = {
  institution: string;
  credential: string;
  start: string;
  end: string;
  details: string;
};

export type EducationContent = {
  education: EducationItem[];
};

export type ContactContent = {
  headline: string;
  copy: string;
  email: string;
  availability: string;
  social: Link[];
};