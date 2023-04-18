import { Button, Col, Row } from "antd";
import React from "react";
import Wrapper from "./Wrapper";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const ProductDetails = () => {
  return (
    <Wrapper>
      <Row gutter={[28, 28]} className="max-[575px]:px-5">
        <Col
          xs={{ span: 24 }}
          sm={{ span: 20 }}
          md={{ span: 24 }}
          lg={{ span: 4 }}
          className="max-[575px]:ps-0"
        >
          <div className="flex flex-col max-[575px]:flex-row max-[575px]:gap-[16px] ">
            <div className=" w-[174px] h-[146px] mb-[19px] ">
              <img
                src="/images/products/product1.png"
                className="object-cover  w-[174px] h-[146px] "
              />
            </div>

            <div className=" w-[174px] h-[146px] mb-[19px]">
              <img
                src="/images/products/product1.png"
                className="object-cover  w-[174px] h-[146px]"
              />
            </div>

            <div className=" w-[174px] h-[146px] mb-[19px]">
              <img
                src="/images/products/product1.png"
                className="object-cover  w-[174px] h-[146px]"
              />
            </div>
          </div>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 20 }}
          md={{ span: 24 }}
          lg={{ span: 10}}
        >
        <div className="w-[477px] h-[477px] max-[575px]:w-[353px] max-[575px]:h-[353px]">
        <img src="/images/products/product1.png" className="w-[477px] h-[477px] max-[575px]:w-[353px] max-[575px]:h-[353px]" />
        </div>
        </Col>
        <Col
          xs={{ span: 22 }}
          sm={{ span: 20 }}
          md={{ span: 24 }}
          lg={{ span: 8}}
        >
          <div className="flex flex-col ">
            <span className="flex items-center gap-3 text-[#ACACAC] text-[10px] cursor-pointer mb-[29px]"><HeartOutlined />Add to heart</span>
            
            <h1 className="text-[20px] font-semibold text-black mb-4">Product Name</h1>
            <p className="w-[376px] h-[47] break-words text-[#ACACAC] text-[12px] mb-4">
              details about product Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed finibus libero et tortor posuere lacinia
            </p>
            <span className="text-[24px] text-[#67C6B0] font-[500] mb-4">60$</span>
            <div className="flex gap-5 mb-[27px]">
           <div className="border border-[#E8E8E8] w-[101px] h-[38px] flex justify-between items-center px-5">
           <span className="cursor-pointer">+</span>
           <span className="">1</span>
           <span className="cursor-pointer">-</span>
           </div>
           <Button type="primary"  size='large' className="bg-[#67C6B0] w-[193px] h-[38px] rounded-[4px] text-[12px] font-[500] text-white items-center">
           <ShoppingCartOutlined />
        Add to cart
          </Button>
            </div>
            <hr className="mb-[17px]"/>
             <p className="text-[#323232] font-normal text-[12px] mb-[6px]">code product : <span className="text-[#ACACAC] text-[12px]">NKU-3256</span></p>
             <p className="text-[#323232] font-normal text-[12px] mb-[6px]"> Category: <span className="text-[#ACACAC] text-[12px]">Electronic</span></p>
             <p className="text-[#323232] font-normal text-[12px] mb-[6px]">Brand of : <span className="text-[#ACACAC] text-[12px]">Lenovo</span></p>
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default ProductDetails;
