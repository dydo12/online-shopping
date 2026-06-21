export default function ProductImage({ image, hue, alt = '', className = '' }) {
  const bg = `linear-gradient(135deg, hsl(${hue} 38% 88%), hsl(${hue} 30% 78%))`
  const src = image.startsWith('http') ? image : `https://images.unsplash.com/${image}?w=600&q=80&auto=format&fit=crop`
  return (
    <div className={`overflow-hidden ${className}`} style={{ background: bg }}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    </div>
  )
}
