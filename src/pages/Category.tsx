import { Link, useParams } from 'react-router-dom'
import Container from '../components/Container'
import Button from '../components/Button'
import ProductCard from '../components/ProductCard'
import { getCategoryBySlug, labCategoryDetail } from '../data/catalog'

export default function Category() {
  const { slug } = useParams()
  const category = getCategoryBySlug(slug)
  // Featured / other items are illustrative in the source design (lab example).
  const { featured, otherItems, cataloguePdf } = labCategoryDetail

  return (
    <>
      {/* breadcrumb + title */}
      <section className="border-b border-line bg-white py-9 md:py-10">
        <Container>
          <nav className="mb-4 text-[13px] text-faint">
            <Link to="/" className="text-muted">
              Home
            </Link>
            <span className="mx-1.5 text-[#cfcbc4]">/</span>
            <Link to="/products" className="text-muted">
              Products
            </Link>
            <span className="mx-1.5 text-[#cfcbc4]">/</span>
            <span className="font-semibold text-ink">{category.title}</span>
          </nav>
          <div
            className="mb-4 h-1 w-12 rounded"
            style={{ background: category.accent }}
          />
          <h1 className="mb-3 font-heading text-2xl font-extrabold leading-tight text-heading md:text-4xl">
            {category.title}
          </h1>
          <p className="max-w-[640px] text-[15.5px] leading-relaxed text-[#5a5d61]">
            {category.description}
          </p>
        </Container>
      </section>

      {/* optional catalogue CTA */}
      {cataloguePdf && (
        <section className="pt-[18px]">
          <Container>
            <div className="flex flex-wrap items-center justify-between gap-5 rounded-xl bg-heading px-6 py-[18px]">
              <div className="flex items-center gap-3.5">
                <span className="text-[26px]">📄</span>
                <div>
                  <p className="mb-0.5 text-[13.5px] font-semibold text-white">
                    Download the full catalogue
                  </p>
                  <p className="text-[12.5px] text-faint">
                    Complete product specifications, models and pricing for {category.title}
                  </p>
                </div>
              </div>
              <Button to={cataloguePdf} variant="red" arrow className="px-5 py-2.5 text-[13.5px]">
                Download PDF
              </Button>
            </div>
          </Container>
        </section>
      )}

      {/* featured products */}
      <section className="pt-9">
        <Container>
          <div className="mb-5 flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <h2 className="mb-1 font-heading text-[19px] font-bold text-heading">
                Featured Products
              </h2>
              <p className="text-[13px] text-faint">
                {featured.length} items — images, specs and pricing available on request
              </p>
            </div>
            <Link to="/contact" className="text-[13.5px] font-semibold text-brand-red">
              Request a quote &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {featured.map((p, i) => (
              <ProductCard
                key={p.name}
                name={p.name}
                description={p.description}
                image={p.image}
                to={`/products/${category.slug}/${i}`}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* other items */}
      {otherItems.length > 0 && (
        <section className="pt-10">
          <Container>
            <div className="border-t border-line pt-9">
              <h2 className="mb-1.5 font-heading text-[19px] font-bold text-heading">
                Other Items
              </h2>
              <p className="mb-5 text-[13px] text-faint">
                {otherItems.length} additional products available — contact us for details
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {otherItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 border-b border-r border-[#EDEAE5] px-3.5 py-2.5"
                  >
                    <span className="h-[5px] w-[5px] flex-shrink-0 rounded-full bg-brand-red" />
                    <span className="text-[13.5px] text-[#3a3d41]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* contact band */}
      <section className="py-12 md:py-14">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-[#d6e6dd] bg-panelGreen px-9 py-8">
            <div>
              <h3 className="mb-1.5 font-heading text-[19px] font-bold text-heading">
                Need specifications or a quote?
              </h3>
              <p className="text-sm text-[#4f6357]">
                Our team can provide full specs, lead times and pricing for any item in this
                category.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button to="/contact" variant="green" arrow className="px-5 py-3 text-sm">
                Get in touch
              </Button>
              <Button to="/products" variant="outline" className="px-5 py-3 text-sm">
                &larr; All categories
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
