// src/pages/HomePage.tsx
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Product, wiredHeadphones, wirelessHeadphones } from '../data';
import './../style/HomePage.css';
import H from '../icons/heart.svg';
import C from '../icons/cart.svg';
import { Link } from 'react-router-dom';

interface HomePageProps {
  onAddToCart: (product: Product) => void;
  onAddToFavorites: (product: Product) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onAddToCart, onAddToFavorites }) => {
  const [cartCount, setCartCount] = useState(0);
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [favoriteItems, setFavoriteItems] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    onAddToCart(product);
    setCartCount(cartCount + 1);
  };

  const handleAddToFavorites = (product: Product) => {
    const existingItem = favoriteItems.find((item) => item.id === product.id);

    if (existingItem) {
      setFavoriteItems(favoriteItems.filter((item) => item.id !== product.id));
      setFavoriteCount(favoriteCount - 1);
    } else {
      setFavoriteItems([...favoriteItems, product]);
      setFavoriteCount(favoriteCount + 1);
    }
  };

  return (
    <div className="home-page">
      <div className="header">
        <h1>QPICK</h1>
        <div className="icons">
          <span className="favorite">
            <img src={H} alt="Heart" />
            {favoriteCount > 0 && <span className="favorite-count">{favoriteCount}</span>}
          </span>
          <Link to="/cart" className="cart-link">
            <span className="cart">
              <img src={C} alt="Cart" />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </span>
          </Link>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="section">
          <h2>Наушники</h2>
          <div className="product-grid">
            {wiredHeadphones.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onAddToFavorites={handleAddToFavorites}
              />
            ))}
          </div>
        </div>
        <div className="section">
          <h2>Беспроводные наушники</h2>
          <div className="product-grid">
            {wirelessHeadphones.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onAddToFavorites={handleAddToFavorites}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
