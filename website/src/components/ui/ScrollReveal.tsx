"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
  rootMargin?: string;
  as?: keyof HTMLMotionProps<"div">;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  y = 30,
  once = true,
  rootMargin = "0px 0px -100px 0px",
  as = "div",
}: ScrollRevealProps) {
  return (
    <motion.div
      as={as}
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, rootMargin }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollRevealStagger({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  y = 20,
  stagger = 0.1,
  once = true,
  rootMargin = "0px 0px -100px 0px",
}: {
  children: ReactNode[];
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  stagger?: number;
  once?: boolean;
  rootMargin?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, rootMargin }}
      variants={{
        hidden: { opacity: 0 },
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y },
            visible: { opacity: 1, y: 0, transition: { duration, ease: "easeOut" } },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}