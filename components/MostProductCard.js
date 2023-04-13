import {
  EyeOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Image } from "antd";
import React from "react";
import Wrapper from "./Wrapper";

const MostProductCard = () => {
  return (

<div className="w-[390px] h-383px flex   mb-10 justify-between max-sm:w-[170px] ">
      <img
        alt="phone"
        src="/images/product1.png"
        className="flex justify-center items-center w-[182px] h-[245px] object-cover max-sm:w-[75px] max-sm:h-[101px]"
      />
      <div className="flex justify-between items-center ">
        <div className="flex flex-col">
          <span className="text-[#ACACAC] text-[10px] font-light	max-sm:text-[8px]">
            phones
          </span>
          <h2 className="font-normal	text-[16px]	text-black max-sm:text-[12px]">
            product names
          </h2>
          <div className="flex items-center max-sm:hidden">
            <span>
              <Image src="/images/moon.svg" />
              <Image src="/images/moon.svg" />
              <Image src="/images/moon.svg" />
              <Image src="/images/moon.svg" />
            </span>
            <span className="text-[#ACACAC] mr-2 text-[10px] font-light">
              5.0
            </span>
          </div>
          <span className="text-[#7251A2] font-normal text-base max-sm:text-[12px]">
            200$
          </span>
          <div className="w-[40px] h-[40px] bg-[#D5D5D5] flex justify-center items-center rounded-full lg:hidden   max-sm:w-[21px] max-sm:h-[21px]">
            <ShoppingCartOutlined className="text-[#fff] text-[20px] max-sm:text-[10px] flex justify-center items-center" />
          </div>
        </div>
      </div>

      <div className="flex  justify-around items-center flex-col max-sm:hidden">
        <HeartOutlined className="flex justify-end text-[#FF8282] text-[30px]" />
        <EyeOutlined className="text-[#ACACAC] text-[25px]" />
        <div className="w-[40px] h-[40px] bg-[#D5D5D5] flex justify-center items-center rounded-full">
          <ShoppingCartOutlined className="text-[#fff] text-[20px]" />
        </div>
      </div>
    </div>

  );
};

export default MostProductCard;
