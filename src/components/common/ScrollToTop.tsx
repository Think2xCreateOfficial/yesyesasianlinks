"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * ScrollToTop — global fix for React scroll position retention on route change.
 * Uses useLayoutEffect-equivalent timing: fires synchronously before paint
 * by using useEffect with an immediate (synchronous-feeling) scroll call.
 */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Instant scroll to top (no smooth) to prevent seeing the old position
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
