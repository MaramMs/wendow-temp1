import UnauthorizedLayout from '@/components/UnauthorizedLayout'
import { FacebookFilled, FacebookOutlined, InstagramFilled, InstagramOutlined, LinkedinFilled, LinkedinOutlined, TwitterOutlined, TwitterSquareFilled } from '@ant-design/icons'
import React from 'react'

const unauthorized = () => {
  return (
    <UnauthorizedLayout >
    <div className='bg-white w-[690px] h-[517px] flex flex-col items-center pt-[70px]'>
      <img src='/images/logo.png' className='w-[54px] h-[64px] mb-[20px]' />
      <span className='text-[18px] font-bold text-[#7251A2] mb-[50px]'> Wendow App</span>
      <h3 className='text-[#7B5DA8] font-bold text-[34px] mb-[30px]'>Coming Soon ...</h3>
      <p className='text-[16px] font-normal text-[#1a1a1a] mb-[50px]'>The store is temporarily closed, it will be fixed shortly </p>
      <hr className='w-[200px] h-1  bg-gradient-to-r from-purple-600 to-purple-200 mb-[30px]' />

      <ul className='flex gap-[20px]'>
        <li>
        <FacebookFilled className='text-[35px] text-[#7B5DA8] border-0'/>
        </li>
        <li>
        <InstagramFilled className='text-[35px] text-[#7B5DA8] border-0'/>
        </li>
        <li>
        <TwitterSquareFilled className='text-[35px] text-[#7B5DA8] border-0'/>
        </li>
        <li>
        <LinkedinFilled className='text-[35px] text-[#7B5DA8] border-0' />
        </li>
      </ul>
         
    </div>
   </UnauthorizedLayout>
  )
}

export default unauthorized