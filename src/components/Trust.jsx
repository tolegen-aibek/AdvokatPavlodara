import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, VIEWPORT } from '../animations'

const logos = [
  { n: 'Kaspi Bank', s: 'kaspi.kz' },
  { n: 'Halyk', s: 'Народный Банк' },
  { n: 'ForteBank', s: 'forte.kz' },
  { n: 'BTA Bank', s: 'btabank.kz' },
  { n: 'BI Group', s: 'bi.group' },
  { n: 'Павлодарэнерго', s: 'pav-energo.kz' },
]

export default function Trust() {
  return (
    <section style={{ padding: '60px 0', background: '#fff', borderTop: '1px solid var(--bd)', borderBottom: '1px solid var(--bd)' }}>
      <div style={{ maxWidth: '980px', margin: '0 auto', padding: '0 32px' }}>
        <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={VIEWPORT}
          style={{ textAlign: 'center', fontSize: '12px', fontWeight: 600, color: 'var(--fg3)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '36px' }}>
          Нам доверяют клиенты ведущих компаний Казахстана
        </motion.p>
        <motion.div className="g-6" variants={staggerContainer(0.08)} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          {logos.map((l, i) => (
            <motion.div key={i}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } } }}
              whileHover={{ opacity: 0.9, scale: 1.08, transition: { type: 'spring', stiffness: 300 } }}
              style={{ textAlign: 'center', opacity: .38, cursor: 'default', padding: '6px' }}>
              <p className="serif" style={{ fontWeight: 700, fontSize: '13px', color: 'var(--g700)', lineHeight: 1.3 }}>{l.n}</p>
              <p style={{ fontSize: '10px', color: 'var(--fg3)', marginTop: '3px' }}>{l.s}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
