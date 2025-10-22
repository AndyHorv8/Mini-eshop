import { useState } from 'react'
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState([])

  const products = [
    { id: 1, name: 'Tričko React', price: 19.99, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Hrnek JavaScript', price: 14.99, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Samolepky DevLife', price: 4.99, image: 'https://via.placeholder.com/150' },
  ]

  const addToCart = (product) => {
    setCartItems([...cartItems, product])
  }

  {/* 💛 NOVÉ – funkcia na odstránenie položky z košíka */}
  const removeFromCart = (indexToRemove) => {
    setCartItems(cartItems.filter((_, index) => index !== indexToRemove))
  }

  return (
    <div className="app">
      <header>
        <h1>Vitajte v Mini Eshope 🛍️</h1>
        <p>Objavte naše skvelé produkty za super ceny!</p>

        <div className="cart-info">
          🛒 Košík: <strong>{cartItems.length}</strong>
        </div>
      </header>

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price.toFixed(2)} €</p>
            <button onClick={() => addToCart(product)}>Pridať do košíka</button>
          </div>
        ))}
      </div>

      {/* 💛 ÚPRAVA mini-košíka – pridanie tlačidla ❌ */}
      <div className="mini-cart">
        <h3>🛒 Mini-košík</h3>
        {cartItems.length === 0 ? (
          <p>Košík je prázdny</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} – {item.price.toFixed(2)} €
                {/* 💛 TOTO PRIDAJ */}
                <button className="remove-btn" onClick={() => removeFromCart(index)}>
                  ❌
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default App
