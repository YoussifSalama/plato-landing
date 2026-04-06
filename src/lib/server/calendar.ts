// Google Calendar integration for creating demo booking events with Google Meet links
import { google } from 'googleapis';

function getOAuth2Client() {
  const clientId = process.env.GOOGLE_CALENDAR_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CALENDAR_CLIENT_SECRET;
  const refreshToken = process.env.GOOGLE_CALENDAR_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error('Google Calendar credentials not fully provided in .env');
  }

  const oauth2Client = new google.auth.OAuth2(
    clientId,
    clientSecret,
    'https://developers.google.com/oauthplayground'
  );
  oauth2Client.setCredentials({ refresh_token: refreshToken });
  return oauth2Client;
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
  timezone?: string;
}): Promise<{ meetLink: string; eventLink: string }> {
  const oauth2Client = getOAuth2Client();
  const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

  const { hour, minute } = parseTime(booking.bookingTime);
  const timezone = booking.timezone || 'Africa/Cairo';

  const startDateTime = `${booking.bookingDate}T${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:00`;
  const startDate = new Date(startDateTime);
  const endDate = new Date(startDate.getTime() + 30 * 60 * 1000);

  const endDateTime = endDate.toISOString().replace(/\.\d+Z$/, '');

  const event = {
    summary: `Plato Demo — ${booking.name}`,
    description: `30-minute product demo with ${booking.name}.\n\nWe'll cover:\n• Candidate flow, scoring, and shortlisting\n• Use cases for volume roles, campus hiring, and tech hiring\n• Q&A and next steps\n\nBooker email: ${booking.email}`,
    start: {
      dateTime: startDate.toISOString(),
      timeZone: timezone,
    },
    end: {
      dateTime: endDate.toISOString(),
      timeZone: timezone,
    },
    attendees: [
      { email: booking.email, displayName: booking.name },
    ],
    conferenceData: {
      createRequest: {
        requestId: `plato-demo-${Date.now()}`,
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
  };

  const response = await calendar.events.insert({
    calendarId: 'primary',
    requestBody: event,
    conferenceDataVersion: 1,
    sendUpdates: 'all',
  });

  const meetLink = response.data.hangoutLink || '';
  const eventLink = response.data.htmlLink || '';

  return { meetLink, eventLink };
}
