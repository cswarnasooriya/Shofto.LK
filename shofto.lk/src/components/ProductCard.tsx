import React from 'react'
import Image from 'next/image';

interface propsType{
    img:string;
    title:string;
    desc:string;
    rating:number;
    price:string;
}

const ProductCard : React.FC<propsType> = ({
    img,title,desc,rating,price,
}) =>{
    return(
        <div className="pt-4 border border-gray-200 rounded-xl max-w-[400px]">
            <div>
                <Image
                
                    className="w-full h-auto"
                    src={img}
                    width={200}
                    height={300}
                    alt={title}
                
                />
            </div>

            <div className="space-y-2 py-2">
            <h2 className="text-accent font-medium uppercase">{title}</h2>
                <p className="text-gray-500 max-w-[150px]">{desc}</p>
            </div>
        </div>
    )
    
}

export default ProductCard
