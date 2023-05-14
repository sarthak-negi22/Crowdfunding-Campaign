import React from 'react'
import { useState } from 'react';
import { email, phone } from '../assets';

const AboutUs = () => {
  return (
    <div>
    <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px] my-8">
        <h1 className="font-epilogue font-bold sm:text[25x] text-[18px] leading-[38px] text-white">Contact Us</h1>
      </div>

      <div className="w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]">
            <img src={email} alt={email} className="w-[40px] h-[40px] object-contain"/>
            <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">E-mail : dev.123@gmail.com</h4> 
          </div>
          <div className="w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px] my-8">
            <img src={phone} alt={phone} className="w-[40px] h-[40px] object-contain"/>
            <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">Contact : 9543267891/7898755432</h4> 
          </div>

      </div>
  );
}

export default AboutUs