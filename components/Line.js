import React from "react";

const Line = ({ right, left }) => {
  return (
    <div className=" border-slate-300	border-b flex justify-between ">
      <span className="border-b-[#7251A2] border-b-[3px] text-xl 	pb-5	font-semibold	text-black">
        {right}
      </span>
      {left ? <span className="text-[#7251A2]"> {left}</span> : ""}
    </div>
  );
};

export default Line;
