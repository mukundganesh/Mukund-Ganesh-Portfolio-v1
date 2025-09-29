"use client";

import { Mail, MessageSquare } from "lucide-react";
import type { ContactContent } from "@/types/content";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function Contact({ contact }: { contact: ContactContent }) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section-px section-py border-t border-white/5"
    >
      <div className="container-max space-y-12 xl:space-y-16">
        <SectionHeading
          eyebrow="04. Contact"
          title="Let&apos;s create momentum"
          description={contact.headline}
        />
        <Reveal delay={0.1} className="grid gap-10 rounded-3xl border border-white/5 bg-surface/80 p-8 shadow-xl shadow-black/20 lg:grid-cols-[minmax(0,2fr) minmax(0,1fr)] xl:grid-cols-[minmax(0,1.6fr) minmax(0,1fr)] xl:p-10">
          <div className="space-y-6 text-base text-textMuted xl:text-lg xl:space-y-8">
            <p>{contact.copy}</p>
            <div className="flex flex-col gap-3 text-sm text-textMuted/80 xl:text-base">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
                <a href={`mailto:${contact.email}`} className="hover:text-accent">
                  {contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare className="h-4 w-4 text-accent" aria-hidden="true" />
                <span>{contact.availability}</span>
              </div>
            </div>
            <Button href={`mailto:${contact.email}`}>Start a conversation</Button>
          </div>
          <div className="space-y-4 text-sm xl:text-base">
            <p className="font-semibold uppercase tracking-[0.2em] text-textMuted">
              Stay connected
            </p>
            <ul className="space-y-3 text-textMuted">
              {contact.social.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="focus-ring inline-flex items-center gap-2 rounded-full border border-textMuted/20 px-4 py-2 hover:border-accent hover:text-accent">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}