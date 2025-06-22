// src/pages/CartPage.tsx
import React from 'react';
import { Product } from '../data';
import { Link } from 'react-router-dom'; 
import './../style/CartPage.css';

interface CartPageProps {
  cartItems: Product[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
}

const CartPage: React.FC<CartPageProps> = ({ cartItems, onUpdateQuantity }) => {
  const handleIncreaseQuantity = (productId: number) => {
    onUpdateQuantity(productId, 1); // +1
  };

  const handleDecreaseQuantity = (productId: number) => {
    onUpdateQuantity(productId, -1); // -1
  };

  return (
    <div className="cart-page">
      <h1>Корзина</h1>
      <Link to="/" className="back-button">
        ← Назад к товарам
      </Link> {/* Кнопка для перехода на главную страницу */}
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.title} className="cart-item-image" />
            <div className="cart-item-details">
              <h3 className="cart-item-title">{item.title}</h3>
              <p className="cart-item-price">{item.price} ₽</p>
              <div className="cart-item-quantity-controls">
                <button
                  className="cart-item-quantity-button"
                  onClick={() => handleDecreaseQuantity(item.id)}
                >
                  -
                </button>
                <span className="cart-item-quantity">{item.quantity || 1}</span>
                <button
                  className="cart-item-quantity-button"
                  onClick={() => handleIncreaseQuantity(item.id)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Корзина пуста</p>
      )}
      <div className="cart-total">
        <p>
          Итого: {cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0)} ₽
        </p>
        <button className="cart-checkout-button">Перейти к оформлению</button>
      </div>
    </div>
  );
};

export default CartPage;
