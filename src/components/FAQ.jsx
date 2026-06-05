import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, fadeLeft, staggerContainer, VIEWPORT } from '../animations'

const Badge = ({ c }) => (
  <span style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, letterSpacing: '.07em', textTransform: 'uppercase', color: 'var(--gold)', border: '1px solid rgba(155,133,80,.3)', background: 'rgba(155,133,80,.05)', marginBottom: '16px' }}>{c}</span>
)

const faqs = [
  { q: 'Сколько стоит консультация?', a: 'Первичная консультация бесплатна — без ограничения по времени. Выслушаю ситуацию, оценю перспективы и объясню варианты решения. Стоимость ведения дела фиксируется в договоре после первой встречи.' },
  { q: 'Как долго рассматривается дело в суде?', a: 'Сроки зависят от категории. Семейные споры — в среднем 2–4 месяца. Кредитные — от 3 до 6 месяцев. Трудовые — 1–3 месяца. Правильная подготовка документов помогает сократить эти сроки.' },
  { q: 'Нужно ли мне присутствовать на заседаниях?', a: 'Необязательно. Могу представлять ваши интересы по нотариальной доверенности. Ваше личное присутствие необходимо лишь в отдельных категориях дел, где суд требует этого.' },
  { q: 'Что делать, если банк уже подал на меня в суд?', a: 'Не паникуйте. Даже получив повестку, у вас есть возможности для защиты. Свяжитесь как можно скорее — чем раньше мы начнём, тем больше аргументов подготовим. Промедление работает против вас.' },
  { q: 'Можно ли оформить алименты без суда?', a: 'Да. Если оба родителя согласны, оформляется нотариальное соглашение об алиментах — быстрее и дешевле суда. Помогу составить документ, который защитит интересы детей и будет иметь силу исполнительного листа.' },
  { q: 'Что делать при незаконном увольнении?', a: 'Срок обжалования в Казахстане — один месяц. Сохраните трудовой договор, приказы и переписку с работодателем. Обратитесь сразу — оценю шансы на восстановление или выплату компенсации.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" style={{ padding: 'var(--sec-py) 0', background: '#fff' }}>
      <div className="s-pad" style={{ maxWidth: '760px', margin: '0 auto' }}>

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={VIEWPORT}
          style={{ textAlign: 'center', marginBottom: '52px' }}>
          <Badge c="FAQ" />
          <h2 className="serif" style={{ fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 700, color: 'var(--g900)' }}>
            Частые <span className="gtext">вопросы</span>
          </h2>
        </motion.div>

        <motion.div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          {faqs.map((f, i) => (
            <motion.div key={i}
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90, damping: 18 } } }}
              style={{ background: '#F9F7F3', borderRadius: '16px', border: '1px solid var(--bd)', overflow: 'hidden' }}>
              <motion.button
                onClick={() => setOpen(open === i ? null : i)}
                whileHover={{ backgroundColor: 'rgba(244,239,230,0.8)' }}
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', padding: '18px 22px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span className="serif" style={{ fontWeight: 700, fontSize: '13px', color: 'var(--gold-l)', minWidth: '26px' }}>{String(i + 1).padStart(2, '0')}.</span>
                  <span style={{ fontWeight: 500, fontSize: '15px', color: 'var(--fg1)' }}>{f.q}</span>
                </div>
                <motion.span style={{ color: 'var(--gold)', fontSize: '22px', flexShrink: 0, lineHeight: 1, display: 'inline-block' }}
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 18 }}>+</motion.span>
              </motion.button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ height: { type: 'spring', stiffness: 120, damping: 20 }, opacity: { duration: 0.2 } }}>
                    <p style={{ padding: '0 22px 20px 50px', fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.72 }}>{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
