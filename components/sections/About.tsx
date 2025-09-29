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
      <div className="container-max space-y-12 xl:space-y-16">
        <SectionHeading
          eyebrow="01. About"
          title="Crafting expressive, resilient interfaces"
          description={about.summary}
        />
        <div className="grid gap-12 lg:grid-cols-[minmax(0,3fr) minmax(0,2fr)] xl:grid-cols-[minmax(0,2.2fr) minmax(0,1.2fr)] 2xl:gap-16">
          <div className="space-y-6 text-base text-textMuted xl:text-lg xl:leading-relaxed">
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
            <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-1">
              {skills.categories.map((category) => (
                <li key={category.title} className="rounded-2xl border border-white/5 bg-page/60 p-5 shadow-lg shadow-black/20 xl:p-6">
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