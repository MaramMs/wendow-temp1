import { Image } from "antd";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-purple-600  h-[159px] flex justify-around items-center p-5 mt-[100px] ">
      <div className="flex flex-col gap-1 ">
        <h2 className="text-white font-medium	text-2xl	">iphone 14 pro mac</h2>
        <p className="whitespace-break-spaces	w-[494px] text-white text-[12px] font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit
          amet mollis sapien. Sed placerat justo quis nisl semper, nec
          ullamcorper sapien blandit. Nullam accumsan, enim at varius suscipit,
      
        </p>
      </div>
      <Image src="/images/banar-img.png" />
    </div>
  );
};

export default Banner;
