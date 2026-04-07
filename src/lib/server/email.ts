// SendGrid integration for sending booking confirmation emails
import sgMail from '@sendgrid/mail';
import { type DemoEmailKind } from '@shared/schema';

let connectionSettings: any;
const DEFAULT_CONTACT_TO_EMAIL = 'Info@platohiring.com';
const DEFAULT_ADMIN_TO_EMAIL = 'Demo@platohiring.com';
const DEFAULT_FROM_NAME = 'Plato Website';

async function getCredentials() {
  // Prefer direct env vars for local/dev/prod setups outside Replit.
  if (process.env.SENDGRID_API_KEY && process.env.SENDGRID_FROM_EMAIL) {
    return {
      apiKey: process.env.SENDGRID_API_KEY,
      email: process.env.SENDGRID_FROM_EMAIL,
      name: process.env.SENDGRID_FROM_NAME || DEFAULT_FROM_NAME,
    };
  }

  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY
    ? 'repl ' + process.env.REPL_IDENTITY
    : process.env.WEB_REPL_RENEWAL
      ? 'depl ' + process.env.WEB_REPL_RENEWAL
      : null;

  if (!xReplitToken) {
    throw new Error('X-Replit-Token not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=sendgrid',
    {
      headers: {
        'Accept': 'application/json',
        'X-Replit-Token': xReplitToken,
      },
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  if (!connectionSettings || (!connectionSettings.settings.api_key || !connectionSettings.settings.from_email)) {
    throw new Error('SendGrid not connected');
  }
  return {
    apiKey: connectionSettings.settings.api_key,
    email: connectionSettings.settings.from_email,
    name: process.env.SENDGRID_FROM_NAME || DEFAULT_FROM_NAME,
  };
}

async function getUncachableSendGridClient() {
  const { apiKey, email, name } = await getCredentials();
  sgMail.setApiKey(apiKey);
  return { client: sgMail, fromEmail: email, fromName: name };
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function getDayName(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', { weekday: 'long' });
}

function getFirstName(fullName: string): string {
  return fullName.trim().split(/\s+/)[0];
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

interface BookingEmailData {
  name: string;
  email: string;
  bookingDate: string;
  bookingTime: string;
  meetLink?: string;
  eventLink?: string;
  timezone?: string;
}

const HOST_NAME = 'Plato Team';
const HOST_TITLE = 'Customer Success';
const HOST_EMAIL = 'Demo@platohiring.com';
const RESCHEDULE_URL = 'https://platohiring.com/book-demo';

export async function sendBookingConfirmation(booking: BookingEmailData) {
  try {
    const { client, fromEmail, fromName } = await getUncachableSendGridClient();
    const formattedDate = formatDate(booking.bookingDate);
    const dayName = getDayName(booking.bookingDate);
    const firstName = getFirstName(booking.name);
    const time = booking.bookingTime;
    const meetLink = booking.meetLink || '';
    const eventLink = booking.eventLink || '';

    const meetLinkRow = meetLink
      ? `<tr>
           <td style="padding:6px 0;color:#374151;font-size:15px;line-height:1.7;">
             <strong>Meeting link:</strong> <a href="${meetLink}" style="color:#0966A8;text-decoration:none;word-break:break-all;">${meetLink}</a>
           </td>
         </tr>`
      : '';

    const joinButtonHtml = meetLink
      ? `<table cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:16px;">
           <tr>
             <td align="center">
               <table cellpadding="0" cellspacing="0">
                 <tr>
                   <td align="center" style="background:#0966A8;border-radius:8px;">
                     <a href="${meetLink}" target="_blank" style="display:inline-block;padding:14px 36px;color:#ffffff;font-size:15px;font-weight:600;text-decoration:none;">
                       Join Google Meet
                     </a>
                   </td>
                 </tr>
               </table>
             </td>
           </tr>
         </table>`
      : '';

    const calendarButtonHtml = eventLink
      ? `<table cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:16px;">
           <tr>
             <td align="center">
               <table cellpadding="0" cellspacing="0">
                 <tr>
                   <td align="center" style="background:#ffffff;border:1px solid #d0e3f5;border-radius:8px;">
                     <a href="${eventLink}" target="_blank" style="display:inline-block;padding:12px 28px;color:#0966A8;font-size:14px;font-weight:600;text-decoration:none;">
                       View in Google Calendar
                     </a>
                   </td>
                 </tr>
               </table>
             </td>
           </tr>
         </table>`
      : '';

    const msg = {
      to: booking.email,
      from: {
        email: fromEmail,
        name: fromName,
      },
      subject: `Your Plato demo is confirmed — ${dayName}, ${formattedDate}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
          <!-- Header -->
          <tr>
            <td style="background:#0966A8;padding:40px 40px 28px;text-align:center;">
              <div style="display:inline-block;background:#ffffff;padding:12px;border-radius:12px;margin-bottom:20px;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
                <img src="https://agency.platohiring.com/brand/plato-logo.png" alt="Plato" style="height:32px;width:32px;display:block;" />
              </div>
              <h1 style="color:#ffffff;margin:0 0 4px;font-size:24px;font-weight:700;letter-spacing:-0.5px;">Demo Confirmed!</h1>
              <p style="color:rgba(255,255,255,0.9);margin:0;font-size:15px;">Your meeting with the Plato team is all set</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <p style="color:#111827;font-size:16px;margin:0 0 24px;">Hi ${escapeHtml(firstName)},</p>
              <p style="color:#374151;font-size:15px;line-height:1.6;margin:0 0 24px;">Your Plato demo has been confirmed. We're looking forward to showing you how we can help with your hiring.</p>

              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;margin-bottom:32px;">
                <tr>
                  <td style="padding:16px 20px;border-bottom:1px solid #e5e7eb;">
                    <p style="margin:0;font-size:11px;color:#6b7280;text-transform:uppercase;font-weight:600;letter-spacing:0.025em;">WHEN</p>
                    <p style="margin:4px 0 0;font-size:15px;color:#111827;font-weight:700;">${formattedDate} — ${time}${booking.timezone ? ` (${booking.timezone})` : ''}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px 20px;border-bottom:1px solid #e5e7eb;">
                    <p style="margin:0;font-size:11px;color:#6b7280;text-transform:uppercase;font-weight:600;letter-spacing:0.025em;">DURATION</p>
                    <p style="margin:4px 0 0;font-size:15px;color:#111827;font-weight:700;">30 minutes</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px 20px;">
                    <p style="margin:0;font-size:11px;color:#6b7280;text-transform:uppercase;font-weight:600;letter-spacing:0.025em;">HOST</p>
                    <p style="margin:4px 0 0;font-size:15px;color:#111827;font-weight:700;">${HOST_NAME}, ${HOST_TITLE}</p>
                  </td>
                </tr>
              </table>

              ${meetLink ? `
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                <tr>
                  <td align="center">
                    <a href="${meetLink}" target="_blank" style="display:inline-block;background:#0966A8;color:#ffffff;padding:14px 36px;border-radius:10px;text-decoration:none;font-weight:700;font-size:15px;box-shadow:0 2px 4px rgba(9,102,168,0.2);">
                      Join Google Meet
                    </a>
                  </td>
                </tr>
              </table>` : ''}

              <div style="background:#f8fafc;padding:24px;border-radius:12px;margin-bottom:32px;">
                <p style="color:#111827;font-size:15px;font-weight:700;margin:0 0 12px;">What we'll cover:</p>
                <ul style="margin:0;padding-left:18px;color:#374151;font-size:14px;line-height:1.6;">
                  <li style="margin-bottom:8px;">Quick walkthrough of Plato (candidate flow, scoring, shortlisting)</li>
                  <li style="margin-bottom:8px;">How companies use it for volume, campus, and tech hiring</li>
                  <li>Q&A + next steps</li>
                </ul>
              </div>

              <p style="color:#6b7280;font-size:13px;text-align:center;margin:0;">
                Need to change the time? <a href="${RESCHEDULE_URL}" style="color:#0966A8;text-decoration:underline;">Reschedule or cancel</a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;border-top:1px solid #f1f5f9;text-align:center;">
              <p style="color:#94a3b8;font-size:12px;margin:0;">&copy; ${new Date().getFullYear()} Plato Hire Agency. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
    };

    await client.send(msg);
    console.log(`Booking confirmation email sent to ${booking.email}`);
    return true;
  } catch (error: any) {
    console.error('Failed to send booking confirmation email:', error?.response?.body || error.message);
    return false;
  }
}

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  inquiry?: string;
  message: string;
  language?: string;
}

export async function sendContactFormEmail(data: ContactFormData) {
  try {
    const { client, fromEmail, fromName } = await getUncachableSendGridClient();
    const msg = {
      to: process.env.CONTACT_TO_EMAIL || DEFAULT_CONTACT_TO_EMAIL,
      from: {
        email: fromEmail,
        name: fromName,
      },
      replyTo: {
        email: data.email,
        name: data.name,
      },
      subject: `New Contact Message — ${escapeHtml(data.name)}${data.inquiry ? ` (${escapeHtml(data.inquiry)})` : ''}`,
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
          <!-- Header -->
          <tr>
            <td style="background:#0966A8;padding:40px 40px 28px;text-align:center;">
              <div style="display:inline-block;background:#ffffff;padding:12px;border-radius:12px;margin-bottom:20px;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
                <img src="https://agency.platohiring.com/brand/plato-logo.png" alt="Plato" style="height:32px;width:32px;display:block;" />
              </div>
              <h1 style="color:#ffffff;margin:0 0 4px;font-size:24px;font-weight:700;letter-spacing:-0.5px;">New Contact Message</h1>
              <p style="color:rgba(255,255,255,0.9);margin:0;font-size:15px;">A new message was submitted from the contact page</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <p style="color:#111827;font-size:16px;margin:0 0 24px;">Hello Admin,</p>
              <p style="color:#374151;font-size:15px;line-height:1.6;margin:0 0 24px;">A new contact request has been received with the following details:</p>

              <!-- Details Container -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;margin-bottom:32px;">
                <tr>
                  <td style="padding:16px 20px;border-bottom:1px solid #e5e7eb;">
                    <p style="margin:0;font-size:11px;color:#6b7280;text-transform:uppercase;font-weight:600;letter-spacing:0.025em;">NAME</p>
                    <p style="margin:4px 0 0;font-size:15px;color:#111827;font-weight:700;">${escapeHtml(data.name)}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px 20px;border-bottom:1px solid #e5e7eb;">
                    <p style="margin:0;font-size:11px;color:#6b7280;text-transform:uppercase;font-weight:600;letter-spacing:0.025em;">EMAIL</p>
                    <p style="margin:4px 0 0;font-size:15px;color:#111827;font-weight:700;">${escapeHtml(data.email)}</p>
                  </td>
                </tr>
                ${data.phone ? `
                <tr>
                  <td style="padding:16px 20px;border-bottom:1px solid #e5e7eb;">
                    <p style="margin:0;font-size:11px;color:#6b7280;text-transform:uppercase;font-weight:600;letter-spacing:0.025em;">PHONE</p>
                    <p style="margin:4px 0 0;font-size:15px;color:#111827;font-weight:700;">${escapeHtml(data.phone)}</p>
                  </td>
                </tr>` : ''}
                ${data.inquiry ? `
                <tr>
                  <td style="padding:16px 20px;border-bottom:1px solid #e5e7eb;">
                    <p style="margin:0;font-size:11px;color:#6b7280;text-transform:uppercase;font-weight:600;letter-spacing:0.025em;">INQUIRY TYPE</p>
                    <p style="margin:4px 0 0;font-size:15px;color:#111827;font-weight:700;">${escapeHtml(data.inquiry)}</p>
                  </td>
                </tr>` : ''}
                <tr>
                  <td style="padding:16px 20px;">
                    <p style="margin:0;font-size:11px;color:#6b7280;text-transform:uppercase;font-weight:600;letter-spacing:0.025em;">MESSAGE</p>
                    <p style="margin:8px 0 0;font-size:15px;color:#374151;line-height:1.6;white-space:pre-wrap;">${escapeHtml(data.message)}</p>
                  </td>
                </tr>
              </table>

              <!-- Action -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="mailto:${escapeHtml(data.email)}" style="display:inline-block;background:#0966A8;color:#ffffff;padding:14px 36px;border-radius:10px;text-decoration:none;font-weight:700;font-size:15px;box-shadow:0 2px 4px rgba(9,102,168,0.2);">
                      Reply to Message
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;border-top:1px solid #f1f5f9;text-align:center;">
              <p style="color:#94a3b8;font-size:12px;margin:0;">&copy; ${new Date().getFullYear()} Plato Hire Agency. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
    };

    await client.send(msg);
    console.log(`Contact form email sent for ${data.name} (${data.email})`);
    return true;
  } catch (error: any) {
    console.error('Failed to send contact form email:', error?.response?.body || error.message);
    return false;
  }
}

export async function sendBookingNotificationToAdmin(booking: BookingEmailData) {
  try {
    const { client, fromEmail, fromName } = await getUncachableSendGridClient();
    const formattedDate = formatDate(booking.bookingDate);
    const time = booking.bookingTime;
    const meetLink = booking.meetLink || 'Not generated';

    const msg = {
      to: process.env.ADMIN_TO_EMAIL || DEFAULT_ADMIN_TO_EMAIL,
      from: {
        email: fromEmail,
        name: fromName,
      },
      subject: `New Demo Booking — ${escapeHtml(booking.name)} on ${formattedDate} at ${time}`,
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
          <!-- Header -->
          <tr>
            <td style="background:#0966A8;padding:40px 40px 28px;text-align:center;">
              <div style="display:inline-block;background:#ffffff;padding:12px;border-radius:12px;margin-bottom:20px;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
                <img src="https://agency.platohiring.com/brand/plato-logo.png" alt="Plato" style="height:32px;width:32px;display:block;" />
              </div>
              <h1 style="color:#ffffff;margin:0 0 4px;font-size:24px;font-weight:700;letter-spacing:-0.5px;">New Demo Booking</h1>
              <p style="color:rgba(255,255,255,0.9);margin:0;font-size:15px;">A demonstration session has been scheduled</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <p style="color:#111827;font-size:16px;margin:0 0 24px;">Hello Admin,</p>
              <p style="color:#374151;font-size:15px;line-height:1.6;margin:0 0 24px;">A new demo booking has been received with the following details:</p>

              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;margin-bottom:32px;">
                <tr>
                  <td style="padding:16px 20px;border-bottom:1px solid #e5e7eb;">
                    <p style="margin:0;font-size:11px;color:#6b7280;text-transform:uppercase;font-weight:600;letter-spacing:0.025em;">BOOKED BY</p>
                    <p style="margin:4px 0 0;font-size:15px;color:#111827;font-weight:700;">${escapeHtml(booking.name)}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px 20px;border-bottom:1px solid #e5e7eb;">
                    <p style="margin:0;font-size:11px;color:#6b7280;text-transform:uppercase;font-weight:600;letter-spacing:0.025em;">EMAIL</p>
                    <p style="margin:4px 0 0;font-size:15px;color:#111827;font-weight:700;">${escapeHtml(booking.email)}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px 20px;border-bottom:1px solid #e5e7eb;">
                    <p style="margin:0;font-size:11px;color:#6b7280;text-transform:uppercase;font-weight:600;letter-spacing:0.025em;">DATE & TIME</p>
                    <p style="margin:4px 0 0;font-size:15px;color:#111827;font-weight:700;">${formattedDate} at ${time}${booking.timezone ? ` (${booking.timezone})` : ''}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px 20px;">
                    <p style="margin:0;font-size:11px;color:#6b7280;text-transform:uppercase;font-weight:600;letter-spacing:0.025em;">GOOGLE MEET LINK</p>
                    <p style="margin:4px 0 0;font-size:15px;color:#111827;font-weight:700;">
                      <a href="${meetLink}" style="color:#0966A8;text-decoration:none;">${meetLink}</a>
                    </p>
                  </td>
                </tr>
              </table>

              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="mailto:${escapeHtml(booking.email)}" style="display:inline-block;background:#0966A8;color:#ffffff;padding:14px 36px;border-radius:10px;text-decoration:none;font-weight:700;font-size:15px;box-shadow:0 2px 4px rgba(9,102,168,0.2);">
                      Contact Requester
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;border-top:1px solid #f1f5f9;text-align:center;">
              <p style="color:#94a3b8;font-size:12px;margin:0;">&copy; ${new Date().getFullYear()} Plato Hire Agency. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
    };

    await client.send(msg);
    console.log(`Admin notification email sent for booking by ${booking.name}`);
    return true;
  } catch (error: any) {
    console.error('Failed to send admin notification email:', error?.response?.body || error.message);
    return false;
  }
}

interface DemoRequestBase {
  name: string;
  email: string;
}

interface SendDemoRequestAdminPayload extends DemoRequestBase {
  phone?: string;
  description?: string;
  preferredSlots: Array<{ slotDate: string; slotTime: string }>;
}

interface SendDemoConfirmedPayload extends DemoRequestBase {
  meetingType?: "slot_based" | "pre_scheduled";
  slotDate?: string;
  slotTime?: string;
  meetingLink: string;
}

interface SendDemoDeclinedPayload extends DemoRequestBase {
  declineReason: string;
  alternativeSlots?: Array<{ slotDate: string; slotTime: string }>;
}

function renderPreferredSlots(slots: Array<{ slotDate: string; slotTime: string }>): string {
  if (!slots.length) return "<li>No preferred slots were provided.</li>";
  return slots
    .map((slot) => `<li>${escapeHtml(slot.slotDate)} at ${escapeHtml(slot.slotTime)}</li>`)
    .join("");
}

export async function sendDemoRequestNotificationToAdmin(data: SendDemoRequestAdminPayload) {
  const { client, fromEmail, fromName } = await getUncachableSendGridClient();
  const toEmail = process.env.ADMIN_TO_EMAIL || DEFAULT_ADMIN_TO_EMAIL;
  await client.send({
    to: toEmail,
    from: { email: fromEmail, name: fromName },
    subject: `New Demo Request — ${escapeHtml(data.name)}`,
    replyTo: { email: data.email, name: data.name },
    html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
          <!-- Header -->
          <tr>
            <td style="background:#0966A8;padding:40px 40px 28px;text-align:center;">
              <div style="display:inline-block;background:#ffffff;padding:12px;border-radius:12px;margin-bottom:20px;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
                <img src="https://agency.platohiring.com/brand/plato-logo.png" alt="Plato" style="height:32px;width:32px;display:block;" />
              </div>
              <h1 style="color:#ffffff;margin:0 0 4px;font-size:24px;font-weight:700;letter-spacing:-0.5px;">New Walkthrough Request 🎉</h1>
              <p style="color:rgba(255,255,255,0.9);margin:0;font-size:15px;">A new demonstration session has been requested</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <p style="color:#111827;font-size:16px;margin:0 0 24px;">Hello Admin,</p>
              <p style="color:#374151;font-size:15px;line-height:1.6;margin:0 0 24px;">A dashboard walkthrough has been requested with the following details:</p>

              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;margin-bottom:32px;">
                <tr>
                  <td style="padding:16px 20px;border-bottom:1px solid #e5e7eb;">
                    <p style="margin:0;font-size:11px;color:#6b7280;text-transform:uppercase;font-weight:600;letter-spacing:0.025em;">REQUESTED BY</p>
                    <p style="margin:4px 0 0;font-size:15px;color:#111827;font-weight:700;">${escapeHtml(data.name)} (${escapeHtml(data.email)})</p>
                  </td>
                </tr>
                ${data.phone ? `
                <tr>
                  <td style="padding:16px 20px;border-bottom:1px solid #e5e7eb;">
                    <p style="margin:0;font-size:11px;color:#6b7280;text-transform:uppercase;font-weight:600;letter-spacing:0.025em;">PHONE</p>
                    <p style="margin:4px 0 0;font-size:15px;color:#111827;font-weight:700;">${escapeHtml(data.phone)}</p>
                  </td>
                </tr>` : ''}
                <tr>
                  <td style="padding:16px 20px;border-bottom:1px solid #e5e7eb;">
                    <p style="margin:0;font-size:11px;color:#6b7280;text-transform:uppercase;font-weight:600;letter-spacing:0.025em;">PREFERRED SLOTS</p>
                    <ul style="margin:8px 0 0;padding-left:18px;font-size:15px;color:#111827;font-weight:700;line-height:1.6;">
                      ${renderPreferredSlots(data.preferredSlots)}
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px 20px;">
                    <p style="margin:0;font-size:11px;color:#6b7280;text-transform:uppercase;font-weight:600;letter-spacing:0.025em;">ADDITIONAL NOTES</p>
                    <p style="margin:8px 0 0;font-size:15px;color:#374151;line-height:1.6;">${escapeHtml(data.description || "None provided")}</p>
                  </td>
                </tr>
              </table>

              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <a href="mailto:${escapeHtml(data.email)}" style="display:inline-block;background:#0966A8;color:#ffffff;padding:14px 36px;border-radius:10px;text-decoration:none;font-weight:700;font-size:15px;box-shadow:0 2px 4px rgba(9,102,168,0.2);">
                      Reply to Request
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;border-top:1px solid #f1f5f9;text-align:center;">
              <p style="color:#94a3b8;font-size:12px;margin:0;">&copy; ${new Date().getFullYear()} Plato Hire Agency. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
  });
}

export async function sendDemoRequestReceivedToUser(data: DemoRequestBase) {
  const { client, fromEmail, fromName } = await getUncachableSendGridClient();
  await client.send({
    to: data.email,
    from: { email: fromEmail, name: fromName },
    subject: "We've received your demo request",
    html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
          <!-- Header -->
          <tr>
            <td style="background:#0966A8;padding:40px 40px 28px;text-align:center;">
              <div style="display:inline-block;background:#ffffff;padding:12px;border-radius:12px;margin-bottom:20px;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
                <img src="https://agency.platohiring.com/brand/plato-logo.png" alt="Plato" style="height:32px;width:32px;display:block;" />
              </div>
              <h1 style="color:#ffffff;margin:0 0 4px;font-size:24px;font-weight:700;letter-spacing:-0.5px;">Request Received</h1>
              <p style="color:rgba(255,255,255,0.9);margin:0;font-size:15px;">We've received your demo request</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <p style="color:#111827;font-size:16px;margin:0 0 24px;">Hi ${escapeHtml(getFirstName(data.name))},</p>
              <p style="color:#374151;font-size:15px;line-height:1.6;margin:0 0 24px;">
                Thanks for requesting a demo with Plato. Our team is currently reviewing your requested slots and will get back to you shortly to confirm the best time for our walkthrough.
              </p>
              <div style="background:#f8fafc;padding:24px;border-radius:12px;text-align:center;">
                <p style="color:#64748b;font-size:14px;margin:0;">In the meantime, if you have any questions, just reply to this email.</p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;border-top:1px solid #f1f5f9;text-align:center;">
              <p style="color:#94a3b8;font-size:12px;margin:0;">&copy; ${new Date().getFullYear()} Plato Hire Agency. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
  });
}

export async function sendDemoConfirmedToUser(data: SendDemoConfirmedPayload) {
  const { client, fromEmail, fromName } = await getUncachableSendGridClient();
  const hasSpecificSlot = data.meetingType !== "pre_scheduled" && data.slotDate && data.slotTime;
  const scheduleLine = hasSpecificSlot
    ? `<p>Your demo is confirmed for <strong>${escapeHtml(data.slotDate!)} at ${escapeHtml(data.slotTime!)}</strong>.</p>`
    : "<p>Your demo is confirmed. Please use the meeting link below at the pre-scheduled time shared by the team.</p>";
  await client.send({
    to: data.email,
    from: { email: fromEmail, name: fromName },
    subject: hasSpecificSlot
      ? `Demo confirmed for ${escapeHtml(data.slotDate!)} ${escapeHtml(data.slotTime!)}`
      : "Your demo meeting is confirmed",
    html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
          <!-- Header -->
          <tr>
            <td style="background:#0966A8;padding:40px 40px 28px;text-align:center;">
              <div style="display:inline-block;background:#ffffff;padding:12px;border-radius:12px;margin-bottom:20px;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
                <img src="https://agency.platohiring.com/brand/plato-logo.png" alt="Plato" style="height:32px;width:32px;display:block;" />
              </div>
              <h1 style="color:#ffffff;margin:0 0 4px;font-size:24px;font-weight:700;letter-spacing:-0.5px;">Demo Confirmed!</h1>
              <p style="color:rgba(255,255,255,0.9);margin:0;font-size:15px;">Your walkthrough session is confirmed</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <p style="color:#111827;font-size:16px;margin:0 0 24px;">Hi ${escapeHtml(getFirstName(data.name))},</p>
              ${scheduleLine}
              
              <table width="100%" cellpadding="0" cellspacing="0" style="margin:32px 0;">
                <tr>
                  <td align="center">
                    <a href="${data.meetingLink}" style="display:inline-block;background:#0966A8;color:#ffffff;padding:14px 36px;border-radius:10px;text-decoration:none;font-weight:700;font-size:15px;box-shadow:0 2px 4px rgba(9,102,168,0.2);">
                      Join Meeting
                    </a>
                  </td>
                </tr>
              </table>

              <p style="color:#374151;font-size:15px;line-height:1.6;margin:0;text-align:center;">
                Meeting link: <a href="${escapeHtml(data.meetingLink)}" style="color:#0966A8;">${escapeHtml(data.meetingLink)}</a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;border-top:1px solid #f1f5f9;text-align:center;">
              <p style="color:#94a3b8;font-size:12px;margin:0;">&copy; ${new Date().getFullYear()} Plato Hire Agency. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
  });
}

export async function sendDemoDeclinedToUser(data: SendDemoDeclinedPayload) {
  const { client, fromEmail, fromName } = await getUncachableSendGridClient();
  await client.send({
    to: data.email,
    from: { email: fromEmail, name: fromName },
    subject: "Update on your demo request",
    html: `
      <p>Hi ${escapeHtml(getFirstName(data.name))},</p>
      <p>Unfortunately, we couldn’t confirm your requested slot.</p>
      <p><strong>Reason:</strong> ${escapeHtml(data.declineReason)}</p>
      ${data.alternativeSlots?.length
        ? `<p>Alternative slots:</p><ul>${renderPreferredSlots(data.alternativeSlots)}</ul>`
        : ""
      }
      <p>Please reply with your preferred time and we’ll arrange it quickly.</p>
    `,
  });
}

export async function sendEmailByKind(kind: DemoEmailKind, toEmail: string, payload: Record<string, unknown>) {
  switch (kind) {
    case "request_received_user":
      return sendDemoRequestReceivedToUser({
        name: String(payload.name || ""),
        email: toEmail,
      });
    case "new_request_admin":
    case "pending_reminder_admin":
      return sendDemoRequestNotificationToAdmin({
        name: String(payload.name || "Unknown"),
        email: String(payload.email || toEmail),
        phone: payload.phone ? String(payload.phone) : undefined,
        description: payload.description ? String(payload.description) : undefined,
        preferredSlots: Array.isArray(payload.preferredSlots)
          ? payload.preferredSlots as Array<{ slotDate: string; slotTime: string }>
          : [],
      });
    case "request_confirmed_user":
      return sendDemoConfirmedToUser({
        name: String(payload.name || ""),
        email: toEmail,
        meetingType: payload.meetingType === "pre_scheduled" ? "pre_scheduled" : "slot_based",
        slotDate: payload.slotDate ? String(payload.slotDate) : undefined,
        slotTime: payload.slotTime ? String(payload.slotTime) : undefined,
        meetingLink: String(payload.meetingLink || ""),
      });
    case "request_declined_user":
      return sendDemoDeclinedToUser({
        name: String(payload.name || ""),
        email: toEmail,
        declineReason: String(payload.declineReason || "Not provided"),
        alternativeSlots: Array.isArray(payload.alternativeSlots)
          ? payload.alternativeSlots as Array<{ slotDate: string; slotTime: string }>
          : [],
      });
    default:
      throw new Error(`Unsupported email kind: ${kind}`);
  }
}
