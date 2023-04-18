import { Button, Checkbox, Form, Input } from "antd";
import Link from "next/link";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import flags from 'react-phone-number-input/flags'

import 'react-phone-number-input/style.css'
const CustomForm = ({type}) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const [value, setValue] = useState()

  return (
    <div className="flex justify-center flex-col items-center mb-[272px] sm:px-5 xs:px-5 max-[575px]:px-5">
      <h1 className="text-[#000] text-[20px] font-semibold mb-[73px]">
        {
            type === 'login' ? 'Login ': 'Sign Up'
        }
      </h1>
      <Form
        name="normal_login"
        className="login-form  relative max-[575px]:px-[1px] max-[575px]:w-[100%]"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        {
            type === 'sign-up' && (
                <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
            
              >
                <label className="text-[#ACACAC] text-[10px] font-normal ">
                  User Name
                </label>
                <Input
                  type="text"
                  className="w-[376px] h-[60px] bg-[#fafafa] mt-[12px] border-[#eee] max-[575px]:w-[324px]"
                />
              </Form.Item>
            )
        }
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
            phone number
          </label>
          <PhoneInput
      value={value}
      onChange={setValue}
      flags={flags}
      defaultCountry="PS"
      international

      className="w-[376px] h-[60px] bg-[#fafafa] mt-[12px] border-[#eee]  max-[575px]:w-[324px]"
      />
      
        </Form.Item>
        {
            type === 'sign-up' && (
                <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
              >
                <label className="text-[#ACACAC] text-[10px] font-normal ">
                  Email
                </label>
                <Input
                  type="email"
                  className="w-[376px] h-[60px] bg-[#fafafa] mt-[12px] border-[#eee]  max-[575px]:w-[324px]"
                />
              </Form.Item>
            )
        }
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
        >
          <label className="text-[#ACACAC] text-[10px] font-normal ">
            Password
          </label>
          <Input
            type="password"
            className="w-[376px] h-[60px] bg-[#fafafa] mt-[12px] border-[#eee]  max-[575px]:w-[324px]"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button bg-[#67C6B0] w-[376px] h-[54px] text-white text-[12px] font-medium mt-[43px]  max-[575px]:w-[324px]"
          >
         {
            type === 'sign-up' ?'Sign Up' : 'Login'
         }
          </Button>
        </Form.Item>

        <div className="flex justify-between w-[376px]  max-[575px]:w-[324px]">
          <Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              className="text-[#ACACAC]"
            >
              <Checkbox className="text-[#ACACAC]">Remember me</Checkbox>
            </Form.Item>
          </Form.Item>

          <a className="login-form-forgot text-[#67C6B0]" href="">
            Forgot password ?
          </a>
        </div>
        <div className="flex items-center justify-center align-middle ">
          <Link
            className="login-form-forgot text-[#67C6B0] text-[10px]"
            href="/"
          >
            {
                type === 'sign-up' ? 'Login' :'Register Now' 
            }
          </Link>
          <span className="text-[#ACACAC] text-[10px]">
          {
                type === 'sign-up' ? 'Do have an account' :" Don't have an account "
            }
           
          </span>
        </div>
        <div class="absolute bottom-10 left-20 w-[376px] h-px bg-gray-300  max-[575px]:left-0  max-[575px]:w-[324px]"></div>
      </Form>
    </div>
  );
};

export default CustomForm;
