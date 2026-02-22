import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type AnimationType = "fade-up" | "fade-left" | "fade-right" | "scale-up" | "fade-in";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
}

const animationClasses: Record<AnimationType, string> = {
  "fade-up": "scroll-fade-up",
  "fade-left": "scroll-fade-left",
  "fade-right": "scroll-fade-right",
  "scale-up": "scroll-scale-up",
  "fade-in": "scroll-fade-in",
};

export default function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation();

  const delayClass = delay > 0 && delay <= 5 ? `scroll-delay-${delay}` : "";

  return (
    <div
      ref={ref}
      className={`${isVisible ? `${animationClasses[animation]} ${delayClass}` : "scroll-hidden"} ${className}`}
    >
      {children}
    </div>
  );
}
