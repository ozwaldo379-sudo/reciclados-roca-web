import ParticleField from './ParticleField'

/**
 * Fondo decorativo: blobs orgánicos animados + micropartículas en verdes y
 * cafés del logo. Puramente visual (aria-hidden). Animaciones apagadas con
 * prefers-reduced-motion.
 */
export default function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <ParticleField variant="dark" />
      <div className="morph-blob absolute -left-24 -top-24 h-96 w-96 bg-roca-green-700/60" />
      <div
        className="morph-blob absolute -right-32 top-1/4 h-[28rem] w-[28rem] bg-roca-lime/40"
        style={{ animationDelay: '-5s' }}
      />
      <div
        className="morph-blob absolute -bottom-32 left-1/3 h-96 w-96 bg-roca-brown-500/50"
        style={{ animationDelay: '-9s' }}
      />
    </div>
  )
}
