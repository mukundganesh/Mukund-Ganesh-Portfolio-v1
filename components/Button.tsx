import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

const baseClasses = "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page";

const variants = {
  primary: "bg-accent text-page shadow-lg shadow-accent/25 hover:bg-accent2",
  outline: "border border-textMuted/40 bg-transparent text-textPrimary hover:border-accent hover:text-accent",
  ghost: "text-textMuted hover:text-textPrimary",
};

type ButtonProps = {
  variant?: keyof typeof variants;
  className?: string;
  children: ReactNode;
} & (
  | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  | (AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
);

const isInternalLink = (href: string) => href.startsWith("/") || href.startsWith("#");

export function Button({
  variant = "primary",
  className,
  children,
  href,
  ...rest
}: ButtonProps) {
  const composed = clsx(baseClasses, variants[variant], className);

  if (href) {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;

    if (isInternalLink(href)) {
      return (
        <Link href={href} className={composed} {...anchorProps}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} className={composed} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button className={composed} {...buttonProps}>
      {children}
    </button>
  );
}