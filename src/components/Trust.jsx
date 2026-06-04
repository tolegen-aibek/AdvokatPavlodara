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

const logos = [
  { n: 'Kaspi Bank', s: 'kaspi.kz' },
  { n: 'Halyk', s: 'Народный Банк' },
  { n: 'ForteBank', s: 'forte.kz' },
  { n: 'BTA Bank', s: 'btabank.kz' },
  { n: 'BI Group', s: 'bi.group' },
  { n: 'Павлодарэнерго', s: 'pav-energo.kz' },
]

export default function Trust() {
  const [r, v] = useRev()
  return (
    <section style={{ padding: '60px 0', background: '#fff', borderTop: '1px solid var(--bd)', borderBottom: '1px solid var(--bd)' }}>
      <div ref={r} style={{ maxWidth: '980px', margin: '0 auto', padding: '0 32px' }}>
        <p className={`rev ${v ? 'vis' : ''}`} style={{ textAlign: 'center', fontSize: '12px', fontWeight: 600, color: 'var(--fg3)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '36px' }}>
          Нам доверяют клиенты ведущих компаний Казахстана
        </p>
        <div className={`rev g-6 ${v ? 'vis' : ''}`}>
          {logos.map((l, i) => (
            <div key={i} style={{ textAlign: 'center', opacity: .38, transition: 'opacity .22s', cursor: 'default', padding: '6px' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '.8'}
              onMouseLeave={e => e.currentTarget.style.opacity = '.38'}>
              <p className="serif" style={{ fontWeight: 700, fontSize: '13px', color: 'var(--g700)', lineHeight: 1.3 }}>{l.n}</p>
              <p style={{ fontSize: '10px', color: 'var(--fg3)', marginTop: '3px' }}>{l.s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
