import { Button, Col, Form, Input, Row } from "antd";
import React from "react";

const WebContactProfile = () => {
  return (
    <div className="px-[15px]">
      <h3 className="text-[#000] text-[16px] font-medium relative w-[471px] pb-[7px] mt-[75px]">
        Personal Data
        <span className="after:absolute after:inset-x-0 after:bottom-0 after:h-[1px] after:bg-[#EAF0EF]" />
      </h3>

      <Row>
        <Col  span ={24} md={{span:12}}>
          <Form
            name="normal_login"
            className="login-form relative max-[575px]:px-[1px] max-[575px]:w-[100%] mt-[40px]"
            initialValues={{
              remember: true,
            }}
            // onFinish={onFinish}
          >
            <Row gutter={[16, 16]}>
              <Col span ={24}md={{ span: 12 }} >
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
                    E-mail
                  </label>
                  <Input className=" h-[60px] bg-[#fafafa] mt-[12px] border-[#eee] " />
                </Form.Item>
              </Col>
              <Col span={24} md={{ span: 12 }} >
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
                  <Input className=" h-[60px] bg-[#fafafa] mt-[12px] border-[#eee] " />
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
                    Country
                  </label>
                  <Input className=" h-[60px] bg-[#fafafa] mt-[12px] border-[#eee] " />
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
                    City
                  </label>
                  <Input className=" h-[60px] bg-[#fafafa] mt-[12px] border-[#eee] " />
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
                  <Input className=" h-[60px] bg-[#fafafa] mt-[12px] border-[#eee] " />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item className="flex justify-end items-center">
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button bg-[#67C6B0] md:w-[108px] md:h-[48px] text-white text-[12px] font-medium mt-[43px] w-full"
              >
                Save
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default WebContactProfile;
