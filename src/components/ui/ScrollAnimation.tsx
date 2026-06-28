"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface ScrollAnimationProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right";
  delay?: number;
  duration?: number;
  className?: string;
  viewportMargin?: string;
  once?: boolean;
}

export const ScrollAnimation = ({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.6,
  className = "",
  viewportMargin = "-50px",
  once = true,
  ...props
}: ScrollAnimationProps) => {
  const getVariants = () => {
    switch (animation) {
      case "fade-up":
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        };
      case "fade-in":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
      case "slide-left":
        return {
          hidden: { opacity: 0, x: 30 },
          visible: { opacity: 1, x: 0 },
        };
      case "slide-right":
        return {
          hidden: { opacity: 0, x: -30 },
          visible: { opacity: 1, x: 0 },
        };
      default:
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: viewportMargin as any }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
