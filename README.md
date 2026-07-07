# Reciclados Roca — Sitio web corporativo

Landing page B2B industrial para captación de clientes. React + Vite + TypeScript + Tailwind CSS 4 + Framer Motion.

## Ejecutar

```bash
npm install      # solo la primera vez
npm run dev      # desarrollo → http://localhost:5173
npm run build    # producción → dist/
npm run preview  # previsualizar build
```

## Estructura

```
src/
  data/siteContent.ts     ← TODO el contenido editable (textos, placeholders, FAQ)
  styles/globals.css      ← paleta del logo + morph classes reutilizables
  components/             ← Navbar, Hero, TrustBar, Services, CircularitySection,
                            Industries, Compliance, Benefits, Coverage, Clients,
                            LeadForm, FAQ, Footer, AnimatedBackground, Icon, Reveal
```

## Placeholders por completar

Buscar en `src/data/siteContent.ts` e `index.html`:

- `[AGREGAR_TELEFONO]`
- `[AGREGAR_CORREO]`
- `[AGREGAR_NUMERO_WHATSAPP]` — formato `52XXXXXXXXXX` (sin +)
- `[AGREGAR_AVISO_PRIVACIDAD]` — URL del aviso
- Sección Cumplimiento: permiso, vigencia, autoridad, alcance, evidencia
- Clientes marcados `[CONFIRMAR_CLIENTE]` (Faurecia, Eisman) — confirmar autorización antes de publicar
- Logo real: reemplazar `public/favicon.svg` y el ícono del Navbar/Footer

## Conectar el formulario de leads

El formulario valida y muestra éxito, pero aún no envía a ningún servicio.
Editar `submitLead()` en `src/components/LeadForm.tsx` — hay instrucciones comentadas para:

1. **Formspree** (más rápido, sin backend)
2. **EmailJS**
3. **API propia / CRM / webhook** (usar variables `VITE_*` en `.env`, nunca secretos en código)

## Notas

- Paleta estricta del logo: verde ecológico, café orgánico, blanco, gris/negro. Sin azules/morados.
- 3D ligero: CSS conic-gradient + SVG animado (sin Three.js) para mantener Lighthouse alto.
- `prefers-reduced-motion` apaga todas las animaciones decorativas.
- SEO: title/meta/OG + JSON-LD LocalBusiness en `index.html` (completar teléfono/correo).
- Recomendado para publicar: Vercel, Netlify o Cloudflare Pages (`npm run build` → carpeta `dist/`).
