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

const faqs = [
  {
    q: 'Сколько стоит консультация?',
    a: 'Первичная консультация бесплатна — без ограничения по времени. Выслушаю ситуацию, оценю перспективы и объясню варианты решения. Стоимость ведения дела фиксируется в договоре после первой встречи.',
  },
  {
    q: 'Как долго рассматривается дело в суде?',
    a: 'Сроки зависят от категории. Семейные споры — в среднем 2–4 месяца. Кредитные — от 3 до 6 месяцев. Трудовые — 1–3 месяца. Правильная подготовка документов помогает сократить эти сроки.',
  },
  {
    q: 'Нужно ли мне присутствовать на заседаниях?',
    a: 'Необязательно. Могу представлять ваши интересы по нотариальной доверенности. Ваше личное присутствие необходимо лишь в отдельных категориях дел, где суд требует этого.',
  },
  {
    q: 'Что делать, если банк уже подал на меня в суд?',
    a: 'Не паникуйте. Даже получив повестку, у вас есть возможности для защиты. Свяжитесь как можно скорее — чем раньше мы начнём, тем больше аргументов подготовим. Промедление работает против вас.',
  },
  {
    q: 'Можно ли оформить алименты без суда?',
    a: 'Да. Если оба родителя согласны, оформляется нотариальное соглашение об алиментах — быстрее и дешевле суда. Помогу составить документ, который защитит интересы детей и будет иметь силу исполнительного листа.',
  },
  {
    q: 'Что делать при незаконном увольнении?',
    a: 'Срок обжалования в Казахстане — один месяц. Сохраните трудовой договор, приказы и переписку с работодателем. Обратитесь сразу — оценю шансы на восстановление или выплату компенсации.',
  },
]

export default function FAQ() {
  const [r, v] = useRev()
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" style={{ padding: 'var(--sec-py) 0', background: '#fff' }}>
      <div ref={r} style={{ maxWidth: '760px', margin: '0 auto', padding: '0 32px' }}>
        <div className={`rev ${v ? 'vis' : ''}`} style={{ textAlign: 'center', marginBottom: '52px' }}>
          <Badge c="FAQ" />
          <h2 className="serif" style={{ fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 700, color: 'var(--g900)' }}>
            Частые <span className="gtext">вопросы</span>
          </h2>
        </div>
        <div className={`rev ${v ? 'vis' : ''}`} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {faqs.map((f, i) => (
            <div key={i} style={{ background: '#F9F7F3', borderRadius: '16px', border: '1px solid var(--bd)', overflow: 'hidden' }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', padding: '18px 22px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(244,239,230,.8)'}
                onMouseLeave={e => e.currentTarget.style.background = 'none'}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span className="serif" style={{ fontWeight: 700, fontSize: '13px', color: 'var(--gold-l)', minWidth: '26px' }}>{String(i + 1).padStart(2, '0')}.</span>
                  <span style={{ fontWeight: 500, fontSize: '15px', color: 'var(--fg1)' }}>{f.q}</span>
                </div>
                <span style={{ color: 'var(--gold)', fontSize: '22px', flexShrink: 0, lineHeight: 1, transition: 'transform .3s', transform: open === i ? 'rotate(45deg)' : 'none' }}>+</span>
              </button>
              <div className={`faq-body ${open === i ? 'open' : ''}`}>
                <p style={{ padding: '0 22px 20px 50px', fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.72 }}>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
