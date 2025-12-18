// Nombre del archivo con MAYÚSCULA
// Nombre del componente con MAYÚSCULA
// Un componente = una función
// Siempre export

import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

import './styles/main.css';

function App() {
  // Estados
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);

// useEffect (API)
useEffect(() => {
  const fetchProducts = async () => {
    try {
      console.log('Fetching products...');
      const response = await fetch('https://fakestoreapi.com/products');
      console.log('Response received:', response);
      const data = await response.json();
      console.log('Data parsed:', data);
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError(true);
    } finally {
      console.log('Finished fetching products.');
      setLoading(false);
    }
  };

  fetchProducts();
}, []);
  

// condiciones de carga y error
if (loading) {
    return <p>Loading products...</p>;
}

if (error) {
    return <p>Error loading products.</p>;
}

// return principal (ui normal)
    return (
    <BrowserRouter>
      <Header title="Business Dashboard" />
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;

// Ahora tu componente es reutilizable.