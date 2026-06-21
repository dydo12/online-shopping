import { useState } from 'react'
import { useCart } from '../context/CartContext'

const initialForm = {
  email: '',
  fullName: '',
  address: '',
  city: '',
  state: '',
  zip: '',
  cardNumber: '',
  expiry: '',
  cvc: '',
}

export default function CheckoutPage({ setView }) {
  const { items, subtotal, clearCart } = useCart()
  const [form, setForm] = useState(initialForm)
  const [submitting, setSubmitting] = useState(false)

  const shipping = subtotal >= 75 ? 0 : 8
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      clearCart()
      setView('confirmation')
    }, 700)
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-2xl font-semibold text-stone-900">Checkout</h1>
      <p className="mt-1 text-sm text-stone-500">This is a demo — no real payment is processed.</p>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-12 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-900">Contact</h2>
            <div className="mt-3">
              <Input label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
            </div>
          </section>

          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-900">Shipping Address</h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <Input label="Full Name" name="fullName" value={form.fullName} onChange={handleChange} required className="sm:col-span-2" />
              <Input label="Address" name="address" value={form.address} onChange={handleChange} required className="sm:col-span-2" />
              <Input label="City" name="city" value={form.city} onChange={handleChange} required />
              <div className="grid grid-cols-2 gap-4">
                <Input label="State" name="state" value={form.state} onChange={handleChange} required />
                <Input label="ZIP" name="zip" value={form.zip} onChange={handleChange} required />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-stone-900">Payment</h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <Input
                label="Card Number"
                name="cardNumber"
                value={form.cardNumber}
                onChange={handleChange}
                placeholder="4242 4242 4242 4242"
                required
                className="sm:col-span-2"
              />
              <Input label="Expiry" name="expiry" value={form.expiry} onChange={handleChange} placeholder="MM/YY" required />
              <Input label="CVC" name="cvc" value={form.cvc} onChange={handleChange} placeholder="123" required />
            </div>
          </section>
        </div>

        <div className="rounded-lg border border-stone-200 bg-stone-50 p-6">
          <h2 className="text-lg font-semibold text-stone-900">Order Summary</h2>
          <ul className="mt-4 space-y-2 text-sm text-stone-600">
            {items.map((item) => (
              <li key={item.id} className="flex justify-between">
                <span>
                  {item.name} × {item.qty}
                </span>
                <span>${(item.price * item.qty).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <dl className="mt-4 space-y-2 border-t border-stone-200 pt-4 text-sm">
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
            type="submit"
            disabled={submitting}
            className="mt-6 w-full rounded-full bg-stone-900 py-3 text-sm font-medium text-stone-50 hover:bg-stone-800 disabled:opacity-60"
          >
            {submitting ? 'Processing…' : `Pay $${total.toFixed(2)}`}
          </button>
        </div>
      </form>
    </main>
  )
}

function Input({ label, className = '', ...props }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1 block text-sm text-stone-700">{label}</span>
      <input
        {...props}
        className="w-full rounded-md border border-stone-300 bg-white px-3 py-2 text-sm text-stone-900 outline-none focus:border-stone-900 focus:ring-1 focus:ring-stone-900"
      />
    </label>
  )
}
