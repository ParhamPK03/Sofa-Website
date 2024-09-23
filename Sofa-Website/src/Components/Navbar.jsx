import Logo from "../assets/Images/Logo/logo.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { useState, useEffect } from "react";
import { IoLogOut } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { auth } from "../firebase/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useCart } from '../context/CartContext';
import ShoppingCart from '../Pages/ShoppingCart';
import Swal from 'sweetalert2';
import { useAuth } from '../context/AuthContext';
import '../index.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const [hover, setHover] = useState(false);
  const { cartCount } = useCart();
  const { currentUser } = useAuth();
  const [user, setUser] = useState(null);
  const { setCart } = useCart();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);


  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('cart');
      setCart([]);
      setUser(null);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };


  const handleCartClick = () => {
    if (!currentUser) {
      Swal.fire({
        icon: 'warning',
        title: 'ابتدا وارد حساب کاربری خود شوید',
        showConfirmButton: true,
      });
      return;
    }
    window.location.href = "/shoppingCartInfo";
  };

  return (
    <div className='flex justify-between m-auto items-center relative'>
      {/* Right */}
      <div className='lg:flex items-center gap-5'>
        {/* Logo */}
        <div className='flex'>
          <Link to="/">
            <img src={Logo} alt="Logo" className='hidden lg:flex w-16' />
          </Link>
          <div>
            {/* FaBars icon */}
            <FaBars
              className='flex lg:hidden text-2xl md:text-xl text-black mr-8 cursor-pointer'
              onClick={toggleSidebar}
            />

            {/* Sidebar Menu */}
            <div
              className={`fixed top-0 right-0 w-64 bg-gray-800 text-white h-full p-5 z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                } lg:hidden`}
            >
              {/* Close Icon (FaTimes) */}
              <FaTimes
                className="text-xl text-white cursor-pointer mb-4 mr-40"
                onClick={toggleSidebar} // Closing the sidebar when clicked
              />

              <ul className='space-y-4'>
                <li className='hover:text-yellow-400 cursor-pointer'>دسته بندی ها</li>
                <li className='hover:text-yellow-400 cursor-pointer'>وسایل خانه</li>
                <li className='hover:text-yellow-400 cursor-pointer'>لوازم شخصی</li>
                <li className='hover:text-yellow-400 cursor-pointer'>لوازم دیجیتال</li>
                <li className='hover:text-yellow-400 cursor-pointer'>صفحه اصلی</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Navbar List */}
        <div className='flex justify-between items-center '>
          <div className='flex lg:hidden'>
            {/* Mobile Menu Toggle button or code */}
          </div>
        </div>
        <div>
          <ul className='hidden gap-6 lg:text-xs lg:flex xl:text-[14px] font-medium text-gray-600 cursor-pointer'>
            <li className='nav-item flex items-center gap-2 relative group'>
              <a>دسته بندی ها</a><MdKeyboardArrowDown />
              <ul className='submenu absolute hidden group-hover:flex flex-col top-full left-0 bg-white shadow-md rounded-xl w-[200px] leading-10 p-2'
                onClick={() => {
                  const target = document.getElementById("IranianSofa");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}>
                <li className='submenu-item hover:bg-green-400 hover:text-white rounded-xl'><a>مبل چسترفیلد</a></li>
                <li className='submenu-item hover:bg-green-400 hover:text-white rounded-xl'><a>مبل قطعه ای</a></li>
                <li className='submenu-item hover:bg-green-400 hover:text-white rounded-xl'><a>مدل چِیس</a></li>
                <li className='submenu-item hover:bg-green-400 hover:text-white rounded-xl'><a>مبل کبریل</a></li>
                <li className='submenu-item hover:bg-green-400 hover:text-white rounded-xl'><a>مبل تکیه‌ گاه شتری</a></li>
                <li className='submenu-item hover:bg-green-400 hover:text-white rounded-xl'><a>مبل تختی</a></li>
                <li className='submenu-item hover:bg-green-400 hover:text-white rounded-xl'><a>مبل لاوسون</a></li>
                <li className='submenu-item hover:bg-green-400 hover:text-white rounded-xl'><a>مبل تاکسیدو</a></li>
              </ul>
            </li>
            <li className='nav-item flex items-center gap-2 relative group'>
              <a>وسایل خانه</a><MdKeyboardArrowDown />
              <ul className='submenu absolute hidden group-hover:flex flex-col top-full left-0 bg-white shadow-md rounded-xl w-[200px] leading-10 p-2'
                onClick={() => {
                  const target = document.getElementById("IranianSofa");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}>
                <li className='submenu-item hover:bg-green-400 hover:text-white rounded-xl'><a>لوازم پخت و پز</a></li>
                <li className='submenu-item hover:bg-green-400 hover:text-white rounded-xl'><a>نوشیدنی ساز</a></li>
                <li className='submenu-item hover:bg-green-400 hover:text-white rounded-xl'><a>خردکن و غذاساز</a></li>
                <li className='submenu-item hover:bg-green-400 hover:text-white rounded-xl'><a>تصفیه کننده آب</a></li>
                <li className='submenu-item hover:bg-green-400 hover:text-white rounded-xl'><a>لوازم مکمل آشپزخانه</a></li>
                <li className='submenu-item hover:bg-green-400 hover:text-white rounded-xl'><a>یخچال و فریزر</a></li>
                <li className='submenu-item hover:bg-green-400 hover:text-white rounded-xl'><a>لوازم شست و شو و نظافت</a></li>
              </ul>
            </li>
            <li className='nav-item'><a>لوازم شخصی</a></li>
            <li className='nav-item flex items-center gap-2 relative group'>
              <a>لوازم دیجیتال</a><MdKeyboardArrowDown />
              <ul className='submenu absolute hidden group-hover:flex flex-col top-full left-0 bg-white shadow-md rounded-xl w-[200px] leading-10 p-2'>
                <li className='submenu-item hover:bg-green-400 hover:text-white rounded-xl'><a>ساعت و مچ بند هوشمند</a></li>
                <li className='submenu-item hover:bg-green-400 hover:text-white rounded-xl'><a>صوتی و تصویری</a></li>
                <li className='submenu-item hover:bg-green-400 hover:text-white rounded-xl'><a>کابل، رابط و مبدل</a></li>
                <li className='submenu-item hover:bg-green-400 hover:text-white rounded-xl'><a>کنسول بازی و لوازم جانبی</a></li>
                <li className='submenu-item hover:bg-green-400 hover:text-white rounded-xl'><a>دوربین و لوازم جانبی</a></li>
                <li className='submenu-item hover:bg-green-400 hover:text-white rounded-xl'><a>لپتاپ و کامپیوتر</a></li>
                <li className='submenu-item hover:bg-green-400 hover:text-white rounded-xl'><a>تجهیزات جانبی کامپیوتر و لپ تاپ</a></li>
                <li className='submenu-item hover:bg-green-400 hover:text-white rounded-xl'><a>قطعات داخلی کامپیوتر و لپ تاپ</a></li>
              </ul>
            </li>
            <li className='nav-item flex items-center gap-2 relative group'>
              <a>صفحه اصلی</a><MdKeyboardArrowDown />
              <ul className='submenu absolute hidden group-hover:flex flex-col top-full left-0 bg-white shadow-md rounded-xl w-[200px] leading-10 p-2'>
                <li className='submenu-item hover:bg-green-400 hover:text-white rounded-xl'
                  onClick={() => {
                    const target = document.getElementById("IranianSofa");
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" });
                    }
                  }}><a>مبل ایرانی</a></li>
                <li className='submenu-item hover:bg-green-400 hover:text-white rounded-xl'
                  onClick={() => {
                    const target = document.getElementById("KharegySofa");
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" });
                    }
                  }}><a>مبل خارجی</a></li>
                <li className='submenu-item hover:bg-green-400 hover:text-white rounded-xl'><a>مدل جدید</a></li>
                <li className='submenu-item hover:bg-green-400 hover:text-white rounded-xl'><a>پرفروش ترین ها</a></li>
                <li className='submenu-item hover:bg-green-400 hover:text-white rounded-xl'><a>پیشنهاد خریداران</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      {/* Left */}
      <div className='flex items-center  gap-2'>
        <div className='relative flex lg:hidden'>
          <IoSearchOutline className='absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-600 text-2xl' />
          <input className='h-12 w-[200px] sm:w-[300px] md:w-[400px] pl-10 pr-4 bg-slate-100 rounded-xl placeholder:text-base' type="search" placeholder='متن جستجو ...' />
        </div>
        {/* Shopping bag */}


        <div
          className='relative hidden lg:flex'
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <button onClick={handleCartClick} className='bg-[#FFC017] w-[49px] h-[49px] flex justify-center items-center rounded-xl'>
            <IoBagOutline className='text-2xl text-gray-700 relative hover:text-white duration-300' />
            <span className='bg-white text-yellow-500 rounded-full w-5 h-5 absolute text-xs mt-4 ml-4 font-bold'>{cartCount}</span>
          </button>
          {hover && <ShoppingCart />}
        </div>
        {/* Login-Register */}


        <div className='flex gap-1 md:text-lg md:gap-7'>
          {user ? (
            <div className="flex items-center gap-2">
              <Link to="/profile" className='no-underline'>
                <button className='bg-[#8ED557] h-[50px] px-4 rounded-xl flex items-center gap-2 justify-center'>
                  <AiOutlineUser className='text-xl text-gray-600' />
                  <span className='text-gray-600 font-medium text-base hover:text-white duration-300'>{user.displayName}</span>
                </button>
              </Link>
              <button onClick={handleLogout} className="bg-gray-800 text-white h-[48px] w-[40px] rounded-xl flex items-center justify-center hover:bg-red-600 duration-300">
                <IoLogOut className="text-2xl" />
              </button>
            </div>

          ) : (

            <Link to="/login" className='text-gray-600 font-normal text-base flex no-underline hover:text-white duration-500'>
              <button className='w-40 h-[50px] bg-[#8ED557] gap-2 rounded-xl flex items-center justify-center'>
                <AiOutlineUser className='text-xl' />
                ورود و عضویت
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;