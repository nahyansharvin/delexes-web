import { Link } from 'react-router-dom'
import Container from '../components/Container'
import Eyebrow from '../components/Eyebrow'
import Button from '../components/Button'
import CategoryCard from '../components/CategoryCard'
import { categories, whoWeSupply, whyProps } from '../data/catalog'

const stripeTile =
  'repeating-linear-gradient(45deg,#ECEAE5 0 11px,#F3F1EC 11px 22px)'

export default function Home() {
  return (
    <>
      {/* hero */}
      <section
        className="py-12 md:py-16"
        style={{ background: 'linear-gradient(180deg,#fff 0%,#F8F7F5 100%)' }}
      >
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-2">
            <div className="animate-dxUp">
              <Eyebrow color="green" className="mb-5">
                MEDICAL EQUIPMENT SUPPLY
              </Eyebrow>
              <h1 className="mb-5 font-heading text-4xl font-extrabold leading-[1.04] tracking-tight text-heading md:text-5xl">
                Healthcare,
                <br />
                equipped with{' '}
                <span className="relative whitespace-nowrap text-brand-green">
                  care
                  <span
                    className="absolute bottom-[3px] left-0 right-0 -z-10 h-[9px] rounded"
                    style={{ background: 'rgba(59,142,100,.24)' }}
                  />
                </span>
                .
              </h1>
              <p className="mb-7 max-w-[520px] text-[16.5px] leading-relaxed text-[#5a5d61]">
                Medical equipment, instruments and custom orthotic &amp; prosthetic solutions —
                supplied to clinics, hospitals and institutions from our base in Ghana.
              </p>
              <div className="flex flex-wrap gap-3.5">
                <Button to="/products" variant="red" arrow>
                  Browse products
                </Button>
                <Button to="/contact" variant="outline">
                  Talk to our team
                </Button>
              </div>
              <div className="mt-7 flex flex-wrap gap-6 text-[13px] text-muted">
                <span>Documentation &amp; warranty support</span>
                <span className="text-[#d9d5cf]">|</span>
                <span>Tender-ready supply</span>
              </div>
            </div>

            <div className="relative animate-dxUp">
              <div
                className="flex aspect-[4/3.4] items-center justify-center rounded-2xl border border-[#E2DFD9] p-4 text-center font-mono text-[12.5px] font-medium text-[#9b9890] shadow-2xl"
                style={{ background: stripeTile }}
              >
                facility / equipment photo
              </div>
              <div className="absolute bottom-6 -left-4 flex items-center gap-3 rounded-xl border border-[#E7E4DF] bg-white px-4 py-3.5 shadow-xl">
                <span className="flex h-[38px] w-[38px] items-center justify-center rounded-lg bg-panelGreen">
                  <span className="relative inline-block h-4 w-4">
                    <span className="absolute left-[6px] top-0 h-4 w-1 rounded-sm bg-brand-green" />
                    <span className="absolute left-0 top-[6px] h-1 w-4 rounded-sm bg-brand-green" />
                  </span>
                </span>
                <span className="leading-tight">
                  <span className="block text-[13.5px] font-bold text-ink">Based in Ghana</span>
                  <span className="text-[12px] text-muted">Supplying across the region</span>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* who we supply */}
      <section className="border-y border-line bg-white py-5">
        <Container className="flex flex-wrap items-center gap-6">
          <span className="whitespace-nowrap text-xs font-semibold tracking-[0.16em] text-faint">
            WHO WE SUPPLY
          </span>
          <div className="flex flex-wrap gap-3">
            {whoWeSupply.map((s) => (
              <span
                key={s}
                className="rounded-full border border-line bg-[#F4F2EE] px-3.5 py-2 text-[13.5px] font-semibold text-[#3a3d41]"
              >
                {s}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* categories */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
            <div>
              <Eyebrow color="red" className="mb-3">
                PRODUCT CATEGORIES
              </Eyebrow>
              <h2 className="font-heading text-3xl font-bold text-heading md:text-4xl">
                Everything a facility needs
              </h2>
            </div>
            <Link to="/products" className="whitespace-nowrap text-sm font-semibold text-brand-red">
              View all categories &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <CategoryCard key={c.slug} category={c} variant="home" />
            ))}
          </div>
        </Container>
      </section>

      {/* why delexes */}
      <section className="border-t border-line bg-white py-12 md:py-16">
        <Container>
          <h2 className="mb-9 text-center font-heading text-2xl font-bold text-heading md:text-3xl">
            Why facilities choose Delexes
          </h2>
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {whyProps.map((p) => (
              <div key={p.k}>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-green font-heading text-[15px] font-extrabold text-white">
                  {p.k}
                </div>
                <h3 className="mb-2 text-base font-bold leading-snug text-[#23262A]">{p.t}</h3>
                <p className="text-[13.5px] leading-relaxed text-muted">{p.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-dark py-11 md:py-14">
        <Container className="flex flex-wrap items-center justify-between gap-7">
          <div>
            <h2 className="mb-2 font-heading text-2xl font-bold text-white md:text-3xl">
              Ready to equip your facility?
            </h2>
            <p className="text-[15px] text-[#b9bbbe]">
              Send us your requirements and we&rsquo;ll prepare a quotation.
            </p>
          </div>
          <Button to="/contact" variant="red" arrow>
            Request a quote
          </Button>
        </Container>
      </section>
    </>
  )
}
