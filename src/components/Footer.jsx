import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { STUDIO } from '../data'
import { ChatIcon, Reveal, RevealText } from './ui'

export function FinalCta() {
  return (
    <footer className="mt-20 px-5 pb-28 sm:px-8 lg:mt-28 lg:pb-12">
      <div className="card mx-auto max-w-7xl p-8 text-center sm:p-16">
        <p className="eyebrow mb-4">Ready?</p>
        <RevealText text="Let's plan your tattoo." serif={['plan']} className="display text-[9vw] sm:text-6xl lg:text-7xl" />
        <Reveal delay={0.15} className="mx-auto mt-6 max-w-md text-muted">
          Send an idea, a reference or just a feeling. We reply with a clear price range and timing.
        </Reveal>
        <Reveal delay={0.25} className="mt-9 flex justify-center">
          <a href={STUDIO.whatsapp} target="_blank" rel="noreferrer" className="cta">
            <ChatIcon />
            Chat on WhatsApp
          </a>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-3xl gap-6 border-t border-line pt-8 text-left text-sm sm:grid-cols-3">
          <div>
            <p className="eyebrow mb-2">Find us</p>
            <p className="text-text/90">{STUDIO.address}</p>
          </div>
          <div>
            <p className="eyebrow mb-2">Hours</p>
            <p className="text-text/90">{STUDIO.hours}</p>
          </div>
          <div>
            <p className="eyebrow mb-2">Say hello</p>
            <p className="text-text/90">{STUDIO.phone}</p>
            <p className="text-text/90">{STUDIO.instagram}</p>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-xs leading-relaxed text-muted">
          Demo template. {STUDIO.name} is not a real studio: names, numbers, reviews and prices are placeholders, and the
          WhatsApp links carry no phone number. Photographs are free-license stock from Unsplash.
        </p>
      </div>
    </footer>
  )
}

// A persistent booking button that appears once the hero is behind you.
export function ChatFab() {
  const [show, setShow] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (y) => {
    const next = y > 600
    setShow((p) => (p === next ? p : next))
  })
  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={STUDIO.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          className="fixed bottom-4 right-4 z-40 flex h-14 items-center gap-2 rounded-full bg-gold px-5 text-sm font-bold text-[#111] shadow-[0_14px_34px_-10px_rgba(240,194,75,0.55)] sm:bottom-6 sm:right-6"
        >
          <span aria-hidden="true" className="ping absolute inset-0 -z-10 rounded-full bg-gold" style={{ animation: 'ping 2.4s ease-out infinite' }} />
          <ChatIcon />
          Chat with us
        </motion.a>
      )}
    </AnimatePresence>
  )
}
