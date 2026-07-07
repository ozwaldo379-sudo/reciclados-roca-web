import { useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import Icon from './Icon'
import ParticleField from './ParticleField'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { contact, wasteTypes } from '../data/siteContent'

interface LeadData {
  nombre: string
  empresa: string
  cargo: string
  telefono: string
  correo: string
  ubicacion: string
  tipoResiduo: string
  volumen: string
  requiereRecoleccion: string
  requiereDocumentacion: string
  mensaje: string
}

const initialData: LeadData = {
  nombre: '',
  empresa: '',
  cargo: '',
  telefono: '',
  correo: '',
  ubicacion: '',
  tipoResiduo: '',
  volumen: '',
  requiereRecoleccion: '',
  requiereDocumentacion: '',
  mensaje: '',
}

const inputClass =
  'w-full rounded-xl border border-roca-green-100 bg-roca-white px-4 py-3 text-sm text-roca-graphite placeholder:text-roca-gray/60 transition-colors focus:border-roca-green-700 focus:outline-none focus:ring-2 focus:ring-roca-lime/50'

/**
 * Envío de leads.
 *
 * Actualmente: solo frontend (valida y muestra mensaje de éxito).
 * Para conectar a un servicio real, sustituir el cuerpo de submitLead por UNA opción:
 *
 * 1. Formspree:
 *    await fetch('https://formspree.io/f/TU_FORM_ID', {
 *      method: 'POST',
 *      headers: { 'Content-Type': 'application/json' },
 *      body: JSON.stringify(data),
 *    })
 *
 * 2. EmailJS: emailjs.send(SERVICE_ID, TEMPLATE_ID, { ...data }, PUBLIC_KEY)
 *
 * 3. API propia / CRM / webhook:
 *    await fetch(import.meta.env.VITE_LEADS_ENDPOINT, { method: 'POST', ... })
 *
 * Usar variables de entorno (VITE_*) para IDs/URLs. No poner secretos en el código.
 */
async function submitLead(data: LeadData): Promise<void> {
  console.info('Lead capturado (conectar servicio de envío):', data)
  await new Promise((resolve) => setTimeout(resolve, 600))
}

export default function LeadForm() {
  const [data, setData] = useState<LeadData>(initialData)
  const [errors, setErrors] = useState<Partial<Record<keyof LeadData, string>>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle')

  const set = (field: keyof LeadData) => (value: string) => {
    setData((d) => ({ ...d, [field]: value }))
    setErrors((e) => ({ ...e, [field]: undefined }))
  }

  const validate = (): boolean => {
    const next: Partial<Record<keyof LeadData, string>> = {}
    if (!data.nombre.trim()) next.nombre = 'Ingresa tu nombre.'
    if (!data.empresa.trim()) next.empresa = 'Ingresa tu empresa.'
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.correo)) next.correo = 'Ingresa un correo válido.'
    if (!/^[\d\s+()-]{8,}$/.test(data.telefono)) next.telefono = 'Ingresa un teléfono válido (mín. 8 dígitos).'
    if (!data.tipoResiduo) next.tipoResiduo = 'Selecciona el tipo de residuo.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')
    await submitLead(data)
    setStatus('success')
  }

  return (
    <section id="contacto" className="morph-gradient relative scroll-mt-16 overflow-hidden py-20 lg:py-28">
      <ParticleField variant="dark" />
      <div
        aria-hidden="true"
        className="morph-blob absolute -left-40 bottom-0 h-[26rem] w-[26rem] bg-roca-lime/30"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          dark
          eyebrow="Contacto"
          title="Solicita una evaluación de tus residuos"
          subtitle="Cuéntanos qué materiales genera tu operación y te proponemos una ruta responsable de valorización."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.55fr]">
          <Reveal>
            {status === 'success' ? (
              <div className="morph-panel flex min-h-96 flex-col items-center justify-center gap-4 p-10 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-roca-lime text-roca-green-950">
                  <Icon name="check" className="h-8 w-8" />
                </span>
                <h3 className="text-2xl font-bold text-roca-white">¡Solicitud recibida!</h3>
                <p className="max-w-md text-roca-white/80">
                  Gracias por tu interés. Nuestro equipo comercial te contactará en breve para
                  agendar tu diagnóstico.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setData(initialData)
                    setStatus('idle')
                  }}
                  className="mt-2 text-sm font-semibold text-roca-lime underline-offset-4 hover:underline"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="morph-panel p-6 sm:p-10">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Nombre *" error={errors.nombre}>
                    <input
                      className={inputClass}
                      value={data.nombre}
                      onChange={(e) => set('nombre')(e.target.value)}
                      autoComplete="name"
                      required
                    />
                  </Field>
                  <Field label="Empresa *" error={errors.empresa}>
                    <input
                      className={inputClass}
                      value={data.empresa}
                      onChange={(e) => set('empresa')(e.target.value)}
                      autoComplete="organization"
                      required
                    />
                  </Field>
                  <Field label="Cargo">
                    <input
                      className={inputClass}
                      value={data.cargo}
                      onChange={(e) => set('cargo')(e.target.value)}
                      autoComplete="organization-title"
                    />
                  </Field>
                  <Field label="Teléfono *" error={errors.telefono}>
                    <input
                      type="tel"
                      className={inputClass}
                      value={data.telefono}
                      onChange={(e) => set('telefono')(e.target.value)}
                      autoComplete="tel"
                      required
                    />
                  </Field>
                  <Field label="Correo *" error={errors.correo}>
                    <input
                      type="email"
                      className={inputClass}
                      value={data.correo}
                      onChange={(e) => set('correo')(e.target.value)}
                      autoComplete="email"
                      required
                    />
                  </Field>
                  <Field label="Ubicación (ciudad / estado)">
                    <input
                      className={inputClass}
                      value={data.ubicacion}
                      onChange={(e) => set('ubicacion')(e.target.value)}
                    />
                  </Field>
                  <Field label="Tipo de residuo *" error={errors.tipoResiduo}>
                    <select
                      className={inputClass}
                      value={data.tipoResiduo}
                      onChange={(e) => set('tipoResiduo')(e.target.value)}
                      required
                    >
                      <option value="">Selecciona una opción</option>
                      {wasteTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Volumen aproximado mensual">
                    <input
                      className={inputClass}
                      placeholder="Ej. 5 toneladas, 200 tarimas…"
                      value={data.volumen}
                      onChange={(e) => set('volumen')(e.target.value)}
                    />
                  </Field>
                  <Field label="¿Requiere recolección?">
                    <select
                      className={inputClass}
                      value={data.requiereRecoleccion}
                      onChange={(e) => set('requiereRecoleccion')(e.target.value)}
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="si">Sí</option>
                      <option value="no">No</option>
                      <option value="por-definir">Por definir</option>
                    </select>
                  </Field>
                  <Field label="¿Requiere documentación para auditoría?">
                    <select
                      className={inputClass}
                      value={data.requiereDocumentacion}
                      onChange={(e) => set('requiereDocumentacion')(e.target.value)}
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="si">Sí</option>
                      <option value="no">No</option>
                      <option value="por-definir">Por definir</option>
                    </select>
                  </Field>
                  <Field label="Mensaje" className="sm:col-span-2">
                    <textarea
                      rows={4}
                      className={inputClass}
                      placeholder="Cuéntanos sobre tus materiales, frecuencia de generación o requerimientos…"
                      value={data.mensaje}
                      onChange={(e) => set('mensaje')(e.target.value)}
                    />
                  </Field>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="morph-cta mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-roca-lime px-8 py-4 text-base font-bold text-roca-green-950 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
                >
                  {status === 'sending' ? 'Enviando…' : 'Solicitar evaluación'}
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.15}>
            <div className="space-y-6">
              <div className="morph-panel p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-roca-lime text-roca-green-950">
                  <Icon name="whatsapp" className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-xl font-bold text-roca-white">
                  ¿Necesitas una respuesta rápida?
                </h3>
                <p className="mt-2 text-roca-white/75">Contáctanos por WhatsApp.</p>
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="morph-cta mt-5 inline-flex items-center gap-2 rounded-full border-2 border-roca-lime px-6 py-3 text-sm font-bold text-roca-lime transition-colors hover:bg-roca-lime hover:text-roca-green-950"
                >
                  <Icon name="whatsapp" className="h-5 w-5" />
                  Abrir WhatsApp
                </a>
                <p className="mt-3 font-mono text-xs text-roca-white/50">{contact.whatsapp}</p>
              </div>

              <div className="morph-panel p-8">
                <h3 className="font-bold text-roca-white">Contacto directo</h3>
                <ul className="mt-4 space-y-3 text-sm text-roca-white/80">
                  <li className="flex items-center gap-3">
                    <Icon name="calendar" className="h-5 w-5 shrink-0 text-roca-lime" />
                    Teléfono: {contact.phone}
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="document" className="h-5 w-5 shrink-0 text-roca-lime" />
                    Correo: {contact.email}
                  </li>
                  <li className="flex items-center gap-3">
                    <Icon name="pin" className="h-5 w-5 shrink-0 text-roca-lime" />
                    Coronango, Puebla · Tlaxcala, Tlaxcala
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

interface FieldProps {
  label: string
  error?: string
  className?: string
  children: ReactNode
}

function Field({ label, error, className = '', children }: FieldProps) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-sm font-semibold text-roca-white/90">{label}</span>
      {children}
      {error && (
        <span role="alert" className="mt-1.5 block text-xs font-medium text-roca-lime">
          {error}
        </span>
      )}
    </label>
  )
}
