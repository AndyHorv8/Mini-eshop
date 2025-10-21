import { useState } from 'react'
import './App.css'

function App() {
  const [cartCount, setCartCount] = useState(0)

  const products = [
    { id: 1, name: 'Tričko React', price: 19.99, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Hrnek JavaScript', price: 14.99, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Samolepky DevLife', price: 4.99, image: 'https://via.placeholder.com/150' },
  ]

  const addToCart = () => {
    setCartCount(cartCount + 1)
  }

  return (
    <div className="app">
      <header>
        <h1>Vitajte v Mini Eshope 🛍️</h1>
        <p>Objavte naše skvelé produkty za super ceny!</p>

        <div className="cart-info">
          🛒 Košík: <strong>{cartCount}</strong>
        </div>
      </header>

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price.toFixed(2)} €</p>
            <button onClick={addToCart}>Pridať do košíka</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
