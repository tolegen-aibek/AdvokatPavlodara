import { useState, useEffect } from 'react'

const links = [
  ['Услуги', '#services'],
  ['О юристе', '#about'],
  ['Отзывы', '#reviews'],
  ['FAQ', '#faq'],
]

export default function Nav({ transparent }) {
  const [sc, setSc] = useState(false)
  const [mo, setMo] = useState(false)

  useEffect(() => {
    const fn = () => setSc(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const logoColor = transparent ? 'rgba(255,255,255,.92)' : 'var(--g700)'
  const linkColor = transparent ? 'rgba(255,255,255,.72)' : 'var(--fg2)'
  const linkHover = transparent ? 'rgba(255,255,255,1)' : 'var(--g700)'
  const burgerColor = transparent ? 'white' : 'var(--fg1)'

  const navbarStyle = transparent
    ? {
        background: 'rgba(0,0,0,.12)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,.14)',
        boxShadow: 'none',
      }
    : sc
    ? { background: 'rgba(244,239,230,.97)', boxShadow: '0 4px 28px rgba(0,0,0,.09)' }
    : {}

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      display: 'flex', justifyContent: 'center', padding: '14px 16px 0',
      transition: 'all .35s ease',
    }}>
      <div
        className={`navbar ${!transparent && sc ? 'sc' : ''}`}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '10px 22px', width: '100%', maxWidth: '1040px',
          transition: 'background .35s, border .35s, box-shadow .35s',
          ...navbarStyle,
        }}
      >
        <a href="#" className="serif"
          style={{ fontWeight: 700, color: logoColor, fontSize: '18px', textDecoration: 'none', transition: 'color .35s' }}>
          Алия Сейткали
        </a>

        <div className="md-hide" style={{ alignItems: 'center', gap: '24px' }}>
          {links.map(([l, h]) => (
            <a key={l} href={h}
              style={{ fontSize: '14px', fontWeight: 500, color: linkColor, textDecoration: 'none', transition: 'color .2s' }}
              onMouseEnter={e => e.target.style.color = linkHover}
              onMouseLeave={e => e.target.style.color = linkColor}>
              {l}
            </a>
          ))}
        </div>

        <a href="tel:+77066060600"
          className={`btn md-hide ${transparent ? 'btn-ghost' : 'btn-g'}`}
          style={{ padding: '10px 20px', fontSize: '13px', transition: 'all .35s' }}>
          Связаться ↗
        </a>

        <button className="md-show" onClick={() => setMo(!mo)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', flexDirection: 'column', gap: '5px' }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block', width: '22px', height: '2px',
              background: burgerColor, transition: 'all .25s',
              opacity: i === 1 && mo ? 0 : 1,
              transform: i === 0 && mo ? 'rotate(45deg) translateY(7px)' : i === 2 && mo ? 'rotate(-45deg) translateY(-7px)' : '',
            }} />
          ))}
        </button>
      </div>

      {mo && (
        <div className="mob-menu" style={{
          position: 'absolute', top: '100%', left: '12px', right: '12px',
          background: 'rgba(244,239,230,.98)', border: '1px solid var(--bd)',
          borderRadius: '20px', padding: '16px', boxShadow: '0 12px 40px rgba(0,0,0,.12)', marginTop: '8px',
        }}>
          {links.map(([l, h]) => (
            <a key={l} href={h} onClick={() => setMo(false)}
              style={{ display: 'block', padding: '13px 8px', fontSize: '15px', fontWeight: 500, color: 'var(--fg1)', textDecoration: 'none', borderBottom: '1px solid var(--bd)' }}>
              {l}
            </a>
          ))}
          <a href="tel:+77066060600" className="btn btn-g" style={{ marginTop: '12px', width: '100%', justifyContent: 'center' }}>
            Связаться с юристом ↗
          </a>
        </div>
      )}
    </nav>
  )
}
