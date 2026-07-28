import { Link } from 'react-router-dom'
import Container from '../components/Container'
import Eyebrow from '../components/Eyebrow'
import Button from '../components/Button'
import CategoryCard from '../components/CategoryCard'
import { categories } from '../data/catalog'

export default function Products() {
  return (
    <>
      {/* page header */}
      <section className="border-b border-line bg-white py-10 md:py-12">
        <Container>
          <nav className="mb-4 text-[13px] text-faint">
            <Link to="/" className="text-muted">
              Home
            </Link>
            <span className="mx-1.5 text-[#cfcbc4]">/</span>
            <span className="font-semibold text-ink">Products</span>
          </nav>
          <Eyebrow color="red" className="mb-3.5">
            OUR RANGE
          </Eyebrow>
          <h1 className="mb-3.5 font-heading text-3xl font-extrabold leading-tight text-heading md:text-5xl">
            Products &amp; Categories
          </h1>
          <p className="max-w-[560px] text-base leading-relaxed text-[#5a5d61]">
            Explore our four core product categories — from laboratory instruments and surgical
            supplies to consumables and implants.
          </p>
        </Container>
      </section>

      {/* category cards */}
      <section className="py-12 md:py-14">
        <Container>
          <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <CategoryCard key={c.slug} category={c} variant="products" />
            ))}
          </div>
        </Container>
      </section>

      {/* help band */}
      <section className="border-t border-[#d6e6dd] bg-panelGreen py-10">
        <Container className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <h3 className="mb-1.5 font-heading text-xl font-bold text-heading">
              Can&rsquo;t find what you need?
            </h3>
            <p className="text-[14.5px] text-[#4f6357]">
              We source a wider range than listed here. Tell us your requirements and we&rsquo;ll
              help.
            </p>
          </div>
          <Button to="/contact" variant="green" arrow>
            Talk to our team
          </Button>
        </Container>
      </section>
    </>
  )
}
