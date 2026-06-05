import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const BASE = import.meta.env.BASE_URL
const TOTAL_FRAMES = 21
const IMAGE_ASPECT = 1948 / 1064 // ~1.831

function applyUVCover(texture, w, h) {
  const screenAspect = w / h
  if (screenAspect >= IMAGE_ASPECT) {
    const r = IMAGE_ASPECT / screenAspect
    texture.repeat.set(1, r)
    texture.offset.set(0, (1 - r) / 2)
  } else {
    const r = screenAspect / IMAGE_ASPECT
    texture.repeat.set(r, 1)
    texture.offset.set((1 - r) / 2, 0)
  }
}

export default function ScrollAnimation({ onEnter }) {
  const sectionRef = useRef(null)
  const canvasRef = useRef(null)
  const progressRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const canvas = canvasRef.current

    /* ── Three.js setup ── */
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    const geometry = new THREE.PlaneGeometry(2, 2)
    const material = new THREE.MeshBasicMaterial({ color: 0x0a1a0e })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const doRender = () => renderer.render(scene, camera)

    const resize = () => {
      const w = window.innerWidth, h = window.innerHeight
      renderer.setSize(w, h)
      textures.forEach(t => t && applyUVCover(t, w, h))
      doRender()
    }

    /* ── Texture loading ── */
    const textures = Array(TOTAL_FRAMES).fill(null)
    const loader = new THREE.TextureLoader()
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const num = String(i + 1).padStart(3, '0')
      loader.load(`${BASE}frames/ezgif-frame-${num}.jpg`, (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace
        applyUVCover(tex, window.innerWidth, window.innerHeight)
        textures[i] = tex
        if (i === 0) {
          mesh.material = new THREE.MeshBasicMaterial({ map: tex })
          doRender()
        }
      })
    }

    let shownFrame = -1
    const showFrame = (idx) => {
      const i = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(idx)))
      if (i === shownFrame) return
      shownFrame = i
      const tex = textures[i]
      if (!tex) return
      if (!mesh.material.map) {
        mesh.material = new THREE.MeshBasicMaterial({ map: tex })
      } else {
        mesh.material.map = tex
        mesh.material.needsUpdate = true
      }
      doRender()
    }

    /* ── RAF-based lerp for smooth easing ── */
    let targetProgress = 0
    let currentProgress = 0
    let rafId = null

    const tick = () => {
      const diff = targetProgress - currentProgress
      if (Math.abs(diff) < 0.0008) {
        currentProgress = targetProgress
        rafId = null
        return
      }
      currentProgress += diff * 0.14
      showFrame(currentProgress * (TOTAL_FRAMES - 1))
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${currentProgress})`
      }
      rafId = requestAnimationFrame(tick)
    }

    const onScroll = () => {
      const top = section.getBoundingClientRect().top
      const range = section.offsetHeight - window.innerHeight
      targetProgress = Math.max(0, Math.min(1, -top / range))
      if (!rafId) rafId = requestAnimationFrame(tick)
    }

    /* ── IntersectionObserver for nav transparency ── */
    const observer = new IntersectionObserver(
      ([e]) => onEnter?.(e.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(section)

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', resize, { passive: true })
    resize()
    onScroll()

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', resize)
      observer.disconnect()
      renderer.dispose()
      geometry.dispose()
    }
  }, [])

  return (
    <section ref={sectionRef} className="anim-section" style={{ position: 'relative' }}>
      <div style={{
        position: 'sticky', top: 0, height: '100vh', overflow: 'hidden',
        background: 'linear-gradient(160deg,#060f08 0%,#0D2B1A 45%,#040c06 100%)',
      }}>
        <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />

        {/* Vignette */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 90% 90% at 50% 50%, transparent 35%, rgba(4,12,6,.72) 100%)',
        }} />

        {/* Top-left label */}
        <div className="anim-label" style={{
          position: 'absolute', top: '36px', left: '36px', pointerEvents: 'none',
          display: 'flex', alignItems: 'center', gap: '9px',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)', display: 'inline-block', flexShrink: 0 }} />
          <span style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,.45)', letterSpacing: '.18em', textTransform: 'uppercase' }}>
            Судебная практика
          </span>
        </div>

        {/* Bottom text */}
        <div className="anim-bottom" style={{
          position: 'absolute', bottom: '52px', left: 0, right: 0,
          textAlign: 'center', pointerEvents: 'none', padding: '0 20px',
        }}>
          <p style={{
            fontFamily: 'var(--heading-font,"Playfair Display"),Georgia,serif',
            fontSize: 'clamp(15px,2.2vw,26px)', fontWeight: 700,
            color: 'rgba(255,255,255,.88)', letterSpacing: '-.01em', lineHeight: 1.3,
            textShadow: '0 2px 24px rgba(0,0,0,.6)',
          }}>
            Знание закона — наше оружие.
          </p>
          <p style={{ marginTop: '6px', fontSize: '13px', color: 'rgba(255,255,255,.36)', fontWeight: 500, letterSpacing: '.06em' }}>
            340+ выигранных дел в судах Павлодарской области
          </p>
        </div>

        {/* Scroll hint */}
        <div className="anim-scroll-hint" style={{
          position: 'absolute', bottom: '52px', right: '36px', pointerEvents: 'none',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
        }}>
          <span style={{ fontSize: '10px', fontWeight: 600, color: 'rgba(255,255,255,.28)', letterSpacing: '.14em', textTransform: 'uppercase' }}>scroll</span>
          <div style={{ width: 1, height: 32, background: 'linear-gradient(to bottom,rgba(155,133,80,.6),transparent)' }} />
        </div>

        {/* Progress bar */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: 'rgba(255,255,255,.07)' }}>
          <div ref={progressRef} style={{
            height: '100%',
            background: 'linear-gradient(90deg,var(--gold),var(--gold-l))',
            transformOrigin: 'left center', transform: 'scaleX(0)',
          }} />
        </div>
      </div>
    </section>
  )
}
