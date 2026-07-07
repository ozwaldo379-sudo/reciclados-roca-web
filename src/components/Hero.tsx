import { motion, useReducedMotion } from 'framer-motion'
import AnimatedBackground from './AnimatedBackground'
import Icon from './Icon'
import { hero } from '../data/siteContent'

export default function Hero() {
  const reduced = useReducedMotion()
  const fadeUp = (delay: number) => ({
    initial: reduced ? false : ({ opacity: 0, y: 30 } as const),
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <section id="inicio" className="morph-gradient relative overflow-hidden pt-16">
      <AnimatedBackground />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 pb-24 pt-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:pb-32 lg:pt-28">
        <div>
          <motion.p
            {...fadeUp(0)}
            className="morph-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-roca-white"
          >
            <Icon name="pin" className="h-4 w-4 text-roca-lime" />
            {hero.trustLine}
          </motion.p>

          <motion.h1
            {...fadeUp(0.1)}
            className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-roca-white sm:text-5xl lg:text-6xl"
          >
            Reciclaje industrial{' '}
            <span className="text-roca-lime">confiable</span> para residuos de manejo especial
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="mt-6 max-w-xl text-lg leading-relaxed text-roca-white/80">
            {hero.subtitle}
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="morph-cta inline-flex items-center gap-2 rounded-full bg-roca-lime px-7 py-3.5 text-base font-bold text-roca-green-950"
            >
              {hero.ctaPrimary}
              <Icon name="search" className="h-5 w-5" />
            </a>
            <a
              href="#servicios"
              className="morph-panel inline-flex items-center rounded-full px-7 py-3.5 text-base font-semibold text-roca-white transition-colors hover:bg-roca-white/15"
            >
              {hero.ctaSecondary}
            </a>
          </motion.div>

          <motion.p {...fadeUp(0.4)} className="mt-8 flex items-center gap-2 text-sm text-roca-white/65">
            <Icon name="shield" className="h-5 w-5 text-roca-lime" />
            Procesos documentados, trazables y orientados al cumplimiento ambiental.
          </motion.p>
        </div>

        {/* Visual pseudo-3D: anillo de circularidad con núcleo flotante */}
        <motion.div
          {...fadeUp(0.35)}
          aria-hidden="true"
          className="relative mx-auto hidden aspect-square w-full max-w-md sm:block"
        >
          <div className="morph-ring absolute inset-0 opacity-90" style={{ padding: '3px' }}>
            <div className="h-full w-full rounded-full bg-roca-green-950/90" />
          </div>
          <div className="morph-ring absolute inset-8 opacity-60" style={{ animationDirection: 'reverse', padding: '2px' }}>
            <div className="h-full w-full rounded-full bg-roca-green-950/95" />
          </div>

          <div className="morph-float absolute inset-0 flex items-center justify-center">
            <div className="morph-panel flex h-44 w-44 flex-col items-center justify-center gap-2 rounded-full text-center shadow-2xl">
              <Icon name="recycle" className="h-14 w-14 text-roca-lime" />
              <span className="px-6 text-xs font-semibold uppercase tracking-widest text-roca-white/80">
                Economía circular
              </span>
            </div>
          </div>

          {/* Satélites de materiales */}
          {[
            { icon: 'box', label: 'Cartón', pos: 'left-1/2 -top-4 -translate-x-1/2' },
            { icon: 'pallet', label: 'Madera', pos: '-left-2 bottom-14' },
            { icon: 'polymer', label: 'Plásticos', pos: '-right-2 bottom-14' },
          ].map((s, i) => (
            <div
              key={s.label}
              className={`morph-float absolute ${s.pos}`}
              style={{ animationDelay: `${-i * 2.3}s` }}
            >
              <div className="morph-panel flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-roca-white shadow-lg">
                <Icon name={s.icon} className="h-5 w-5 text-roca-lime" />
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Onda de transición al fondo blanco */}
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="relative block h-16 w-full text-roca-white lg:h-24"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,48 C240,88 480,88 720,58 C960,28 1200,28 1440,58 L1440,90 L0,90 Z"
        />
      </svg>
    </section>
  )
}
