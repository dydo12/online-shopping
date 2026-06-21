import { useCart } from '../context/CartContext'

export default function Header({ view, setView }) {
  const { itemCount } = useCart()

  return (
    <header className="sticky top-0 z-20 border-b border-stone-200 bg-stone-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => setView('shop')}
          className="text-xl font-semibold tracking-tight text-stone-900"
        >
          FIELDHOUSE
        </button>
        <nav className="flex items-center gap-6">
          <button
            onClick={() => setView('shop')}
            className={`text-sm font-medium transition-colors ${
              view === 'shop' ? 'text-stone-900' : 'text-stone-500 hover:text-stone-900'
            }`}
          >
            Shop
          </button>
          <button
            onClick={() => setView('cart')}
            className={`relative text-sm font-medium transition-colors ${
              view === 'cart' || view === 'checkout' || view === 'confirmation'
                ? 'text-stone-900'
                : 'text-stone-500 hover:text-stone-900'
            }`}
          >
            Cart
            {itemCount > 0 && (
              <span className="ml-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-stone-900 px-1 text-xs font-semibold text-stone-50">
                {itemCount}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  )
}
