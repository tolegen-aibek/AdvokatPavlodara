import { motion } from 'framer-motion'
import { fadeUp, scaleUp, staggerContainer, VIEWPORT } from '../animations'

const BASE = import.meta.env.BASE_URL

const Badge = ({ c }) => (
  <span style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, letterSpacing: '.07em', textTransform: 'uppercase', color: 'var(--gold)', border: '1px solid rgba(155,133,80,.3)', background: 'rgba(155,133,80,.05)', marginBottom: '16px' }}>{c}</span>
)

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
  return (
    <section id="reviews" style={{ padding: 'var(--sec-py) 0', background: 'var(--cr200)' }}>
      <div className="s-pad" style={{ maxWidth: '1120px', margin: '0 auto' }}>

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={VIEWPORT}
          style={{ textAlign: 'center', marginBottom: '52px' }}>
          <Badge c="Отзывы" />
          <h2 className="serif" style={{ fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 700, color: 'var(--g900)' }}>
            Говорят <span className="gtext">клиенты</span>
          </h2>
        </motion.div>

        <motion.div className="g-3" variants={staggerContainer(0.15)} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          {tms.map((t, i) => (
            <motion.div key={i} variants={scaleUp}
              whileHover={{ y: -8, boxShadow: '0 24px 60px rgba(0,0,0,0.12)', transition: { type: 'spring', stiffness: 280, damping: 22 } }}
              style={{ background: '#fff', padding: '26px', display: 'flex', flexDirection: 'column', borderRadius: 'var(--card-r,20px)', border: '1px solid var(--bd)' }}>
              <div style={{ display: 'flex', gap: '3px', marginBottom: '14px' }}>
                {[...Array(5)].map((_, j) => (
                  <motion.span key={j} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={VIEWPORT}
                    transition={{ delay: j * 0.07 + i * 0.15, type: 'spring', stiffness: 200 }}
                    style={{ color: 'var(--gold)', fontSize: '15px' }}>★</motion.span>
                ))}
              </div>
              <p style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.7, fontStyle: 'italic', flex: 1 }}>«{t.q}»</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '20px', paddingTop: '18px', borderTop: '1px solid var(--bd)' }}>
                <motion.img src={t.img} alt={t.n} style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'top' }}
                  whileHover={{ scale: 1.12, transition: { type: 'spring', stiffness: 300 } }} />
                <div>
                  <p style={{ fontWeight: 600, fontSize: '14px', color: 'var(--fg1)' }}>{t.n}</p>
                  <p style={{ fontSize: '12px', color: 'var(--fg3)' }}>{t.ro}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
