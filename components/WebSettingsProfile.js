import { Button, Col, Form, Input, Row, Space } from 'antd'
import React from 'react'

const WebSettingsProfile = () => {
  return (
    <div className="flex flex-col   px-[16px] md:px-0 md:mt-[75px]">
       <h3 className="text-[#000] text-[16px] font-medium relative  pb-[7px] mb-[53px] ">
            Password
            <span className="after:absolute after:inset-x-0 after:bottom-0 after:h-[1px] after:bg-[#EAF0EF]" />
          </h3>

     <Row>
      <Col md={{span:7}}>
      <Form
          name="normal_login"
          className="login-form mt-[127px] md:mt-[22px]"
          initialValues={{
            remember: true,
          }}
          // onFinish={onFinish}
        >
          <Form.Item
            name="currentpassword"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            className="md:w-[380px]"
           
          >
            <Input.Password
              placeholder="a current password"
              className="  h-[54px]  bg-black border border-[#eee]"
              style={{ backgroundColor: "#FAFAFA" }}
            />
          </Form.Item>

          <Form.Item
            name="newpassword"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            className="md:w-[380px]"

          >
            <Input.Password
              placeholder="a new password"
              className="  h-[54px] bg-[#FAFAFA]  border border-[#eee]"
              style={{ backgroundColor: "#FAFAFA" }}
            />
          </Form.Item>

          <Form.Item
            name="confirmpassword"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            className="md:w-[380px]"

          >
            <Input.Password
              placeholder="confirm a new password"
              className="  h-[54px] bg-[#FAFAFA]  border border-[#eee]"
              style={{ backgroundColor: "#FAFAFA" }}
            />
          </Form.Item>
  
          <Form.Item className='flex justify-end items-center gap-[13px]' >
        <Button type="primary" htmlType="submit" className='w-[108px] h-[48px] text-[#67C6B0]'>
          Cancel
        </Button>
        <Button htmlType="button" className='bg-[#67C6B0] w-[108px] h-[48px] text-white' >
          Save
        </Button>
      
      </Form.Item>
        </Form>
      </Col>
     </Row>
      </div>
  )
}

export default  WebSettingsProfile