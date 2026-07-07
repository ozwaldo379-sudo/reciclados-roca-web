import Reveal from './Reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  subtitle?: string
  dark?: boolean
}

export default function SectionHeading({ eyebrow, title, subtitle, dark }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <p
        className={`text-sm font-semibold uppercase tracking-[0.18em] ${
          dark ? 'text-roca-lime' : 'text-roca-green-700'
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? 'text-roca-white' : 'text-roca-graphite'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg ${dark ? 'text-roca-white/75' : 'text-roca-gray'}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
