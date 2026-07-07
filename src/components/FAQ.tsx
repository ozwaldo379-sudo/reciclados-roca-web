import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { faqs } from '../data/siteContent'

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-16 bg-roca-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Preguntas frecuentes" />

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 0.04}>
              <details className="morph-card group overflow-hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-semibold text-roca-graphite [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="shrink-0 text-roca-green-700 transition-transform duration-300 group-open:rotate-180">
                    <Icon name="chevron" className="h-5 w-5" />
                  </span>
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-roca-gray">{faq.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
