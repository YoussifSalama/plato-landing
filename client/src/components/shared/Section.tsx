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
      ? "bg-gray-50/50 dark:bg-white/[0.02]"
      : bg === "card"
      ? "bg-gray-100/50 dark:bg-white/[0.03]"
      : "";

  return (
    <section id={id} className={cn("py-20 sm:py-24 lg:py-28", bgClass, className)}>
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">{children}</div>
    </section>
  );
}
