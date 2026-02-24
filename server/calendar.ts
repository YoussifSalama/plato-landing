// Google Calendar integration for creating demo booking events with Google Meet links
import { google } from 'googleapis';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
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
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=google-calendar',
    {
      headers: {
        'Accept': 'application/json',
        'X-Replit-Token': xReplitToken,
      },
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('Google Calendar not connected');
  }
  return accessToken;
}

async function getUncachableGoogleCalendarClient() {
  const accessToken = await getAccessToken();
  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({ access_token: accessToken });
  return google.calendar({ version: 'v3', auth: oauth2Client });
}

function parseTime(timeStr: string): { hour: number; minute: number } {
  const match = timeStr.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) throw new Error(`Invalid time format: ${timeStr}`);
  let hour = parseInt(match[1], 10);
  const minute = parseInt(match[2], 10);
  const ampm = match[3].toUpperCase();
  if (ampm === 'PM' && hour !== 12) hour += 12;
  if (ampm === 'AM' && hour === 12) hour = 0;
  return { hour, minute };
}

export async function createDemoEvent(booking: {
  name: string;
  email: string;
  bookingDate: string;
  bookingTime: string;
}): Promise<{ meetLink: string; eventLink: string }> {
  const calendar = await getUncachableGoogleCalendarClient();
  const { hour, minute } = parseTime(booking.bookingTime);

  const startDate = new Date(`${booking.bookingDate}T${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:00`);
  const endDate = new Date(startDate.getTime() + 30 * 60 * 1000);

  const formatForCalendar = (d: Date) => {
    const y = d.getFullYear();
    const mo = String(d.getMonth() + 1).padStart(2, '0');
    const da = String(d.getDate()).padStart(2, '0');
    const h = String(d.getHours()).padStart(2, '0');
    const mi = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');
    return `${y}-${mo}-${da}T${h}:${mi}:${s}`;
  };

  const event = {
    summary: `Plato Demo — ${booking.name}`,
    description: `30-minute product demo with ${booking.name}.\n\nWe'll cover:\n• Candidate flow, scoring, and shortlisting\n• Use cases for volume roles, campus hiring, and tech hiring\n• Q&A and next steps\n\nBooker email: ${booking.email}`,
    start: {
      dateTime: formatForCalendar(startDate),
      timeZone: 'Africa/Cairo',
    },
    end: {
      dateTime: formatForCalendar(endDate),
      timeZone: 'Africa/Cairo',
    },
    attendees: [
      { email: booking.email, displayName: booking.name },
    ],
    conferenceData: {
      createRequest: {
        requestId: `plato-demo-${booking.bookingDate}-${hour}${minute}-${Date.now()}`,
        conferenceSolutionKey: { type: 'hangoutsMeet' },
      },
    },
    reminders: {
      useDefault: false,
      overrides: [
        { method: 'email', minutes: 60 },
        { method: 'popup', minutes: 10 },
      ],
    },
    sendUpdates: 'all',
  };

  const response = await calendar.events.insert({
    calendarId: 'primary',
    requestBody: event,
    conferenceDataVersion: 1,
    sendUpdates: 'all',
  });

  const meetLink = response.data.hangoutLink || response.data.conferenceData?.entryPoints?.[0]?.uri || '';
  const eventLink = response.data.htmlLink || '';

  console.log(`Google Calendar event created for ${booking.name} — Meet link: ${meetLink}`);

  return { meetLink, eventLink };
}
