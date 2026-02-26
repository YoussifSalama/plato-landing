"use client";

import { useCallback } from "react";
import { usePathname } from "next/navigation";
import { useI18n } from "@/lib/i18n";

interface SmartHashLinkProps {
  hash: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  "data-testid"?: string;
}

export default function SmartHashLink({
  hash,
  children,
  className,
  onClick,
  "data-testid": testId,
}: SmartHashLinkProps) {
  const pathname = usePathname();
  const { lang } = useI18n();

  const homePath = lang === "ar" ? "/ar" : "/";
  const isHome = pathname === "/" || pathname === "/ar" || pathname === "/en";

  const scrollToHash = useCallback((targetHash: string) => {
    const el = document.getElementById(targetHash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();

      if (isHome) {
        scrollToHash(hash);
        window.history.pushState(null, "", `${homePath}#${hash}`);
        window.dispatchEvent(new HashChangeEvent("hashchange"));
      } else {
        window.location.href = `${homePath}#${hash}`;
      }

      onClick?.();
    },
    [hash, isHome, homePath, scrollToHash, onClick]
  );

  return (
    <a
      href={`${homePath}#${hash}`}
      onClick={handleClick}
      className={className}
      data-testid={testId}
    >
      {children}
    </a>
  );
}
