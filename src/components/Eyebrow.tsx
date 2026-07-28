import type { ReactNode } from 'react'

interface EyebrowProps {
  children: ReactNode
  color?: 'red' | 'green'
  className?: string
}

/** The small dash + uppercase tracked label used above section headings. */
export default function Eyebrow({ children, color = 'red', className = '' }: EyebrowProps) {
  const tone = color === 'green' ? 'text-brand-green' : 'text-brand-red'
  const dash = color === 'green' ? 'bg-brand-green' : 'bg-brand-red'
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className={`inline-block h-0.5 w-6 ${dash}`} />
      <span className={`text-xs font-semibold tracking-[0.22em] ${tone}`}>{children}</span>
    </div>
  )
}
