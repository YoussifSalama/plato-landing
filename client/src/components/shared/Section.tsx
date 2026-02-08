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
    <section id={id} className={cn("py-16 sm:py-20 lg:py-24", bgClass, className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
