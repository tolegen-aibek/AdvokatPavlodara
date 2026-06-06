import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { staggerContainer, heroWord, fadeUp, scaleUp, pulseAnim, floatAnim } from '../animations'
import BorderGlow from './BorderGlow'

const BASE = import.meta.env.BASE_URL

const stats = [
  { n: '8 лет', l: 'опыт работы' },
  { n: '340+', l: 'выигранных дел' },
  { n: '92%', l: 'успешных решений' },
  { n: '600+', l: 'довольных клиентов' },
]

export default function Hero({ heroLine1, ctaText, showOrbs, showBadges, doParallax }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const gridY = useTransform(scrollYProgress, [0, 1], ['0%', doParallax ? '28%' : '0%'])
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', doParallax ? '12%' : '0%'])

  return (
    <section ref={ref} className="hero-section" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden', paddingTop: '104px', paddingBottom: '60px', background: 'linear-gradient(140deg,#FAF8F4 0%,var(--cr200) 45%,var(--cr300) 100%)' }}>

      {/* Grid parallax */}
      <motion.div style={{ position: 'absolute', inset: 0, opacity: .034, pointerEvents: 'none', y: gridY }}>
        <svg width="100%" height="120%">
          <defs><pattern id="gr" width="56" height="56" patternUnits="userSpaceOnUse"><path d="M56 0L0 0 0 56" fill="none" stroke="#1B4A2A" strokeWidth="1" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#gr)" />
        </svg>
      </motion.div>

      {/* Floating orbs */}
      {showOrbs && (
        <>
          <motion.div className="orb" style={{ width: '460px', height: '460px', background: 'var(--g500)', top: '-110px', right: '-130px', opacity: .12 }} {...floatAnim(0)} />
          <motion.div className="orb" style={{ width: '300px', height: '300px', background: 'var(--gold)', bottom: '30px', left: '-90px', opacity: .12 }} {...floatAnim(2)} />
          <motion.div className="orb" style={{ width: '180px', height: '180px', background: 'var(--gold-l)', top: '38%', right: '27%', opacity: .15 }} {...floatAnim(4)} />
        </>
      )}

      {/* Mobile-only full-bleed photo (hidden on desktop via CSS) */}
      <div className="hero-mob-photo">
        <img src={`${BASE}uploads/lawyer_photo-1780568895176.png`} alt="Юрист Алия Сейткали" />
        <div className="hero-mob-badge">
          <span className="hero-mob-badge-dot" />
          Павлодар · Консультация бесплатно
        </div>
      </div>

      <div className="s-pad" style={{ position: 'relative', maxWidth: '1120px', margin: '0 auto', width: '100%' }}>
        <div className="g-hero">

          {/* Left col */}
          <motion.div variants={staggerContainer(0.12, 0)} initial="hidden" animate="show">

            <motion.div className="hero-avail-text-badge" variants={fadeUp} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '7px 16px', borderRadius: '999px', background: 'rgba(155,133,80,.08)', border: '1px solid rgba(155,133,80,.22)', marginBottom: '22px' }}>
              <motion.span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--gold)', display: 'inline-block' }} {...pulseAnim} />
              <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--gold)', letterSpacing: '.07em', textTransform: 'uppercase' }}>Павлодар · Консультация бесплатно</span>
            </motion.div>

            <motion.div variants={staggerContainer(0.08)} style={{ perspective: '800px', marginBottom: '18px' }}>
              {[heroLine1, 'юрист рядом'].map((line, li) => (
                <div key={li} style={{ overflow: 'hidden' }}>
                  {line.split(' ').map((word, wi) => (
                    <motion.span key={wi} variants={heroWord} className="hero-title-word" style={{ display: 'inline-block', marginRight: '0.28em', fontFamily: 'var(--heading-font,"Playfair Display"),Georgia,serif', fontSize: 'clamp(40px,5vw,64px)', fontWeight: 700, lineHeight: 1.1, color: li === 1 && word === 'юрист' ? 'transparent' : 'var(--g900)', letterSpacing: '-.02em', ...(li === 1 && word === 'юрист' ? { background: 'linear-gradient(130deg,var(--gold) 0%,var(--gold-l) 48%,var(--gold) 95%)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'shimmer 3.5s linear infinite' } : {}) }}>
                      {word}
                    </motion.span>
                  ))}
                </div>
              ))}
            </motion.div>

            <motion.p variants={fadeUp} style={{ fontSize: '17px', color: 'var(--fg2)', lineHeight: 1.65, marginBottom: '30px', maxWidth: '460px' }}>
              Помогу разобраться с кредитными долгами, семейными спорами и трудовыми конфликтами. Личный подход — каждое дело веду сам.
            </motion.p>

            <motion.div className="hero-cta-btns" variants={fadeUp} style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '36px' }}>
              <BorderGlow className="btn-glow" borderRadius={999} backgroundColor="transparent"
                glowColor="41 55 65" colors={['#C4AD7A','#9B8550','#E8C86A']}
                glowRadius={20} glowIntensity={1.4} coneSpread={22} edgeSensitivity={10}>
                <motion.a href="tel:+77066060600" className="btn btn-g" style={{ fontSize: '15px', padding: '15px 32px' }} whileTap={{ scale: 0.97 }}>{ctaText} ↗</motion.a>
              </BorderGlow>
              <BorderGlow className="btn-glow" borderRadius={999} backgroundColor="transparent"
                glowColor="41 45 55" colors={['#9B8550','#C4AD7A','#7D6840']}
                glowRadius={20} glowIntensity={1.2} coneSpread={22} edgeSensitivity={10}>
                <motion.a href="#services" className="btn btn-o" style={{ fontSize: '15px', padding: '14px 28px' }} whileTap={{ scale: 0.97 }}>Наши услуги</motion.a>
              </BorderGlow>
            </motion.div>

            <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingTop: '24px', borderTop: '1px solid var(--bd)' }}>
              <div style={{ display: 'flex' }}>
                {[
                  `${BASE}uploads/SmartSelect_20260604_152529_Google.jpg`,
                  `${BASE}uploads/SmartSelect_20260604_152543_Google.jpg`,
                  `${BASE}uploads/SmartSelect_20260604_152646_Google.jpg`,
                ].map((s, i) => (
                  <img key={i} src={s} alt="" style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'top', border: '2px solid var(--cr200)', marginLeft: i ? '-10px' : '0' }} />
                ))}
              </div>
              <div>
                <div>{'★★★★★'.split('').map((s, i) => <span key={i} style={{ color: 'var(--gold)', fontSize: '13px' }}>{s}</span>)}</div>
                <p style={{ fontSize: '12px', color: 'var(--fg3)', marginTop: '2px' }}>Более 600 клиентов в Павлодаре</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right col — photo (hidden on mobile via CSS) */}
          <motion.div className="hero-desktop-photo" style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
            initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.3 }}>
            <motion.div style={{ position: 'relative' }} style2={{ y: photoY }}>
              <div className="hero-deco" style={{ position: 'absolute', inset: '-16px', borderRadius: '34px', border: '1px solid rgba(155,133,80,.22)' }} />
              <div className="hero-deco" style={{ position: 'absolute', inset: '-32px', borderRadius: '42px', border: '1px solid rgba(155,133,80,.1)' }} />
              <motion.div className="hero-photo-wrap" style={{ width: '320px', height: '460px', borderRadius: '28px', overflow: 'hidden', background: 'linear-gradient(160deg,#EDE7DA,#F4EFE6)', boxShadow: '0 28px 80px rgba(13,43,26,.18)', y: photoY }}
                whileHover={{ scale: 1.02, transition: { type: 'spring', stiffness: 200, damping: 20 } }}>
                <img src={`${BASE}uploads/lawyer_photo-1780568895176.png`} alt="Юрист Алия Сейткали Павлодар" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
              </motion.div>

              {showBadges && (
                <motion.div className="hero-deco" style={{ position: 'absolute', top: '-16px', right: '-28px', background: 'var(--gold)', color: 'white', borderRadius: '20px', padding: '13px 18px', boxShadow: '0 8px 28px rgba(155,133,80,.42)' }}
                  initial={{ opacity: 0, scale: 0.5, rotate: -12 }} animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.7 }}
                  {...floatAnim(0.8)}>
                  <p className="serif" style={{ fontSize: '28px', fontWeight: 700, lineHeight: 1 }}>8+</p>
                  <p style={{ fontSize: '11px', opacity: .85, marginTop: '2px' }}>лет опыта</p>
                </motion.div>
              )}

              {showBadges && (
                <motion.div className="hero-deco" style={{ position: 'absolute', bottom: '-16px', left: '-28px', background: 'white', borderRadius: '18px', padding: '13px 16px', boxShadow: '0 8px 32px rgba(0,0,0,.1)', display: 'flex', alignItems: 'center', gap: '10px', maxWidth: '218px' }}
                  initial={{ opacity: 0, scale: 0.5, rotate: 12 }} animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 1.0 }}
                  {...floatAnim(1.6)}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'var(--g700)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '18px', flexShrink: 0 }}>✓</div>
                  <div>
                    <p style={{ fontSize: '12px', fontWeight: 600, color: 'var(--fg1)' }}>Первая консультация</p>
                    <p style={{ fontSize: '11px', color: 'var(--gold)', fontWeight: 500 }}>Бесплатно</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div className="g-4 hero-stats" style={{ marginTop: '60px' }}
          variants={staggerContainer(0.08, 0.1)} initial="hidden" animate="show">
          {stats.map((s, i) => (
            <motion.div key={i} variants={scaleUp} whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300 } }}
              className="stat-card" style={{ background: 'rgba(255,255,255,.72)', border: '1px solid var(--bd)', borderRadius: '16px', padding: '22px', textAlign: 'center', backdropFilter: 'blur(8px)' }}>
              <p className="serif" style={{ fontSize: '34px', fontWeight: 700, color: 'var(--g900)', lineHeight: 1 }}>{s.n}</p>
              <p style={{ fontSize: '13px', color: 'var(--fg3)', marginTop: '5px' }}>{s.l}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
