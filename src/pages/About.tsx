import { Link } from 'react-router-dom'
import Container from '../components/Container'
import Eyebrow from '../components/Eyebrow'
import Button from '../components/Button'
import { aboutValues, aboutDoings, whoWeSupply } from '../data/catalog'

const stripeTile =
  'repeating-linear-gradient(45deg,#ECEAE5 0 11px,#F3F1EC 11px 22px)'

export default function About() {
  return (
    <>
      {/* hero */}
      <section className="border-b border-line bg-white py-12 md:py-14">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <nav className="mb-4 text-[13px] text-faint">
                <Link to="/" className="text-muted">
                  Home
                </Link>{' '}
                <span className="text-[#cfcbc4]">/</span>{' '}
                <span className="font-semibold text-ink">About us</span>
              </nav>
              <Eyebrow color="green" className="mb-3.5">
                ABOUT DELEXES
              </Eyebrow>
              <h1 className="mb-4 font-heading text-3xl font-extrabold leading-tight text-heading md:text-5xl">
                A trusted partner in medical supply
              </h1>
              <p className="mb-3.5 text-base leading-relaxed text-[#5a5d61]">
                Delexes Medical Trading Ltd supplies medical equipment, instruments, consumables and
                custom orthotic &amp; prosthetic devices to healthcare providers.{' '}
                <span className="rounded bg-panelRed px-1.5 py-0.5 text-[#8a3a3c]">
                  Based in Ghana
                </span>
                , we serve clinics, hospitals and institutions across the region.
              </p>
              <p className="text-sm italic leading-relaxed text-faint">
                Company background and history to be finalised with content from the client.
              </p>
            </div>
            <div
              className="flex aspect-[4/3.4] items-center justify-center rounded-2xl border border-[#E2DFD9] p-4 text-center font-mono text-[12.5px] font-medium text-[#9b9890]"
              style={{ background: stripeTile }}
            >
              team / facility photo
            </div>
          </div>
        </Container>
      </section>

      {/* mission + values */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <Eyebrow color="red" className="mb-3.5">
                OUR MISSION
              </Eyebrow>
              <h2 className="font-heading text-2xl font-bold leading-tight text-heading md:text-3xl">
                Healthcare, equipped with care.
              </h2>
              <p className="mt-[18px] text-[15px] leading-relaxed text-[#5a5d61]">
                To make genuine, well-documented medical equipment accessible to healthcare
                providers across Africa — backed by reliable supply and after-sales support.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
              {aboutValues.map((v) => (
                <div key={v.k} className="rounded-xl border border-line bg-white p-5">
                  <div className="mb-3.5 flex h-[38px] w-[38px] items-center justify-center rounded-lg bg-brand-green font-heading text-sm font-extrabold text-white">
                    {v.k}
                  </div>
                  <h3 className="mb-2 text-base font-bold text-[#23262A]">{v.t}</h3>
                  <p className="text-[13.5px] leading-relaxed text-muted">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* what we do */}
      <section className="bg-dark py-12 md:py-14">
        <Container>
          <h2 className="mb-2.5 text-center font-heading text-2xl font-bold text-white md:text-3xl">
            What we do
          </h2>
          <p className="mx-auto mb-9 max-w-[600px] text-center text-[15px] text-[#b9bbbe]">
            A focused supplier across four core categories — laboratory equipment, surgical supplies,
            general consumables and implants.
          </p>
          <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
            {aboutDoings.map((d) => (
              <div
                key={d.t}
                className="rounded-xl border border-[#3a3d41] bg-[#2b2e32] p-6"
              >
                <h3 className="mb-2.5 text-[16.5px] font-bold text-white">{d.t}</h3>
                <p className="text-[13.5px] leading-relaxed text-[#a4a7ab]">{d.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* who we serve */}
      <section className="py-12 md:py-14">
        <Container className="text-center">
          <h2 className="mb-7 font-heading text-2xl font-bold text-heading md:text-3xl">
            Who we serve
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {whoWeSupply.map((s) => (
              <span
                key={s}
                className="rounded-3xl border border-line bg-white px-5 py-2.5 text-sm font-semibold text-[#3a3d41]"
              >
                {s}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-brand-green py-11 md:py-[52px]">
        <Container className="flex flex-wrap items-center justify-between gap-7">
          <div>
            <h2 className="mb-2 font-heading text-2xl font-bold text-white md:text-3xl">
              Work with Delexes
            </h2>
            <p className="text-[15px] text-[#d3e6da]">
              Get in touch to discuss your equipment and supply needs.
            </p>
          </div>
          <Button to="/contact" variant="white" arrow>
            Contact us
          </Button>
        </Container>
      </section>
    </>
  )
}
