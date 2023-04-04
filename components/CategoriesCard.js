import { BarsOutlined, LeftOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Image from "next/image";
import React from "react";

const CategoriesCard = () => {
  return (
    <div className="w-[278px] h-[393px] bg-[#FCFCFC] border border-[#D7D7D7] ">
      <div className="flex justify-between items-center bg-[#7251A2] p-2">
        <span className="text-white">Category </span>
        <BarsOutlined className="text-white" />
      </div>
      <ul className="bg-white pt-4 px-5">
        <li className="flex justify-between items-center mb-4 border-b-[0.5px] border-[#E4E4E4] pb-5">
          <div className="flex gap-2">
            <Image src='/images/phone-.svg' width='14' height='25'/>
          catergory
          </div>
          <LeftOutlined className="text-[#67C6B0]"/>
        </li>

        <li className="flex justify-between items-center mb-4 border-b-[0.5px] border-[#E4E4E4] pb-5">
          <div className="flex gap-2">
            <Image src='/images/phone-.svg' width='14' height='25'/>
          catergory
          </div>
          <LeftOutlined className="text-[#67C6B0]"/>
        </li>

        <li className="flex justify-between items-center mb-4 border-b-[0.5px] border-[#E4E4E4] pb-5">
          <div className="flex gap-2">
            <Image src='/images/phone-.svg' width='14' height='25'/>
          catergory
          </div>
          <LeftOutlined className="text-[#67C6B0]"/>
        </li>

        <li className="flex justify-between items-center mb-4 border-b-[0.5px] border-[#E4E4E4] pb-5">
          <div className="flex gap-2">
            <Image src='/images/phone-.svg' width='14' height='25'/>
          catergory
          </div>
          <LeftOutlined className="text-[#67C6B0]"/>
        </li>
        <li className="flex justify-between items-center mb-4 border-b-[0.5px] border-[#E4E4E4] pb-5">
          <div className="flex gap-2">
            <Image src='/images/phone-.svg' width='14' height='25'/>
          catergory
          </div>
          <LeftOutlined className="text-[#67C6B0]"/>
        </li>
        <li className="flex justify-between items-center  ">
          <div className="flex gap-2">
            <Image src='/images/phone-.svg' width='14' height='25'/>
          catergory
          </div>
          <LeftOutlined className="text-[#67C6B0]"/>
        </li>
      </ul>
    </div>
  );
};

export default CategoriesCard;
