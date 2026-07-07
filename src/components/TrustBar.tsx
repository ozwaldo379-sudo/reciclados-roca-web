import Icon from './Icon'
import Reveal from './Reveal'
import { trustBar } from '../data/siteContent'

export default function TrustBar() {
  return (
    <section aria-label="Puntos de confianza" className="bg-roca-white py-8">
      <Reveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {trustBar.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm font-medium text-roca-gray">
              <Icon name="check" className="h-4.5 w-4.5 shrink-0 text-roca-green-700" />
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
