import React from 'react';
import { Link } from 'react-router-dom';

const SecondProductCard = ({ id, img, title, oldPrice, price }) => {
  return (
    <div className="bg-white border-1 shadow-sm border-slate-100 rounded-xl overflow-hidden mt-5 flex flex-col items-center w-[240px] h-[380px] hover:rounded-[60px] duration-300">
      <Link to={`/product/${id}`}>
        <img src={img} alt={title} className="mt-5 object-cover w-[150px] h-[150px]" />
      </Link>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h5 className="text-sm font-medium h-[40px]">{title}</h5>
          <div className="text-gray-500 mt-8">
            <div className='flex gap-3'>
              {oldPrice && <p className="line-through">{oldPrice} تومان</p>}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-green-600">{price} تومان</p>
        </div>
      </div>
    </div>
  );
}

export default SecondProductCard;
