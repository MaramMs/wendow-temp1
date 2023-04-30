import Wrapper from "@/components/Wrapper";
import { Button, Form, Input } from "antd";

const resetpassword = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Wrapper>
      <div className="flex flex-col justify-center md:items-center  px-[16px] md:px-0">
        <h1 className="text-[#67C6B0] text-[20px] font-medium md:text-right">
          {" "}
          Enter a New Password
        </h1>
        <p className="text-[#797979] text-[16px] font-normal">
          Enter a strong hard-to-guess password
        </p>

        <Form
          name="normal_login"
          className="login-form mt-[127px] md:mt-[22px]"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
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

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button bg-[#67C6B0] flex justify-center items-center m-auto w-full h-[38px]"
            >
              Save
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Wrapper>
  );
};

export default resetpassword;
