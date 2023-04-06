import { Col, Image, Row } from "antd";
import React from "react";

const Banner = () => {
  return (
    <Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
      className="bg-gradient-to-r from-teal-500 to-purple-600  h-[176px] max-sm:h-[78px] max-sm:px-5 "
    >
      <Col sm={12} lg='6'>
        <div className="flex flex-col gap-1 p-10 max-sm:p-0">
          <h2 className="text-white font-medium	text-2xl	max-sm:text-[12px]">
            iphone 14 pro mac
          </h2>
          <p className="whitespace-break-spaces	w-[494px] text-white text-[12px] font-medium max-sm:text-[6px] max-sm:w-[133px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sit amet mollis sapien. Sed placerat justo quis nisl semper, nec
          </p>
        </div>
      </Col>
      <Col sm={12} lg='6'>
        <img src="/images/banar-img.png" className="max-sm:w-[179px] max-sm:h-[73px]" />
      </Col>
    </Row>
  );
};

export default Banner;
