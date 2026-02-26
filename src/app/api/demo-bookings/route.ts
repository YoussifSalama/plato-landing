import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/lib/server/storage";
import { insertDemoBookingSchema } from "@shared/schema";
import { sendBookingConfirmation, sendBookingNotificationToAdmin } from "@/lib/server/email";
import { createDemoEvent } from "@/lib/server/calendar";

export async function GET(req: NextRequest) {
  const date = req.nextUrl.searchParams.get("date");
  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return NextResponse.json({ error: "Invalid date format. Use YYYY-MM-DD." }, { status: 400 });
  }
  const bookings = await storage.getBookingsByDate(date);
  return NextResponse.json(bookings.map((b) => ({ time: b.bookingTime })));
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = insertDemoBookingSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid booking data.", details: parsed.error.flatten() }, { status: 400 });
  }
  const bookingDate = new Date(parsed.data.bookingDate + "T00:00:00");
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  if (bookingDate < now) {
    return NextResponse.json({ error: "Cannot book a date in the past." }, { status: 400 });
  }
  const dayOfWeek = bookingDate.getDay();
  if (dayOfWeek === 5 || dayOfWeek === 6) {
    return NextResponse.json({ error: "Cannot book on weekends." }, { status: 400 });
  }

  try {
    const booking = await storage.createBooking(parsed.data);

    const emailData = {
      name: parsed.data.name,
      email: parsed.data.email,
      bookingDate: parsed.data.bookingDate,
      bookingTime: parsed.data.bookingTime,
      meetLink: "",
      eventLink: "",
    };

    try {
      const calendarResult = await createDemoEvent(parsed.data);
      emailData.meetLink = calendarResult.meetLink;
      emailData.eventLink = calendarResult.eventLink;
    } catch (calErr: any) {
      console.error("Failed to create Google Calendar event:", calErr.message);
    }

    sendBookingConfirmation(emailData).catch(() => {});
    sendBookingNotificationToAdmin(emailData).catch(() => {});

    return NextResponse.json({ id: booking.id, date: booking.bookingDate, time: booking.bookingTime }, { status: 201 });
  } catch (err: any) {
    if (err.code === "23505") {
      return NextResponse.json({ error: "This time slot is already booked." }, { status: 409 });
    }
    throw err;
  }
}
