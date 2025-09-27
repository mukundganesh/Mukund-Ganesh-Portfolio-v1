"use client";

import clsx from "clsx";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { HTMLAttributes, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Reveal({ children, delay = 0, className, ...rest }: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className={clsx(className)} {...rest}>
        {children}
      </div>
    );
  }

  const motionProps = rest as HTMLMotionProps<"div">;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={variants}
      className={clsx(className)}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}