import { NextRequest, NextResponse } from "next/server";
import { getAdminSessionFromRequest } from "@/lib/server/admin-auth";
import { createDemoEvent } from "@/lib/server/calendar";

export async function POST(req: NextRequest) {
  const session = getAdminSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { name, email, slotDate, slotTime, timezone } = await req.json();

    if (!name || !email || !slotDate || !slotTime) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { meetLink } = await createDemoEvent({
      name,
      email,
      bookingDate: slotDate,
      bookingTime: slotTime,
      timezone,
    });

    return NextResponse.json({ meetLink });
  } catch (error: any) {
    console.error("Failed to generate Google Meet link:", error);
    return NextResponse.json(
      { error: error.message || "Failed to generate meeting link" },
      { status: 500 }
    );
  }
}
