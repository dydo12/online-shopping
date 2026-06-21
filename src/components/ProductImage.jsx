const ICONS = {
  Tops: (
    <path d="M9 3 H15 L17 6 L21 8 L19 11.5 L17 10 V21 H7 V10 L5 11.5 L3 8 L7 6 Z" />
  ),
  Outerwear: (
    <path d="M9 3 H15 L17 6 L21 8.5 L18.5 12 L17 10.5 V21 H7 V10.5 L5.5 12 L3 8.5 L7 6 Z M9 3 V21 M15 3 V21" />
  ),
  Shoes: (
    <path d="M4 17 Q4 14 7 13.5 L10 12 Q12 9 15 9.5 L17 10.5 Q21 11 21 15 V18 H4 Z" />
  ),
  Bags: (
    <path d="M7 9 V7 a5 5 0 0 1 10 0 v2 M5 9 H19 L18 21 H6 Z" />
  ),
  Accessories: (
    <circle cx="12" cy="12" r="8" />
  ),
}

export default function ProductImage({ category, hue, className = '' }) {
  const bg = `linear-gradient(135deg, hsl(${hue} 38% 88%), hsl(${hue} 30% 78%))`
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{ background: bg }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        className="w-1/3 h-1/3 opacity-40"
        fill="none"
        stroke={`hsl(${hue} 40% 25%)`}
        strokeWidth="1"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {ICONS[category]}
      </svg>
    </div>
  )
}
