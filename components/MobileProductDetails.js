import React from 'react'
import { Button, Carousel } from 'antd'
import { HeartOutlined, ShoppingCartOutlined, ZoomInOutlined } from '@ant-design/icons'

const MobileProductDetails = () => {
  return (
    <>
    <div className='px-5 relative'>
      <span className='absolute top-[19px] left-[32px] bg-white w-[37px] h-[37px] flex justify-center items-center shadow-[0px_0px_4px_rgba(0,0,0,0.1)] z-10'><ZoomInOutlined className='text-[#D4D4D4] cursor-pointer'/></span>
    <Carousel>
      <img src='/images/products/product1.png'/>
      <img src='/images/products/product1.png'/>
      <img src='/images/products/product1.png'/>
    </Carousel>
    </div>
  

<div className="flex flex-col px-5 mt-[72px]">
<div className='flex justify-between  items-center'>
<h1 className="text-[20px] font-semibold text-black mb-4">Product Name</h1>
<div className="border border-[#E8E8E8] w-[101px] h-[38px] flex justify-between items-center px-5">
<span className="cursor-pointer">+</span>
<span className="">1</span>
<span className="cursor-pointer">-</span>
</div>

</div>
<p className="w-[376px] h-[47] break-words text-[#ACACAC] text-[12px] mb-4">
  details about product Lorem ipsum dolor sit amet, consectetur
  adipiscing elit. Sed finibus libero et tortor posuere lacinia
</p>

<ul className='list-disc text-red-500 text-lg px-5'>
  <li className="text-[#323232] font-normal text-[12px] mb-[6px]">
    the product code : <span className="text-[#ACACAC] text-[12px]">123456</span>
  </li>
  <li className="text-[#323232] font-normal text-[12px] mb-[6px]">
     the category : <span className="text-[#ACACAC] text-[12px]">clothes</span>
  </li>
  <li className="text-[#323232] font-normal text-[12px] mb-[6px]">
    brand of : <span className="text-[#ACACAC] text-[12px]">zara</span>
  </li>
</ul>
<span className="text-[24px] text-[#67C6B0] font-[500] mb-4 mr-auto">60$</span>

<lable className='text-[14px] text-[#000] font-semibold'>product description</lable>
<p className="w-[385px] h-[49] break-words text-[#ACACAC] text-[12px] mb-4">

details about product Lorem ipsum dolor sit amet, consectetur
  adipiscing elit. Sed finibus libero et tortor posuere lacinia
</p>

</div>

<div className="flex  justify-between items-center bg-white  h-[67px] px-[32px] shadow-[0px_3px_24px_1px_rgba(0,0,0,0.05)] mt-[44px]">
<Button type="primary"  size='large' className="bg-[#67C6B0] w-[283px] h-[38px] rounded-[4px] text-[12px] font-[500] text-white items-center">
<ShoppingCartOutlined />
Add to cart
</Button>
<HeartOutlined className='text-[26px] text-[#ACACAC]'/>
</div>



    </>
  )
}

export default MobileProductDetails
