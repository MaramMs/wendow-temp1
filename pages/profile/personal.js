import Wrapper from "@/components/Wrapper";
import { Button, Col, Form, Input, Row, Space } from "antd";
const personal = () => {
  return (
    <Wrapper>
      <h1 className="px-[16px] text-[#000] text-[16px] font-medium mb-[13px]">Personal Account</h1>
      <Row className="px-[16px]">
        <Col span={24}>
          <Form>
            <Form.Item>
              <span className="text-[10px] text-[#acacac] mb-[12px] block">First Name</span>
              <Input
                type="text"
                name="firstName"
                className="h-[48px] bg-[#FAFAFA] border-[#eee] border"
              />
            </Form.Item>

            <Form.Item>
            <span className="text-[10px] text-[#acacac] mb-[12px] block">Last Name</span>
              <Input
                type="text"
                name="lastName"
                className="h-[48px] bg-[#FAFAFA] border-[#eee] border"
              />
            </Form.Item>

<Form.Item
     
      className="flex justify-end	gap-[11px]"
    >
      <Space>
        <Button   className="w-[86px] h-[38px] bg-[#67C6B0] rounded-[4px] text-white">
          Save
        </Button>
        <Button  className="w-[86px] h-[38px] text-[#67C6B0] rounded-[4px] border border-[#67C6B0] bg-white">Cancel</Button>
      </Space>
    </Form.Item>
          </Form>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default personal;
