import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { NAV, STUDIO } from '../data'

const EASE = [0.22, 1, 0.36, 1]

export function AnnouncementBar() {
  return (
    <div className="bg-gold px-4 py-2 text-center text-xs font-semibold tracking-wide text-[#111]">
      Walk-ins welcome · {STUDIO.hours.replace('Open daily · ', '')} · Replies on WhatsApp within the hour (sample)
    </div>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [stuck, setStuck] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (y) => {
    const next = y > 40
    setStuck((p) => (p === next ? p : next))
  })

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 ${stuck || open ? 'bg-bg shadow-[0_1px_0_var(--color-line)]' : 'bg-bg'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#top" className="display flex items-center gap-2 text-xl" aria-label={`${STUDIO.name}, back to top`}>
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-gold" fill="currentColor" aria-hidden="true">
            <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" />
          </svg>
          Your Studio
        </a>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-muted lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="transition-colors hover:text-text">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={STUDIO.whatsapp} target="_blank" rel="noreferrer" className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-[#111] transition-colors hover:bg-gold-soft sm:inline-flex">
            Free consult
          </a>
          <button type="button" aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((o) => !o)} className="grid h-11 w-11 place-items-center rounded-2xl bg-raise ring-1 ring-line lg:hidden">
            <span className="relative block h-3 w-5">
              <span className={`absolute left-0 top-0 h-[2px] w-full bg-text transition-transform duration-300 ${open ? 'translate-y-[5px] rotate-45' : ''}`} />
              <span className={`absolute bottom-0 left-0 h-[2px] w-full bg-text transition-transform duration-300 ${open ? '-translate-y-[5px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: EASE }} className="overflow-hidden bg-bg lg:hidden">
            <div className="space-y-1 px-5 pb-6">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="display block border-t border-line py-4 text-2xl">
                  {n.label}
                </a>
              ))}
              <a href={STUDIO.whatsapp} target="_blank" rel="noreferrer" className="cta mt-4">
                Free consult on WhatsApp
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
