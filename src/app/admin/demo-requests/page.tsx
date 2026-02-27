import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { storage } from "@/lib/server/storage";
import { ADMIN_CSRF_COOKIE, ADMIN_SESSION_COOKIE, verifyAdminSessionToken } from "@/lib/server/admin-auth";
import ConfirmRequestForm from "./ConfirmRequestForm";
import DeclineRequestForm from "./DeclineRequestForm";
import AdminTabs from "../components/AdminTabs";

export const dynamic = "force-dynamic";

const REQUEST_STATUSES = ["pending", "confirmed", "declined", "cancelled"] as const;

function asString(value: string | string[] | undefined): string {
  if (Array.isArray(value)) return value[0] || "";
  return value || "";
}

export default async function AdminDemoRequestsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
  const session = verifyAdminSessionToken(sessionToken);
  if (!session) {
    redirect("/admin/login");
  }

  const params = await searchParams;
  const statusFilter = asString(params.status);
  const queryFilter = asString(params.q).trim().toLowerCase();
  const dateFilter = asString(params.date);
  const okMessage = asString(params.ok);
  const errorMessage = asString(params.error);

  const csrfToken = cookieStore.get(ADMIN_CSRF_COOKIE)?.value || "";
  const requests = await storage.listDemoRequests(
    REQUEST_STATUSES.includes(statusFilter as (typeof REQUEST_STATUSES)[number])
      ? (statusFilter as (typeof REQUEST_STATUSES)[number])
      : undefined,
  );

  const filteredRequests = requests.filter((request) => {
    const queryMatches = !queryFilter
      || request.name.toLowerCase().includes(queryFilter)
      || request.email.toLowerCase().includes(queryFilter)
      || (request.phone || "").toLowerCase().includes(queryFilter);
    const dateMatches = !dateFilter
      || request.preferredSlots.some((slot) => slot.slotDate === dateFilter)
      || request.confirmedSlotDateTime?.toISOString().slice(0, 10) === dateFilter;
    return queryMatches && dateMatches;
  });

  return (
    <main className="min-h-screen px-6 py-10">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Demo Requests</h1>
            <p className="text-sm text-muted-foreground">Review, confirm, or decline incoming demo requests.</p>
          </div>
          <form action="/api/admin/auth/logout" method="post">
            <Button type="submit" variant="outline">Logout</Button>
          </form>
        </div>

        {okMessage ? (
          <div className="rounded-lg border border-emerald-300 bg-emerald-50 p-3 text-sm text-emerald-800">
            {okMessage === "confirmed" ? "Demo request confirmed successfully." : "Action completed successfully."}
          </div>
        ) : null}
        {errorMessage ? (
          <div className="rounded-lg border border-red-300 bg-red-50 p-3 text-sm text-red-700">
            {errorMessage === "slot_conflict"
              ? "Selected slot is no longer available. Please choose another slot."
              : "Could not complete the requested action. Please try again."}
          </div>
        ) : null}

        <AdminTabs active="demo-requests" />

        <form method="get" className="rounded-xl border border-border bg-card p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div>
              <label className="text-xs">Status</label>
              <select
                name="status"
                defaultValue={statusFilter}
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="">All statuses</option>
                {REQUEST_STATUSES.map((status) => (
                  <option value={status} key={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs">Search</label>
              <Input
                name="q"
                defaultValue={asString(params.q)}
                placeholder="Name, email, phone"
              />
            </div>
            <div>
              <label className="text-xs">Preferred date</label>
              <Input name="date" type="date" defaultValue={dateFilter} />
            </div>
            <div className="flex items-end gap-2">
              <Button type="submit" className="w-full">Apply filters</Button>
              <Button asChild variant="outline" className="w-full">
                <a href="/admin/demo-requests">Reset</a>
              </Button>
            </div>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Showing {filteredRequests.length} of {requests.length} requests
          </p>
        </form>

        <div className="grid gap-4">
          {filteredRequests.map((request) => (
            <section key={request.id} className="rounded-xl border border-border bg-card p-5 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold">{request.name}</h2>
                  <p className="text-sm text-muted-foreground">{request.email} {request.phone ? `• ${request.phone}` : ""}</p>
                  <p className="text-sm mt-2">{request.description || "No description provided."}</p>
                </div>
                <span className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-wide">{request.status}</span>
              </div>

              <div>
                <p className="text-sm font-medium mb-2">Preferred slots</p>
                <div className="flex flex-wrap gap-2">
                  {request.preferredSlots.length ? request.preferredSlots.map((slot) => (
                    <span className="rounded-full border border-border px-3 py-1 text-xs" key={slot.id}>
                      {slot.slotDate} - {slot.slotTime}
                    </span>
                  )) : <span className="text-sm text-muted-foreground">No preferred slots.</span>}
                </div>
              </div>

              {request.status === "pending" ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <ConfirmRequestForm
                    requestId={request.id}
                    csrfToken={csrfToken}
                    preferredSlots={request.preferredSlots.map((slot) => ({
                      slotDate: slot.slotDate,
                      slotTime: slot.slotTime,
                    }))}
                  />

                  <DeclineRequestForm requestId={request.id} csrfToken={csrfToken} />
                </div>
              ) : null}
            </section>
          ))}
          {filteredRequests.length === 0 ? (
            <section className="rounded-xl border border-dashed border-border bg-card p-8 text-center">
              <h2 className="text-lg font-medium">No requests found</h2>
              <p className="text-sm text-muted-foreground mt-1">Try adjusting your dashboard filters.</p>
            </section>
          ) : null}
        </div>
      </div>
    </main>
  );
}
