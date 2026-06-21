import { useState } from 'react'
import ProductImage from './ProductImage'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  function handleAdd() {
    addItem(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1200)
  }

  return (
    <div className="group flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
        <ProductImage
          image={product.image}
          hue={product.hue}
          alt={`${product.brand} ${product.name}`}
          className="h-full w-full transition-transform duration-300 group-hover:scale-105"
        />
        <button
          onClick={handleAdd}
          className="absolute inset-x-3 bottom-3 translate-y-2 rounded-full bg-stone-900/90 px-4 py-2 text-sm font-medium text-stone-50 opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-stone-900"
        >
          {added ? 'Added ✓' : 'Add to Cart'}
        </button>
      </div>
      <div className="mt-3 flex items-start justify-between gap-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-stone-500">{product.brand}</p>
          <p className="text-sm text-stone-900">{product.name}</p>
        </div>
        <p className="whitespace-nowrap text-sm font-medium text-stone-900">${product.price}</p>
      </div>
    </div>
  )
}
