import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { coverage } from '../data/siteContent'

/**
 * Mapa abstracto de cobertura (SVG propio, sin APIs externas).
 * Coordenadas x/y en porcentaje relativo al lienzo.
 */
export default function Coverage() {
  return (
    <section id="cobertura" className="scroll-mt-16 bg-roca-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Cobertura"
          title="Presencia en el corazón industrial del centro de México"
          subtitle={coverage.note}
        />

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-roca-green-950 p-4">
              <svg viewBox="0 0 100 80" className="w-full" role="img" aria-label="Mapa abstracto de cobertura: Coronango, Puebla y Tlaxcala, Tlaxcala">
                {/* Malla de puntos de fondo */}
                <defs>
                  <pattern id="dots" width="4" height="4" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.35" fill="rgba(250,250,247,0.14)" />
                  </pattern>
                </defs>
                <rect width="100" height="80" fill="url(#dots)" />

                {/* Silueta regional abstracta */}
                <path
                  d="M22 18 Q35 8 52 12 Q72 10 80 24 Q90 38 82 52 Q76 68 58 70 Q40 74 28 64 Q14 54 16 38 Q17 26 22 18 Z"
                  fill="rgba(61,158,95,0.16)"
                  stroke="rgba(164,201,61,0.5)"
                  strokeWidth="0.6"
                />

                {/* Corredor entre sedes */}
                <path
                  d={`M${coverage.locations[0].x} ${coverage.locations[0].y} Q52 46 ${coverage.locations[1].x} ${coverage.locations[1].y}`}
                  fill="none"
                  stroke="var(--color-roca-lime)"
                  strokeWidth="0.9"
                  className="morph-flow"
                />

                {coverage.locations.map((loc) => (
                  <g key={loc.city}>
                    <circle cx={loc.x} cy={loc.y} r="4.5" fill="rgba(164,201,61,0.25)">
                      <animate attributeName="r" values="3.5;5.5;3.5" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle cx={loc.x} cy={loc.y} r="2" fill="var(--color-roca-lime)" />
                  </g>
                ))}
              </svg>
            </div>
          </Reveal>

          <div className="space-y-5">
            {coverage.locations.map((loc, i) => (
              <Reveal key={loc.city} delay={i * 0.1}>
                <div className="morph-card flex items-center gap-5 p-6">
                  <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-roca-green-100 text-roca-green-900">
                    <Icon name="pin" className="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-roca-graphite">{loc.city}</h3>
                    <p className="text-roca-gray">{loc.state}, México</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.2}>
              <div className="flex items-start gap-3 rounded-2xl bg-roca-brown-100/60 p-6">
                <Icon name="truck" className="mt-0.5 h-6 w-6 shrink-0 text-roca-brown-700" />
                <p className="text-sm leading-relaxed text-roca-brown-900">
                  Logística propia para corredores industriales de Puebla, Tlaxcala y zonas
                  cercanas. Consulta disponibilidad para tu ubicación.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
