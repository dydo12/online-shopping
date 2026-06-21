import { useMemo } from 'react'

export default function ConfirmationPage({ setView }) {
  const orderNumber = useMemo(() => `FH-${Math.floor(100000 + Math.random() * 900000)}`, [])

  return (
    <main className="mx-auto flex max-w-2xl flex-col items-center px-6 py-28 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight text-stone-900">Thank you for your order!</h1>
      <p className="mt-3 text-stone-600">
        Payment successful. A confirmation email would normally be on its way to you.
      </p>
      <p className="mt-1 text-sm text-stone-500">Order number: {orderNumber}</p>
      <button
        onClick={() => setView('shop')}
        className="mt-8 rounded-full bg-stone-900 px-6 py-2.5 text-sm font-medium text-stone-50 hover:bg-stone-800"
      >
        Continue Shopping
      </button>
    </main>
  )
}
