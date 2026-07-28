import { Link } from 'react-router-dom'

const productLinks = [
  { to: '/products/laboratory-equipment', label: 'Laboratory equipment' },
  { to: '/products/medical-surgery', label: 'Medical surgery' },
  { to: '/products/general-consumables', label: 'General consumables' },
  { to: '/products/implants', label: 'Implants' },
  { to: '/products', label: 'All categories' },
]

const companyLinks = [
  { to: '/about', label: 'About us' },
  { to: '/contact', label: 'Contact' },
  { to: '/contact', label: 'Request a quote' },
  { to: '#', label: 'Warranty policy' },
]

function ColHeading({ children }: { children: string }) {
  return (
    <h4 className="mb-4 text-xs font-semibold tracking-[0.14em] text-[#7d8085]">{children}</h4>
  )
}

function FooterLink({ to, label }: { to: string; label: string }) {
  return to.startsWith('/') ? (
    <Link to={to} className="text-[#cfd0d2] transition hover:text-white">
      {label}
    </Link>
  ) : (
    <a href={to} className="text-[#cfd0d2] transition hover:text-white">
      {label}
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="bg-footer px-4 pb-6 pt-12 text-[#cfd0d2] sm:px-6 md:pt-14 lg:px-12">
      <div className="mx-auto max-w-content">
        <div className="grid grid-cols-1 gap-8 border-b border-[#34373b] pb-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-flex rounded-lg bg-canvas p-1.5">
                <img src="/logo-mark.png" alt="Delexes" className="h-[34px] w-auto" />
              </span>
              <span className="font-heading text-lg font-extrabold tracking-[0.1em] text-white">
                DELEXES
              </span>
            </div>
            <p className="max-w-[260px] text-[13px] leading-relaxed text-[#9a9da1]">
              Delexes Medical Trading Ltd — supplying medical equipment, instruments and custom
              orthotic &amp; prosthetic devices across Africa.
            </p>
          </div>

          {/* products */}
          <div>
            <ColHeading>PRODUCTS</ColHeading>
            <div className="flex flex-col gap-2.5 text-[13.5px]">
              {productLinks.map((l) => (
                <FooterLink key={l.label} {...l} />
              ))}
            </div>
          </div>

          {/* company */}
          <div>
            <ColHeading>COMPANY</ColHeading>
            <div className="flex flex-col gap-2.5 text-[13.5px]">
              {companyLinks.map((l) => (
                <FooterLink key={l.label} {...l} />
              ))}
            </div>
          </div>

          {/* contact */}
          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-[0.14em] text-[#7d8085]">
              CONTACT <span className="font-medium text-[#56595d]">(placeholder)</span>
            </h4>
            <div className="flex flex-col gap-2.5 text-[13.5px] leading-relaxed text-[#9a9da1]">
              <span>
                Accra, Ghana
                <br />
                <span className="text-[#6a6d71]">full address to be confirmed</span>
              </span>
              <span>+233 00 000 0000</span>
              <span>info@delexesmedical.com</span>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-5 text-[12.5px] text-[#7d8085]">
          <span>© 2026 Delexes Medical Trading Ltd. All rights reserved.</span>
          <span className="flex gap-[18px]">
            <a href="#" className="text-[#9a9da1] hover:text-white">
              Terms &amp; Conditions
            </a>
            <a href="#" className="text-[#9a9da1] hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-[#9a9da1] hover:text-white">
              Warranty Policy
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
