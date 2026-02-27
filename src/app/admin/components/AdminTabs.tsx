import Link from "next/link";

interface AdminTabsProps {
  active: "demo-requests" | "meetings";
}

function tabClass(isActive: boolean) {
  return [
    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
    isActive
      ? "bg-primary text-primary-foreground"
      : "border border-border bg-background hover:bg-muted",
  ].join(" ");
}

export default function AdminTabs({ active }: AdminTabsProps) {
  return (
    <div className="flex items-center gap-2">
      <Link href="/admin/demo-requests" className={tabClass(active === "demo-requests")}>
        Demo Requests
      </Link>
      <Link href="/admin/meetings" className={tabClass(active === "meetings")}>
        Meetings Calendar
      </Link>
    </div>
  );
}
