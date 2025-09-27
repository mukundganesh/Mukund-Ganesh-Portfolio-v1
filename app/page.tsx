import aboutData from "@/content/about.json";
import contactData from "@/content/contact.json";
import educationData from "@/content/education.json";
import experienceData from "@/content/experience.json";
import projectsData from "@/content/projects.json";
import skillsData from "@/content/skills.json";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import type {
  AboutContent,
  ContactContent,
  EducationContent,
  ExperienceContent,
  ProjectsContent,
  SkillsContent,
} from "@/types/content";

const about = aboutData as AboutContent;
const skills = skillsData as SkillsContent;
const experience = experienceData as ExperienceContent;
const education = educationData as EducationContent;
const projects = projectsData as ProjectsContent;
const contact = contactData as ContactContent;

export default function Page() {
  return (
    <>
      <Hero about={about} />
      <About about={about} skills={skills} />
      <Experience experience={experience} education={education} />
      <Projects projects={projects} />
      <Contact contact={contact} />
      <Footer />
    </>
  );
}

