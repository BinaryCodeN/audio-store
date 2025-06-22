import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import { Product } from './data'; 
import './style/App.css';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]); 
  const [favoriteItems, setFavoriteItems] = useState<Product[]>([]); 

  const handleAddToCart = (product: Product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 } 
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleUpdateQuantity = (productId: number, quantityChange: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max((item.quantity || 1) + quantityChange, 1) } 
          : item
      )
    );
  };

  const handleAddToFavorites = (product: Product) => {
    // Проверка на избранность
    const existingItem = favoriteItems.find((item) => item.id === product.id);

    if (existingItem) {
      setFavoriteItems(favoriteItems.filter((item) => item.id !== product.id));
    } else {
      setFavoriteItems([...favoriteItems, product]);
    }
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onAddToCart={handleAddToCart}
                onAddToFavorites={handleAddToFavorites}
              />
            }
          />
          <Route path="/cart" element={<CartPage cartItems={cartItems} onUpdateQuantity={handleUpdateQuantity} />} />
        </Routes>
        <Header />
      </div>
    </Router>
  );
};

export default App;
