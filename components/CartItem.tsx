import React from 'react';
import './../style/CartItem.css';

interface CartItemProps {
  product: { id: number; name: string; price: number; image: string };
  quantity: number;
  onRemoveFromCart: (productId: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ product, quantity, onRemoveFromCart }) => {
  return (
    <div className="cart-item">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price} ₽</p>
      <p>Количество: {quantity}</p>
      <button onClick={() => onRemoveFromCart(product.id)}>Удалить</button>
    </div>
  );
};

export default CartItem;
