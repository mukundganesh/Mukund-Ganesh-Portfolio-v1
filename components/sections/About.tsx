"use client";

import type { AboutContent, SkillsContent } from "@/types/content";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function About({ about, skills }: { about: AboutContent; skills: SkillsContent }) {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="section-px section-py border-t border-white/5 bg-surface/80"
    >
      <div className="container-max space-y-12">
        <SectionHeading
          eyebrow="01. About"
          title="Crafting expressive, resilient interfaces"
          description={about.summary}
        />
        <div className="grid gap-12 lg:grid-cols-[3fr,2fr]">
          <div className="space-y-6 text-base text-textMuted">
            {about.narrative.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 0.08}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="space-y-6">
            <h3 id="about-title" className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
              Core skills
            </h3>
            <ul className="space-y-6">
              {skills.categories.map((category) => (
                <li key={category.title} className="rounded-2xl border border-white/5 bg-page/60 p-5 shadow-lg shadow-black/20">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-textMuted">
                    {category.title}
                  </div>
                  <ul className="mt-3 flex flex-wrap gap-2 text-sm text-textPrimary/90">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs uppercase tracking-[0.15em] text-accent"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

