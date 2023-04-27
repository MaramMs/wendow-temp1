import CardProduct from "@/components/CardProduct";
import CustomPagination from "@/components/CustomPagination";
import CustomTabs from "@/components/CustomTabs";
import MobileProductDetails from "@/components/MobileProductDetails";
import MostProductCard from "@/components/MostProductCard";
import ProductDetails from "@/components/ProductDetails";
import Wrapper from "@/components/Wrapper";
import useWindowSize from "@/hooks/useWindowSize";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React from "react";

const index = () => {
  const { width } = useWindowSize();
  const isMobile = width <= 768;
  return (
    <>
      {isMobile ? (
        <MobileProductDetails />
      ) : (
        <>
          <ProductDetails />
          <CustomTabs />
          <Wrapper>
            <div className="flex justify-between border-b-[#E1E1E1] border-b-[1px] mb-[49px] max-[575px]:px-2 max-[575px]:mx-2">
              <span className="text-[ #323232] text-[20px] font-[600] border-b-[#67C6B0] border-b-[3px] pb-2">
                The Same Product
              </span>
              <span className="flex gap-5 items-center">
                <RightOutlined className="text-[#67c6b0]" />
                <LeftOutlined className="text-[#424242] " />
              </span>
            </div>
            <Row
              gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              }}
              className="max-[575px]:px-5"
            >
              <Col className="gutter-row" lg={6} sm={6}>
                <CardProduct />
              </Col>
              <Col className="gutter-row" lg={6} sm={6}>
                <CardProduct />
              </Col>
              <Col className="gutter-row" lg={6} sm={6}>
                <CardProduct />
              </Col>
              <Col className="gutter-row" lg={6} sm={6}>
                <CardProduct />
              </Col>
            </Row>

            <CustomPagination />
          </Wrapper>
        </>
      )}
    </>
  );
};

export default index;
