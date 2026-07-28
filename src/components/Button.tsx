import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'red' | 'outline' | 'green' | 'white'

interface ButtonProps {
  /** Internal route ("/...") renders a <Link>; anything else renders an <a>. */
  to: string
  variant?: Variant
  /** Append a trailing arrow glyph. */
  arrow?: boolean
  /** Force an <a> tag even for "/..." paths (downloads, external files). */
  external?: boolean
  className?: string
  children: ReactNode
}

const VARIANTS: Record<Variant, string> = {
  red: 'bg-brand-red text-white hover:bg-brand-redDark',
  outline: 'bg-white text-ink border-[1.5px] border-[#ddd9d3] hover:border-brand-red',
  green: 'bg-brand-green text-white hover:bg-brand-greenDark',
  white: 'bg-white text-brand-greenDark font-bold hover:-translate-y-0.5',
}

export default function Button({
  to,
  variant = 'red',
  arrow = false,
  external = false,
  className = '',
  children,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2.5 rounded-lg px-6 py-3.5 text-[15px] font-semibold transition ${VARIANTS[variant]} ${className}`
  const inner = (
    <>
      {children}
      {arrow && <span className="text-[17px] leading-none">&rarr;</span>}
    </>
  )
  const isInternal = to.startsWith('/') && !external
  return isInternal ? (
    <Link to={to} className={classes}>
      {inner}
    </Link>
  ) : (
    <a href={to} className={classes}>
      {inner}
    </a>
  )
}
