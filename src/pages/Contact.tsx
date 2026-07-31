import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import Eyebrow from '../components/Eyebrow'
import { contacts, contactCategoryOptions } from '../data/catalog'
import { WHATSAPP_NUMBER, SHEETS_WEBAPP_URL } from '../config'

interface FormState {
  fullName: string
  organisation: string
  email: string
  phone: string
  category: string
  requirements: string
}

const EMPTY: FormState = {
  fullName: '',
  organisation: '',
  email: '',
  phone: '',
  category: '',
  requirements: '',
}

const buildWhatsAppUrl = (f: FormState): string | null => {
  if (!WHATSAPP_NUMBER) return null
  const lines = [
    'New quote request — Delexes Medical website',
    '',
    `Name: ${f.fullName}`,
    f.organisation ? `Organisation: ${f.organisation}` : null,
    f.email ? `Email: ${f.email}` : null,
    `Phone: ${f.phone}`,
    f.category ? `Category: ${f.category}` : null,
    '',
    'Requirements:',
    f.requirements,
  ].filter((l): l is string => l !== null)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`
}

const inputClass =
  'rounded-lg border-[1.5px] border-[#E2DFD9] bg-[#FAFAF8] px-3.5 py-3 text-sm text-ink transition placeholder:text-[#a8a59d] focus:border-brand-red focus:outline-none'
const labelText = 'text-[13px] font-semibold text-[#3a3d41]'

export default function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY)
  const [submitted, setSubmitted] = useState(false)
  const [waUrl, setWaUrl] = useState<string | null>(null)

  const update =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }))
      setSubmitted(false)
      setWaUrl(null)
    }

  // Submissions contain personal data (PDPL): logged to a Google Sheet
  // (best-effort) and passed into a WhatsApp deep link. See docs/contact-form-setup.md.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (SHEETS_WEBAPP_URL) {
      fetch(SHEETS_WEBAPP_URL, {
        method: 'POST',
        mode: 'no-cors', // Apps Script sends no CORS headers; opaque response is fine
        keepalive: true, // survives same-tab navigation in the popup-blocked fallback
        body: new URLSearchParams({ ...form }), // form-urlencoded -> no preflight; Apps Script reads e.parameter
      }).catch(() => {})
    } else if (import.meta.env.DEV) {
      console.warn('[contact] VITE_GOOGLE_SHEETS_URL not set — lead logging skipped')
    }

    // Must stay synchronous: an await before window.open would leave the
    // user-gesture call stack and get the popup blocked.
    const url = buildWhatsAppUrl(form)
    if (url) {
      const win = window.open(url, '_blank', 'noopener,noreferrer')
      if (!win) window.location.href = url // popup blocked -> same-tab navigation
    } else if (import.meta.env.DEV) {
      console.warn('[contact] VITE_WHATSAPP_NUMBER not set — WhatsApp redirect skipped')
    }
    setWaUrl(url)
    setSubmitted(true)
  }

  return (
    <>
      {/* page header */}
      <section className="border-b border-line bg-white py-9 md:py-10">
        <Container>
          <nav className="mb-4 text-[13px] text-faint">
            <Link to="/" className="text-muted">
              Home
            </Link>{' '}
            <span className="text-[#cfcbc4]">/</span>{' '}
            <span className="font-semibold text-ink">Contact</span>
          </nav>
          <Eyebrow color="red" className="mb-3">
            GET IN TOUCH
          </Eyebrow>
          <h1 className="mb-3 font-heading text-3xl font-extrabold text-heading md:text-5xl">
            Let&rsquo;s talk supply
          </h1>
          <p className="max-w-[620px] text-base leading-relaxed text-[#5a5d61]">
            Send us your requirements or request a quotation — submitting opens WhatsApp with your
            message pre-filled, and our team will take it from there.
          </p>
        </Container>
      </section>

      {/* contact + form */}
      <section className="py-12 md:py-14">
        <Container>
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-11">
            {/* info */}
            <div>
              <div className="mb-[18px] rounded-2xl border border-line bg-white p-7">
                <h2 className="mb-1 font-heading text-[19px] font-bold text-[#23262A]">
                  Contact details
                </h2>
                <p className="mb-5 text-[12.5px] italic text-[#a85355]">
                  Placeholder — to be confirmed with the client.
                </p>
                <div className="flex flex-col gap-5">
                  {contacts.map((c) => (
                    <div key={c.label} className="flex items-start gap-3.5">
                      <span className="flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-lg bg-panelRed text-[11px] font-bold tracking-wide text-brand-red">
                        {c.ic}
                      </span>
                      <div className="leading-snug">
                        <span className="block text-[11.5px] font-semibold tracking-wider text-faint">
                          {c.label}
                        </span>
                        <span className="text-[14.5px] font-medium text-ink">{c.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="flex aspect-[3/2] items-center justify-center rounded-2xl border border-[#E2DFD9] font-mono text-xs font-medium text-[#9b9890]"
                style={{
                  background:
                    'repeating-linear-gradient(45deg,#ECEAE5 0 11px,#F3F1EC 11px 22px)',
                }}
              >
                map / location
              </div>
            </div>

            {/* form */}
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-line bg-white p-8 shadow-lg"
            >
              <h2 className="mb-5 font-heading text-xl font-bold text-[#23262A]">
                Request a quote
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                  <span className={labelText}>Full name</span>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.fullName}
                    onChange={update('fullName')}
                    required
                    className={inputClass}
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className={labelText}>Organisation</span>
                  <input
                    type="text"
                    placeholder="Clinic / hospital / company"
                    value={form.organisation}
                    onChange={update('organisation')}
                    className={inputClass}
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className={labelText}>Email</span>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={update('email')}
                    className={inputClass}
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className={labelText}>Phone</span>
                  <input
                    type="tel"
                    placeholder="+233 …"
                    value={form.phone}
                    onChange={update('phone')}
                    required
                    className={inputClass}
                  />
                </label>
              </div>

              <label className="mt-4 flex flex-col gap-1.5">
                <span className={labelText}>Product category</span>
                <select value={form.category} onChange={update('category')} className={inputClass}>
                  <option value="">Select a category…</option>
                  {contactCategoryOptions.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </label>

              <label className="mt-4 flex flex-col gap-1.5">
                <span className={labelText}>Your requirements</span>
                <textarea
                  rows={4}
                  placeholder="Tell us what you need, quantities, timelines…"
                  value={form.requirements}
                  onChange={update('requirements')}
                  required
                  className={`${inputClass} resize-y`}
                />
              </label>

              <button
                type="submit"
                className="mt-5 flex w-full items-center justify-center gap-2.5 rounded-lg bg-brand-red px-4 py-3.5 text-[15px] font-semibold text-white transition hover:bg-brand-redDark"
              >
                Send request <span className="text-[17px] leading-none">&rarr;</span>
              </button>

              {submitted ? (
                waUrl ? (
                  <p className="mt-3.5 text-center text-[13px] font-medium text-brand-green">
                    Opening WhatsApp… If nothing opened,{' '}
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      tap here to start the chat
                    </a>
                    .
                  </p>
                ) : (
                  <p className="mt-3.5 text-center text-[13px] font-medium text-brand-green">
                    Thanks — your request has been recorded. We&rsquo;ll get back to you shortly.
                  </p>
                )
              ) : (
                <p className="mt-3.5 text-center text-xs text-[#a8a59d]">
                  We typically respond within 1–2 business days. By submitting you agree we may
                  store these details to respond to your enquiry.
                </p>
              )}
            </form>
          </div>
        </Container>
      </section>
    </>
  )
}
