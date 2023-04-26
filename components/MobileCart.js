import { CloseOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import React from 'react'

const MobileCart = () => {
  return (
   <Row >
    <Col span={24 } className=' h-[140px] mb-[15px] bg-[#FAFAFA] px-[19px] py-[20px] relative'>
    <CloseOutlined className='absolute left-[15px] top-[15px] text-[#7251A2]' />
     <div className='card flex'>
        <img src='/images/products/cart-product.png'/>
     <div className='flex flex-col gap-[19px]' >
        <h1 className='text-[#ACACAC] text-[12px] font-medium'>the product name</h1>
        <div className="border border-[#E8E8E8] w-[101px] h-[38px] flex justify-between items-center px-5">
           <span className="cursor-pointer">+</span>
           <span className="">1</span>
           <span className="cursor-pointer">-</span>
           </div>
<span className='text-[#67C6B0] text-[12px] font-medium'> 60$</span>

     </div>

     </div>
    </Col>

    <Col span={24} className=' h-[140px]  mb-[15px] bg-[#FAFAFA] px-[19px] py-[20px] relative'>
    <CloseOutlined className='absolute left-0 top-0 text-[#7251A2] left-[15px] top-[15px]' />
     <div className='card flex'>
        <img src='/images/products/cart-product.png'/>
     <div className='flex flex-col gap-[19px]' >
        <h1 className='text-[#ACACAC] text-[12px] font-medium'>the product name</h1>
        <div className="border border-[#E8E8E8] w-[101px] h-[38px] flex justify-between items-center px-5">
           <span className="cursor-pointer">+</span>
           <span className="">1</span>
           <span className="cursor-pointer">-</span>
           </div>
<span className='text-[#67C6B0] text-[12px] font-medium'> 60$</span>

     </div>

     </div>
    </Col>

    <Col span={24} className=' h-[140px] mb-[15px] bg-[#FAFAFA] px-[19px] py-[20px] relative'>
    <CloseOutlined className='absolute left-0 top-0 text-[#7251A2] left-[15px] top-[15px]' />
     <div className='card flex'>
        <img src='/images/products/cart-product.png'/>
     <div className='flex flex-col gap-[19px]' >
        <h1 className='text-[#ACACAC] text-[12px] font-medium'>the product name</h1>
        <div className="border border-[#E8E8E8] w-[101px] h-[38px] flex justify-between items-center px-5">
           <span className="cursor-pointer">+</span>
           <span className="">1</span>
           <span className="cursor-pointer">-</span>
           </div>
<span className='text-[#67C6B0] text-[12px] font-medium'> 60$</span>

     </div>

     </div>
    </Col>

    <Col span={24} className=' h-[140px]  mb-[15px] bg-[#FAFAFA] px-[19px] py-[20px] relative'>
    <CloseOutlined className='absolute left-0 top-0 text-[#7251A2] left-[15px] top-[15px]' />
     <div className='card flex'>
        <img src='/images/products/cart-product.png'/>
     <div className='flex flex-col gap-[19px]' >
        <h1 className='text-[#ACACAC] text-[12px] font-medium'>the product name</h1>
        <div className="border border-[#E8E8E8] w-[101px] h-[38px] flex justify-between items-center px-5">
           <span className="cursor-pointer">+</span>
           <span className="">1</span>
           <span className="cursor-pointer">-</span>
           </div>
<span className='text-[#67C6B0] text-[12px] font-medium'> 60$</span>

     </div>

     </div>
    </Col>
   
   </Row>
  )
}

export default MobileCart
