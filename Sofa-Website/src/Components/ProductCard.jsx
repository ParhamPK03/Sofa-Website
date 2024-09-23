import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { useCart } from '../context/CartContext';

const ProductCard = ({ image }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(image);
  };

  return (
    <div className="bg-white border-1 shadow-md hover:shadow-[#FFC017] border-slate-100 rounded-lg overflow-hidden mt-5 flex flex-col items-center w-[290px] h-[490px] hover:border-[#FFC017] duration-700">
      <Link to={`/product/${image.id}`}>
        <img src={image.img} alt={image.title} className="mt-5 object-cover w-[240px] h-[230px]" />
      </Link>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h5 className="text-sm font-medium">{image.title}</h5>
          <div className="text-gray-500 mt-8">
            <div className='flex gap-3'>
              {image.percent && <p className="text-black/90 bg-green-400 rounded-lg p-1">{image.percent}</p>}
              {image.oldPrice && <p className="line-through">{image.oldPrice} تومان</p>}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-green-600">{image.price} تومان</p>
          <div className="relative group">
            <button
              className="bg-gray-200 text-gray-600 px-3 py-4 rounded flex items-center justify-center -mb-7 -ml-7"
              onClick={handleAddToCart}
            >
              <HiOutlineShoppingBag className='text-2xl text-black' />
            </button>
            <span className="absolute hidden group-hover:block bg-gray-600 text-white p-1 rounded text-sm top-full ml-5 -mt-20 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              افزودن به سبد خرید
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
