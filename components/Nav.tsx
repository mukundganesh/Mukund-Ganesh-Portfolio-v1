"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

const sections = [
  { id: "about", label: "About", prefix: "01" },
  { id: "experience", label: "Experience", prefix: "02" },
  { id: "projects", label: "Projects", prefix: "03" },
  { id: "contact", label: "Contact", prefix: "04" },
];

const NAV_HEIGHT = 72;

export function Nav() {
  const [activeSection, setActiveSection] = useState<string>(sections[0].id);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) {
        return;
      }

      window.requestAnimationFrame(() => {
        const scrollPosition = window.scrollY + NAV_HEIGHT + 8;
        let current = sections[0].id;

        for (const section of sections) {
          const el = document.getElementById(section.id);
          if (!el) {
            continue;
          }

          if (el.offsetTop <= scrollPosition) {
            current = section.id;
          }
        }

        setActiveSection((prev) => (prev === current ? prev : current));
        ticking = false;
      });

      ticking = true;
    };

    const handleResize = () => {
      handleScroll();
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavClick = (sectionId: string) => () => {
    setActiveSection(sectionId);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center border-b border-white/5 bg-page/80 backdrop-blur">
      <nav className="section-px flex h-16 w-full max-w-5xl items-center justify-between text-sm uppercase tracking-[0.2em] text-textMuted">
        <span className="font-semibold text-textPrimary">Mukund Sai Ganesh Konkepudi</span>
        <ul className="flex items-center gap-3">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={handleNavClick(section.id)}
                  className={clsx(
                    "relative flex items-center gap-2 rounded-full px-3 py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page",
                    isActive ? "text-page font-semibold" : "text-textMuted"
                  )}
                >
                  <span className="flex items-center gap-2 text-xs">
                    <span>{section.prefix}</span>
                    <span>{section.label}</span>
                  </span>
                  {isActive ? (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-accent/90"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  ) : null}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}