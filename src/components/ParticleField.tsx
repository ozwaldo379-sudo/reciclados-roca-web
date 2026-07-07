import { useEffect, useRef } from 'react'

/** Colores del logo en formato "r g b" para componer rgb(... / alpha). */
const PALETTES = {
  dark: ['164 201 61', '61 158 95', '250 250 247', '141 110 99'],
  light: ['30 122 63', '127 166 43', '93 64 55', '61 158 95'],
} as const

interface Particle {
  x: number
  y: number
  r: number
  vx: number
  vy: number
  color: string
  alpha: number
  phase: number
  speed: number
}

interface ParticleFieldProps {
  /** dark = sobre morph-gradient; light = sobre fondos claros */
  variant?: 'light' | 'dark'
  /** partículas por megapíxel de sección */
  density?: number
  className?: string
}

/**
 * Fondo de micropartículas en canvas (colores del logo, deriva lenta + parpadeo).
 * Decorativo (aria-hidden). Se pausa fuera de viewport / pestaña oculta y se
 * congela con prefers-reduced-motion.
 */
export default function ParticleField({
  variant = 'dark',
  density = 55,
  className = '',
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const colors = PALETTES[variant]
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let particles: Particle[] = []
    let width = 0
    let height = 0
    let raf = 0
    let running = false
    let inView = false

    const build = () => {
      const count = Math.round(((width * height) / 1_000_000) * density)
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 0.8 + Math.random() * 1.7,
        vx: (Math.random() - 0.5) * 0.14,
        vy: (Math.random() - 0.5) * 0.11,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha:
          variant === 'dark'
            ? 0.18 + Math.random() * 0.3
            : 0.1 + Math.random() * 0.16,
        phase: Math.random() * Math.PI * 2,
        speed: 0.4 + Math.random() * 0.8,
      }))
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height)
      for (const p of particles) {
        const wobble = Math.sin(t * 0.00035 * p.speed + p.phase)
        const a = p.alpha * (0.65 + 0.35 * wobble)
        ctx.beginPath()
        ctx.arc(
          p.x + wobble * 1.6,
          p.y + Math.cos(t * 0.0003 * p.speed + p.phase) * 1.6,
          p.r,
          0,
          Math.PI * 2,
        )
        ctx.fillStyle = `rgb(${p.color} / ${a.toFixed(3)})`
        ctx.fill()
      }
    }

    const step = (t: number) => {
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < -4) p.x = width + 4
        if (p.x > width + 4) p.x = -4
        if (p.y < -4) p.y = height + 4
        if (p.y > height + 4) p.y = -4
      }
      draw(t)
      raf = requestAnimationFrame(step)
    }

    const sync = () => {
      const shouldRun = inView && !document.hidden && !reduced.matches
      if (shouldRun && !running) {
        running = true
        raf = requestAnimationFrame(step)
      } else if (!shouldRun && running) {
        running = false
        cancelAnimationFrame(raf)
      }
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      build()
      draw(performance.now())
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const io = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting
      sync()
    })
    io.observe(canvas)

    document.addEventListener('visibilitychange', sync)
    reduced.addEventListener('change', sync)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
      document.removeEventListener('visibilitychange', sync)
      reduced.removeEventListener('change', sync)
    }
  }, [variant, density])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  )
}
