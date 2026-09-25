import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { STUDIO, STYLES } from '../data'
import { ChatIcon, Reveal, RevealText } from './ui'

const EASE = [0.22, 1, 0.36, 1]

// A bottom sheet with a small gallery for the chosen style.
function Sheet({ style, onClose }) {
  useEffect(() => {
    if (!style) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [style, onClose])

  return (
    <AnimatePresence>
      {style && (
        <motion.div key="scrim" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} onClick={onClose} className="fixed inset-0 z-[70] flex items-end justify-center bg-black/70 sm:items-center sm:p-8">
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${style.name} gallery`}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.45, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[92svh] w-full max-w-3xl overflow-y-auto rounded-t-[2rem] bg-panel p-6 shadow-[inset_0_0_0_1px_var(--color-line)] sm:rounded-[2rem] sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow mb-2">Style</p>
                <h3 className="display text-3xl sm:text-4xl">{style.name}</h3>
              </div>
              <button type="button" onClick={onClose} aria-label="Close" className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-raise text-lg ring-1 ring-line">
                ✕
              </button>
            </div>
            <p className="mt-3 max-w-lg text-muted">{style.text}</p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {style.gallery.map((src, i) => (
                <img key={src + i} src={src} alt={`Sample ${style.name.toLowerCase()} tattoo`} loading="lazy" className="aspect-[3/4] w-full rounded-2xl object-cover" />
              ))}
            </div>
            <a href={STUDIO.whatsapp} target="_blank" rel="noreferrer" className="cta mt-7">
              <ChatIcon />
              Book this style
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Styles() {
  const [open, setOpen] = useState(null)

  return (
    <section id="styles" className="mt-20 px-5 sm:px-8 lg:mt-28">
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow mb-4">Styles</p>
        <RevealText text="Bring an idea or a feeling." serif={['feeling']} className="display max-w-3xl text-3xl sm:text-5xl lg:text-6xl" />
        <Reveal delay={0.1} className="mt-5 max-w-xl text-muted">
          Fine line is a favourite, but every design is custom. Tap a style to see sample work.
        </Reveal>

        <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {STYLES.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.05} className="w-[68%] shrink-0 snap-start sm:w-[16rem]">
              <button type="button" onClick={() => setOpen(s)} className="group relative block aspect-[3/4] w-full overflow-hidden rounded-3xl bg-raise text-left ring-1 ring-line" aria-label={`Open ${s.name} gallery`}>
                <img src={s.img} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 p-5">
                  <span className="display block text-xl">{s.name}</span>
                  <span className="mt-1 flex items-center gap-2 text-xs text-muted">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 text-gold" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      <path d="M9 11V5a2 2 0 1 1 4 0v6m0-2a2 2 0 1 1 4 0v3m-8-1a2 2 0 1 0-4 0v3a7 7 0 0 0 7 7h1a6 6 0 0 0 6-6v-3" />
                    </svg>
                    Tap to open
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      <Sheet style={open} onClose={() => setOpen(null)} />
    </section>
  )
}
