import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row } from "antd";
import React from "react";

const WebMyProfile = () => {
  return (
    <Row className="items-center">
      <Col md={{ span: 4 }}>
        <div className="w-[144px] h-[144px]  mb-[111px] relative max-w-[100%]">
          <img
            src="/images/person/profile.png"
            className="rounded-full w-[144px] h-[144px] object-cover"
          />
          <span className="w-[22px] h-[22px] bg-[#67C6B0] flex justify-center items-center rounded-full absolute right-[12px] bottom-0 p-4 cursor-pointer">
            <EditOutlined className="text-white " />
          </span>

          <span>{/* <DeleteOutlined/> */}</span>
        </div>
      </Col>

      <Col md={{ span: 20 }}>
        <div className="py-[75px]">
          <h3 className="text-[#000] text-[16px] font-medium relative w-[471px] pb-[7px]">
            Personal Data
            <span className="after:absolute after:inset-x-0 after:bottom-0 after:h-[1px] after:bg-[#EAF0EF]" />
          </h3>
          <Form
            name="normal_login"
            className="login-form relative max-[575px]:px-[1px] max-[575px]:w-[100%] mt-[40px]"
            initialValues={{
              remember: true,
            }}
            // onFinish={onFinish}
          >
            <Row gutter={[16, 16]}>
              <Col md={{ span: 12 }} xs={24}>
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
                    First Name
                  </label>
                  <Input className=" h-[60px] bg-[#fafafa] mt-[12px] border-[#eee] max-[575px]:w-[324px]" />
                </Form.Item>
              </Col>
              <Col md={{ span: 12 }} xs={24}>
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
                    Last Name
                  </label>
                  <Input className=" h-[60px] bg-[#fafafa] mt-[12px] border-[#eee] max-[575px]:w-[324px]" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item className="flex justify-end items-center">
    <Button
      type="primary"
      htmlType="submit"
      className="login-form-button bg-[#67C6B0] w-[108px] h-[48px] text-white text-[12px] font-medium mt-[43px]"
    >
      Save
    </Button>
  </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default WebMyProfile;
