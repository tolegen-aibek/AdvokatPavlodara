export default function Footer() {
  return (
    <footer style={{ background: 'var(--g900)', color: 'white', paddingTop: '72px', paddingBottom: '32px' }}>
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 32px' }}>
        <div className="g-footer" style={{ marginBottom: '56px' }}>
          <div>
            <p className="serif" style={{ fontWeight: 700, fontSize: '22px', marginBottom: '12px' }}>Алия Сейткали</p>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,.42)', lineHeight: 1.7, marginBottom: '20px' }}>Юридические услуги в Павлодаре. Профессиональная защита ваших прав с 2016 года.</p>
            <div style={{ display: 'flex', gap: '8px' }}>
              {[['ВК', '#'], ['TG', 'https://t.me/'], ['WA', 'https://wa.me/77066060600'], ['IG', '#']].map(([s, h]) => (
                <a key={s} href={h} style={{ width: '33px', height: '33px', borderRadius: '50%', background: 'rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', color: 'rgba(255,255,255,.55)', textDecoration: 'none', transition: 'all .2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'white' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.08)'; e.currentTarget.style.color = 'rgba(255,255,255,.55)' }}>{s}</a>
              ))}
            </div>
          </div>

          {[
            { h: 'Услуги', lnks: ['Кредиты и долги', 'Семейное право', 'Трудовые споры', 'Консультация'] },
            { h: 'Навигация', lnks: ['О юристе', 'Отзывы', 'FAQ', 'Контакты'] },
          ].map(c => (
            <div key={c.h}>
              <p style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,.45)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '20px' }}>{c.h}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {c.lnks.map(l => (
                  <li key={l}>
                    <a href="#services" style={{ fontSize: '13px', color: 'rgba(255,255,255,.48)', textDecoration: 'none', transition: 'color .2s' }}
                      onMouseEnter={e => e.target.style.color = 'var(--gold-l)'}
                      onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,.48)'}>{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,.45)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '20px' }}>Контакты</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { ic: '📞', t: '+7 706 606-06-00', s: 'Ежедневно 9:00–20:00' },
                { ic: '📍', t: 'г. Павлодар', s: 'Приём по записи' },
                { ic: '💬', t: 'Консультация бесплатно', s: 'Первичный приём' },
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '1px' }}>{c.ic}</span>
                  <div>
                    <p style={{ fontSize: '13px', color: 'white', fontWeight: 500 }}>{c.t}</p>
                    <p style={{ fontSize: '11px', color: 'rgba(255,255,255,.38)', marginTop: '2px' }}>{c.s}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,.09)', paddingTop: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,.3)' }}>© 2026 Алия Сейткали. Все права защищены.</p>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,.3)' }}>Юридические услуги в Павлодаре, Казахстан</p>
        </div>
      </div>
    </footer>
  )
}
