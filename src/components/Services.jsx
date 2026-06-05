import { motion } from 'framer-motion'
import { fadeUp, scaleUp, staggerContainer, VIEWPORT } from '../animations'

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
  return (
    <section id="services" style={{ padding: 'var(--sec-py) 0', background: '#fff' }}>
      <div className="s-pad" style={{ maxWidth: '1120px', margin: '0 auto' }}>

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={VIEWPORT}
          style={{ textAlign: 'center', marginBottom: '52px' }}>
          <Badge c="Услуги" />
          <h2 className="serif" style={{ fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 700, color: 'var(--g900)' }}>
            Три направления, <span className="gtext">одна цель</span>
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--fg2)', marginTop: '10px', maxWidth: '460px', margin: '10px auto 0' }}>Профессиональная защита ваших прав в самых важных жизненных ситуациях</p>
        </motion.div>

        <motion.div className="g-3" variants={staggerContainer(0.14)} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          {svc.map((s, i) => (
            <motion.div key={i} variants={scaleUp}
              whileHover={{ y: -8, boxShadow: '0 24px 60px rgba(0,0,0,0.13)', transition: { type: 'spring', stiffness: 280, damping: 22 } }}
              style={{ background: '#F9F7F3', overflow: 'hidden', borderRadius: 'var(--card-r,20px)', border: '1px solid var(--bd)' }}>
              <div className="svc-img" style={{ overflow: 'hidden', height: '210px', borderRadius: '12px' }}>
                <motion.img src={s.img} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  whileHover={{ scale: 1.07, transition: { duration: 0.45, ease: 'easeOut' } }} />
              </div>
              <div style={{ padding: '24px' }}>
                <h3 className="serif" style={{ fontSize: '20px', fontWeight: 700, color: 'var(--g900)', marginBottom: '10px' }}>{s.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--fg2)', lineHeight: 1.65, marginBottom: '16px' }}>{s.desc}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '20px' }}>
                  {s.pts.map((p, j) => (
                    <motion.li key={j} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={VIEWPORT}
                      transition={{ delay: j * 0.06, type: 'spring', stiffness: 120 }}
                      style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--fg2)' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: s.clr, flexShrink: 0 }} />{p}
                    </motion.li>
                  ))}
                </ul>
                <motion.a href="tel:+77066060600" className="btn btn-g"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '13px', padding: '12px' }}
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>Получить консультацию ↗</motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
