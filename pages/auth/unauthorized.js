import UnauthorizedLayout from '@/components/UnauthorizedLayout'
import { FacebookFilled, FacebookOutlined, InstagramFilled, InstagramOutlined, LinkedinFilled, LinkedinOutlined, TwitterOutlined, TwitterSquareFilled } from '@ant-design/icons'
import React from 'react'

const unauthorized = () => {
  return (
    <UnauthorizedLayout >
    <div className='bg-white md:w-[690px] md:h-[517px] flex flex-col items-center md:pt-[70px] w-[335px] h-[344px] pt-[20px] '>
      <img src='/images/logo.png' className='w-[54px] h-[64px] md:mb-[20px]' />
      <span className='text-[18px] font-bold text-[#7251A2] md:mb-[50px] mb-[30px]'> Wendow App</span>
      <h3 className='text-[#7B5DA8] font-bold md:text-[34px] md:mb-[30px] text-[20px] mb-[30px]'>Coming Soon ...</h3>
      <p className='text-[16px] font-normal text-[#1a1a1a] md:mb-[50px] mb-[30px] w-[295px] text-center md:w-[344px] '>The store is temporarily closed, it will be fixed shortly </p>
      <hr className='w-[200px] h-1  bg-gradient-to-r from-purple-600 to-purple-200 md:mb-[30px] mb-[10px]' />

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