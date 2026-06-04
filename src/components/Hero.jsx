import { useState, useEffect } from 'react'

const stats = [
  { n: '8 лет', l: 'опыт работы' },
  { n: '340+', l: 'выигранных дел' },
  { n: '92%', l: 'успешных решений' },
  { n: '600+', l: 'довольных клиентов' },
]

export default function Hero({ heroLine1, ctaText, showOrbs, showBadges, doParallax }) {
  const [py, setPy] = useState(0)

  useEffect(() => {
    const fn = () => setPy(doParallax ? window.scrollY * 0.28 : 0)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [doParallax])

  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden', paddingTop: '104px', paddingBottom: '60px', background: 'linear-gradient(140deg,#FAF8F4 0%,var(--cr200) 45%,var(--cr300) 100%)' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: .034, pointerEvents: 'none', transform: `translateY(${py}px)` }}>
        <svg width="100%" height="120%">
          <defs><pattern id="gr" width="56" height="56" patternUnits="userSpaceOnUse"><path d="M56 0L0 0 0 56" fill="none" stroke="#1B4A2A" strokeWidth="1" /></pattern></defs>
          <rect width="100%" height="100%" fill="url(#gr)" />
        </svg>
      </div>

      {showOrbs && (
        <>
          <div className="orb float" style={{ width: '460px', height: '460px', background: 'var(--g500)', top: '-110px', right: '-130px', opacity: .12 }} />
          <div className="orb float" style={{ width: '300px', height: '300px', background: 'var(--gold)', bottom: '30px', left: '-90px', opacity: .12, animationDelay: '2s' }} />
          <div className="orb floatS" style={{ width: '180px', height: '180px', background: 'var(--gold-l)', top: '38%', right: '27%', opacity: .15, animationDelay: '4s' }} />
        </>
      )}

      <div style={{ position: 'relative', maxWidth: '1120px', margin: '0 auto', padding: '0 32px', width: '100%' }}>
        <div className="g-hero">
          <div>
            <div className="hi0" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '7px 16px', borderRadius: '999px', background: 'rgba(155,133,80,.08)', border: '1px solid rgba(155,133,80,.22)', marginBottom: '22px' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--gold)', display: 'inline-block', animation: 'pulse 1.8s ease-in-out infinite' }} />
              <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--gold)', letterSpacing: '.07em', textTransform: 'uppercase' }}>Павлодар · Консультация бесплатно</span>
            </div>

            <h1 className="hi1 serif" style={{ fontSize: 'clamp(40px,5vw,64px)', fontWeight: 700, lineHeight: 1.1, color: 'var(--g900)', marginBottom: '18px', letterSpacing: '-.02em' }}>
              {heroLine1}<br /><span className="gtext">юрист</span> рядом
            </h1>

            <p className="hi2" style={{ fontSize: '17px', color: 'var(--fg2)', lineHeight: 1.65, marginBottom: '30px', maxWidth: '460px' }}>
              Помогу разобраться с кредитными долгами, семейными спорами и трудовыми конфликтами. Личный подход — каждое дело веду сам.
            </p>

            <div className="hi3" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '36px' }}>
              <a href="tel:+77066060600" className="btn btn-g" style={{ fontSize: '15px', padding: '15px 32px' }}>{ctaText} ↗</a>
              <a href="#services" className="btn btn-o" style={{ fontSize: '15px', padding: '14px 28px' }}>Наши услуги</a>
            </div>

            <div className="hi4" style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingTop: '24px', borderTop: '1px solid var(--bd)' }}>
              <div style={{ display: 'flex' }}>
                {[
                  '/uploads/SmartSelect_20260604_152543_Google.jpg',
                  '/uploads/SmartSelect_20260604_152529_Google.jpg',
                  '/uploads/SmartSelect_20260604_152513_Google.jpg',
                ].map((s, i) => (
                  <img key={i} src={s} alt="" style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'top', border: '2px solid var(--cr200)', marginLeft: i ? '-10px' : '0' }} />
                ))}
              </div>
              <div>
                <div>{'★★★★★'.split('').map((s, i) => <span key={i} style={{ color: 'var(--gold)', fontSize: '13px' }}>{s}</span>)}</div>
                <p style={{ fontSize: '12px', color: 'var(--fg3)', marginTop: '2px' }}>Более 600 клиентов в Павлодаре</p>
              </div>
            </div>
          </div>

          <div className="hi5" style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', inset: '-16px', borderRadius: '34px', border: '1px solid rgba(155,133,80,.22)' }} />
              <div style={{ position: 'absolute', inset: '-32px', borderRadius: '42px', border: '1px solid rgba(155,133,80,.1)' }} />
              <div className="hero-photo-wrap" style={{ width: '320px', height: '460px', borderRadius: '28px', overflow: 'hidden', background: 'linear-gradient(160deg,#EDE7DA,#F4EFE6)', boxShadow: '0 28px 80px rgba(13,43,26,.18)' }}>
                <img src="/uploads/lawyer_photo-1780568895176.png" alt="Юрист Алия Сейткали Павлодар" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
              </div>
              {showBadges && (
                <div className="float" style={{ position: 'absolute', top: '-16px', right: '-28px', background: 'var(--gold)', color: 'white', borderRadius: '20px', padding: '13px 18px', boxShadow: '0 8px 28px rgba(155,133,80,.42)', animationDelay: '.8s' }}>
                  <p className="serif" style={{ fontSize: '28px', fontWeight: 700, lineHeight: 1 }}>8+</p>
                  <p style={{ fontSize: '11px', opacity: .85, marginTop: '2px' }}>лет опыта</p>
                </div>
              )}
              {showBadges && (
                <div className="float" style={{ position: 'absolute', bottom: '-16px', left: '-28px', background: 'white', borderRadius: '18px', padding: '13px 16px', boxShadow: '0 8px 32px rgba(0,0,0,.1)', display: 'flex', alignItems: 'center', gap: '10px', maxWidth: '218px', animationDelay: '1.6s' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'var(--g700)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '18px', flexShrink: 0 }}>✓</div>
                  <div>
                    <p style={{ fontSize: '12px', fontWeight: 600, color: 'var(--fg1)' }}>Первая консультация</p>
                    <p style={{ fontSize: '11px', color: 'var(--gold)', fontWeight: 500 }}>Бесплатно</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="g-4" style={{ marginTop: '60px' }}>
          {stats.map((s, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,.72)', border: '1px solid var(--bd)', borderRadius: '16px', padding: '22px', textAlign: 'center', backdropFilter: 'blur(8px)' }}>
              <p className="serif" style={{ fontSize: '34px', fontWeight: 700, color: 'var(--g900)', lineHeight: 1 }}>{s.n}</p>
              <p style={{ fontSize: '13px', color: 'var(--fg3)', marginTop: '5px' }}>{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
