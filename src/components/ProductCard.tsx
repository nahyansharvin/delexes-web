import { Link } from 'react-router-dom'

interface ProductCardProps {
  name: string
  description?: string
  to: string
  image?: string | null
  /** Small uppercase badge shown above the name (e.g. "EXAMPLE"). */
  badge?: string
  /** Placeholder tile label when no image is provided. */
  tileLabel?: string
  /** Striped tile matches the "related products" look; plain matches the grid look. */
  tileStyle?: 'plain' | 'striped'
}

const stripe =
  'repeating-linear-gradient(45deg,#ECEAE5 0 10px,#F3F1EC 10px 20px)'

const cardHover =
  'transition duration-150 hover:-translate-y-1 hover:border-brand-red hover:shadow-xl'

export default function ProductCard({
  name,
  description,
  to,
  image,
  badge,
  tileLabel = 'product image',
  tileStyle = 'plain',
}: ProductCardProps) {
  return (
    <Link
      to={to}
      className={`flex flex-col overflow-hidden rounded-xl border border-line ${tileStyle === 'striped' ? 'bg-canvas' : 'bg-white'} ${cardHover}`}
    >
      <div
        className="flex aspect-[4/3] items-center justify-center overflow-hidden border-b border-line"
        style={tileStyle === 'striped' ? { background: stripe } : { background: '#F0EEE9' }}
      >
        {image ? (
          <img src={image} alt={name} className="h-full w-full object-cover" />
        ) : (
          <span className="font-mono text-[11px] text-[#a8a59d]">{tileLabel}</span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        {badge && (
          <span className="text-[11px] font-semibold text-brand-green">{badge}</span>
        )}
        <h3
          className={`text-[13.5px] font-semibold leading-snug text-[#23262A] ${badge ? 'mt-1.5' : ''}`}
        >
          {name}
        </h3>
        {description && (
          <p className="mt-1.5 flex-1 text-xs leading-relaxed text-muted">{description}</p>
        )}
      </div>
    </Link>
  )
}
