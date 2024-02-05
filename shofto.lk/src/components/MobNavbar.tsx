import React from 'react'
import { IoMenuOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi2";
import { PiSquaresFourLight } from "react-icons/pi";


const MobNavbar = () => {
  return (
    <div className="lg:hidden fixed bottom-0 w-full bg-white left-[50%] -translate-x-[50%] max-w-[500px] mob_navbar px-8">
        <div className="flex justify-between text-[28px] py-2">
            <IoMenuOutline/>
            <div className="relative">
                <FiShoppingBag/>
                <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
                    0
                </div>
            </div>
            <HiOutlineHome/>
            <div className="relative">
                <CiHeart/>

                <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
                    0
                </div>
            </div>
            <PiSquaresFourLight />

        </div>
      
    </div>
  )
}

export default MobNavbar
