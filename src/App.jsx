import { useState } from 'react'
import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import Footer from './components/Footer'
import ShopPage from './components/ShopPage'
import CartPage from './components/CartPage'
import CheckoutPage from './components/CheckoutPage'
import ConfirmationPage from './components/ConfirmationPage'

export default function App() {
  const [view, setView] = useState('shop')

  return (
    <CartProvider>
      <div className="flex min-h-screen flex-col bg-stone-50">
        <Header view={view} setView={setView} />
        {view === 'shop' && <ShopPage />}
        {view === 'cart' && <CartPage setView={setView} />}
        {view === 'checkout' && <CheckoutPage setView={setView} />}
        {view === 'confirmation' && <ConfirmationPage setView={setView} />}
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </CartProvider>
  )
}
