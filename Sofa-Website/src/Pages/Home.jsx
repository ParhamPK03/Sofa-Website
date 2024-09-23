 
import React from 'react';
import Navbar from '../Components/Navbar';
import MainTop from '../Components/MainTop';
import TopProducts from '../Components/TopProducts';
import BottomTopProducts from '../Components/BottomProducts';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div>
      <div className='w-[86%] mx-auto mt-9'>
        <Navbar />
        <MainTop />
      </div>
      <TopProducts />
      <BottomTopProducts />
      <Footer />
    </div>
  );
}

export default Home;
