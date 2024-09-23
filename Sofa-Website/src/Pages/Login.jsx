 
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/Firebase';
import Logo from "../assets/Images/Logo/logo.png";
import swal from "sweetalert";


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); 
    } catch (error) {
      swal("خطا","اطلاعات را به درستی وارد کنید","error")
    }
  };

  return (
    <div className='bg-gradient-to-b from-[#203A43] w-[100%] to-[#0F2027] h-[100vh]'>
      <div>
        <div className='flex justify-center'>
          <Link to="/">
            <img className='mt-10 w-28 cursor-pointer' src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className='bg-slate-200 w-[400px] h-full p-4 mx-auto mt-10 rounded-xl'>
          <h5 className='flex justify-center pt-5 text-xl font-bold text-black'>ورود به حساب کاربری</h5>
          <div className='flex mx-auto'>
            <input
              type="email"
              placeholder='ایمیل خود را وارد کنید'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-[300px] h-[40px] mx-auto rounded-xl mt-10 placeholder:text-black focus:bg-yellow-300/50 pr-5 border-2 outline-none border-[#FFC017]'
            />
          </div>
          <div className='flex mx-auto'>
            <input
              type="password"
              placeholder='رمز خود را وارد کنید'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-[300px] h-[40px] mx-auto rounded-xl mt-10 placeholder:text-black focus:bg-yellow-300/50 pr-5 border-2 outline-none border-[#FFC017]'
            />
          </div>
          <div>
            <button
              className='px-16 py-2 bg-[#FFC017] hover:text-white hover:bg-gray-700 duration-300 text-gray-700 text-base font-semibold flex mt-10 mx-auto rounded-xl'
              onClick={handleLogin}
            >
              ورود
            </button>
          </div>
          <div className='mr-5 mt-5'>
            <input type="checkbox" id="rememberMe" className='placeholder:text-black' />
            <label>مرا به خاطر بسپار</label>
          </div>
          <div className='mt-3 mr-5'><a className='cursor-pointer no-underline'>رمز عبور را فراموش کرده‌اید؟</a></div>
          <hr/>
          <div className='mt-10 flex items-center'><Link to="/register" className='no-underline mr-2 text-black cursor-pointer'>کاربر جدید هستید؟ <span className='text-blue-600'>ثبت نام</span></Link></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
