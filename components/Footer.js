import { Col, Row, Input, Space } from "antd";
import React from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
const { Search } = Input;

const Footer = () => {
  const onSearch = (value) => console.log(value);

  return (
    <div className=" bg-[#7251A2] border-t-[8px] border-t-[#67C6B0]">
      <Wrapper>
        <Row justify="between" align="middle" className="border-b-[1px] border-b-[#FFFFFF33] pb-2 max-sm:px-5">
          <Col xs={{ span: 22 }} sm={{ span: 20 }} md={{ span: 24 }} lg={{ span: 12}} >
            <img src="/images/logofooter.png" />
            <p className="text-[12px] text-white font-normal	break-words w-[278px] h-[78px]">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              finibus libero et tortor posuere lacinia. Maecenas volutpat
              facilisis diam id
            </p>
          </Col>
          <Col  xs={{ span: 22 }} sm={{ span: 20 }} md={{ span: 24 }} lg={{ span: 3}} >
            <ul>
              <li className="text-white text-[12px] mb-3">
                <Link href="/">category</Link>
              </li>
              <li className="text-white text-[12px] mb-3">
                <Link href="/">category</Link>
              </li>
              <li className="text-white text-[12px] mb-3">
                <Link href="/">category</Link>
              </li>
              <li className="text-white text-[12px] mb-3">
                <Link href="/">category</Link>
              </li>
            </ul>
          </Col>
          <Col  xs={{ span: 22 }} sm={{ span: 20 }} md={{ span: 24 }} lg={{ span: 3}}>
            <ul>
              <li className="text-white text-[12px] mb-3">
                <Link href="/">category</Link>
              </li>
              <li className="text-white text-[12px] mb-3">
                <Link href="/">category</Link>
              </li>
              <li className="text-white text-[12px] mb-3">
                <Link href="/">category</Link>
              </li>
              <li className="text-white text-[12px] mb-3">
                <Link href="/">category</Link>
              </li>
            </ul>
          </Col>
          <Col  xs={{ span: 22 }} sm={{ span: 20 }} md={{ span: 24 }} lg={{ span: 6}}>
            <p className="text-[10px] text-white mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
            <Space direction="vertical">
              <Search
                placeholder="input search text"
                allowClear
                enterButton="Subscribe"
                size="large"
                onSearch={onSearch}
              />
            </Space>
          </Col>
        </Row>

        <Row justify="center" align="middle" >
          <Col>
            <p className="text-white text-[10px] pt-5">copyright @wendo</p>
          </Col>
        </Row>
      </Wrapper>
    </div>
  );
};

export default Footer;
