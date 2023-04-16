import CustomTable from '@/components/CustomTable'
import Wrapper from '@/components/Wrapper'
import { Button, Col, Input, Row } from 'antd'
import React from 'react'

const cart = () => {
  return (
    <Wrapper>
      <h1 className='border-b text-black text-[32px] font-normal mb-[126px] pb-[26px]'>Cart</h1>
      <Row gutter={[16,16]} className='h-[500px]'>
        <Col span={17}>
          <CustomTable />
        </Col>
        <Col span={6}>
          <div className='border border-[#D9D9D9] px-[32px] py-[36px] mb-[22px] rounded-[8px] w-[376px] h-[278px]'>
            <h2 className='text-black text-[20px] font-medium mb-[56px]'>Total Carts</h2>
            <div className='flex justify-between border-b pb-[20px]'>
           <span className='text-[#ACACAC] text-[16px] font-medium'>Total</span>
           <span className='text-[#67C6B0] text-[16px] font-semibold'>60 $</span>
            </div>
            <div className='mt-[17px]'>
            <span className='text-[#ACACAC] text-[16px] font-medium '>Code capone</span>
           <div className='flex gap-3 mt-[13px] items-center'>
           <Input className='w-[244px] h-[38px] rounded-[8px] border-[#ddd]'  />
            <Button className='bg-[#67C6B0] rounded-[8px] text-white text-[12px] font-normal'>Done</Button>
           </div>

            </div>

          </div>
          <Button className='w-[376px] h-[38px] bg-[#67C6B0] rounded-[8px] border-none text-white text-[12px] font-medium'>Complete Payment</Button>
        </Col>
      </Row>
    </Wrapper>
  )
}

export default cart
