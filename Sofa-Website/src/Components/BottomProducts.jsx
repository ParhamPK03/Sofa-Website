import React, { useState } from 'react';
import { PiArmchair } from "react-icons/pi";
import { BiLeftArrowCircle } from "react-icons/bi";
import SecondImageSwiper from "../Components/SecondImageSwiper";
import MobleProduct from "../assets/Images/Body/pngwing.com9_.png";
import { productInfos, SecondProductInfos } from "../assets/Images/assets";
import SecondProductCard from '../Components/SecondProductCard';
import Swal from 'sweetalert2';

const BottomProducts = () => {

  const [currentProducts, setCurrentProducts] = useState(SecondProductInfos);
  const [activeButton, setActiveButton] = useState('sofas');

  const handleButtonClick = (type) => {
    if (type === 'chairs') {
      setCurrentProducts(productInfos);
      setActiveButton('chairs');
    } else if (type === 'sofas') {
      setCurrentProducts(SecondProductInfos);
      setActiveButton('sofas');
    }
  };

  // SweetAlert Massage

  const handleClick = () => {
    Swal.fire({
        title: 'متاسفیم!',
        text: ' به علت تغییرات این بخش در حال حاضر در دسترس  نیست',
        icon: 'info',
        confirmButtonText: 'باشه',
        background: '#222222',
        color: '#ffffff',
        confirmButtonColor: '#ff0000',
    });
};

  return (
    <div id='KharegySofa'>
      <div className='w-[86%] mx-auto'>
        <div className='mx-auto mt-10'>
          <div className='flex justify-between items-center'>
            <div className='flex gap-4 items-center'>
              <PiArmchair className='bg-gray-200 w-[70px] h-[60px] rounded-xl' />
              <h5 className='font-normal text-2xl'>آخرین مبلمان خارجی</h5>
            </div>
            <div className=''>
              <button className='px-4 ml-5 py-3 border-green-400 hover:bg-green-100 duration-300 border-2 rounded-xl flex items-center gap-2'>
                <a href="" className='text-green-400 no-underline'>محصولات بیشتر</a>
                <BiLeftArrowCircle className='text-xl text-green-400' />
              </button>
            </div>
          </div>
          <div className='w-[100%] m-auto'>
          <SecondImageSwiper />
          </div>
        </div>
      </div>
      {/* Bottom Products */}
      <div className='mt-20'>
      <div className='bg-gradient-to-b from-[#203A43] to-[#0F2027] min-h-[600px] w-full pb-5'>
          <div className='flex items-center justify-between '>
            {/* Left */}
            <div className='flex flex-col mr-16'>
              {/* Button */}
              <div className='flex items-center gap-3 mt-20'>
                <button
                  onClick={() => handleButtonClick('chairs')}
                  className={`px-2 py-2 rounded-xl ${activeButton === 'chairs' ? 'bg-[#FFC017] text-white' : 'bg-white text-black'}`}
                >
                  صندلی
                </button>
                <button
                  onClick={() => handleButtonClick('sofas')}
                  className={`px-2 py-2 rounded-xl ${activeButton === 'sofas' ? 'bg-[#FFC017] text-white' : 'bg-white text-black'}`}
                >
                  مبلمان
                </button>
              </div>
              {/* Product */}
              <div className='flex gap-x-2.5 w-[95%] xxx:flex-nowrap xs:flex-wrap m-auto justify-center'>
                {
                  currentProducts.slice(0, 4).map((item, index) => {
                    return <SecondProductCard key={item.id} id={item.id} img={item.img} price={item.price} oldPrice={item.oldPrice} title={item.title} />;
                  })
                }
              </div>
            </div>
            {/* Right */}
            <div className='w-[90%] mx-auto hidden xxs:flex flex-col items-center '>
              <div><img className='w-[350px] h-[450px] -mt-20 xxxx:inline-block' src={MobleProduct} alt="Moble" /></div>
              <h5 className='text-white mt-2'>بهترین مبلمان خارجی</h5>
              <button className='py-3 px-4 mt-3 bg-[#FFC017] rounded-xl text-gray-800 hover:text-white duration-300' onClick={handleClick}>محصولات با تخفیف 60 %</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomProducts;
