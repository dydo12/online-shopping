# Fieldhouse — Demo Storefront

A frontend-only e-commerce demo: browse products, add to cart, adjust quantities, check out, and see an order confirmation. No backend, no real payments, no real brands — built purely as a UI/UX practice project.

## Stack

- React + Vite
- Tailwind CSS v4
- Cart state managed with React Context (in-memory only — refreshing the page resets the cart, by design)

## Features

- Product listing with category filters (Tops, Outerwear, Shoes, Bags, Accessories) — 28 fictional items across 5 fictional brands
- Add to cart, adjust quantity, remove items, running subtotal/shipping/tax/total
- Checkout form (shipping + payment fields — not wired to any real payment processor)
- "Thank you for your order" confirmation screen with a generated order number

Product imagery is generated entirely with CSS gradients + inline SVG icons — no scraped photos or real brand assets.

## Run locally

```bash
npm install
npm run dev
```
