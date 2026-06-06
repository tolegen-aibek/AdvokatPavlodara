import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, VIEWPORT, floatAnim } from '../animations'
import BorderGlow from './BorderGlow'

export default function CtaSection() {
  return (
    <section className="cta-section-pad" style={{ paddingTop: 'var(--sec-py)', paddingBottom: 'var(--sec-py)', background: 'var(--g700)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: .055 }}>
        <svg width="100%" height="100%">
          <defs><pattern id="g2" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0L0 0 0 48" fill="none" stroke="white" strokeWidth="1" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#g2)" />
        </svg>
      </div>
      <motion.div className="orb" style={{ width: '320px', height: '320px', background: '#2E6B40', top: '-80px', right: '-60px', opacity: .45 }} {...floatAnim(0)} />
      <motion.div className="orb" style={{ width: '200px', height: '200px', background: '#9B8550', bottom: '-40px', left: '10%', opacity: .3 }} {...floatAnim(2)} />

      <motion.div variants={staggerContainer(0.12)} initial="hidden" whileInView="show" viewport={VIEWPORT}
        style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        <motion.h2 variants={fadeUp} className="serif"
          style={{ fontSize: 'clamp(28px,4vw,50px)', fontWeight: 700, color: 'white', marginBottom: '14px', lineHeight: 1.2 }}>
          Готовы решить<br /><span style={{ color: 'var(--gold-l)' }}>вашу проблему?</span>
        </motion.h2>
        <motion.p variants={fadeUp} style={{ fontSize: '16px', color: 'rgba(255,255,255,.68)', marginBottom: '32px' }}>
          Первичная консультация бесплатна. Ежедневно с 9:00 до 20:00.
        </motion.p>
        <motion.div variants={fadeUp} className="cta-btns" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
          <BorderGlow className="btn-glow" borderRadius={999} backgroundColor="transparent"
            glowColor="41 55 65" colors={['#C4AD7A','#9B8550','#E8C86A']}
            glowRadius={20} glowIntensity={1.4} coneSpread={22} edgeSensitivity={10}>
            <motion.a href="tel:+77066060600" className="btn btn-g"
              style={{ fontSize: '15px', padding: '15px 32px' }}
              whileTap={{ scale: 0.97 }}>Связаться с юристом ↗</motion.a>
          </BorderGlow>
          <BorderGlow className="btn-glow" borderRadius={999} backgroundColor="transparent"
            glowColor="0 0 95" colors={['#ffffff','#dddddd','#ffffff']}
            glowRadius={20} glowIntensity={1.1} coneSpread={22} edgeSensitivity={10}>
            <motion.a href="https://wa.me/77066060600" className="btn btn-ghost"
              style={{ fontSize: '15px', padding: '14px 28px' }}
              whileTap={{ scale: 0.97 }}>Написать в WhatsApp</motion.a>
          </BorderGlow>
        </motion.div>
      </motion.div>
    </section>
  )
}
