"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollManager() {
  const pathname = usePathname() ?? "/";
  const prevLocation = useRef(pathname);

  useEffect(() => {
    if (prevLocation.current !== pathname) {
      prevLocation.current = pathname;

      if (!window.location.hash) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }, [pathname]);

  return null;
}
