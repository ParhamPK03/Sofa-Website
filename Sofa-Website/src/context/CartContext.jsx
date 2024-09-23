import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext'; 
import Swal from 'sweetalert2';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { currentUser } = useAuth(); 
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    if (!currentUser) {
      Swal.fire({
        title: 'هشدار',
        text: 'ابتدا وارد حساب کاربری خود شوید',
        icon: 'error',
        confirmButtonText: 'باشه',
        background: '#222222',
        color: '#ffffff',
        confirmButtonColor: '#ff0000',
    });
      return;
    }

    const formattedProduct = {
      ...product,
      price: parseFloat(product.price.replace(/,/g, '')), 
      quantity: parseInt(product.quantity || 1, 10),
    };

    const productExists = cart.find(item => item.id === formattedProduct.id);

    if (productExists) {
      setCart(cart.map(item => 
        item.id === formattedProduct.id 
          ? { ...item, quantity: item.quantity + formattedProduct.quantity }
          : item
      ));
    } else {
      setCart([...cart, formattedProduct]);
    }
  };

  const removeFromCart = (productId) => {
    if (!currentUser) {
      Swal.fire({
        title: 'هشدار',
        text: 'ابتدا وارد حساب کاربری خود شوید',
        icon: 'info',
        confirmButtonText: 'باشه',
        background: '#222222',
        color: '#ffffff',
        confirmButtonColor: '#ff0000',
    });
      return;
    }

    setCart(cart.filter(product => product.id !== productId));
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map(product =>
      product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map(product =>
      product.id === productId && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product
    );
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.length;

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
