import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomCarousel = ({children ,title}) => {
  console.log(title == 'product' ? 2 :1);
  const settings = {
    className:'custom',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
   
    responsive: [
      {
        breakpoint: 1200, // for large screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992, // for iPads
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // for phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576, // for laps
        settings: {
          slidesToShow: title == 'product' ? 2 :1,
          slidesToScroll: title == 'product' ? 2 :1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {children.map((child, index) => (
        <div key={index}>{child}</div>
      ))}
    </Slider>
  )
}

export default CustomCarousel


