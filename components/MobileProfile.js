import { DownOutlined, EditOutlined, LockFilled, LockOutlined, UserOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const MobileProfile = () => {
  const {query} = useRouter(); 
  const tab = query.tab || 'profile'
  
  return (
 <>
    <div className='flex justify-center items-center w-[119px] h-[119px]  m-auto mb-[111px] relative'>
    <img src='/images/person/profile.png' className='rounded-full w-[119px] h-[119px] object-cover'/>
    <span className='w-[22px] h-[22px] bg-[#67C6B0] flex justify-center items-center rounded-full absolute right-[12px] bottom-0 p-4 cursor-pointer'>
    <EditOutlined className='text-white '/>
    </span>
    </div>
    <Row className='px-5 bg-white mb-[72px]'>
     
       <Col span={24} className='flex justify-between h-[53px] px-[16px] items-center rounded-[4px] bg-white drop-shadow-[0_2px_30px_rgba(0,0,0,0.15)] mb-[15px]'>
         <div className='flex gap-[23px] items-center ' >
         <UserOutlined className='text-[#67C6B0] text-[17.52px]'/>
 <span className='text-[#67C6B0] text-[14px] font-normal'>My Profile</span>
         </div>
         <DownOutlined  className='text-[#67C6B0]'/>
       </Col>


       <Col span={24} className='flex justify-between h-[53px] px-[16px] items-center rounded-[4px] bg-white drop-shadow-[0_2px_30px_rgba(0,0,0,0.15)] mb-[15px]'>
         <div className='flex gap-[23px] items-center'>
         <UserOutlined className='text-[#67C6B0] text-[17.52px]'/>
 <span className='text-[#67C6B0] text-[14px] font-normal' onClick={() => router.push('/profile/orders')}>My Orders</span>
         </div>
         <DownOutlined  className='text-[#67C6B0]'/>
       </Col>



       <Col span={24} className='flex justify-between h-[53px] px-[16px] items-center rounded-[4px] bg-white drop-shadow-[0_2px_30px_rgba(0,0,0,0.15)] mb-[15px]'>
         <div className='flex gap-[23px] items-center'>
         <UserOutlined className='text-[#67C6B0] text-[17.52px]'/>
 <span className='text-[#67C6B0] text-[14px] font-normal'>Contact</span>
         </div>
         <DownOutlined  className='text-[#67C6B0]'/>
       </Col>


       <Col span={24} className='flex justify-between h-[53px] px-[16px] items-center rounded-[4px] bg-white drop-shadow-[0_2px_30px_rgba(0,0,0,0.15)] mb-[15px]'>
         <div className='flex gap-[23px] items-center'>
         <LockFilled  className='text-[#67C6B0] text-[17.52px]'/>
 <span className='text-[#67C6B0] text-[14px] font-normal'>Password</span>
         </div>
         <DownOutlined  className='text-[#67C6B0]'/>
       </Col>


    </Row>
 </>
  )
}

export default MobileProfile