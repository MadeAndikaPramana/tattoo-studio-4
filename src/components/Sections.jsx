import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, animate, motion, useMotionValue, useReducedMotion } from 'motion/react'
import { ARTISTS, FAQ, REVIEWS, STATS, STEPS, STORIES, STUDIO } from '../data'
import { ChatIcon, CountUp, Reveal, RevealText, Spark } from './ui'

const EASE = [0.22, 1, 0.36, 1]

// ---------------------------------------------------------------- stats
function Icon({ name }) {
  const c = 'h-8 w-8 text-gold'
  const p = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, className: c, 'aria-hidden': true }
  if (name === 'calendar') return (<svg {...p}><rect x="3.5" y="5" width="17" height="15" rx="3" /><path d="M8 3v4M16 3v4M3.5 10h17" strokeLinecap="round" /></svg>)
  if (name === 'globe') return (<svg {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></svg>)
  if (name === 'clock') return (<svg {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" /></svg>)
  return (<svg {...p}><path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" strokeLinejoin="round" /></svg>)
}

export function Stats() {
  return (
    <section className="mt-20 px-5 sm:px-8 lg:mt-28">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06} className="card flex flex-col justify-between gap-6 p-5 sm:p-7">
            <Icon name={s.icon} />
            <div>
              <p className="display text-4xl sm:text-5xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-xs leading-snug text-muted sm:text-sm">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

// ---------------------------------------------------------------- how we work
export function How() {
  return (
    <section id="how" className="mt-20 px-5 sm:px-8 lg:mt-28">
      <Reveal className="card relative mx-auto max-w-7xl overflow-hidden p-7 sm:p-12">
        <Spark className="absolute right-10 top-10 h-6 w-6 text-gold" delay={0.6} />
        <p className="eyebrow mb-4">How we work</p>
        <RevealText text="Three simple steps." serif={['simple']} className="display text-3xl sm:text-5xl" />
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.title} className="flex gap-5">
              <span className="display grid h-11 w-11 shrink-0 place-items-center rounded-full bg-raise text-lg ring-1 ring-line">{i + 1}</span>
              <div>
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-1 text-muted">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <a href={STUDIO.whatsapp} target="_blank" rel="noreferrer" className="cta mt-10">
          <ChatIcon />
          Start on WhatsApp
        </a>
      </Reveal>
    </section>
  )
}

// ---------------------------------------------------------------- stories
const SLIDE_MS = 4.5

function StoryViewer() {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [holding, setHolding] = useState(false)
  const progress = useMotionValue(0)
  const controls = useRef(null)
  const next = () => setIndex((i) => (i + 1) % STORIES.length)
  const prev = () => setIndex((i) => (i - 1 + STORIES.length) % STORIES.length)

  // one slide plays for SLIDE_MS, then moves on; holding the screen pauses it
  useEffect(() => {
    progress.set(0)
    if (reduce || holding) return
    controls.current = animate(progress, 1, { duration: SLIDE_MS, ease: 'linear', onComplete: next })
    return () => controls.current?.stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, holding, reduce])

  const slide = STORIES[index]
  return (
    <div className="relative mx-auto aspect-[9/16] w-full max-w-[22rem] select-none overflow-hidden rounded-[2rem] bg-raise ring-1 ring-line" onPointerDown={() => setHolding(true)} onPointerUp={() => setHolding(false)} onPointerLeave={() => setHolding(false)}>
      <AnimatePresence mode="popLayout">
        <motion.img key={slide.img} src={slide.img} alt={slide.title} initial={{ opacity: 0, scale: 1.06 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6, ease: EASE }} className="absolute inset-0 h-full w-full object-cover" draggable="false" />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/45" />

      <div className="absolute inset-x-4 top-4 flex gap-1.5" aria-hidden="true">
        {STORIES.map((_, i) => (
          <span key={i} className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/30">
            <motion.span style={{ scaleX: i < index ? 1 : i === index ? progress : 0 }} className="block h-full origin-left bg-white" />
          </span>
        ))}
      </div>

      <div className="absolute inset-x-5 bottom-6">
        <AnimatePresence mode="wait">
          <motion.div key={index} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
            <p className="display text-2xl leading-tight">{slide.title}</p>
            <p className="mt-2 text-sm text-white/80">{slide.text}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* tap zones */}
      <button type="button" aria-label="Previous story" onClick={prev} className="absolute inset-y-0 left-0 w-1/3" />
      <button type="button" aria-label="Next story" onClick={next} className="absolute inset-y-0 right-0 w-2/3" />
    </div>
  )
}

export function Stories() {
  return (
    <section id="stories" className="mt-20 px-5 sm:px-8 lg:mt-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow mb-4">Experience our art</p>
          <RevealText text="Our process, in five short stories." serif={['stories']} className="display text-3xl sm:text-5xl" />
          <Reveal delay={0.1} className="mt-5 max-w-md text-muted">
            A quick look at how a session feels, from the sketch to the aftercare. Tap the right side to skip, hold to pause.
          </Reveal>
          <Reveal delay={0.2} className="mt-8">
            <a href={STUDIO.whatsapp} target="_blank" rel="noreferrer" className="cta">
              <ChatIcon />
              Have a question? Message us
            </a>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <StoryViewer />
        </Reveal>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------- reviews
export function Reviews() {
  return (
    <section className="mt-20 px-5 sm:px-8 lg:mt-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="eyebrow mb-4">Reviews</p>
            <RevealText text="Stories told by our clients." serif={['clients']} className="display max-w-2xl text-3xl sm:text-5xl" />
          </div>
          <div className="card px-6 py-4">
            <p className="display text-4xl">5.0</p>
            <p className="text-sm tracking-widest text-gold">★★★★★</p>
            <p className="text-xs text-muted">Sample rating</p>
          </div>
        </div>
        <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.05} className="w-[82%] shrink-0 snap-start sm:w-[22rem]">
              <figure className="card flex h-full flex-col p-6">
                <p className="text-sm tracking-widest text-gold">★★★★★</p>
                <blockquote className="mt-3 flex-1 leading-relaxed text-text/90">“{r.text}”</blockquote>
                <figcaption className="mt-5 text-sm text-muted">
                  {r.name} · <span className="text-muted/80">Sample review</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------- artists
export function Artists() {
  return (
    <section id="artists" className="mt-20 px-5 sm:px-8 lg:mt-28">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow mb-4">The artists</p>
        <RevealText text="Meet the people behind the needle." serif={['needle']} className="display max-w-3xl text-3xl sm:text-5xl" />
        <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {ARTISTS.map((a, i) => (
            <Reveal key={a.name} delay={i * 0.06}>
              <motion.article whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 260, damping: 22 }} className="card flex h-full flex-col p-5 sm:p-6">
                <span className="display mb-6 grid h-16 w-16 place-items-center rounded-full bg-raise text-2xl text-gold ring-1 ring-line sm:h-20 sm:w-20 sm:text-3xl">0{i + 1}</span>
                <h3 className="text-lg font-bold">{a.name}</h3>
                <p className="mt-1 text-sm text-gold">{a.styles}</p>
                <p className="text-sm text-muted">{a.langs}</p>
                <a href={STUDIO.whatsapp} target="_blank" rel="noreferrer" className="mt-5 text-sm font-semibold underline decoration-gold decoration-2 underline-offset-4">
                  Book with {a.name.split(' ')[0]} {a.name.split(' ')[1]}
                </a>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------- faq
function Item({ item, open, onToggle, id }) {
  return (
    <li className="border-b border-line">
      <h3>
        <button type="button" aria-expanded={open} aria-controls={id} onClick={onToggle} className="flex w-full items-center justify-between gap-6 py-5 text-left">
          <span className="text-lg font-bold sm:text-xl">{item.q}</span>
          <span aria-hidden="true" className="relative h-4 w-4 shrink-0 text-gold">
            <span className="absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 bg-current" />
            <motion.span animate={{ rotate: open ? 90 : 0, opacity: open ? 0 : 1 }} transition={{ duration: 0.3 }} className="absolute left-1/2 top-0 h-4 w-[2px] -translate-x-1/2 bg-current" />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div id={id} role="region" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: EASE }} className="overflow-hidden">
            <p className="max-w-2xl pb-6 leading-relaxed text-muted">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

export function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="mt-20 px-5 sm:px-8 lg:mt-28">
      <div className="card mx-auto max-w-4xl p-7 sm:p-12">
        <p className="eyebrow mb-4">FAQ</p>
        <RevealText text="Good questions." serif={['questions']} className="display text-3xl sm:text-5xl" />
        <ul className="mt-8 border-t border-line">
          {FAQ.map((f, i) => (
            <Item key={f.q} id={`faq-${i}`} item={f} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </ul>
      </div>
    </section>
  )
}
