"use client"

import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => {
  
    var settings = {
      dots: true,
      infinite:true,
      slideToShow:1,
      slideToScroll:1,
      autoplay:true,
      pauseOnHover:false,
    };

    const slideData = [
      {
        id:0,
        img:"/banner-1.jpg",
        title:"Trending Item",
        mainTitle:"WOMEN'S LATEST FASHION SALE",
        price:"LKR 5,500",
      },
      {
        id:1,
        img:"/banner-2.jpg",
        title:"Trending Accessories",
        mainTitle:"MODERN SUNGLASSES",
        price: "LKR 6,000",
      },
      {
        id:2,
        img:"/banner-3.jpg",
        title:"Sale Offer",
        mainTitle:"MEN FASHION SUMMER SALE",
        price:"LKR 4,250",
      },
    ];
    return (
      <div>
        <div className="container pt-6 lg:pt-0">
          <Slider {...settings}>
            {slideData.map((item) =>(
              <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
              
              
              
              />
            ))}
          
          </Slider>
        </div>
      </div>
  )
}

export default Hero
