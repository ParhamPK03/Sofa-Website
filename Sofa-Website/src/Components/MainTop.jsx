import Moble from "../assets/Images/Body/pngwing.com3_.png";
import { BiLeftArrowCircle } from "react-icons/bi";
import MobleRahaty from "../assets/Images/Body/pngwing.com9_.png";
import Typewriter from "typewriter-effect";
import Swal from 'sweetalert2';


const MainTop = () => {


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
    <div>
    {/* Top Main */}
        <div className='mt-20 lg:mt-24 h-[90%] sm:h-[300px] md:h-[260px]  lg:h-[380px] bg-gradient-to-b from-[#203A43] w-[100%] to-[#0F2027] rounded-3xl inline-block sm:flex'>
            <div><img className='sm:-mt-1 md:-mt-20 2xl:-mt-36' src={Moble} alt="Moble" /></div>
            <div className=' mt-6 lg:mt-20 sm:mr-10 items-center '>
            <button className='bg-[#8ED557] mx-[30%] h-[50px]  w-[150px] sm:h-[35px] sm:w-[120px] md:h-[45px] md:w-[150px] lg:h-[60px] lg:w-[150px] rounded-2xl text-gray-700 text-xl sm:text-sm font-semibold lg:text-xl hover:text-white duration-500' onClick={handleClick}>56% تخفیف ویژه</button>
            <h2 className='text-white text-2xl lg:text-4xl w-[100%] mt-3'>



            <Typewriter
            onInit={(typeWriter) => {
              typeWriter
                .typeString("صندلی راحتی مدل ایران M25S4" )
                .start()
                .pauseFor(3000)
                .deleteAll()
            }}
            options={{
              loop: true,
            }}
          />


          
            </h2>
            <p className='text-gray-300 mt-2 lg:mt-4 w-[95%] '>برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
            <p className='text-white text-base flex items-center gap-1 justify-end ml-20 cursor-pointer'>مشاهده محصول<BiLeftArrowCircle  className='text-xl' /></p>
            </div> 
        </div>



        {/* Bottom Main */}

        <div className='block md:flex gap-5 mt-5'>

        {/* Right */}

          <div className='bg-Body-Room-Img rounded-3xl md:w-[550px] h-[300px] p-5 2xl:w-[100%] mb-4 sm:mb-0'>
             <h3 className='text-white text-3xl lg:text-4xl font-normal'>مبلمان راحتی</h3>
             <p className='text-white text-3xl lg:text-4xl font-bold mt-3'>50% تخفیف</p>
             <button className='text-gray-600 font-semibold bg-[#8ED557] py-3 px-4 rounded-2xl text-lg mt-5 hover:text-white duration-500' onClick={handleClick}>جزییات بیشتر</button>
          </div>

          {/* Left */}
           
       
          <div className='bg-Body-LivingRoom-Img  rounded-3xl md:w-[730px] h-[300px] 2xl:w-[100%] justify-center sm:flex sm:justify-between p-5'>
          <div className='w-3/5 relative'>
          <h3 className='text-white text-2xl xl:text-4xl lg:w-[380px] w-[300px] sm:text-xl md:text-2xl lg:text-3xl font-normal absolute -mt-10 -mr-4'>مبلمان چستر ایرانی جدید</h3>
            <p className='text-gray-200 md:w-[280px] xl:w-full xl:mt-6 md:text-xl hidden sm:block text-sm sm:text-lg sm:mt-3 absolute mt-10'>برای تغییر این متن بر روی دکمه ویرایش کلیک کنید. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
            <button className='text-gray-600 absolute font-semibold lg:mt-[170px] bg-[#FFC017] w-[170px] h-[40px] sm:w-[190px] sm:h-[60px] sm:mt-[160px] rounded-2xl text-lg mt-[204px] mr-5 sm:mr-0 hover:text-white duration-500' onClick={handleClick}>جزییات بیشتر مبل</button>
           
          </div>
          <div className='w-[190px]  flex -mt-5 mr-2'> <img src={MobleRahaty} alt="Moble" className='sm:w-full block md:hidden lg:flex' /></div>
          </div>
                 
        </div>
    </div>
  )
}

export default MainTop