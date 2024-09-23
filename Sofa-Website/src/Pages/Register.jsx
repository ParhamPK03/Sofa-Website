 
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/Firebase';
import Logo from "../assets/Images/Logo/logo.png";
import swal from "sweetalert";

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      swal("خطا", "رمز عبور و تکرار آن یکی نیست", "error");
      return;
    }
    
    if (password.length < 8 || password.length > 14) {
      swal("خطا", "رمز عبور باید بین 8 تا 14 کاراکتر باشد", "error");
      return;
    }
    
    if (username.length < 6) {
      swal("خطا", "نام کاربری باید حداقل 6 کاراکتر باشد", "error");
      return;
    }
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, {
        displayName: username
      });
      navigate("/");
    } catch (error) {
      swal("خطا", "خطایی رخ داده است. لطفاً مجدداً تلاش کنید", "error");
    }
  };
  return (
    <div className='bg-gradient-to-b from-[#203A43] w-[100%] to-[#0F2027] h-[110vh]'>
      <div>
        <div className='flex justify-center'>
          <Link to="/">
            <img className='mt-10 w-28 cursor-pointer' src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className='bg-slate-200 w-[400px] h-full p-4 mx-auto mt-10 rounded-xl'>
          <h5 className='flex justify-center pt-5 text-xl font-bold text-black'>ثبت نام</h5>
          <div className='flex mx-auto'>
            <input
              type="text"
              placeholder='نام کاربری'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='w-[300px] h-[40px] mx-auto rounded-xl mt-10 placeholder:text-black focus:bg-yellow-300/50 pr-5 border-2 outline-none border-[#FFC017]'
            />
          </div>
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
          <div className='flex mx-auto'>
            <input
              type="password"
              placeholder='تکرار رمز عبور'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className='w-[300px] h-[40px] mx-auto rounded-xl mt-10 placeholder:text-black focus:bg-yellow-300/50 pr-5 border-2 outline-none border-[#FFC017]'
            />
          </div>
          <div>
            <button
              className='px-16 py-2 bg-[#FFC017] hover:text-white hover:bg-gray-700 duration-300 text-gray-700 text-base font-semibold flex mt-10 mx-auto rounded-xl'
              onClick={handleRegister}
            >
              ثبت نام
            </button>
          </div>
          <hr/>
          <div className='mt-10 flex items-center'>
            <Link to="/login" className='no-underline mr-2 text-black cursor-pointer'>
              قبلاً حساب کاربری دارید؟ <span className='text-blue-600'>ورود</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
