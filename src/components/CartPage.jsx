import ProductImage from './ProductImage'
import { useCart } from '../context/CartContext'

export default function CartPage({ setView }) {
  const { items, removeItem, setQty, subtotal } = useCart()

  if (items.length === 0) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h1 className="text-2xl font-semibold text-stone-900">Your cart is empty</h1>
        <p className="mt-2 text-stone-600">Browse the shop and add something you like.</p>
        <button
          onClick={() => setView('shop')}
          className="mt-6 rounded-full bg-stone-900 px-6 py-2.5 text-sm font-medium text-stone-50 hover:bg-stone-800"
        >
          Continue Shopping
        </button>
      </main>
    )
  }

  const shipping = subtotal >= 75 ? 0 : 8
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-2xl font-semibold text-stone-900">Your Cart</h1>

      <div className="mt-8 grid gap-12 lg:grid-cols-3">
        <div className="divide-y divide-stone-200 lg:col-span-2">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 py-6">
              <ProductImage
                category={item.category}
                hue={item.hue}
                className="h-24 w-20 flex-shrink-0 rounded-md"
              />
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-stone-500">{item.brand}</p>
                    <p className="text-sm text-stone-900">{item.name}</p>
                  </div>
                  <p className="whitespace-nowrap text-sm font-medium text-stone-900">
                    ${(item.price * item.qty).toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center rounded-full border border-stone-300">
                    <button
                      onClick={() => setQty(item.id, item.qty - 1)}
                      className="px-3 py-1 text-stone-600 hover:text-stone-900"
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="w-8 text-center text-sm">{item.qty}</span>
                    <button
                      onClick={() => setQty(item.id, item.qty + 1)}
                      className="px-3 py-1 text-stone-600 hover:text-stone-900"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-sm text-stone-500 underline-offset-2 hover:text-stone-900 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-stone-200 bg-stone-50 p-6">
          <h2 className="text-lg font-semibold text-stone-900">Order Summary</h2>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between text-stone-600">
              <dt>Subtotal</dt>
              <dd>${subtotal.toFixed(2)}</dd>
            </div>
            <div className="flex justify-between text-stone-600">
              <dt>Shipping</dt>
              <dd>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</dd>
            </div>
            <div className="flex justify-between text-stone-600">
              <dt>Estimated Tax</dt>
              <dd>${tax.toFixed(2)}</dd>
            </div>
          </dl>
          <div className="mt-4 flex justify-between border-t border-stone-200 pt-4 text-base font-semibold text-stone-900">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            onClick={() => setView('checkout')}
            className="mt-6 w-full rounded-full bg-stone-900 py-3 text-sm font-medium text-stone-50 hover:bg-stone-800"
          >
            Checkout
          </button>
          {shipping > 0 && (
            <p className="mt-3 text-center text-xs text-stone-500">
              Add ${(75 - subtotal).toFixed(2)} more for free shipping
            </p>
          )}
        </div>
      </div>
    </main>
  )
}
