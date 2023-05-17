import BankTransfer from "@/components/BankTransfer";
import Wrapper from "@/components/Wrapper";
import { Button, Checkbox, Col, Form, Input, Row, Table } from "antd";
import React, { useState } from "react";

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
  const [transfer ,setTransfer] = useState(false)
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
                  <div className="bg-[#F8F8F8] rounded-[8px] border cursor-pointer border-[#e8e8e8] flex justify-center items-center h-[85px]" onClick={() => setTransfer(!transfer)}>
                    <p className="text-[16px] font-medium text-[#67C6B0]">
                      Transfer
                    </p>
                  </div>
                </Col>
                {
                  transfer && <Col span={24}>
                  <BankTransfer />
                  </Col>
                }
              </Row>

 
            </Col>

            <Col  span={24}>
              <p className="text-[10px] text-[#000] mt-[21px] mb-[14px]">Attach a copy of the money transfer</p>
              <div className="bg-[#F1F1F1] h-[84px] rounded-[8px] border border-[#67c6b0] flex justify-center items-center">
                <Button className="bg-[#67C6B0] rounded-[8px] text-center w-[116px] text-[#fff] p-2 text-[10px]">
                  upload file
                </Button>
              </div>
            </Col>
  <Col span={24}>      
            <Form.Item
      name="agree"
      valuePropName="checked"
    
      className="mt-[35px]"
 
    >
      <Checkbox>I agree to the payment and warranty policy</Checkbox>
    </Form.Item>
          <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button bg-[#67C6B0] w-full md:h-[48px] text-white text-[12px] font-medium  "
              >
                Save
              </Button>
            </Form.Item>
          </Col>
          </Row>

 
        </Col>
      </Row>
    </Wrapper>
  );
};

export default payment;
