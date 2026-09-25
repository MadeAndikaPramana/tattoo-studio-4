import { STUDIO, TRUST, WHY } from '../data'
import { ChatIcon, Reveal, RevealText, Spark } from './ui'

export function WhyCard() {
  return (
    <section className="px-5 sm:px-8">
      <Reveal className="card relative mx-auto max-w-7xl overflow-hidden p-7 sm:p-12">
        <Spark className="absolute right-8 top-8 h-6 w-6 text-gold" />
        <Spark className="absolute bottom-10 right-1/4 h-4 w-4 text-gold" delay={1} />
        <p className="eyebrow mb-4">Why travellers choose us</p>
        <RevealText text="A studio you can trust." serif={['trust']} className="display max-w-2xl text-3xl sm:text-5xl" />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {WHY.map((w, i) => (
            <li key={w} className="flex items-start gap-3 text-[1.02rem] text-text/90">
              <Spark className="mt-1 h-4 w-4 shrink-0 text-gold" delay={i * 0.4} />
              {w}
            </li>
          ))}
        </ul>
        <a href={STUDIO.whatsapp} target="_blank" rel="noreferrer" className="cta mt-9">
          <ChatIcon />
          Ask a question on WhatsApp
        </a>
      </Reveal>
    </section>
  )
}

// A slow ticker of trust phrases.
export function Ticker() {
  const list = [...TRUST, ...TRUST, ...TRUST, ...TRUST]
  return (
    <div className="my-14 overflow-hidden border-y border-line py-4" aria-hidden="true">
      <div className="ticker flex w-max gap-8 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.16em] text-muted" style={{ animation: 'ticker 50s linear infinite' }}>
        {list.map((t, i) => (
          <span key={i} className="flex items-center gap-8">
            {t}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
