/** WhatsApp number in international format, digits only. Empty string if unset. */
export const WHATSAPP_NUMBER = (import.meta.env.VITE_WHATSAPP_NUMBER ?? '').replace(/\D/g, '')

/** Google Apps Script web app URL (ends in /exec). Empty string if unset. */
export const SHEETS_WEBAPP_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL ?? ''
