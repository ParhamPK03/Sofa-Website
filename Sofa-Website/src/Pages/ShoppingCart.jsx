 
import React from 'react';
import { useCart } from '../context/CartContext';

const ShoppingCart = () => {
  const { cart } = useCart();

  return (
    <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-4  w-80 max-h-[400px] overflow-y-auto">
      <h2 className="text-lg font-semibold mb-2">سبد خرید</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">سبد خرید شما خالی است</p>
      ) : (
        <ul>
          {cart.map((product, index) => (
            <li key={index} className="flex items-center mb-2">
              <img src={product.img} alt={product.title} className="w-16 h-16 object-cover mr-2" />
              <div className="flex-1">
                <p className="text-sm font-medium">{product.title}</p>
                <p className="text-gray-600">{product.price} تومان</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingCart;
