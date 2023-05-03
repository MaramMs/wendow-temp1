import { Button, Col, Form, Input, Row } from 'antd'
import React from 'react'

const settings = () => {
  return (
    <Row>
 <Col span={24}>
 <Form>
  <Form.Item>
    <label>First Name</label>
    <Input type='text'/>
  </Form.Item>

  <Form.Item>
    <label>Last Name</label>
    <Input type='text'/>
  </Form.Item>

  <Form.Item>
    <Button>Save</Button>
    <Button>Cancel</Button>
  </Form.Item>
 </Form>
 </Col>

    </Row>
  )
}

export default settings