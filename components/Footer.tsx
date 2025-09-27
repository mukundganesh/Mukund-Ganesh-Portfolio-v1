import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="section-px border-t border-white/5 bg-page/90 py-10">
      <div className="container-max flex flex-col gap-6 text-sm text-textMuted/70 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Mukund Sai Ganesh Konkepudi. Crafted with Next.js, Tailwind, and a bit of motion.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/mukundganesh"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-textMuted/20 px-3 py-2 hover:border-accent hover:text-accent"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/mukund-ganesh"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-textMuted/20 px-3 py-2 hover:border-accent hover:text-accent"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}



