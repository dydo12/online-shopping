import { useMemo, useState } from 'react'
import { products, CATEGORIES } from '../data/products'
import ProductCard from './ProductCard'

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return products
    return products.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  return (
    <main>
      <section className="border-b border-stone-200 bg-stone-100">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
            Everyday essentials, made to last
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-stone-600">
            Clothing, footwear, and accessories from a handful of independent labels we love.
            Demo storefront — no real purchases are processed.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-wrap gap-2">
          {['All', ...CATEGORIES].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'border-stone-900 bg-stone-900 text-stone-50'
                  : 'border-stone-300 text-stone-600 hover:border-stone-900 hover:text-stone-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  )
}
