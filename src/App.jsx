import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import Features from './components/Features'
import Trust from './components/Trust'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'
import {
  useTweaks, TweaksPanel, TweakSection,
  TweakColor, TweakSelect, TweakSlider,
  TweakRadio, TweakToggle, TweakText,
} from './components/TweaksPanel'

const ACCENT_OPTIONS = [
  ['#9B8550', '#7D6840', '#C4AD7A'],
  ['#2A7070', '#1E5252', '#6AABAB'],
  ['#B55A3A', '#8E4228', '#D4937A'],
  ['#4A6A9C', '#364E78', '#8BA4CC'],
]
const BG_OPTIONS = [
  ['#F4EFE6', '#EDE7DA', '#E2DBD0'],
  ['#EFF3EE', '#E2EDE1', '#D4E4D3'],
  ['#F5F3EF', '#EDE8E0', '#E0D8CD'],
  ['#F8F7F5', '#F0EEED', '#E5E0DA'],
]
const FONT_PARAMS = {
  'Playfair Display': 'Playfair+Display:ital,wght@0,400;0,600;0,700;1,400',
  'Cormorant Garamond': 'Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400',
  'Libre Baskerville': 'Libre+Baskerville:ital,wght@0,400;0,700;1,400',
  'DM Serif Display': 'DM+Serif+Display:ital,wght@0,400;1,400',
}

const DEFAULTS = {
  accent: ['#B55A3A', '#8E4228', '#D4937A'],
  bgPalette: ['#F4EFE6', '#EDE7DA', '#E2DBD0'],
  headingFont: 'Playfair Display',
  bodySize: 16,
  spacing: 'compact',
  cardRadius: 20,
  cardShadows: true,
  heroLine1: 'Ваш надёжный',
  ctaText: 'Связаться со мной',
  showOrbs: true,
  showBadges: true,
  scrollAnims: true,
  parallax: true,
  animSpeed: 'normal',
}

export default function App() {
  const [t, setTweak] = useTweaks(DEFAULTS)

  useEffect(() => {
    const r = document.documentElement.style
    const [ac, ah, al] = Array.isArray(t.accent) ? t.accent : [t.accent, t.accent, t.accent]
    r.setProperty('--gold', ac)
    r.setProperty('--gold-h', ah)
    r.setProperty('--gold-l', al)
    const [bg1, bg2, bd] = Array.isArray(t.bgPalette) ? t.bgPalette : [t.bgPalette, t.bgPalette, t.bgPalette]
    r.setProperty('--cr200', bg1)
    r.setProperty('--cr300', bg2)
    r.setProperty('--bd', bd)
    r.setProperty('--sec-py', { compact: '64px', regular: '96px', spacious: '132px' }[t.spacing] || '96px')
    r.setProperty('--card-r', t.cardRadius + 'px')
    r.setProperty('--heading-font', `'${t.headingFont}'`)
    const fp = FONT_PARAMS[t.headingFont]
    if (fp) {
      const id = 'tf-' + t.headingFont.replace(/\s/g, '')
      if (!document.getElementById(id)) {
        const lk = document.createElement('link')
        lk.id = id; lk.rel = 'stylesheet'
        lk.href = `https://fonts.googleapis.com/css2?family=${fp}&display=swap`
        document.head.appendChild(lk)
      }
    }
    document.documentElement.setAttribute('data-shadows', t.cardShadows ? '1' : '0')
    document.documentElement.setAttribute('data-anim', t.scrollAnims ? '1' : '0')
    document.documentElement.setAttribute('data-anim-speed', t.animSpeed)
  }, [t])

  return (
    <div>
      <Nav />
      <Hero
        heroLine1={t.heroLine1}
        ctaText={t.ctaText}
        showOrbs={t.showOrbs}
        showBadges={t.showBadges}
        doParallax={t.parallax}
      />
      <Services />
      <Features />
      <Trust />
      <Testimonials />
      <FAQ />
      <CtaSection />
      <Footer />

      <a href="https://wa.me/77066060600" className="wa" target="_blank" rel="noopener" title="WhatsApp">💬</a>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Цвета" />
        <TweakColor label="Акцентный цвет" value={t.accent}
          options={ACCENT_OPTIONS}
          onChange={v => setTweak('accent', v)} />
        <TweakColor label="Фоновая палитра" value={t.bgPalette}
          options={BG_OPTIONS}
          onChange={v => setTweak('bgPalette', v)} />

        <TweakSection label="Типографика" />
        <TweakSelect label="Шрифт заголовков" value={t.headingFont}
          options={Object.keys(FONT_PARAMS)}
          onChange={v => setTweak('headingFont', v)} />
        <TweakSlider label="Размер текста" value={t.bodySize} min={14} max={18} step={1} unit="px"
          onChange={v => setTweak('bodySize', v)} />

        <TweakSection label="Макет" />
        <TweakRadio label="Отступы секций" value={t.spacing}
          options={['compact', 'regular', 'spacious']}
          onChange={v => setTweak('spacing', v)} />
        <TweakSlider label="Скругление карточек" value={t.cardRadius} min={8} max={32} step={2} unit="px"
          onChange={v => setTweak('cardRadius', v)} />
        <TweakToggle label="Тени на карточках" value={t.cardShadows}
          onChange={v => setTweak('cardShadows', v)} />

        <TweakSection label="Герой" />
        <TweakText label="Заголовок — строка 1" value={t.heroLine1}
          onChange={v => setTweak('heroLine1', v)} />
        <TweakText label="Текст кнопки CTA" value={t.ctaText}
          onChange={v => setTweak('ctaText', v)} />
        <TweakToggle label="Плавающие орбы" value={t.showOrbs}
          onChange={v => setTweak('showOrbs', v)} />
        <TweakToggle label="Бейджи на фото" value={t.showBadges}
          onChange={v => setTweak('showBadges', v)} />

        <TweakSection label="Анимации" />
        <TweakToggle label="Анимации при скролле" value={t.scrollAnims}
          onChange={v => setTweak('scrollAnims', v)} />
        <TweakToggle label="Параллакс фона" value={t.parallax}
          onChange={v => setTweak('parallax', v)} />
        <TweakRadio label="Скорость" value={t.animSpeed}
          options={['fast', 'normal', 'slow']}
          onChange={v => setTweak('animSpeed', v)} />
      </TweaksPanel>
    </div>
  )
}
