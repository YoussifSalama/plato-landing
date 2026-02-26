import { NextRequest, NextResponse } from "next/server";
import { sendContactFormEmail } from "@/lib/server/email";

export async function POST(req: NextRequest) {
  const { name, email, phone, inquiry, message, language } = await req.json();

  if (!name || typeof name !== "string" || !name.trim()) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }
  if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }
  if (!message || typeof message !== "string" || !message.trim()) {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }

  try {
    const sent = await sendContactFormEmail({
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || undefined,
      inquiry: inquiry?.trim() || undefined,
      message: message.trim(),
      language: language || undefined,
    });

    if (!sent) {
      return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Contact form error:", err.message);
    return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 500 });
  }
}
