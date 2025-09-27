"use client";

import { ArrowUpRight, Github } from "lucide-react";
import type { ProjectsContent } from "@/types/content";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Projects({ projects }: { projects: ProjectsContent }) {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="section-px section-py border-t border-white/5 bg-surface/80"
    >
      <div className="container-max space-y-12">
        <SectionHeading
          eyebrow="03. Projects"
          title="Selected work"
          description="Product experiments and shipped features that combine motion, systems thinking, and measurable outcomes."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {projects.projects.map((project, index) => (
            <Reveal
              key={project.name}
              delay={index * 0.08}
              className="group flex h-full flex-col justify-between rounded-3xl border border-white/5 bg-page/60 p-6 shadow-xl shadow-black/20 transition-transform hover:-translate-y-1"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-textPrimary">{project.name}</h3>
                <p className="text-sm text-textMuted">{project.description}</p>
                <ul className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.15em] text-textMuted/80">
                  {project.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-accent">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex items-center gap-4 text-sm">
                {project.links.live ? (
                  <a
                    href={project.links.live}
                    className="flex items-center gap-2 text-textPrimary transition-colors hover:text-accent"
                  >
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" /> Live site
                  </a>
                ) : null}
                {project.links.repo ? (
                  <a
                    href={project.links.repo}
                    className="flex items-center gap-2 text-textMuted transition-colors hover:text-accent"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" /> Source
                  </a>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

