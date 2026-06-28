"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

/**
 * PageTransition — smooth, no-flash page transition.
 *
 * Design principles:
 * - Uses subtle scale (0.98 → 1) + opacity instead of y-shift
 * - No white flash: opacity never goes through 0→white; we fade from previous page directly
 * - mode="wait" ensures old page exits before new page enters
 * - Short 0.25s duration keeps navigation feeling snappy
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, scale: 0.99 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.01 }}
        transition={{
          duration: 0.25,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        style={{ transformOrigin: "top center" }}
        className="flex-1 flex flex-col w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
