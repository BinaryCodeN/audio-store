import React from 'react';
import { Product } from '../data';
import './../style/ProductCard.css';
import H from '../icons/heart.svg'

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onAddToFavorites: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onAddToFavorites }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
  };

  const handleAddToFavorites = () => {
    onAddToFavorites(product);
  };

  return (
    <div className="product-card">
      <img src={product.img} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">{product.price} ₽</p>
      <p className="product-rate">⭐ {product.rate}</p>
      <div className="product-buttons">
        <button className="product-button favorite-button icons" onClick={handleAddToFavorites}>
          <img src={H} alt="Heart"/>
        </button>
        <button className="product-button cart-button" onClick={handleAddToCart}>
          Купить
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

