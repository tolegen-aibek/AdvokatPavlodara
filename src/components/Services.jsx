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

const BASE = import.meta.env.BASE_URL

const Badge = ({ c }) => (
  <span style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, letterSpacing: '.07em', textTransform: 'uppercase', color: 'var(--gold)', border: '1px solid rgba(155,133,80,.3)', background: 'rgba(155,133,80,.05)', marginBottom: '16px' }}>{c}</span>
)

const svc = [
  {
    title: 'Кредиты и долги',
    desc: 'Реструктуризация долга, защита от коллекторов, оспаривание кредитных договоров и снятие арестов с имущества.',
    img: `${BASE}uploads/settlement.jpg`,
    pts: ['Реструктуризация долга', 'Защита от коллекторов', 'Оспаривание договора', 'Снятие ареста'],
    clr: '#1B4A2A',
  },
  {
    title: 'Семейное право',
    desc: 'Развод, раздел имущества, алименты, определение места жительства детей — деликатно и результативно.',
    img: `${BASE}uploads/luchshie-yuristy-po-semejnym-delam-v-sankt-peterburge.jpg`,
    pts: ['Бракоразводный процесс', 'Алименты и взыскание', 'Раздел имущества', 'Опека над детьми'],
    clr: '#9B8550',
  },
  {
    title: 'Трудовые споры',
    desc: 'Незаконное увольнение, невыплата зарплаты, дискриминация — профессиональная защита трудовых прав.',
    img: `${BASE}uploads/2f35b21596602b04f8afeadf70e51f3a_original275517.webp`,
    pts: ['Незаконное увольнение', 'Задержка зарплаты', 'Восстановление на работе', 'Трудовые договоры'],
    clr: '#5E4F28',
  },
]

export default function Services() {
  const [r, v] = useRev()
  return (
    <section id="services" style={{ padding: 'var(--sec-py) 0', background: '#fff' }}>
      <div ref={r} style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 32px' }}>
        <div className={`rev ${v ? 'vis' : ''}`} style={{ textAlign: 'center', marginBottom: '52px' }}>
          <Badge c="Услуги" />
          <h2 className="serif" style={{ fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 700, color: 'var(--g900)' }}>
            Три направления, <span className="gtext">одна цель</span>
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--fg2)', marginTop: '10px', maxWidth: '460px', margin: '10px auto 0' }}>Профессиональная защита ваших прав в самых важных жизненных ситуациях</p>
        </div>
        <div className="g-3">
          {svc.map((s, i) => (
            <div key={i} className={`card rev td${i + 1} ${v ? 'vis' : ''}`} style={{ background: '#F9F7F3', overflow: 'hidden' }}>
              <div className="svc-img"><img src={s.img} alt={s.title} /></div>
              <div style={{ padding: '24px' }}>
                <h3 className="serif" style={{ fontSize: '20px', fontWeight: 700, color: 'var(--g900)', marginBottom: '10px' }}>{s.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.65, marginBottom: '16px' }}>{s.desc}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '20px' }}>
                  {s.pts.map((p, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--fg2)' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: s.clr, flexShrink: 0 }} />{p}
                    </li>
                  ))}
                </ul>
                <a href="tel:+77066060600" className="btn btn-g" style={{ width: '100%', justifyContent: 'center', fontSize: '13px', padding: '12px' }}>Получить консультацию ↗</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
