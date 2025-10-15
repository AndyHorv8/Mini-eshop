import './App.css'

function App() {
  const products = [
    { id: 1, name: 'Tričko React', price: 19.99, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Hrnek JavaScript', price: 14.99, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Samolepky DevLife', price: 4.99, image: 'https://via.placeholder.com/150' },
  ]

  return (
    <div className="app">
      <header>
        <h1>Vitajte v Mini Eshope 🛍️</h1>
        <p>Objavte naše skvelé produkty za super ceny!</p>
      </header>

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price.toFixed(2)} €</p>
            <button>Pridať do košíka</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
