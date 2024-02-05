import ProductCard from './ProductCard';
import React from 'react';

const productsData =[
    {
        img:"/jacket-1.jpg",
        title:"Jacket Decor",
        desc:"MEN Tarn Fleece Full-Zip Jacket",
        rating:4,
        price:"LKR 6,800",
        oldPrice:"LKR 8,500",
    },
    {
        img:"/jacket-2.jpg",
        title:"Jacket MenQ",
        desc:"MEN cool and flex Jacket",
        rating:5,
        price:"LKR 5,800",
        oldPrice:"LKR 6,500",
    },
    {
        img:"/skirt-1.jpg",
        title:"Flex Skirt",
        desc:"WOMEN Full-Zip Jacket",
        rating:3,
        price:"LKR 4,800",
        oldPrice:"LKR 5,500",
    },
    {
        img:"/shirt.jpg",
        title:"Long H-Shirt",
        desc:"MEN Gapping Full-Zip Jacket",
        rating:4,
        price:"LKR 6,800",
        oldPrice:"LKR 7,300",
    },
    {
        img:"/party-wear-1.jpg",
        title:"High Heels",
        desc:"High heels for WOMEN as featured",
        rating:5,
        price:"LKR 5,200",
        oldPrice:"LKR 8,500",
    },

    {
        img:"/watch-1.jpg",
        title:"Touch Altra",
        desc:"Branded Full-Zip watch",
        rating:3,
        price:"LKR 3,600",
        oldPrice:"LKR 4,900",
    },
    {
        img:"/watch-2.jpg",
        title:"Mini-Watch",
        desc:"Smart displayed casual",
        rating:3,
        price:"LKR 2,800",
        oldPrice:"LKR 4,200",
    },
];

const NewProducts = () => {
  return (
    <div>
        <div className="container pt-16">
            <h2 className="font-medium text-2xl pb-4">
                New Products
            </h2>

            <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
                {productsData.map((item, index) =>(
                    <ProductCard
                        key={index}
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                        rating={item.rating}
                        price={item.price}
                        oldPrice={item.oldPrice}
                    
                    
                    />
                ))}
            </div>
        </div>
      
    </div>
  )
}

export default NewProducts
