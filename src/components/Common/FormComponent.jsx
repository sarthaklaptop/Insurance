import React, { useState, useEffect } from 'react';
import { RxCross2 } from "react-icons/rx";
import Button from './Button';


const FormComponent = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setIsVisible(true);
        }, 4000); // 15 seconds
    
        return () => clearTimeout(timeoutId);
    }, []);

  return (
    <>
      {isVisible && (
        <div className="h-96 w-80 transition-all top-0 bg-[#F7C85A] flex-col justify-center gap-2 flex p-10 rounded-lg relative">
          <div className='absolute top-6 right-6 cursor-pointer ' onClick={toggleVisibility}>
            <RxCross2 />
          </div>
          <div className='text-center'>
            <p className='text-3xl font-semibold'>FLAT 15% OFF</p>
            <p className='text-xl text-gray-800'>Enter your details and win a coupon worth 15% OFF</p>
          </div>
          <form action="" className='flex flex-col gap-2 items-start justify-start'>
            <label htmlFor="email" className='text-black font-semibold text-lg'>Email</label>
            <input id='email' type="email" placeholder='Enter your email' className='text-black p-2 rounded-lg flex flex-col'/>
            <label htmlFor="mobNumber" className='text-black font-semibold text-lg'>Mobile Number</label>
            <input id='mobNumber' type="email" placeholder='Enter your Number' className='text-black p-2 rounded-lg flex flex-col'/>
            <button className=' flex  mt-4'>
              <div className={`cursor-pointer mx-auto hover:bg-[#a98632] transition-all hover:text-white bg-white py-4 px-2 w-full font-bold text-center rounded-md`}>
                <p >Register Now at ₹499</p>
              </div>
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default FormComponent;
