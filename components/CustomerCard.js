import { Card, Image } from "antd";
import React from "react";

export const CustomerCard = () => {
  return (
    <div className="border flex  justify-between  border-[#EBEBEB] w-[379px] h-[221px]  py-10 px-10 max-sm:w-[358px] max-sm:h-[221px] mb-10 rounded-[8px]">
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



export const CustomCard = ()  => {
return (
  <div className="flex flex-col justify-center items-center gap-4 mb-5">
  <div className="rounded-full bg-[#67C6B0]  w-[124px] h-[124px] flex justify-center items-center">
    <img src="/images/icon.png" />
  </div>
  <h2 className="font-medium text-xl	">customer</h2>
  <p className="text-center text-[#ACACAC] text-base	w-[325px]">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet
    mollis sapien. Sed placerat justo quis nisl semper, nec
  </p>
</div>
)
}
