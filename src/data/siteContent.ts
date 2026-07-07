/**
 * Contenido central del sitio Reciclados Roca.
 * Editar aquí textos, placeholders y datos de contacto.
 * Placeholders pendientes: buscar "[AGREGAR_" y "[CONFIRMAR_".
 */

export const contact = {
  phone: '[AGREGAR_TELEFONO]',
  email: '[AGREGAR_CORREO]',
  whatsapp: '[AGREGAR_NUMERO_WHATSAPP]', // formato: 52XXXXXXXXXX (sin +, sin espacios)
  privacyUrl: '[AGREGAR_AVISO_PRIVACIDAD]',
}

export const hero = {
  title: 'Reciclaje industrial confiable para residuos de manejo especial',
  subtitle:
    'En Reciclados Roca ayudamos a empresas manufactureras y automotrices a valorizar cartón, madera y plásticos especializados mediante procesos responsables, documentados y orientados al cumplimiento ambiental.',
  ctaPrimary: 'Solicitar diagnóstico',
  ctaSecondary: 'Conocer servicios',
  trustLine: 'Atención industrial en Puebla y Tlaxcala',
}

export const trustBar = [
  'Atención a industria automotriz',
  'Cartón, madera y plásticos especializados',
  'Operación en Puebla y Tlaxcala',
  'Cumplimiento y trazabilidad',
  'Permisos y documentación disponibles para revisión',
]

export interface Service {
  icon: string // id de ícono en Icon.tsx
  title: string
  description: string
  benefit: string
}

export const services: Service[] = [
  {
    icon: 'box',
    title: 'Reciclaje de cartón industrial',
    description: 'Acopio y valorización de cartón corrugado, empaques y embalajes de línea de producción.',
    benefit: 'Menos residuo a disposición final, ingreso por material valorizado.',
  },
  {
    icon: 'pallet',
    title: 'Valorización de madera y tarimas',
    description: 'Recuperación de tarimas, embalajes de madera y recortes para reutilización o reciclaje.',
    benefit: 'Libera espacio en planta y reduce costos de disposición.',
  },
  {
    icon: 'polymer',
    title: 'Manejo de plásticos especializados',
    description: 'Clasificación y canalización de plásticos técnicos e industriales según tipo de resina.',
    benefit: 'Ruta responsable para materiales difíciles de colocar.',
  },
  {
    icon: 'injection',
    title: 'Residuos de inyección plástica',
    description: 'Manejo de coladas, purgas, scrap y piezas no conformes de procesos de inyección.',
    benefit: 'Recuperación de valor en scrap que hoy se desecha.',
  },
  {
    icon: 'truck',
    title: 'Recolección y logística',
    description: 'Recolección programada o por demanda en planta, con unidades y personal para carga.',
    benefit: 'Operación continua sin acumulación de residuos.',
  },
  {
    icon: 'sort',
    title: 'Separación, clasificación y acopio',
    description: 'Separación por tipo de material y acopio ordenado previo a su valorización.',
    benefit: 'Mejor precio por material y trazabilidad por corriente.',
  },
  {
    icon: 'document',
    title: 'Documentación y soporte para cumplimiento',
    description: 'Evidencia documental del manejo de residuos para auditorías y requerimientos de clientes.',
    benefit: 'Soporte en auditorías internas, corporativas y de autoridad.',
  },
  {
    icon: 'search',
    title: 'Diagnóstico de oportunidades de reciclaje',
    description: 'Evaluación en sitio de corrientes de residuo y propuesta de ruta de valorización.',
    benefit: 'Visibilidad clara de qué materiales pueden generar valor.',
  },
]

export const circularitySteps = [
  { title: 'Generación del residuo', detail: 'El residuo se produce en tu línea u operación.' },
  { title: 'Recolección', detail: 'Retiro programado en planta con logística propia.' },
  { title: 'Clasificación', detail: 'Separación por tipo de material y calidad.' },
  { title: 'Valorización', detail: 'Canalización a procesos de reciclaje y recuperación.' },
  { title: 'Reporte / evidencia', detail: 'Documentación del manejo para tu expediente.' },
  { title: 'Reintegración productiva', detail: 'El material vuelve a la cadena como insumo.' },
]

export const industries = [
  { icon: 'car', name: 'Automotriz' },
  { icon: 'injection', name: 'Inyección de plástico' },
  { icon: 'factory', name: 'Manufactura' },
  { icon: 'box', name: 'Empaque' },
  { icon: 'truck', name: 'Logística' },
  { icon: 'warehouse', name: 'Centros de distribución' },
  { icon: 'gear', name: 'Proveedores industriales' },
]

export const industriesNote =
  'Experiencia con necesidades de empresas del sector automotriz e industrial, incluyendo referencias como Faurecia, Eisman y otras organizaciones manufactureras, sujeto a confirmación y autorización comercial.'

export const complianceIntro =
  'Operamos con enfoque documental, trazabilidad y cumplimiento aplicable para el manejo de residuos de manejo especial. La documentación específica, permisos, autorizaciones y evidencias pueden integrarse para revisión de clientes, auditorías internas o procesos de alta de proveedor.'

export const compliancePlaceholders = [
  { label: 'Permiso / autorización', value: '[Agregar número o documento]' },
  { label: 'Vigencia', value: '[Agregar fecha]' },
  { label: 'Autoridad emisora', value: '[Agregar autoridad]' },
  { label: 'Alcance', value: '[Agregar alcance]' },
  { label: 'Evidencia disponible', value: '[Sí / No / Por definir]' },
]

export const benefits = [
  { icon: 'trend', title: 'Menos disposición final', detail: 'Reducción de residuos enviados a disposición final.' },
  { icon: 'leaf', title: 'Mejores indicadores ambientales', detail: 'Datos que fortalecen tus KPIs de sustentabilidad.' },
  { icon: 'shield', title: 'Soporte para auditorías', detail: 'Evidencia lista para auditorías internas y externas.' },
  { icon: 'document', title: 'Trazabilidad documental', detail: 'Registro del ciclo del residuo de origen a destino.' },
  { icon: 'handshake', title: 'Requerimientos de proveedores', detail: 'Atención a exigencias de clientes y corporativos.' },
  { icon: 'calendar', title: 'Recolección programada', detail: 'Frecuencias acordadas según tu operación.' },
  { icon: 'polymer', title: 'Materiales complejos', detail: 'Soluciones para corrientes difíciles de valorizar.' },
  { icon: 'star', title: 'Imagen sustentable', detail: 'Posicionamiento ambiental ante clientes y corporativos.' },
]

export const coverage = {
  locations: [
    { city: 'Coronango', state: 'Puebla', x: 44, y: 62 },
    { city: 'Tlaxcala', state: 'Tlaxcala', x: 60, y: 34 },
  ],
  note: 'Atención regional a corredores industriales cercanos.',
}

export const clients = [
  { name: 'Faurecia', tag: '[CONFIRMAR_CLIENTE]' },
  { name: 'Eisman', tag: '[CONFIRMAR_CLIENTE]' },
  { name: 'Sector automotriz', tag: 'Sector' },
  { name: 'Manufactura', tag: 'Sector' },
  { name: 'Inyección plástica', tag: 'Sector' },
  { name: 'Proveedores industriales', tag: 'Sector' },
]

export const clientsNote = 'Referencias comerciales sujetas a validación interna.'

export const wasteTypes = [
  'Cartón',
  'Madera',
  'Plástico especializado',
  'Inyección plástica',
  'Otro',
]

export const faqs = [
  {
    q: '¿Qué residuos de manejo especial reciben?',
    a: 'Principalmente cartón industrial, madera y tarimas, plásticos especializados y residuos de procesos de inyección plástica. Otros materiales se evalúan caso por caso.',
  },
  {
    q: '¿Atienden empresas automotrices?',
    a: 'Sí. Trabajamos con las necesidades típicas del sector automotriz e industrial: volúmenes constantes, requerimientos documentales y ventanas de recolección definidas.',
  },
  {
    q: '¿Pueden proporcionar documentación para auditorías?',
    a: 'Sí. Entregamos evidencia documental del manejo y destino de los materiales para soportar auditorías internas, de cliente o de autoridad.',
  },
  {
    q: '¿Trabajan con recolección programada?',
    a: 'Sí. Definimos frecuencias de recolección según tu generación de residuos, o atendemos retiros por demanda.',
  },
  {
    q: '¿En qué zonas operan?',
    a: 'Coronango (Puebla) y Tlaxcala (Tlaxcala), con atención regional a corredores industriales cercanos.',
  },
  {
    q: '¿Pueden evaluar residuos plásticos especializados?',
    a: 'Sí. Evaluamos el tipo de resina, contaminación y volumen para proponer una ruta de valorización viable.',
  },
  {
    q: '¿Cómo iniciar una evaluación?',
    a: 'Llena el formulario de contacto o escríbenos por WhatsApp. Agendamos un diagnóstico y te proponemos una ruta responsable de valorización.',
  },
]

export const conversionMessages = [
  'Convierte tus residuos en valor documentado.',
  'Soluciones de reciclaje para industrias que necesitan cumplimiento, trazabilidad y confianza.',
  'Evaluamos tus materiales y proponemos una ruta responsable de valorización.',
]
