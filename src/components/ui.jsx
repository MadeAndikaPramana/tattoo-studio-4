import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView, useReducedMotion } from 'motion/react'

const EASE = [0.22, 1, 0.36, 1]

// Generic chat-bubble icon (not the WhatsApp trademark) used on the booking buttons.
export function ChatIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H10l-5 4v-4H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
      <path d="M7 9h10M7 12.5h6" strokeLinecap="round" />
    </svg>
  )
}

export function Spark({ className = 'h-4 w-4', delay = 0 }) {
  return (
    <svg viewBox="0 0 24 24" className={`spark ${className}`} fill="currentColor" aria-hidden="true" style={{ animation: `twinkle 3.2s ease-in-out ${delay}s infinite` }}>
      <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" />
    </svg>
  )
}

export function Reveal({ children, className = '', delay = 0, y = 24, as = 'div' }) {
  const reduce = useReducedMotion()
  const M = motion[as]
  if (reduce) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </M>
  )
}

// Headline whose words rise out of a mask.
export function RevealText({ text, as: Tag = 'h2', className = '', delay = 0, stagger = 0.06, inView = true, serif = [] }) {
  const reduce = useReducedMotion()
  const words = text.split(' ')
  const M = motion[Tag]
  const trigger = inView
    ? { initial: 'hidden', whileInView: 'shown', viewport: { once: true, margin: '-10% 0px' } }
    : { initial: 'hidden', animate: 'shown' }
  if (reduce) return <Tag className={className}>{text}</Tag>
  return (
    <M className={className} aria-label={text} {...trigger} transition={{ staggerChildren: stagger, delayChildren: delay }}>
      {words.map((w, i) => {
        const clean = w.replace(/[.,]/g, '')
        return (
          <span key={i} aria-hidden="true" className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]">
            <motion.span
              className={`inline-block will-change-transform ${serif.includes(clean) ? 'serif italic text-gold normal-case' : ''}`}
              variants={{ hidden: { y: '115%' }, shown: { y: 0 } }}
              transition={{ duration: 0.9, ease: EASE }}
            >
              {w}
            </motion.span>
            {i < words.length - 1 ? ' ' : ''}
          </span>
        )
      })}
    </M>
  )
}

export function CountUp({ value, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const reduce = useReducedMotion()
  const [n, setN] = useState(reduce ? value : 0)
  useEffect(() => {
    if (!inView || reduce) return
    const c = animate(0, value, { duration: 1.8, ease: EASE, onUpdate: (v) => setN(Math.round(v)) })
    return () => c.stop()
  }, [inView, reduce, value])
  return (
    <span ref={ref} className="tabular-nums">
      {n.toLocaleString('en-US')}
      {suffix}
    </span>
  )
}
