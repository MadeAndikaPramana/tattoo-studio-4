import { motion } from 'motion/react'
import { MOSAIC_A, MOSAIC_B, MOSAIC_C, STUDIO } from '../data'
import { ChatIcon, RevealText } from './ui'

const EASE = [0.22, 1, 0.36, 1]

// Three columns of rounded photos drifting in opposite directions. Each list is
// rendered twice so translating by -50% loops without a jump; transform only.
function Column({ imgs, dir, speed, className = '' }) {
  const list = [...imgs, ...imgs]
  return (
    <div className={`overflow-hidden ${className}`} aria-hidden="true">
      <div className="col flex flex-col gap-3" style={{ animation: `${dir === 'up' ? 'col-up' : 'col-down'} ${speed}s linear infinite` }}>
        {list.map((src, i) => (
          <div key={i} className="aspect-[3/4] shrink-0 overflow-hidden rounded-3xl bg-raise">
            <img src={src} alt="" loading={i < 2 ? 'eager' : 'lazy'} className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-16 pt-6 sm:px-8 lg:pb-24 lg:pt-10">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        {/* mosaic first on phones, on the right from lg */}
        <div className="relative order-1 h-[32svh] min-h-[230px] lg:order-2 lg:h-[640px]">
          <div className="grid h-full grid-cols-3 gap-3">
            <Column imgs={MOSAIC_A} dir="up" speed={46} />
            <Column imgs={MOSAIC_B} dir="down" speed={54} className="mt-6" />
            <Column imgs={MOSAIC_C} dir="up" speed={50} />
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg to-transparent lg:hidden" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-bg to-transparent" />
        </div>

        <div className="order-2 lg:order-1">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="eyebrow mb-5">
            Tattoo studio · {STUDIO.location}
          </motion.p>
          <RevealText
            as="h1"
            inView={false}
            delay={0.2}
            stagger={0.08}
            text="Made to last. Priced clear."
            serif={['clear']}
            className="display text-[10vw] sm:text-7xl lg:text-[5.4rem]"
          />
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8, ease: EASE }} className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            A modern studio for custom tattoos. Message us, get a clear quote and timing, and come in relaxed.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.15, duration: 0.8, ease: EASE }} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={STUDIO.whatsapp} target="_blank" rel="noreferrer" className="cta">
              <ChatIcon />
              Chat on WhatsApp (free consult)
            </a>
            <a href="#styles" className="ghost">
              See the styles
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.8 }} className="mt-6 flex items-center gap-3 text-sm text-muted">
            <span className="tracking-widest text-gold">★★★★★</span>
            <span>5.0 sample rating · placeholder reviews</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
