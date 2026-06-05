import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const BASE = import.meta.env.BASE_URL
const TOTAL_FRAMES = 21
const IMAGE_W = 1948
const IMAGE_H = 1064
const IMAGE_ASPECT = IMAGE_W / IMAGE_H // ~1.831
const SECTION_HEIGHT = '560vh'

function applyUVCover(texture, canvasW, canvasH) {
  const screenAspect = canvasW / canvasH
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
  const stateRef = useRef({
    renderer: null,
    mesh: null,
    scene: null,
    camera: null,
    textures: Array(TOTAL_FRAMES).fill(null),
    currentFrame: -1,
    loaded: 0,
  })

  useEffect(() => {
    const section = sectionRef.current
    const canvas = canvasRef.current
    const s = stateRef.current

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    s.renderer = renderer

    const scene = new THREE.Scene()
    s.scene = scene
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    s.camera = camera

    const geometry = new THREE.PlaneGeometry(2, 2)
    const material = new THREE.MeshBasicMaterial({ color: 0x0a1a0e })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)
    s.mesh = mesh

    const render = () => renderer.render(scene, camera)

    const onResize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      renderer.setSize(w, h)
      s.textures.forEach(t => t && applyUVCover(t, w, h))
      render()
    }

    const loader = new THREE.TextureLoader()
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const num = String(i + 1).padStart(3, '0')
      loader.load(
        `${BASE}frames/ezgif-frame-${num}.jpg`,
        (texture) => {
          texture.colorSpace = THREE.SRGBColorSpace
          applyUVCover(texture, window.innerWidth, window.innerHeight)
          s.textures[i] = texture
          s.loaded++
          // Show first frame as soon as it arrives
          if (i === 0) {
            mesh.material = new THREE.MeshBasicMaterial({ map: texture })
            render()
          }
        }
      )
    }

    const showFrame = (idx) => {
      const i = Math.max(0, Math.min(TOTAL_FRAMES - 1, idx))
      if (i === s.currentFrame) return
      s.currentFrame = i
      const tex = s.textures[i]
      if (!tex) return
      if (!mesh.material.map) {
        mesh.material = new THREE.MeshBasicMaterial({ map: tex })
      } else {
        mesh.material.map = tex
        mesh.material.needsUpdate = true
      }
      render()
    }

    const onScroll = () => {
      if (!section) return
      const top = section.getBoundingClientRect().top
      const sectionH = section.offsetHeight
      const vh = window.innerHeight
      const scrolled = -top
      const range = sectionH - vh
      const progress = Math.max(0, Math.min(1, scrolled / range))
      const frameIdx = Math.round(progress * (TOTAL_FRAMES - 1))
      showFrame(frameIdx)
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => onEnter?.(entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(section)

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize, { passive: true })
    onResize()
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      observer.disconnect()
      renderer.dispose()
      geometry.dispose()
    }
  }, [])

  return (
    <section ref={sectionRef} style={{ height: SECTION_HEIGHT, position: 'relative' }}>
      <div style={{
        position: 'sticky', top: 0, height: '100vh', overflow: 'hidden',
        background: 'linear-gradient(160deg, #060f08 0%, #0D2B1A 45%, #040c06 100%)',
      }}>
        {/* Three.js canvas */}
        <canvas ref={canvasRef} style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block'
        }} />

        {/* Radial vignette */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 90% 90% at 50% 50%, transparent 35%, rgba(4,12,6,.72) 100%)',
        }} />

        {/* Top-left label */}
        <div style={{
          position: 'absolute', top: '36px', left: '36px', pointerEvents: 'none',
          display: 'flex', alignItems: 'center', gap: '9px',
        }}>
          <span style={{
            width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)',
            display: 'inline-block', flexShrink: 0,
          }} />
          <span style={{
            fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,.45)',
            letterSpacing: '.18em', textTransform: 'uppercase',
          }}>Судебная практика</span>
        </div>

        {/* Bottom center text */}
        <div style={{
          position: 'absolute', bottom: '52px', left: 0, right: 0,
          textAlign: 'center', pointerEvents: 'none',
        }}>
          <p style={{
            fontFamily: 'var(--heading-font,"Playfair Display"),Georgia,serif',
            fontSize: 'clamp(16px,2.2vw,26px)', fontWeight: 700,
            color: 'rgba(255,255,255,.88)', letterSpacing: '-.01em', lineHeight: 1.3,
            textShadow: '0 2px 24px rgba(0,0,0,.6)',
          }}>
            Знание закона — наше оружие.
          </p>
          <p style={{
            marginTop: '8px', fontSize: '13px', color: 'rgba(255,255,255,.36)',
            fontWeight: 500, letterSpacing: '.08em',
          }}>
            340+ выигранных дел в судах Павлодарской области
          </p>
        </div>

        {/* Scroll hint — only visible near top of section */}
        <div className="anim-scroll-hint" style={{
          position: 'absolute', bottom: '52px', right: '36px', pointerEvents: 'none',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
        }}>
          <span style={{ fontSize: '10px', fontWeight: 600, color: 'rgba(255,255,255,.28)', letterSpacing: '.14em', textTransform: 'uppercase' }}>scroll</span>
          <div style={{ width: '1px', height: '32px', background: 'linear-gradient(to bottom, rgba(155,133,80,.6), transparent)' }} />
        </div>

        {/* Progress bar */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
          background: 'rgba(255,255,255,.07)',
        }}>
          <div ref={progressRef} style={{
            height: '100%',
            background: 'linear-gradient(90deg, var(--gold), var(--gold-l))',
            transformOrigin: 'left center',
            transform: 'scaleX(0)',
            transition: 'transform .08s linear',
          }} />
        </div>
      </div>
    </section>
  )
}
