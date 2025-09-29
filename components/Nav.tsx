"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "about", label: "About", prefix: "01" },
  { id: "experience", label: "Experience", prefix: "02" },
  { id: "projects", label: "Projects", prefix: "03" },
  { id: "contact", label: "Contact", prefix: "04" },
];

const NAV_HEIGHT = 72;

export function Nav() {
  const [activeSection, setActiveSection] = useState<string>(sections[0].id);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) {
        return;
      }

      window.requestAnimationFrame(() => {
        const scrollPosition = window.scrollY + NAV_HEIGHT + 8;
        let current: string | null = null;

        for (const section of sections) {
          const el = document.getElementById(section.id);
          if (!el) {
            continue;
          }

          if (el.offsetTop <= scrollPosition) {
            current = section.id;
          }
        }

        if (current) {
          setActiveSection((prev) => (prev === current ? prev : current));
        } else if (window.scrollY < 20) {
          setActiveSection(sections[0].id);
        }

        ticking = false;
      });

      ticking = true;
    };

    const handleResize = () => {
      handleScroll();
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleNavClick = (sectionId: string) => () => {
    setActiveSection(sectionId);
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center border-b border-white/5 bg-page/80 backdrop-blur">
      <nav className="relative section-px flex h-16 w-full max-w-screen-xl xl:max-w-screen-2xl items-center justify-between text-sm uppercase tracking-[0.2em] text-textMuted">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-surface text-textPrimary transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page md:hidden"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
          <span className="font-semibold text-textPrimary">Mukund Konkepudi</span>
        </div>
        <ul className="hidden items-center gap-3 md:flex">
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

        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-full mt-3 md:hidden"
            >
              <div className="rounded-3xl border border-white/10 bg-surface/95 p-4 shadow-xl shadow-black/30">
                <ul className="flex flex-col gap-2 text-xs tracking-[0.3em]">
                  {sections.map((section) => {
                    const isActive = activeSection === section.id;
                    return (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          onClick={handleNavClick(section.id)}
                          className={clsx(
                            "flex items-center justify-between rounded-2xl px-4 py-3 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
                            isActive ? "bg-accent text-page" : "bg-transparent text-textMuted hover:bg-white/5 hover:text-textPrimary"
                          )}
                        >
                          <span>{section.label}</span>
                          <span className="text-[0.65rem] text-textMuted/70">{section.prefix}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>
    </header>
  );
}
