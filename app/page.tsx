import Image from 'next/image'
import { ArrowRight, ShieldCheck, Sparkles, Truck } from 'lucide-react'
import logoImage from '../logo.jpeg'

const highlights = [
  {
    icon: ShieldCheck,
    label: 'Curated catalog',
    text: 'Every listing is checked for clarity, fit, and purchase confidence.',
  },
  {
    icon: Truck,
    label: 'Reliable fulfillment',
    text: 'Orders are prepared with practical timelines and straightforward updates.',
  },
  {
    icon: Sparkles,
    label: 'Service first',
    text: 'Support is built around quick answers and clean handoffs.',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f1e8] text-[#211c18]">
      <section className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 px-6 py-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-10">
        <div className="flex flex-col justify-between pb-10 pt-6 lg:py-10">
          <nav className="flex items-center justify-between" aria-label="Primary">
            <div className="text-sm font-semibold uppercase">
              Lauxinity
            </div>
            <a
              className="rounded-full border border-[#211c18]/20 px-4 py-2 text-sm font-medium transition hover:border-[#211c18] focus:outline-none focus:ring-2 focus:ring-[#8f5b36]"
              href="mailto:hello@lauxinity.store"
            >
              Contact
            </a>
          </nav>

          <div className="max-w-3xl py-16 lg:py-24">
            <p className="mb-5 text-sm font-semibold uppercase text-[#8f5b36]">
              Trusted Service, Beyond Expectations
            </p>
            <h1 className="text-balance font-serif text-5xl leading-[0.95] tracking-normal sm:text-6xl lg:text-7xl">
              Lauxinity Store
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#5b5148]">
              A refined storefront foundation for premium products, practical
              fulfillment, and customer care that keeps the buying path clear.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#211c18] px-6 py-3 text-sm font-semibold text-[#fffaf1] transition hover:bg-[#3a3028] focus:outline-none focus:ring-2 focus:ring-[#8f5b36]"
                href="#storefront"
              >
                View Storefront
                <ArrowRight aria-hidden="true" size={18} />
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-[#211c18]/20 px-6 py-3 text-sm font-semibold transition hover:border-[#211c18] focus:outline-none focus:ring-2 focus:ring-[#8f5b36]"
                href="/admin/login"
              >
                Admin Login
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {highlights.map(({ icon: Icon, label, text }) => (
              <article
                className="border-t border-[#211c18]/20 pt-4"
                key={label}
              >
                <Icon aria-hidden="true" className="mb-3 text-[#8f5b36]" size={21} />
                <h2 className="text-sm font-semibold">{label}</h2>
                <p className="mt-2 text-sm leading-6 text-[#6d6258]">{text}</p>
              </article>
            ))}
          </div>
        </div>

        <div
          id="storefront"
          className="relative min-h-[520px] overflow-hidden rounded-lg bg-[#2b2722] lg:min-h-0"
        >
          <Image
            src={logoImage}
            alt="Lauxinity Store logo"
            fill
            priority
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#211c18]/80 via-[#211c18]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-[#fffaf1] sm:p-8">
            <p className="text-sm uppercase text-[#e6d4bd]">
              Storefront online
            </p>
            <p className="mt-3 max-w-md text-2xl font-semibold leading-tight">
              The deploy now has a complete Next.js route tree ready for Netlify.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
