# Contact form setup: Google Sheets logging + WhatsApp redirect

The contact form (`src/pages/Contact.tsx`) does two things on submit:

1. Logs the submission as a row in a Google Sheet (best-effort, fire-and-forget).
2. Opens WhatsApp with the form contents pre-filled as a message.

Both are configured through env vars — see `.env.example`. Copy it to `.env.local` and fill in real values. `.env` files are gitignored; only `.env.example` is committed.

> Note: submissions contain personal data (name, email, phone). The Google Sheet and the WhatsApp account receiving these must be handled per UAE PDPL requirements — restrict sheet access to the team that responds to enquiries.

## 1. WhatsApp

Set `VITE_WHATSAPP_NUMBER` to the business number in international format, digits only (e.g. `233241234567` — no `+`, spaces, or dashes). The app strips non-digits anyway, but keep it clean.

## 2. Google Sheet + Apps Script web app

1. Create a Google Sheet named e.g. **Delexes Website Leads**. In the first sheet, add a header row:

   `Timestamp | Full name | Organisation | Email | Phone | Category | Requirements`

2. In the sheet: **Extensions → Apps Script**. Replace the default code with:

   ```js
   function doPost(e) {
     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
     var p = (e && e.parameter) || {};
     sheet.appendRow([
       new Date(), // server-side timestamp
       p.fullName || '',
       p.organisation || '',
       p.email || '',
       p.phone || '',
       p.category || '',
       p.requirements || '',
     ]);
     return ContentService
       .createTextOutput(JSON.stringify({ ok: true }))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```

3. **Deploy → New deployment → Web app**:
   - Execute as: **Me**
   - Who has access: **Anyone** (required — otherwise anonymous POSTs from the website get a Google login page and are dropped)
4. Copy the deployment URL (ends in `/exec`) into `VITE_GOOGLE_SHEETS_URL`.

**Important:** the `/exec` URL serves only deployed versions. After any Apps Script code change, create a **new deployment version** (Deploy → Manage deployments → edit → new version), or the change won't take effect.

## 3. Smoke test

Before wiring the app, test the endpoint directly (`-L` matters — Apps Script replies with a 302 redirect):

```bash
curl -sL -d "fullName=Test&phone=123&requirements=hello" "https://script.google.com/macros/s/YOUR_ID/exec"
```

Expected: `{"ok":true}` and a new row in the sheet.

## 4. Notes on the client-side request

The app posts with `mode: 'no-cors'` and a form-urlencoded body. Apps Script doesn't return CORS headers, so the browser treats the response as opaque — the app can't read success/failure and doesn't try to (logging is intentionally best-effort; the WhatsApp redirect never waits on it). In DevTools the request shows an opaque response — that's expected, not an error.

Vite reads env vars at startup — restart `npm run dev` after editing `.env.local`.
