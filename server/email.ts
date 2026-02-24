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

function formatTime(time: string): string {
  const [h, m] = time.split(':').map(Number);
  const ampm = h >= 12 ? 'PM' : 'AM';
  const hour12 = h % 12 || 12;
  return `${hour12}:${m.toString().padStart(2, '0')} ${ampm}`;
}

export async function sendBookingConfirmation(booking: {
  name: string;
  email: string;
  bookingDate: string;
  bookingTime: string;
}) {
  try {
    const { client, fromEmail } = await getUncachableSendGridClient();
    const formattedDate = formatDate(booking.bookingDate);
    const formattedTime = formatTime(booking.bookingTime);

    const msg = {
      to: booking.email,
      from: {
        email: fromEmail,
        name: 'Plato',
      },
      subject: `Demo Confirmed — ${formattedDate} at ${formattedTime}`,
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
            <td style="background:linear-gradient(135deg,#0966A8,#1EA0E2);padding:32px 40px;text-align:center;">
              <h1 style="color:#ffffff;margin:0;font-size:24px;font-weight:700;letter-spacing:-0.5px;">Plato</h1>
              <p style="color:rgba(255,255,255,0.9);margin:8px 0 0;font-size:14px;">AI-Powered Hiring Platform</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <h2 style="color:#111827;margin:0 0 8px;font-size:20px;font-weight:600;">Your demo is confirmed!</h2>
              <p style="color:#6b7280;margin:0 0 28px;font-size:15px;line-height:1.6;">
                Hi ${booking.name}, thank you for booking a demo with Plato. Here are your details:
              </p>

              <!-- Details Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f9fafb;border-radius:10px;border:1px solid #e5e7eb;margin-bottom:28px;">
                <tr>
                  <td style="padding:24px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:8px 0;">
                          <span style="color:#6b7280;font-size:13px;text-transform:uppercase;letter-spacing:0.5px;">Date</span><br>
                          <span style="color:#111827;font-size:16px;font-weight:600;">${formattedDate}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;">
                          <span style="color:#6b7280;font-size:13px;text-transform:uppercase;letter-spacing:0.5px;">Time</span><br>
                          <span style="color:#111827;font-size:16px;font-weight:600;">${formattedTime}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;">
                          <span style="color:#6b7280;font-size:13px;text-transform:uppercase;letter-spacing:0.5px;">Duration</span><br>
                          <span style="color:#111827;font-size:16px;font-weight:600;">30 Minutes</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <p style="color:#6b7280;font-size:14px;line-height:1.6;margin:0 0 28px;">
                A member of our team will reach out before the meeting with a link to join. If you need to reschedule, reply to this email or contact us at <a href="mailto:hello@platohiring.com" style="color:#0966A8;text-decoration:none;">hello@platohiring.com</a>.
              </p>

              <!-- CTA Button -->
              <table cellpadding="0" cellspacing="0" style="margin:0 auto;">
                <tr>
                  <td align="center" style="background:linear-gradient(135deg,#0966A8,#1EA0E2);border-radius:8px;">
                    <a href="https://platohiring.com" style="display:inline-block;padding:14px 32px;color:#ffffff;font-size:15px;font-weight:600;text-decoration:none;">
                      Visit Plato
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;border-top:1px solid #e5e7eb;text-align:center;">
              <p style="color:#9ca3af;font-size:12px;margin:0;line-height:1.6;">
                &copy; ${new Date().getFullYear()} Plato. All rights reserved.<br>
                AI-Powered Hiring Platform
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

export async function sendBookingNotificationToAdmin(booking: {
  name: string;
  email: string;
  bookingDate: string;
  bookingTime: string;
}) {
  try {
    const { client, fromEmail } = await getUncachableSendGridClient();
    const formattedDate = formatDate(booking.bookingDate);
    const formattedTime = formatTime(booking.bookingTime);

    const msg = {
      to: 'hello@platohiring.com',
      from: {
        email: fromEmail,
        name: 'Plato Booking System',
      },
      subject: `New Demo Booking — ${booking.name} on ${formattedDate}`,
      html: `
<div style="font-family:Arial,sans-serif;max-width:500px;padding:20px;">
  <h2 style="color:#0966A8;margin-bottom:16px;">New Demo Booking</h2>
  <p><strong>Name:</strong> ${booking.name}</p>
  <p><strong>Email:</strong> <a href="mailto:${booking.email}">${booking.email}</a></p>
  <p><strong>Date:</strong> ${formattedDate}</p>
  <p><strong>Time:</strong> ${formattedTime}</p>
  <p><strong>Duration:</strong> 30 Minutes</p>
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
