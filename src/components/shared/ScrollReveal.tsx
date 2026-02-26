"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale-up" | "fade-in";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation();

  const delayStyle = delay > 0 ? { transitionDelay: `${delay * 80}ms` } : undefined;

  return (
    <div
      ref={ref}
      className={`scroll-reveal scroll-${animation} ${isVisible ? "scroll-visible" : ""} ${className}`}
      style={delayStyle}
    >
      {children}
    </div>
  );
}
