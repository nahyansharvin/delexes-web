import { Link } from 'react-router-dom'
import type { Category } from '../types'

interface CategoryCardProps {
  category: Category
  /** "home" = compact numbered card; "products" = full card with accent bar + icon. */
  variant?: 'home' | 'products'
}

const cardHover =
  'transition duration-200 hover:-translate-y-1 hover:border-brand-red hover:shadow-xl'

export default function CategoryCard({ category, variant = 'home' }: CategoryCardProps) {
  const to = `/products/${category.slug}`

  if (variant === 'products') {
    return (
      <Link
        to={to}
        className={`flex flex-col overflow-hidden rounded-2xl border border-line bg-white ${cardHover}`}
      >
        <div className="h-[7px]" style={{ background: category.accent }} />
        <div className="flex flex-1 flex-col p-7">
          <div className="mb-4 flex items-start justify-between gap-4">
            <span className="text-[38px] leading-none">{category.icon}</span>
            <span className="pt-1.5 text-xs font-semibold tracking-wider text-faint">
              {category.n}
            </span>
          </div>
          <h2 className="mb-2.5 font-heading text-xl font-bold leading-tight text-heading">
            {category.title}
          </h2>
          <p className="mb-5 flex-1 text-sm leading-relaxed text-[#5a5d61]">
            {category.description}
          </p>
          <div className="flex items-center gap-1.5 text-[13.5px] font-semibold text-brand-red">
            Browse category <span>&rarr;</span>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link
      to={to}
      className={`flex min-h-[184px] flex-col gap-3 rounded-xl border border-line bg-white px-5 pb-5 pt-[22px] ${cardHover}`}
    >
      <span className="font-heading text-2xl font-extrabold leading-none text-brand-red">
        {category.n}
      </span>
      <span className="text-[15.5px] font-bold leading-tight text-[#23262A]">
        {category.title}
      </span>
      <span className="flex-1 text-[13px] leading-relaxed text-muted">{category.short}</span>
      <span className="text-[13px] font-semibold text-brand-green">Explore &rarr;</span>
    </Link>
  )
}
