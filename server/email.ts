// SendGrid integration for sending booking confirmation emails
import sgMail from '@sendgrid/mail';

let connectionSettings: any;

async function getCredentials() {
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
  return { apiKey: connectionSettings.settings.api_key, email: connectionSettings.settings.from_email };
}

async function getUncachableSendGridClient() {
  const { apiKey, email } = await getCredentials();
  sgMail.setApiKey(apiKey);
  return { client: sgMail, fromEmail: email };
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
}

const HOST_NAME = 'Plato Team';
const HOST_TITLE = 'Customer Success';
const HOST_EMAIL = 'hello@platohiring.com';
const TIMEZONE = 'EET (Egypt Time, UTC+2)';
const RESCHEDULE_URL = 'https://platohiring.com/book-demo';

export async function sendBookingConfirmation(booking: BookingEmailData) {
  try {
    const { client, fromEmail } = await getUncachableSendGridClient();
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
        name: 'Plato',
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
  <span style="display:none;font-size:1px;color:#f4f4f5;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">
    ${dayName} at ${time} ${TIMEZONE} — 30 min product walkthrough with the Plato team
  </span>
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0966A8,#1EA0E2);padding:28px 40px;text-align:center;">
              <h1 style="color:#ffffff;margin:0;font-size:22px;font-weight:700;letter-spacing:-0.5px;">Plato</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px 16px;">
              <p style="color:#111827;margin:0 0 20px;font-size:16px;line-height:1.6;">
                Hi ${escapeHtml(firstName)},
              </p>
              <p style="color:#111827;margin:0 0 24px;font-size:16px;line-height:1.6;">
                Your Plato demo is confirmed.
              </p>

              <!-- Meeting Details Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0f7ff;border-radius:10px;border:1px solid #d0e3f5;margin-bottom:28px;">
                <tr>
                  <td style="padding:24px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:6px 0;color:#374151;font-size:15px;line-height:1.7;">
                          <strong>When:</strong> ${dayName}, ${formattedDate} &mdash; ${time} ${TIMEZONE}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;color:#374151;font-size:15px;line-height:1.7;">
                          <strong>Duration:</strong> 30 minutes
                        </td>
                      </tr>
                      ${meetLinkRow}
                      <tr>
                        <td style="padding:6px 0;color:#374151;font-size:15px;line-height:1.7;">
                          <strong>Host:</strong> ${HOST_NAME}, ${HOST_TITLE}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Join Meeting CTA -->
              ${joinButtonHtml}

              <!-- What we'll cover -->
              <p style="color:#111827;margin:0 0 12px;font-size:15px;font-weight:600;">
                What we'll cover (30 mins):
              </p>
              <table cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="padding:4px 0;color:#374151;font-size:14px;line-height:1.7;">
                    &#8226;&nbsp; A quick walkthrough of Plato (candidate flow, scoring, shortlisting)
                  </td>
                </tr>
                <tr>
                  <td style="padding:4px 0;color:#374151;font-size:14px;line-height:1.7;">
                    &#8226;&nbsp; How companies use it for volume roles, campus hiring, and tech hiring
                  </td>
                </tr>
                <tr>
                  <td style="padding:4px 0;color:#374151;font-size:14px;line-height:1.7;">
                    &#8226;&nbsp; Q&amp;A + next steps
                  </td>
                </tr>
              </table>

              <!-- How to prepare -->
              <p style="color:#111827;margin:0 0 12px;font-size:15px;font-weight:600;">
                To get the most out of it, feel free to bring:
              </p>
              <table cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="padding:4px 0;color:#374151;font-size:14px;line-height:1.7;">
                    1.&nbsp; A job description you're hiring for (or planning to)
                  </td>
                </tr>
                <tr>
                  <td style="padding:4px 0;color:#374151;font-size:14px;line-height:1.7;">
                    2.&nbsp; Your current hiring workflow (even if it's informal)
                  </td>
                </tr>
              </table>

              <!-- View in Calendar -->
              ${calendarButtonHtml}

              <!-- Reschedule link -->
              <table cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:28px;">
                <tr>
                  <td align="center">
                    <p style="color:#6b7280;font-size:13px;margin:0;">
                      Need to change the time?
                      <a href="${RESCHEDULE_URL}" style="color:#0966A8;text-decoration:underline;">Reschedule or cancel</a>
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Sign-off -->
              <table cellpadding="0" cellspacing="0" style="margin-bottom:8px;border-top:1px solid #e5e7eb;padding-top:24px;">
                <tr>
                  <td style="padding-top:24px;">
                    <p style="color:#374151;font-size:14px;line-height:1.7;margin:0;">
                      See you soon,<br>
                      <strong>${HOST_NAME}</strong><br>
                      <span style="color:#6b7280;">${HOST_TITLE} | Plato</span><br>
                      <span style="color:#6b7280;">
                        <a href="mailto:${HOST_EMAIL}" style="color:#0966A8;text-decoration:none;">${HOST_EMAIL}</a>
                      </span>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px;border-top:1px solid #e5e7eb;text-align:center;">
              <p style="color:#9ca3af;font-size:11px;margin:0;line-height:1.6;">
                &copy; ${new Date().getFullYear()} Plato. All rights reserved. | AI-Powered Hiring Platform
              </p>
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

export async function sendBookingNotificationToAdmin(booking: BookingEmailData) {
  try {
    const { client, fromEmail } = await getUncachableSendGridClient();
    const formattedDate = formatDate(booking.bookingDate);
    const time = booking.bookingTime;
    const meetLink = booking.meetLink || 'Not generated';

    const msg = {
      to: 'hello@platohiring.com',
      from: {
        email: fromEmail,
        name: 'Plato Booking System',
      },
      subject: `New Demo Booking — ${escapeHtml(booking.name)} on ${formattedDate} at ${time}`,
      html: `
<div style="font-family:Arial,sans-serif;max-width:500px;padding:20px;">
  <h2 style="color:#0966A8;margin-bottom:16px;">New Demo Booking</h2>
  <p><strong>Name:</strong> ${escapeHtml(booking.name)}</p>
  <p><strong>Email:</strong> <a href="mailto:${escapeHtml(booking.email)}">${escapeHtml(booking.email)}</a></p>
  <p><strong>Date:</strong> ${formattedDate}</p>
  <p><strong>Time:</strong> ${time} ${TIMEZONE}</p>
  <p><strong>Duration:</strong> 30 minutes</p>
  <p><strong>Meeting link:</strong> <a href="${meetLink}">${meetLink}</a></p>
  <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;">
  <p style="color:#6b7280;font-size:13px;">This is an automated notification from the Plato booking system.</p>
</div>`,
    };

    await client.send(msg);
    console.log(`Admin notification email sent for booking by ${booking.name}`);
    return true;
  } catch (error: any) {
    console.error('Failed to send admin notification email:', error?.response?.body || error.message);
    return false;
  }
}
