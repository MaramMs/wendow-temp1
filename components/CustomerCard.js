import { Card, Image } from "antd";
import React from "react";

const CustomerCard = () => {
  return (
    <div className="border flex  justify-between  border-[#EBEBEB] w-[379px] h-[221px]  py-10 px-10">
      <div className="before:absolute ">
        <img src="/images/before.png" />
      </div>
      <div className="flex flex-col justify-center items-center gap-4 py-10">
        <img
          src="/images/person.png"
          className="object-cover w-[66px] h-[66px] rounded-full relative"
        />

        <p className="text-center	text-[14px] text-black w-[267px] ">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit
          amet mollis sapien. Sed placerat justo quis nisl semper, nec
        </p>
        <span className="text-[#7251A2] text-[12px] font-semibold	">
          m.m.maram
        </span>
      </div>
    </div>
  );
};

export default CustomerCard;
