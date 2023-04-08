import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomCarousel = ({children}) => {
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
          slidesToShow: 1,
          slidesToScroll: 1,
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


// export const MyPage = () => {
//   const cardData = [
//     { title: "Card 1", description: "Description for Card 1" },
//     { title: "Card 2", description: "Description for Card 2" },
//     { title: "Card 3", description: "Description for Card 3" },
//     { title: "Card 4", description: "Description for Card 4" },
//     { title: "Card 5", description: "Description for Card 5" },
//     { title: "Card 6", description: "Description for Card 6" },
//     { title: "Card 4", description: "Description for Card 4" },
//     { title: "Card 5", description: "Description for Card 5" },
//     { title: "Card 6", description: "Description for Card 6" },
//   ];

//   return (
//     // <Row>
//         <CustomCarousel>
//       {cardData.map((data, index) => (
//         // <Col lg={3} md={8}>
//         <CustomerCard key={index} title={data.title}>
//           {data.description}
//         </CustomerCard>
//         // </Col>
//       ))}
//     </CustomCarousel>
//       // </Row>
//   );
// };