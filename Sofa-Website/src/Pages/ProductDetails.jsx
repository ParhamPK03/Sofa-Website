import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productInfos, SecondProductInfos } from '../assets/Images/assets';
import Navbar from "../Components/Navbar";
import { FaTruckArrowRight } from "react-icons/fa6";
import { useCart } from '../context/CartContext';
import Footer from '../Components/Footer';
import ImageSwiper from '../Components/ImageSwiper';
import SecondImageSwiper from '../Components/SecondImageSwiper';

const ProductDetails = () => {
  const { addToCart } = useCart();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [timer, setTimer] = useState({ days: 5, hours: 12, minutes: 25, seconds: 43 });

  useEffect(() => {
    const allProducts = [...productInfos, ...SecondProductInfos];
    const foundProduct = allProducts.find(p => p.id === id);
    setProduct(foundProduct);
  }, [id]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => {
        let { days, hours, minutes, seconds } = prevTimer;

        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          seconds = 59;
          minutes -= 1;
        } else if (hours > 0) {
          minutes = 59;
          seconds = 59;
          hours -= 1;
        } else if (days > 0) {
          hours = 23;
          minutes = 59;
          seconds = 59;
          days -= 1;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const onAddToCart = () => {
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      img: product.img,
      quantity: 1,
    };
    console.log("Adding to cart:", cartItem);
  };

  if (!product) {
    return <div>محصول پیدا نشد</div>;
  }

  return (
    <div>
      <div className='mt-10 w-[86%] mx-auto'>
        <Navbar />
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16'>
          
          {/* Right */}
          <div className='flex flex-col items-center border-2 border-[#FFC017]/40 rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <img className='rounded-lg mb-4 w-[350px]' src={product.img} alt={product.title} />
            <div className='text-center'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4 w-[380px]'>{product.title}</h3>
              <div className='flex justify-between items-center'>
                <div>
                  {product.oldPrice && (
                    <p className='text-sm font-semibold text-gray-500 line-through mt-4 flex'>
                      {product.oldPrice.toLocaleString()} تومان
                    </p>
                  )}
                  <p className='text-lg font-bold text-green-600 flex'>{product.price.toLocaleString()} تومان</p>
                </div>
                <div>
                  <button
                    className='bg-yellow-400 text-white py-3 px-4 rounded-lg font-medium flex items-center hover:rounded-3xl duration-500'
                    onClick={() => addToCart(product)}
                  >
                    افزودن به سبد خرید
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Left */}
          <div className='flex flex-col items-center justify-center border-2 border-[#FFC017]/40 rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300'>
            <div className='bg-blue-50 p-4 border-2 border-[#FFC017] rounded-lg mb-6'>
              <h4 className='text-lg font-bold text-gray-700 mb-4 flex justify-center'>زمان باقی مانده تا پایان تخفیف</h4>
              <div className='flex justify-center gap-4'>
                <div className='text-center bg-[#FFC017] text-white rounded-t-full rounded-b-full w-12 h-16'>
                  <span className='block text-xl font-bold'>{timer.seconds}</span>
                  <span className='text-black'>ثانیه</span>
                </div>
                <div className='text-center bg-[#FFC017] text-white rounded-t-full rounded-b-full w-12 h-16'>
                  <span className='block text-xl font-bold'>{timer.minutes}</span>
                  <span className='text-black'>دقیقه</span>
                </div>
                <div className='text-center bg-[#FFC017] text-white rounded-t-full rounded-b-full w-12 h-16'>
                  <span className='block text-xl font-bold'>{timer.hours}</span>
                  <span className='text-black'>ساعت</span>
                </div>
                <div className='text-center bg-[#FFC017] text-white rounded-t-full rounded-b-full w-12 h-16'>
                  <span className='block text-xl font-bold'>{timer.days}</span>
                  <span className='text-black'>روز</span>
                </div>
              </div>
            </div>

            <div className='border-2 border-gray-200 p-4 rounded-xl bg-yellow-100 mb-3'>
              <h5 className='text-lg'>برخی از ویژگی ها محصول</h5>
              <div className='text-gray-600 text-sm font-bold mt-6'>
                <p> • قابلیت مرجوعی</p>
                <p> • گارانتی 30 روزه می سرویس</p>
                <p> • پرداخت به صورت اقساط</p>
              </div>
            </div>

            <div className='bg-gray-200 w-[200px] rounded-xl p-2 mb-3 flex flex-col items-center'>
              <h5 className='flex items-center bg-gray-200 text-sm mt-2 gap-2'>
                <FaTruckArrowRight className='text-2xl' /> ارسال تا 2 روز کاری
              </h5>
              <p className='text-sm'>تضمین شده</p>
            </div>
          </div>
        </div>
        <div className='mt-16'>
        <h2 className='text-2xl'>کالا های مرتبط :</h2>
        <ImageSwiper/>
        </div>
        <div className='mt-16'>
          <h2 className='text-2xl'>کالاهای پیشنهادی :</h2>
          <SecondImageSwiper/>
        </div>
      </div>
      <div><Footer/></div>
    </div>
  );
};

export default ProductDetails;
