'use client'

type Badge = {
  title: string
  sub: string
  icon: 'star' | 'shield' | 'award' | 'home' | 'clock'
}

const badges: Badge[] = [
  { title: 'A&E', sub: 'Zombie House Flipping', icon: 'star' },
  { title: 'Trusted', sub: 'land partner', icon: 'shield' },
  { title: '2,500+', sub: 'pads developed', icon: 'home' },
  { title: '20+ years', sub: 'community building', icon: 'award' },
  { title: 'Fast close', sub: 'on qualifying parcels', icon: 'clock' },
]

function Icon({ name }: { name: Badge['icon'] }) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className: 'h-5 w-5',
  }
  switch (name) {
    case 'star':
      return (
        <svg {...common}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77 5.82 21l1.18-6.88L2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    case 'shield':
      return (
        <svg {...common}>
          <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    case 'home':
      return (
        <svg {...common}>
          <path d="M3 11l9-8 9 8" />
          <path d="M5 10v10a1 1 0 001 1h12a1 1 0 001-1V10" />
        </svg>
      )
    case 'award':
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="6" />
          <path d="M8.21 13.89L7 22l5-3 5 3-1.21-8.12" />
        </svg>
      )
    case 'clock':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      )
  }
}

export function Marquee() {
  return (
    <section
      aria-label="Trust signals"
      className="relative overflow-hidden border-b border-neutral-200 bg-neutral-50 py-6"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 items-center gap-4 px-6 md:grid-cols-5">
        {badges.map((b, i) => (
          <div
            key={i}
            className="flex items-center gap-3 border-b border-dashed border-neutral-200 pb-4 last:border-b-0 md:border-b-0 md:border-r md:border-solid md:pb-0 md:pr-4 md:last:border-r-0"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-900 shadow-sm ring-1 ring-neutral-200">
              <Icon name={b.icon} />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-neutral-900">
                {b.title}
              </div>
              <div className="text-xs text-neutral-500">{b.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
