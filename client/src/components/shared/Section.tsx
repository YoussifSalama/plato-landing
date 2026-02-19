import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bg?: "default" | "light" | "card";
}

export default function Section({ children, className, id, bg = "default" }: SectionProps) {
  const bgClass =
    bg === "light"
      ? "bg-accent/30 dark:bg-primary/5"
      : bg === "card"
      ? "bg-card"
      : "";

  return (
    <section id={id} className={cn("py-20 sm:py-24 lg:py-28", bgClass, className)}>
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">{children}</div>
    </section>
  );
}
