import React from 'react'

interface propsType {
    img: string;
    title: string;
    mainTitle: string;
    price:string;
}

const Slide:React.FC<propsType> = ({img,title,mainTitle,price}) => {
  return (
    <div className="outline-none border-none relative">
        <div className="absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
            <h3 className="text-accent text-[24px] lg:text-[28px]"></h3>
        </div>
      
    </div>
  )
}

export default Slide
