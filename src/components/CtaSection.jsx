import { useState, useEffect, useRef } from 'react'

function useRev(thr = 0.12) {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); obs.disconnect() }
    }, { threshold: thr })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, vis]
}

export default function CtaSection() {
  const [r, v] = useRev()
  return (
    <section style={{ padding: 'var(--sec-py) 32px', background: 'var(--g700)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: .055 }}>
        <svg width="100%" height="100%">
          <defs><pattern id="g2" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0L0 0 0 48" fill="none" stroke="white" strokeWidth="1" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#g2)" />
        </svg>
      </div>
      <div className="orb" style={{ width: '320px', height: '320px', background: '#2E6B40', top: '-80px', right: '-60px', opacity: .45 }} />
      <div className="orb" style={{ width: '200px', height: '200px', background: '#9B8550', bottom: '-40px', left: '10%', opacity: .3 }} />
      <div ref={r} className={`rev ${v ? 'vis' : ''}`} style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <h2 className="serif" style={{ fontSize: 'clamp(28px,4vw,50px)', fontWeight: 700, color: 'white', marginBottom: '14px', lineHeight: 1.2 }}>
          Готовы решить<br /><span style={{ color: 'var(--gold-l)' }}>вашу проблему?</span>
        </h2>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,.68)', marginBottom: '32px' }}>Первичная консультация бесплатна. Ежедневно с 9:00 до 20:00.</p>
        <div className="cta-btns" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
          <a href="tel:+77066060600" className="btn btn-g" style={{ fontSize: '15px', padding: '15px 32px', boxShadow: '0 4px 20px rgba(155,133,80,.4)' }}>Связаться с юристом ↗</a>
          <a href="https://wa.me/77066060600" className="btn btn-ghost" style={{ fontSize: '15px', padding: '14px 28px' }}>Написать в WhatsApp</a>
        </div>
      </div>
    </section>
  )
}
