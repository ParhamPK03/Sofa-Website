import React from 'react'
import { FaMapLocationDot } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa";
import FooterLogo from "../assets/Images/Body/newlogo12.png"
import  Mojavez from "../assets/Images/Body/enamad.png"
import { FaInstagram } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { RiTelegramLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='w-[86%] mx-auto mt-36'>
        {/* Top Footer */}
        <div className='flex justify-between items-center bg-[#0F2027] min-h-[76px] px-4 rounded-t-xl'>
            <div className='flex items-center gap-3 text-white'><FaMapLocationDot className='text-xl'/><h5 className='lg:text-lg md:text-lg text-sm'>ایران-شهر-رشت-خیابان مطهری-کوچه حسام-ساختمان پرهام</h5></div>
            <div><button className='py-2.5 px-4 bg-[#FFC017] text-gray-800 rounded-xl font-medium flex gap-3 items-center hover:text-white duration-300'> <FaHeadphones />تماس با پشتیبانی</button></div>
        </div>
        {/* Center Footer */}
        <div className='bg-gradient-to-b from-[#203A43] w-[100%] to-[#0F2027] flex justify-center gap-2 m-auto flex-wrap  px-5 rounded-b-xl pb-5'>
        {/* 1 */}
            <div className='flex flex-col items-center'>
                <h4 className='font-medium text-xl mt-5 text-white'><span className='text-green-400'>درباره</span> ما</h4>
                <span className='border-b-[1px] border-green-400 w-[415px] mt-2'></span>
                <div><img className='mt-4' src={FooterLogo} alt="Logo" /></div>
                <div><button className='px-16 py-2.5 mt-4 bg-[#FFC017] text-gray-800 rounded-xl font-medium hover:text-white duration-300'>ایران-خیابان 14253674859615357595</button></div>
                <h6 className='mt-4 text-white w-[380px]'>برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید</h6>
            </div>
            {/* 2 */}
            <div className='flex flex-col items-center'>
            <h4 className='font-medium text-xl mt-5 text-white'>منو ما</h4>
            <span className='border-b-[1px] border-green-400 w-[246px] mt-2'></span>
            <div className='text-base'>
                <ul className='mt-4 leading-7'>
                    <li><a href="" className='no-underline text-white hover:bg-green-400 duration-300 rounded-full p-1'>مبل های ایرانی</a></li>
                    <li><a href="" className='no-underline text-white hover:bg-green-400 duration-300 rounded-full p-1'>مبل های خارجی</a></li>
                    <li><a href="" className='no-underline text-white hover:bg-green-400 duration-300 rounded-full p-1'>مبل های جدید</a></li>
                    <li><a href="" className='no-underline text-white hover:bg-green-400 duration-300 rounded-full p-1'>پرفروش ترین ها</a></li>
                    <li><a href="" className='no-underline text-white hover:bg-green-400 duration-300 rounded-full p-1'>جدید ترین محصولات</a></li>
                    <li><a href="" className='no-underline text-white hover:bg-green-400 duration-300 rounded-full p-1'>پیشنهاد خریداران</a></li>
                </ul>
            </div>
            </div>
            {/* 3 */}
            <div className='flex flex-col items-center'>
            <h4 className='font-medium text-xl mt-5 text-white'>لینک های سریع</h4>
            <span className='border-b-[1px] border-green-400 w-[282px] mt-2'></span>
            <div className='text-base'>
                <ul className='mt-4 leading-7'>
                    <li><a href="" className='no-underline text-white hover:bg-green-400 duration-300 rounded-full p-1'>مبل</a></li>
                    <li><a href="" className='no-underline text-white hover:bg-green-400 duration-300 rounded-full p-1'>صندلی</a></li>
                    <li><a href="" className='no-underline text-white hover:bg-green-400 duration-300 rounded-full p-1'>میز</a></li>
                    <li><a href="" className='no-underline text-white hover:bg-green-400 duration-300 rounded-full p-1'>میز عسلی</a></li>
                    <li><a href="" className='no-underline text-white hover:bg-green-400 duration-300 rounded-full p-1'>صندلی کودک</a></li>
                    <li><a href="" className='no-underline text-white hover:bg-green-400 duration-300 rounded-full p-1'>چهار پایه</a></li>
                </ul>
            </div>
            </div>
            {/* 4 */}
            <div className='flex flex-col items-center'>
            <h4 className='font-medium text-xl mt-5 text-white'>برخی از مجوزها</h4>
            <span className='border-b-[1px] border-green-400 w-[212px] mt-2'></span>
                <div className='mt-4'><img className='bg-white py-3 px-5 rounded-xl' src={Mojavez} alt="" /></div>
            </div>
        </div>
        {/* Bottom Footer */}
        <div className='flex justify-between mt-4'>
            <div className='mr-5'><h6>این سایت توسط پرهام پورخانی ساخته شده است </h6>
            </div>
            <div>
                <ul  className='flex items-center gap-1 '>
                    <li className='bg-[#0F2027] cursor-pointer hover:bg-green-400 duration-300 text-white p-2.5 rounded-md'><FaInstagram /></li>
                    <li className='bg-[#0F2027] cursor-pointer hover:bg-green-400 duration-300 text-white p-2.5 rounded-md'><FiYoutube /></li>
                    <li className='bg-[#0F2027] cursor-pointer hover:bg-green-400 duration-300 text-white p-2.5 rounded-md'><RiTelegramLine /></li>
                    <li className='bg-[#0F2027] cursor-pointer hover:bg-green-400 duration-300 text-white p-2.5 rounded-md'><FaWhatsapp /></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer