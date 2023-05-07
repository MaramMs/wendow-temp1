import Wrapper from "@/components/Wrapper";
import { Button, Checkbox, Col, Form, Input, Row, Table } from "antd";
import React from "react";

const payment = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];
  return (
    <Wrapper>
      <Row span={24} gutter={[40, 40]}>
        <Col span={24} md={{ span: 12 }}>
        <h1 className="text-[#000] font-semibold text-[24px]">Contact</h1>
          <Form
            name="normal_login"
            className="login-form relative max-[575px]:px-[1px] max-[575px]:w-[100%] mt-[40px]"
            initialValues={{
              remember: true,
            }}
            // onFinish={onFinish}
          >
            <Row gutter={[28, 12]}>
              <Col span={24} md={{ span: 12 }}>
                <Form.Item
                  name="firstname"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username!",
                    },
                  ]}
                >
                  <label className="text-[#ACACAC] text-[10px] font-normal mb-[12px] block">
                    First Name
                  </label>
                  <Input className=" h-[60px] bg-[#fafafa]  border-[#eee] " />
                </Form.Item>
              </Col>
              <Col span={24} md={{ span: 12 }}>
                <Form.Item
                  name="lastname"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                
                >
                  <label className="text-[#ACACAC] text-[10px] font-normal mb-[12px] block">
                    Last Name
                  </label>
                  <Input className=" h-[60px] bg-[#fafafa]  border-[#eee] " />
                </Form.Item>
              </Col>

              <Col span={24} md={{ span: 12 }}>
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username!",
                    },
                  ]}
                >
                  <label className="text-[#ACACAC] text-[10px] font-normal mb-[12px] block">
                    Email
                  </label>
                  <Input className=" h-[60px] bg-[#fafafa]  border-[#eee] " />
                </Form.Item>
              </Col>
              <Col span={24} md={{ span: 12 }}>
                <Form.Item
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                  // labelCol={{ span: 24 }}
                  // wrapperCol={{ span: 24 }}
                >
                  <label className="text-[#ACACAC] text-[10px] font-normal mb-[12px] block">
                    Phone
                  </label>
                  <Input className=" h-[60px] bg-[#fafafa]  border-[#eee] " />
                </Form.Item>
              </Col>

              <Col span={24} md={{ span: 12 }}>
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username!",
                    },
                  ]}
                  // labelCol={{ span:  24}}
                  // wrapperCol={{ span: 24}}
                >
                  <label className="text-[#ACACAC] text-[10px] font-normal mb-[12px] block">
                    Address
                  </label>
                  <Input className=" h-[60px] bg-[#fafafa]  border-[#eee] " />
                </Form.Item>
              </Col>

              <Col span={24} md={{ span: 12 }}>
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username!",
                    },
                  ]}
                  // labelCol={{ span:  24}}
                  // wrapperCol={{ span: 24}}
                >
                  <label className="text-[#ACACAC] text-[10px] font-normal mb-[12px] block">
                    Post
                  </label>
                  <Input className=" h-[60px] bg-[#fafafa]  border-[#eee] " />
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username!",
                    },
                  ]}
                  // labelCol={{ span:  24}}
                  // wrapperCol={{ span: 24}}
                >
                  <label className="text-[#ACACAC] text-[10px] font-normal mb-[12px] block">
                    Notes
                  </label>
                  <Input   className=" h-[104px] bg-[#fafafa]  border-[#eee] max-[575px]:w-[324px]" />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
      name="agree"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    //   className="md:mt-[191px] md:mb-[137px]"
    >
      <Checkbox>I agree to the payment and warranty policy</Checkbox>
    </Form.Item>
            <Form.Item className="flex justify-end items-center">
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button bg-[#67C6B0] md:w-[478px] md:h-[48px] text-white text-[12px] font-medium mt-[43px] w-full"
              >
                Save
              </Button>
            </Form.Item>
          </Form>
        </Col>

        <Col span={24} md={{ span: 12 }}>
          <Row className="flex-col ">
            <Col>
              <Table
                dataSource={dataSource}
                columns={columns}
                pagination={false}
              />

              <div className="flex justify-between items-center md:mb-[35px]">
                <span className="text-[16px] text-[#acacac] font-medium">
                  Fax
                </span>
                <span className="text-[16px] text-[#000] font-medium">0$</span>
              </div>
              <div className="flex justify-between item md:mb-[35px]">
                <span className="text-[16px] text-[#acacac] font-medium">
                  Total{" "}
                </span>
                <span className="text-[#67C6B0] font-medium text-[16px]">
                  150$
                </span>
              </div>
            </Col>

            <Col>
              <h2 className="text-[#000] text-[16px] font-medium md:mb-[30px]">
                Choose payment
              </h2>
              <Row gutter={[21, 33]}>
                <Col md={{ span: 12 }}>
                  <div className="bg-[#F8F8F8] rounded-[8px] border border-[#e8e8e8] flex justify-center items-center h-[85px]">
                    <img src="/images/visa.png" />
                  </div>
                </Col>
                <Col md={{ span: 12 }}>
                  <div className="bg-[#F8F8F8] rounded-[8px] border border-[#e8e8e8] flex justify-center items-center h-[85px]">
                    <img src="/images/visa.png" />
                  </div>
                </Col>
                <Col md={{ span: 12 }}>
                  <div className="bg-[#F8F8F8] rounded-[8px] border border-[#e8e8e8] flex justify-center items-center h-[85px]">
                    <img src="/images/visa.png" />
                  </div>
                </Col>
                <Col md={{ span: 12 }}>
                  <div className="bg-[#F8F8F8] rounded-[8px] border border-[#e8e8e8] flex justify-center items-center h-[85px]">
                    <img src="/images/visa.png" />
                  </div>
                </Col>
                <Col span={24}>
                  <div className="bg-[#F8F8F8] rounded-[8px] border border-[#e8e8e8] flex justify-center items-center h-[85px]">
                    <p className="text-[16px] font-medium text-[#67C6B0]">
                      Transfer
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default payment;
