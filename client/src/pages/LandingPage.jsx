import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CustomButton, FormField } from '../components'
import { crowdfund } from '../assets'

const LandingPage = () => {

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    window.location.replace('https://thirdweb.com/');
    
  }

  return (
      <div>
        <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px] my-8">
        <h1 className="font-epilogue font-bold sm:text[25x] text-[18px] leading-[38px] text-white">About Us </h1>
        
      </div>
      <div className="w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px] my-10">
           
            <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">We provide an open decentralized plaform where users can create their own campaigns and interested donators can fund them via cryptocurrencies!</h4> 
          </div>
        <div>
        {/* <img src = { crowdfund } alt="crowdfund" className = "flex h-half w-full bg-blue-400 justify-center items-center "/> */}
        </div>
        

        <div className="w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px] my-10">
           
           <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">Users only need their metamask account to make your own campaigns in just one click! That's right.</h4> 
         </div>
       <div>
       </div>

        <div className="flex justify-center items-center mt-[40px]"> 
            <CustomButton
              btnType="submit"
              title="Check Out thirdweb Explorer"
              styles="bg-[#1dc071]"
              handleClick = { handleClick }
            />
            
          </div>
      
      </div>
  )
}

export default LandingPage