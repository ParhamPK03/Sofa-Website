import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

 
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';  

import Card from './ProductCard';
import { SecondProductInfos } from '../assets/Images/assets';
import { FreeMode, Navigation, Autoplay } from 'swiper/modules';

const SecondImageSwiper = () => {
  const repeatedProducts = [...SecondProductInfos,...SecondProductInfos];

  return (
    <div className="relative">
      <Swiper
        spaceBetween={20}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Navigation, Autoplay]}
        className="swiper-container"
        breakpoints={{
          1380: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {repeatedProducts.map(product => (
          <SwiperSlide key={product.id}>
            <Card image={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
    
    </div>
  );
}

export default SecondImageSwiper;
