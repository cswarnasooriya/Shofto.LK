import React from 'react'
import { FaFacebook,FaInstagram, FaLinkedin  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";




const HeaderTop = () => {
  return (
    <div className="border-b border-gray-300 hidden sm:block">
        <div className="container py-4">
            <div className='flex justify-between items-center'>
                <div className="hidden lg:flex gap-1">
                    <div className="header_top__icon_wrapper">
                      <FaFacebook />
                    </div>

                    <div className="header_top__icon_wrapper">
                      <FaXTwitter  />
                    </div>

                    <div className="header_top__icon_wrapper">
                      <FaInstagram />
                    </div>

                    <div className="header_top__icon_wrapper">
                      <FaLinkedin  />
                    </div>

                </div>

                <div className='text-gray-500 text-[12px]'>
                  <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - $55
                </div>

                <div className='flex gap-4'>
                  <select 
                    className='text-gray-500 text-[12px] w-[70px]'
                    name="currency" 
                    id="currency">

                      <option value="USD">LKR</option>
                      <option value="LKR">USD $</option>
                      <option value="USD">INR</option>
                      <option value="USD">EUR</option>


                  </select>

                  <select 
                    className='text-gray-500 text-[12px] w-[70px]'
                    name="languages" 
                    id="languages">

                      <option value="English">English</option>
                      <option value="French">French</option>
                      <option value="Tamil">Tamil</option>
                      


                  </select>
                </div>

            </div>



        </div>
            
     
    </div>
  )
}

export default HeaderTop
