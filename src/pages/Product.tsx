import { Link } from 'react-router-dom'
import Container from '../components/Container'
import Button from '../components/Button'
import ProductCard from '../components/ProductCard'
import { productExample } from '../data/catalog'

const stripeTile =
  'repeating-linear-gradient(45deg,#ECEAE5 0 12px,#F3F1EC 12px 24px)'
const stripeThumb =
  'repeating-linear-gradient(45deg,#ECEAE5 0 8px,#F3F1EC 8px 16px)'

export default function Product() {
  const { category, categorySlug, name, intro, thumbs, specs, related } = productExample

  return (
    <>
      {/* breadcrumb */}
      <section className="border-b border-line bg-white px-4 py-5 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-content text-[13px] text-faint">
          <Link to="/" className="text-muted">
            Home
          </Link>{' '}
          <span className="text-[#cfcbc4]">/</span>{' '}
          <Link to="/products" className="text-muted">
            Products
          </Link>{' '}
          <span className="text-[#cfcbc4]">/</span>{' '}
          <Link to={`/products/${categorySlug}`} className="text-muted">
            {category}
          </Link>{' '}
          <span className="text-[#cfcbc4]">/</span>{' '}
          <span className="font-semibold text-ink">{name}</span>
        </div>
      </section>

      {/* placeholder notice */}
      <section className="px-4 pt-[18px] sm:px-6 lg:px-12">
        <div className="mx-auto flex max-w-content items-center gap-2.5 rounded-lg border border-[#f0cccd] bg-panelRed px-4 py-3 text-[13px] text-[#8a3a3c]">
          <span className="font-bold">Note</span>
          <span className="text-[#a85355]">
            This is an illustrative example product. Real name, images, specifications and documents
            will be added once provided.
          </span>
        </div>
      </section>

      {/* product detail */}
      <section className="py-8 md:py-12">
        <Container>
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
            {/* gallery */}
            <div>
              <div
                className="flex aspect-square items-center justify-center rounded-2xl border border-[#E2DFD9] font-mono text-[12.5px] font-medium text-[#a8a59d]"
                style={{ background: stripeTile }}
              >
                main product image
              </div>
              <div className="mt-3.5 grid grid-cols-4 gap-3">
                {thumbs.map((t) => (
                  <div
                    key={t}
                    className="flex aspect-square items-center justify-center rounded-lg border border-[#E2DFD9] font-mono text-[10px] font-medium text-[#b3b0a8] transition hover:border-brand-red"
                    style={{ background: stripeThumb }}
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* info */}
            <div>
              <span className="mb-3.5 inline-block rounded-full bg-panelGreen px-2.5 py-1 text-[11px] font-bold tracking-wide text-brand-green">
                {category.toUpperCase()}
              </span>
              <h1 className="mb-1.5 font-heading text-2xl font-extrabold text-heading md:text-4xl">
                {name}
              </h1>
              <p className="mb-4 text-[13px] text-faint">
                Model / SKU: <span className="italic">to be confirmed</span>
              </p>
              <p className="mb-6 text-[15.5px] leading-relaxed text-[#5a5d61]">{intro}</p>

              <div className="mb-6 overflow-hidden rounded-xl border border-line bg-white">
                <div className="border-b border-line bg-[#F4F2EE] px-4 py-3 text-xs font-bold tracking-wider text-muted">
                  SPECIFICATIONS <span className="font-medium text-[#a8a59d]">(placeholder)</span>
                </div>
                {specs.map((s) => (
                  <div
                    key={s.k}
                    className="grid grid-cols-[130px_1fr] gap-3.5 border-b border-[#F0EEE9] px-4 py-3 text-[13.5px] sm:grid-cols-[170px_1fr]"
                  >
                    <span className="text-faint">{s.k}</span>
                    <span className="font-medium text-ink">{s.v}</span>
                  </div>
                ))}
              </div>

              <div className="mb-4 flex flex-wrap gap-3">
                <Button to="/contact" variant="red" arrow>
                  Request a quote
                </Button>
                <Button to="#" variant="outline">
                  Download datasheet
                </Button>
              </div>
              <div className="flex items-center gap-2.5 rounded-lg border border-[#d6e6dd] bg-panelGreen px-4 py-3 text-[13px] text-[#4f6357]">
                <span className="relative inline-block h-[15px] w-[15px] flex-shrink-0">
                  <span className="absolute left-[5.5px] top-0 h-[15px] w-1 rounded-sm bg-brand-green" />
                  <span className="absolute left-0 top-[5.5px] h-1 w-[15px] rounded-sm bg-brand-green" />
                </span>
                Supplied with manufacturer documentation and warranty support.
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* related */}
      <section className="border-t border-line bg-white py-12 md:py-14">
        <Container>
          <h2 className="mb-6 font-heading text-2xl font-bold text-heading">Related products</h2>
          <div className="grid grid-cols-2 gap-[18px] sm:grid-cols-3 lg:grid-cols-4">
            {related.map((r) => (
              <ProductCard
                key={r}
                name={r}
                to={`/products/${categorySlug}/related`}
                image={null}
                badge="EXAMPLE"
                tileLabel="image"
                tileStyle="striped"
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
