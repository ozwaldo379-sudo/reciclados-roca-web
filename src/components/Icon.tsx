import type { ReactNode } from 'react'

interface IconProps {
  name: string
  className?: string
}

/**
 * Set de íconos industriales inline (trazo 1.8, estilo outline).
 * Sin dependencias externas: cada ícono es un path SVG ligero.
 */
const paths: Record<string, ReactNode> = {
  box: (
    <>
      <path d="M3 8l9-5 9 5v8l-9 5-9-5V8z" />
      <path d="M3 8l9 5 9-5M12 13v8" />
    </>
  ),
  pallet: (
    <>
      <path d="M3 15h18M3 19h18M5 15v4M12 15v4M19 15v4" />
      <path d="M5 11h5v-4H5zM14 11h5V7h-5z" />
    </>
  ),
  polymer: (
    <>
      <path d="M12 3l7 4v10l-7 4-7-4V7l7-4z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  injection: (
    <>
      <path d="M4 6h10v6H4zM14 8h4l3 2-3 2h-4" />
      <path d="M6 12v4m4-4v4m-6 4h8" />
    </>
  ),
  truck: (
    <>
      <path d="M2 6h12v10H2zM14 10h4l3 3v3h-7" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </>
  ),
  sort: (
    <>
      <path d="M4 5h16M7 12h10M10 19h4" />
    </>
  ),
  document: (
    <>
      <path d="M6 2h9l4 4v16H6z" />
      <path d="M15 2v4h4M9 12h7M9 16h7" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.5 15.5L21 21" />
    </>
  ),
  car: (
    <>
      <path d="M4 15l1.5-5A2 2 0 017.4 8.5h9.2a2 2 0 011.9 1.5L20 15v4h-2.5v-2h-11v2H4v-4z" />
      <circle cx="8" cy="15" r="1" />
      <circle cx="16" cy="15" r="1" />
    </>
  ),
  factory: (
    <>
      <path d="M3 21V10l6 4v-4l6 4v-4l6 4v7H3z" />
      <path d="M7 21v-3m5 3v-3m5 3v-3" />
    </>
  ),
  warehouse: (
    <>
      <path d="M3 21V9l9-5 9 5v12" />
      <path d="M7 21v-8h10v8M7 17h10" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2.5v3m0 13v3M2.5 12h3m13 0h3M5 5l2.1 2.1M16.9 16.9L19 19M5 19l2.1-2.1M16.9 7.1L19 5" />
    </>
  ),
  trend: (
    <>
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19c0-8 5-14 14-14 0 9-5 14-12 14" />
      <path d="M5 19c3-5 7-8 11-10" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  handshake: (
    <>
      <path d="M3 8l4-2 5 2 5-2 4 2v7l-4 4-5-3-5 3-4-4V8z" />
      <path d="M12 8v6" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4m8-4v4" />
    </>
  ),
  star: (
    <>
      <path d="M12 3l2.8 5.6 6.2.9-4.5 4.4 1 6.1-5.5-2.9L6.5 20l1-6.1L3 9.5l6.2-.9L12 3z" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M12 3a9 9 0 00-7.8 13.5L3 21l4.6-1.2A9 9 0 1012 3z" />
      <path d="M8.5 9.5c0 4 2 6 6 6l1.5-1.5-2-2-1.5 1c-1-.5-1.5-1-2-2l1-1.5-2-2-1 2z" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  check: <path d="M4 12.5l5 5L20 6.5" />,
  chevron: <path d="M6 9l6 6 6-6" />,
  recycle: (
    <>
      <path d="M7 8l3-5h4l3 5" />
      <path d="M20 10l2 5-2.5 4h-5" />
      <path d="M4 10l-2 5 2.5 4h5" />
      <path d="M12 3v4M17.5 19l2-2M6.5 19l-2-2" />
    </>
  ),
}

export default function Icon({ name, className = 'h-6 w-6' }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? paths.recycle}
    </svg>
  )
}
