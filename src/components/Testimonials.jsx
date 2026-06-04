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

const Badge = ({ c }) => (
  <span style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, letterSpacing: '.07em', textTransform: 'uppercase', color: 'var(--gold)', border: '1px solid rgba(155,133,80,.3)', background: 'rgba(155,133,80,.05)', marginBottom: '16px' }}>{c}</span>
)

const BASE = import.meta.env.BASE_URL

const tms = [
  {
    q: 'Алия помогла выйти из долговой ямы. Банк угрожал арестом счетов, но через 3 месяца работы добились реструктуризации и сократили долг почти вдвое. Не думал, что это реально.',
    n: 'Марат Ахметов',
    ro: 'Предприниматель, Павлодар',
    img: `${BASE}uploads/SmartSelect_20260604_152646_Google.jpg`,
  },
  {
    q: 'После тяжёлого развода не знал, как защитить права на детей. Алия вела дело чётко и профессионально, объясняла каждый шаг. Суд встал на мою сторону полностью.',
    n: 'Айдос Жаксыбеков',
    ro: 'Инженер, Павлодар',
    img: `${BASE}uploads/SmartSelect_20260604_152626_Google.jpg`,
  },
  {
    q: 'Меня уволили незаконно за день до отпуска. Думал, что один против юристов компании. Алия восстановила на работе и добилась компенсации за три месяца простоя.',
    n: 'Дмитрий Козлов',
    ro: 'Механик, Экибастуз',
    img: `${BASE}uploads/SmartSelect_20260604_152513_Google.jpg`,
  },
]

export default function Testimonials() {
  const [r, v] = useRev()
  return (
    <section id="reviews" style={{ padding: 'var(--sec-py) 0', background: 'var(--cr200)' }}>
      <div ref={r} style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 32px' }}>
        <div className={`rev ${v ? 'vis' : ''}`} style={{ textAlign: 'center', marginBottom: '52px' }}>
          <Badge c="Отзывы" />
          <h2 className="serif" style={{ fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 700, color: 'var(--g900)' }}>
            Говорят <span className="gtext">клиенты</span>
          </h2>
        </div>
        <div className="g-3">
          {tms.map((t, i) => (
            <div key={i} className={`card rev td${i + 1} ${v ? 'vis' : ''}`} style={{ padding: '26px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', gap: '3px', marginBottom: '14px' }}>
                {'★★★★★'.split('').map((s, j) => <span key={j} style={{ color: 'var(--gold)', fontSize: '15px' }}>{s}</span>)}
              </div>
              <p style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.7, fontStyle: 'italic', flex: 1 }}>«{t.q}»</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '20px', paddingTop: '18px', borderTop: '1px solid var(--bd)' }}>
                <img src={t.img} alt={t.n} style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'top' }} />
                <div>
                  <p style={{ fontWeight: 600, fontSize: '14px', color: 'var(--fg1)' }}>{t.n}</p>
                  <p style={{ fontSize: '12px', color: 'var(--fg3)' }}>{t.ro}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
