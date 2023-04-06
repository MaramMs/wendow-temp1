import React from 'react'
import Wrapper from './Wrapper'
import { Dropdown, Space } from 'antd'
import { DownOutlined, GlobalOutlined } from '@ant-design/icons'

const Language = () => {
    const items = [
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              1st menu item
            </a>
          ),
        },
    ]
  return (
    <div className='flex justify-end px-40 py-4 border-t-4 border-t-[#7251A2] border-b-2 border-b-[#EDEDED] max-sm:hidden'>
     
      <Dropdown
    menu={{
      items,
    }}

    
  >
    <a onClick={(e) => e.preventDefault()} className='text-[#ACACAC]'>
      <Space className='flex items-center justify-center'>
      <GlobalOutlined className='text-[#ACACAC] text-[18px]'/>
        Arabic
        <DownOutlined className='text-[#ACACAC]'/>
      </Space>
    </a>
  </Dropdown>
    
    </div>
  )
}

export default Language
