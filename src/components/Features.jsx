import { motion } from 'framer-motion'
import { fadeUp, fadeLeft, scaleUp, staggerContainer, VIEWPORT } from '../animations'

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
  return (
    <section id="about" style={{ padding: 'var(--sec-py) 0', background: 'var(--cr200)' }}>
      <div className="s-pad" style={{ maxWidth: '1120px', margin: '0 auto' }}>

        <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={VIEWPORT}
          style={{ marginBottom: '52px' }}>
          <Badge c="Почему я" />
          <h2 className="serif" style={{ fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 700, color: 'var(--g900)' }}>
            Что вы <span className="gtext">получаете</span>
          </h2>
        </motion.div>

        <motion.div className="g-3" style={{ gap: '20px' }}
          variants={staggerContainer(0.1)} initial="hidden" whileInView="show" viewport={VIEWPORT}>
          {feats.map((f, i) => (
            <motion.div key={i} variants={scaleUp}
              whileHover={{ y: -6, boxShadow: '0 20px 52px rgba(0,0,0,0.11)', transition: { type: 'spring', stiffness: 280, damping: 22 } }}
              className="feat-card" style={{ background: '#fff', padding: '26px', borderRadius: 'var(--card-r,20px)', border: '1px solid var(--bd)' }}>
              <motion.div
                style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--g700)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '20px', marginBottom: '14px' }}
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1, transition: { duration: 0.4 } }}>
                {f.ic}
              </motion.div>
              <h3 style={{ fontWeight: 600, fontSize: '15px', color: 'var(--g900)', marginBottom: '8px', lineHeight: 1.4 }}>{f.t}</h3>
              <p style={{ fontSize: '13px', color: 'var(--fg2)', lineHeight: 1.65 }}>{f.d}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
