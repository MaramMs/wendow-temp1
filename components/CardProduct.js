import {
  EditOutlined,
  EllipsisOutlined,
  EyeOutlined,
  HeartOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Image } from "antd";
const { Meta } = Card;
const CardProduct = () => (
  <div className="w-[278px] max-sm:w-[172px] max-sm:h-[240px] h-383px border-[#D7D7D7] border flex flex-col p-5 max-sm:p-2 rounded-[8px] mb-10">
    <HeartOutlined className="flex justify-start text-[#FF8282] text-base" />
    <img
      alt="phone"
      src="/images/product1.png"
      className="flex justify-center items-center w-[182px] h-[245px] object-cover max-sm:w-[108px] max-sm:h-[145px] m-auto"
    />
    <div className="flex justify-between items-center ">
      <div>
        <span className="text-[#ACACAC] text-[10px] font-light max-sm:text-[8px]	">phones</span>
        <h2 className="font-normal	text-base	text-black max-sm:text-[12px]">product names</h2>
        <span className="max-sm:hidden">
          <Image src="/images/moon.svg" />
          <Image src="/images/moon.svg" />
          <Image src="/images/moon.svg" />
          <Image src="/images/moon.svg" />
        </span>
        <span className="text-[#ACACAC] mr-2 text-[10px] font-light max-sm:hidden">5.0</span>
      </div>

      <div className="w-[40px] h-[40px] bg-[#D5D5D5] flex justify-center items-center rounded-full max-sm:w-[34px] max-sm:h-[34px]">
        <ShoppingCartOutlined className="text-[#fff] text-[20px]" />
      </div>
    </div>

    <div className="flex justify-between items-center ">
      <span className="text-[#7251A2] font-normal text-base max-sm:text-[12px]">200$</span>
      <EyeOutlined className="text-[#ACACAC] text-[19px] ml-3 max-sm:hidden" />
    </div>
  </div>
);
export default CardProduct;
