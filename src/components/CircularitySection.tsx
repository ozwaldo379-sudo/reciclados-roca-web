import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { circularitySteps } from '../data/siteContent'

const stepIcons = ['factory', 'truck', 'sort', 'recycle', 'document', 'gear']

/**
 * Ciclo de circularidad: anillo SVG animado (desktop) + lista vertical (móvil).
 * Sin Three.js: SVG + CSS conic-gradient dan la sensación 3D con costo mínimo.
 */
export default function CircularitySection() {
  const cx = 250
  const cy = 250
  const r = 190

  const positions = circularitySteps.map((_, i) => {
    const angle = (i / circularitySteps.length) * Math.PI * 2 - Math.PI / 2
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) }
  })

  return (
    <section
      id="circularidad"
      className="morph-gradient relative scroll-mt-16 overflow-hidden py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="morph-blob absolute -right-40 top-10 h-[30rem] w-[30rem] bg-roca-brown-500/40"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          dark
          eyebrow="Circularidad"
          title="Del residuo al valor: un ciclo documentado"
          subtitle="Cada etapa del proceso queda registrada para que tu empresa tenga evidencia, trazabilidad y confianza."
        />

        {/* Anillo animado — desktop */}
        <Reveal className="mt-14 hidden justify-center lg:flex">
          <div className="relative h-[560px] w-[560px]">
            <svg viewBox="0 0 500 500" className="absolute inset-0 h-full w-full" aria-hidden="true">
              <circle
                cx={cx}
                cy={cy}
                r={r}
                fill="none"
                stroke="rgba(250,250,247,0.18)"
                strokeWidth="2"
              />
              <circle
                cx={cx}
                cy={cy}
                r={r}
                fill="none"
                stroke="var(--color-roca-lime)"
                strokeWidth="3"
                className="morph-flow"
                opacity="0.85"
              />
              {positions.map((p, i) => {
                const next = positions[(i + 1) % positions.length]
                const mx = (p.x + next.x) / 2
                const my = (p.y + next.y) / 2
                const dirX = mx - cx
                const dirY = my - cy
                const len = Math.hypot(dirX, dirY) || 1
                const ax = cx + (dirX / len) * r
                const ay = cy + (dirY / len) * r
                const angle = (Math.atan2(next.y - p.y, next.x - p.x) * 180) / Math.PI
                return (
                  <polygon
                    key={i}
                    points="-7,-5 7,0 -7,5"
                    fill="var(--color-roca-lime)"
                    transform={`translate(${ax} ${ay}) rotate(${angle})`}
                  />
                )
              })}
            </svg>

            <div className="morph-float absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="morph-panel flex h-40 w-40 flex-col items-center justify-center gap-1 rounded-full text-center">
                <Icon name="recycle" className="h-12 w-12 text-roca-lime" />
                <span className="text-[11px] font-semibold uppercase tracking-widest text-roca-white/80">
                  Ciclo Roca
                </span>
              </div>
            </div>

            {circularitySteps.map((step, i) => {
              const p = positions[i]
              return (
                <div
                  key={step.title}
                  className="absolute w-44 -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${(p.x / 500) * 100}%`, top: `${(p.y / 500) * 100}%` }}
                >
                  <div className="morph-panel px-4 py-3 text-center transition-transform duration-300 hover:scale-105">
                    <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-roca-lime text-roca-green-950">
                      <Icon name={stepIcons[i]} className="h-5 w-5" />
                    </span>
                    <p className="mt-2 text-sm font-bold leading-tight text-roca-white">
                      {step.title}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>

        {/* Lista vertical — móvil/tablet */}
        <ol className="mx-auto mt-12 max-w-md space-y-4 lg:hidden">
          {circularitySteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.06}>
              <li className="morph-panel flex items-start gap-4 p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-roca-lime font-bold text-roca-green-950">
                  {i + 1}
                </span>
                <div>
                  <p className="font-bold text-roca-white">{step.title}</p>
                  <p className="mt-1 text-sm text-roca-white/70">{step.detail}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
