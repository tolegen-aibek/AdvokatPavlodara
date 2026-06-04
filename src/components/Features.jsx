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

const feats = [
  { ic: '★', t: 'Первичная консультация бесплатно', d: 'Оценю ситуацию и расскажу о перспективах без каких-либо обязательств с вашей стороны' },
  { ic: '⚖', t: 'Ведение дела под ключ', d: 'Беру на себя всё — от сбора документов до исполнения судебного решения. Вы занимаетесь жизнью' },
  { ic: '◎', t: 'Прозрачная стоимость', d: 'Фиксированная цена оговаривается заранее и закрепляется договором. Никаких сюрпризов в процессе' },
  { ic: '◈', t: 'Личное ведение каждого дела', d: 'Ваше дело веду я сама, а не помощники. Полная вовлечённость и внимание к деталям' },
  { ic: '⊞', t: 'Опыт в судах Павлодарской области', d: 'Знаю местную практику и специфику региона. Это даёт реальное преимущество в деле' },
  { ic: '⏱', t: 'Работаем ежедневно 9:00–20:00', d: 'Принимаю в будни и выходные. Экстренная связь по WhatsApp в любое время' },
]

export default function Features() {
  const [r, v] = useRev()
  return (
    <section id="about" style={{ padding: 'var(--sec-py) 0', background: 'var(--cr200)' }}>
      <div ref={r} style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 32px' }}>
        <div className={`rev ${v ? 'vis' : ''}`} style={{ marginBottom: '52px' }}>
          <Badge c="Почему я" />
          <h2 className="serif" style={{ fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 700, color: 'var(--g900)' }}>
            Что вы <span className="gtext">получаете</span>
          </h2>
        </div>
        <div className="g-3" style={{ gap: '20px' }}>
          {feats.map((f, i) => (
            <div key={i} className={`card rev td${(i % 3) + 1} ${v ? 'vis' : ''}`} style={{ padding: '26px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--g700)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '20px', marginBottom: '14px' }}>{f.ic}</div>
              <h3 style={{ fontWeight: 600, fontSize: '15px', color: 'var(--g900)', marginBottom: '8px', lineHeight: 1.4 }}>{f.t}</h3>
              <p style={{ fontSize: '13px', color: 'var(--fg2)', lineHeight: 1.65 }}>{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
