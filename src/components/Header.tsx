import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  // Drives the mobile burger menu (shown below lg).
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header>
      {/* utility bar */}
      <div className="bg-dark text-[12.5px] text-[#b9bbbe]">
        <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-12">
          <span className="inline-flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-green" />
            Medical equipment supply — based in Ghana, serving healthcare across the region
          </span>
          <span className="text-[#8a8d92]">
            info@delexesmedical.com · +233 00 000 0000{' '}
            <span className="opacity-60">(placeholder)</span>
          </span>
        </div>
      </div>

      {/* main header */}
      <div className="relative border-b border-line bg-white">
        <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-12">
          <Link to="/" className="flex items-center gap-3" onClick={close}>
            <img src="/logo-mark.png" alt="Delexes mark" className="h-[42px] w-auto" />
            <span className="flex flex-col leading-none">
              <span className="font-heading text-xl font-extrabold tracking-[0.12em] text-ink">
                DELEXES
              </span>
              <span className="mt-[3px] text-[10px] font-semibold tracking-[0.34em] text-brand-red">
                MEDICAL TRADING
              </span>
            </span>
          </Link>

          {/* burger (mobile only) */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-lg border border-line bg-white lg:hidden"
          >
            <span className="h-0.5 w-5 rounded bg-ink" />
            <span className="h-0.5 w-5 rounded bg-ink" />
            <span className="h-0.5 w-5 rounded bg-ink" />
          </button>

          {/* nav */}
          <nav
            className={`${open ? 'flex' : 'hidden'} absolute left-0 right-0 top-full z-50 flex-col items-stretch gap-0 border-b border-line bg-white py-1.5 text-[14.5px] font-semibold shadow-lg lg:static lg:flex lg:flex-row lg:items-center lg:gap-7 lg:border-0 lg:py-0 lg:shadow-none`}
          >
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={close}
                className="relative px-4 py-3 text-ink lg:px-0 lg:py-1.5"
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <span className="absolute -bottom-0.5 left-4 right-4 h-[2.5px] rounded bg-brand-red lg:left-0 lg:right-0" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={close}
              className="mx-4 mb-0.5 mt-3 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-brand-red px-[18px] py-[11px] font-semibold text-white transition hover:bg-brand-redDark lg:mx-0 lg:my-0"
            >
              Request a quote
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
