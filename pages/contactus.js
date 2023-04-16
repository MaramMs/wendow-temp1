import Wrapper from "@/components/Wrapper";
import { Button, Col, Form, Input,Row,Space } from "antd";
import React from "react";

const Contact = () => {
  return (
    <Wrapper>
    <div className="flex flex-col justify-center  px-[190px]">

    <h1 className="text-[#000] text-[24px] font-semibold">contact us</h1>
      <p className="text-[#acacac] text-[12px] font-light w-[562px] mt-2 break-words mb-[51px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        tincidunt turpis non tellus bibendum, vel euismod nibh varius. Maecenas
        rutrum orci eu est posuere, vitae semper quam molestie. Sed efficitur
        purus id eros congue sollicitudin.{" "}
      </p>
      <Form
  name="normal_login"
  className="login-form relative"
  initialValues={{
    remember: true,
  }}
  // onFinish={onFinish}
>


<Row
 gutter={{
  lg:16,
  xl:50,
  xxl:8
 }}
>
    <Col xs={{ span: 22 }} sm={{ span: 20 }} md={{ span: 12}} lg={{ span: 9}} xl={{span:15}} xxl={{span:11}}>

<Form.Item
    name="username"
    rules={[
      {
        required: true,
        message: "Please input your Username!",
      },
    ]}
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
  >
    <label className="text-[#ACACAC] text-[10px] font-normal mb-[12px]">
      Full Name
    </label>
    <Input className="w-[376px] h-[60px] bg-[#fafafa] mt-[12px] border-[#eee]" />
  </Form.Item>


 
    </Col>
    <Col xs={{ span: 22 }} sm={{ span: 20 }} md={{ span: 12 }} lg={{ span: 10}} xl={{span:9}} xxl={{span:10}}>
    <Form.Item
    name="phone"
    rules={[
      {
        required: true,
        message: "Please input your phone number!",
      },
    ]}
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
  >
   
      <label className="text-[#ACACAC] text-[10px] font-normal mb-[12px]">
        Phone Number
      </label>
      <Input className="w-[376px] h-[60px] bg-[#fafafa] mt-[12px] border-[#eee]" />
   
  </Form.Item>
    </Col>
</Row>

<Row>
    <Col span={24}>
    <Form.Item
    name="intro"
    rules={[
      {
        required: true,
        message: "Please input Intro",
      },
    ]}
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
  >
    <label className="text-[#ACACAC] text-[10px] font-normal mb-[12px]">
      Massage
    </label>
    <Input   className="w-[781px] h-[147px] bg-[#fafafa] mt-[12px] border-[#eee]" />
  </Form.Item>
    </Col>
</Row>



  <Form.Item className="flex justify-center items-center">
    <Button
      type="primary"
      htmlType="submit"
      className="login-form-button bg-[#67C6B0] w-[376px] h-[54px] text-white text-[12px] font-medium mt-[43px]"
    >
      Send
    </Button>
  </Form.Item>
</Form>
    </div>
    </Wrapper>
  );
};

export default Contact;
