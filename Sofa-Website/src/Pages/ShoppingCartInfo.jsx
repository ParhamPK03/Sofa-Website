import React from 'react';
import { useCart } from '../context/CartContext';

const ShoppingCartInfo = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  const totalAmount = cart.reduce((total, product) => {
    const price = product.price;
    const quantity = product.quantity;
    return total + (price * quantity);
  }, 0);

  return (
    <div className="p-4 mt-5 w-[90%] mx-auto">
      <h2 className="text-2xl font-semibold mb-4">جزئیات سبد خرید :</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">سبد خرید شما خالی است</p>
      ) : (
        <div className="flex xl:flex-row flex-col items-center">
          <div className="w-[1000px] pr-4">
            <ul>
              {cart.map((product, index) => (
                <li key={index} className="flex items-center mb-4 border-[#FFC017] border-2 p-3 rounded-xl shadow-md shadow-[#FFC017] ">
                  <img src={product.img} alt={product.title} className="w-40 h-40 object-cover mr-4" />
                  <div className="flex-1 mr-10 md:mr-16 lg:mr-40">
                    <p className="text-lg font-medium">{product.title}</p>
                    <p className="text-gray-600 font-semibold">{product.price.toLocaleString()} تومان</p>
                    <p className="text-gray-400 text-xs">تعداد: {product.quantity}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button 
                        onClick={() => decreaseQuantity(product.id)} 
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 duration-200"
                      >-</button>
                      <button 
                        onClick={() => increaseQuantity(product.id)} 
                        className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 duration-200"
                      >+</button>
                      <button 
                        onClick={() => removeFromCart(product.id)} 
                        className="bg-gray-800 text-white px-2 py-1 rounded hover:bg-gray-900 duration-200"
                      >حذف محصول</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/4 items-center flex flex-col">
            <div className="bg-gray-500 pt-3 rounded-lg shadow-md flex flex-col items-center gap-4 w-[350px]">
              <p className="text-sm lg:text-xl font-semibold mb-2 text-white">جزئیات خرید</p>
              <p className="text-sm lg:text-lg font-bold text-white gap-5">تومان مبلغ قابل پرداخت : {totalAmount.toLocaleString()}</p>
            </div>
            <div>
              <button className='bg-yellow-400 px-3 py-2.5 rounded-lg mt-4 text-white text-xl font-medium hover:rounded-3xl duration-300'>تکمیل سفارش</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartInfo;
