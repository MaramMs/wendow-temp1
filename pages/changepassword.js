import Wrapper from '@/components/Wrapper'
import { MailFilled, MailOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import Link from 'next/link'
import React from 'react'

const changepassword = () => {
  return (
    <Wrapper>
    <div className="flex flex-col justify-center md:items-center  px-[16px] md:px-0">
      <h1 className="text-[#67C6B0] text-[20px] font-medium md:text-right">
        {" "}
        Lost your password?
      </h1>
      <p className="text-[#797979] text-[16px] font-normal text-center md:w-[378px]">
      Enter your email and a link to reset your new password will be sent to you
      </p>

      <Form
        name="normal_login"
        className="login-form mt-[127px] md:mt-[22px]"
        initialValues={{
          remember: true,
        }}
        // onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          className="md:w-[380px]"
         
        >
          <Input
            placeholder="Enter your email"
            className="  h-[54px]  bg-black border border-[#eee]"
            style={{ backgroundColor: "#FAFAFA"  }}
            prefix={<MailFilled style={{fontSize:'27px', color:'#D9D9D9'}}  />}
          />
        </Form.Item>


        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button bg-[#67C6B0] flex justify-center items-center m-auto w-full h-[38px]"
          >
            Send a link to your email
          </Button>
        </Form.Item>
      </Form>

      <div className='mt-[117px] mb-[85px]'>
        <span className='text-[#000] text-[12px] font-medium'>Back</span>
        <Link href='/' className='text-[#67C6B0] text-[12px] font-medium underline'>
            Login in
        </Link>

      </div>
    </div>
  </Wrapper>
  )
}

export default changepassword