"use client";

import { BriefcaseBusiness } from "lucide-react";
import type { EducationContent, ExperienceContent } from "@/types/content";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Experience({
  experience,
  education,
}: {
  experience: ExperienceContent;
  education: EducationContent;
}) {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="section-px section-py border-t border-white/5"
    >
      <div className="container-max space-y-12">
        <SectionHeading
          eyebrow="02. Experience"
          title="End-to-end ownership from pitch to production"
          description="I deliver ambitious features with measurable impact, pairing motion design with robust engineering practices."
        />
        <div className="grid gap-12 lg:grid-cols-[3fr,2fr]">
          <ul className="space-y-8">
            {experience.experiences.map((item, index) => (
              <Reveal key={`${item.company}-${item.role}-${item.start}`} delay={index * 0.08} className="relative rounded-3xl border border-white/5 bg-surface/80 p-6 shadow-lg shadow-black/10">
                <div className="flex items-center justify-between gap-3 text-sm text-textMuted">
                  <span className="font-semibold text-textPrimary">{item.company}</span>
                  <span>
                    {item.start} — {item.end}
                  </span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-textPrimary">{item.role}</h3>
                <p className="text-sm text-textMuted/80">{item.location}</p>
                <p className="mt-4 text-sm text-textMuted">{item.summary}</p>
                <ul className="mt-4 space-y-3 text-sm text-textMuted/90">
                  {item.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.12}>
            <aside className="sticky top-28 space-y-6 rounded-3xl border border-white/5 bg-surface/50 p-6 shadow-lg shadow-black/20">
              <div className="flex items-center gap-3 text-textMuted">
                <BriefcaseBusiness className="h-5 w-5 text-accent" aria-hidden="true" />
                <p className="text-sm uppercase tracking-[0.2em]">Education</p>
              </div>
              <ul className="space-y-5">
                {education.education.map((item) => (
                  <li key={`${item.institution}-${item.credential}`}>
                    <p className="text-sm font-semibold text-textPrimary">{item.institution}</p>
                    <p className="text-sm text-textMuted/80">{item.credential}</p>
                    <p className="text-xs uppercase text-textMuted/60">
                      {item.start} — {item.end}
                    </p>
                    <p className="mt-2 text-sm text-textMuted">{item.details}</p>
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


