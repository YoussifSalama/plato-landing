import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { Button } from "@/components/ui/button";
import { storage } from "@/lib/server/storage";
import { ADMIN_SESSION_COOKIE, verifyAdminSessionToken } from "@/lib/server/admin-auth";
import AdminTabs from "../components/AdminTabs";
import MeetingsCalendar from "./MeetingsCalendar";

export const dynamic = "force-dynamic";

export default async function AdminMeetingsPage() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
  const session = verifyAdminSessionToken(sessionToken);
  if (!session) {
    redirect("/admin/login");
  }

  const confirmed = await storage.listDemoRequests("confirmed");
  const meetings = confirmed.map((request) => ({
    id: request.id,
    name: request.name,
    email: request.email,
    meetingLink: request.meetingLink,
    confirmedSlotDateTime: request.confirmedSlotDateTime
      ? request.confirmedSlotDateTime.toISOString()
      : null,
  }));

  return (
    <main className="min-h-screen px-6 py-10">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Incoming Meetings</h1>
            <p className="text-sm text-muted-foreground">View confirmed demos in calendar format.</p>
          </div>
          <form action="/api/admin/auth/logout" method="post">
            <Button type="submit" variant="outline">Logout</Button>
          </form>
        </div>

        <AdminTabs active="meetings" />
        <MeetingsCalendar meetings={meetings} />
      </div>
    </main>
  );
}
