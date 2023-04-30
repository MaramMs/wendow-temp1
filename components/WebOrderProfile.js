import { CloseOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React from "react";

const WebOrderProfile = () => {
  return (
    <div className="h-[999px]">
      <h1 className="mt-[75px] pb-[7px]">Orders</h1>
      <Row className="border-t-[#EAF0EF] items-center border-t-[1px] py-[30px]">
        <Col span={8} className="flex items-center gap-[21px]">
          <CloseOutlined />
          <img
            src="/images/products/product1.png"
            width="101px"
            height="101px"
          />
          <div className="flex flex-col gap-[3px]">
            <h3 className="text-[#000] text-[16px] font-medium">Phone</h3>
            <span className="text-[#ACACAC] text-[16px] font-medium">$50</span>
            <span className="text-[#ACACAC] text-[14px] font-medium">sku:#123</span>
          </div>
        </Col>

        <Col span={8}>
          <div className="flex items-center">
            <span className="w-[11px] h-[11px] bg-[#F5CA48] rounded-full"></span>
            <span className="text-[#000] font-medium text-[16px]">In Processing</span>
          </div>
        </Col>

        <Col span={8}>
          <p className="text-[#8A8A8A] text-[14px] font-normal">maram@gmail.com</p>
          <p className="text-[#8A8A8A] text-[14px] font-normal">+9278963445</p>
          <p className="text-[#8A8A8A] text-[14px] font-normal">Palestine - Gaza</p>
          <p className="text-[#8A8A8A] text-[14px] font-normal">KhnYouins</p>
        </Col>
      </Row>

      <Row className="border-t-[#EAF0EF] items-center border-t-[1px] py-[30px]">
        <Col span={8} className="flex items-center gap-[21px]">
          <CloseOutlined />
          <img
            src="/images/products/product1.png"
            width="101px"
            height="101px"
          />
          <div className="flex flex-col gap-[3px]">
            <h3 className="text-[#000] text-[16px] font-medium">Phone</h3>
            <span className="text-[#ACACAC] text-[16px] font-medium">$50</span>
            <span className="text-[#ACACAC] text-[14px] font-medium">sku:#123</span>
          </div>
        </Col>

        <Col span={8}>
          <div className="flex items-center">
            <span className="w-[11px] h-[11px] bg-[#F5CA48] rounded-full"></span>
            <span className="text-[#000] font-medium text-[16px]">In Processing</span>
          </div>
        </Col>

        <Col span={8}>
          <p className="text-[#8A8A8A] text-[14px] font-normal">maram@gmail.com</p>
          <p className="text-[#8A8A8A] text-[14px] font-normal">+9278963445</p>
          <p className="text-[#8A8A8A] text-[14px] font-normal">Palestine - Gaza</p>
          <p className="text-[#8A8A8A] text-[14px] font-normal">KhnYouins</p>
        </Col>
      </Row>
    </div>
  );
};

export default WebOrderProfile;
