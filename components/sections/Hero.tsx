"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { AboutContent } from "@/types/content";
import { Reveal } from "@/components/Reveal";

export function Hero({ about }: { about: AboutContent }) {
  const portraitSrc = about.image ?? "/portrait.svg";
  const portraitAlt = about.imageAlt ?? "Portrait of Mukund Sai Ganesh Konkepudi";

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="section-px section-py relative pt-32"
    >
      <div className="container-max grid items-center gap-12 lg:grid-cols-[minmax(0,3fr) minmax(0,2fr)] xl:grid-cols-[minmax(0,1.6fr) minmax(0,1fr)] 2xl:gap-16">
        <div className="space-y-8">
          <Reveal className="space-y-6">
            <p className="text-sm uppercase tracking-[0.25em] text-accent">
              {about.role}
            </p>
            <h1 id="hero-title" className="text-4xl font-semibold sm:text-5xl xl:text-6xl">
              <span className="block text-textMuted">Hi, I&apos;m</span>
              <span className="relative inline-flex flex-col text-textPrimary">
                {about.name}
                <motion.span
                  aria-hidden="true"
                  className="mt-2 h-1 w-full origin-left bg-gradient-to-r from-accent to-accent2"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.2, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                />
              </span>
            </h1>
            <p className="max-w-3xl text-lg text-textMuted xl:text-xl">
              {about.heroHeadline}
            </p>
            <p className="max-w-3xl text-base text-textMuted/80 xl:text-lg">
              {about.summary}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-textMuted/60 xl:text-base">
              <span>
                <span className="font-semibold text-textPrimary">Based in:</span> {about.location}
              </span>
              <span>
                <span className="font-semibold text-textPrimary">Availability:</span> {about.availability}
              </span>
              <span>
                <span className="font-semibold text-textPrimary">Pronounced:</span> {about.pronunciation}
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-3 text-sm text-textMuted">
              {about.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="focus-ring inline-flex items-center gap-2 rounded-full border border-textMuted/20 px-4 py-2 hover:border-accent"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <div className="relative mx-auto flex max-w-md items-center justify-center lg:max-w-lg 2xl:max-w-xl">
            <div className="absolute inset-10 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-surface/60 p-2 shadow-2xl shadow-accent/10">
              <Image
                src={portraitSrc}
                alt={portraitAlt}
                width={520}
                height={640}
                priority
                sizes="(min-width: 1536px) 520px, (min-width: 1280px) 420px, 60vw"
                className="h-auto w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}