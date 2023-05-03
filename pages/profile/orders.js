import React from 'react'
import { Col, Row } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const orders = () => {
  return (
    <div className="h-[999px] px-[20px]">
    <h1 className="mt-[75px] pb-[7px]">Orders</h1>
    <Row className="border-t-[#EAF0EF] items-center border-t-[1px] py-[30px]">
      <Col span={8} className="flex items-center gap-[21px]">
        <CloseOutlined />
        <img
          src="/images/products/product1.png"
          width="78px"
          height="78px"
        />
      </Col>

      <Col span={8}>
        <div className="flex items-center">
          <span className="w-[7px] h-[7px] bg-[#F5CA48] rounded-full"></span>
          <span className="text-[#000] font-medium text-[10px]">
            In Processing
          </span>
        </div>
        <div className="flex flex-col gap-[3px]">
          <h3 className="text-[#000] text-[14px] font-medium">Phone</h3>
          <span className="text-[#ACACAC] text-[12px] font-medium">
            $50
          </span>
          <span className="text-[#ACACAC] text-[12px] font-medium">
            sku:#123
          </span>
        </div>
      </Col>

      <Col span={8}>
        <p className="text-[#8A8A8A] text-[12px] font-normal">
          maram@gmail.com
        </p>
        <p className="text-[#8A8A8A] text-[12px] font-normal">
          +9278963445
        </p>
        <p className="text-[#8A8A8A] text-[12px] font-normal">
          Palestine - Gaza
        </p>
        <p className="text-[#8A8A8A] text-[12px] font-normal">KhnYouins</p>
      </Col>
    </Row>

    <Row className="border-t-[#EAF0EF] items-center border-t-[1px] py-[30px]">
      <Col span={8} className="flex items-center gap-[21px]">
        <CloseOutlined />
        <img
          src="/images/products/product1.png"
          width="78px"
          height="78px"
        />
      </Col>

      <Col span={8}>
        <div className="flex items-center">
          <span className="w-[7px] h-[7px] bg-[#F5CA48] rounded-full"></span>
          <span className="text-[#000] font-medium text-[10px]">
            In Processing
          </span>
        </div>
        <div className="flex flex-col gap-[3px]">
          <h3 className="text-[#000] text-[14px] font-medium">Phone</h3>
          <span className="text-[#ACACAC] text-[12px] font-medium">
            $50
          </span>
          <span className="text-[#ACACAC] text-[12px] font-medium">
            sku:#123
          </span>
        </div>
      </Col>

      <Col span={8}>
        <p className="text-[#8A8A8A] text-[12px] font-normal">
          maram@gmail.com
        </p>
        <p className="text-[#8A8A8A] text-[12px] font-normal">
          +9278963445
        </p>
        <p className="text-[#8A8A8A] text-[12px] font-normal">
          Palestine - Gaza
        </p>
        <p className="text-[#8A8A8A] text-[12px] font-normal">KhnYouins</p>
      </Col>
    </Row>

  </div>
  )
}

export default orders 