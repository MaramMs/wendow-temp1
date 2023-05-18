import { Modal } from 'antd'
import React from 'react'
import CustomeRang from './CustomeRang';

const FilterModal = ({setShowModal,modal}) => {
    const handleOk = () => {
        setShowModal(false);
      };
      const handleCancel = () => {
        setShowModal(false);
      };
  return (
    <Modal title="Filter" open={modal} onOk={handleOk} onCancel={handleCancel}>
      <div>
        <CustomeRang />
      </div>

    <>
    <h3 className='mt-[27px] mb-[18px]'>Category by <span>Branding</span></h3>
      <div className='flex flex-wrap gap-[6px]'>
        <div className='rounded-[8px] w-[69px] h-[35px] flex justify-center items-center border border-[#67C6B0]'>
            <img src='/images/apple.png'/>
        </div>

        <div className='rounded-[8px] w-[69px] h-[35px] flex justify-center items-center border border-[#67C6B0]'>
            <img src='/images/apple.png'/>
        </div>

        <div className='rounded-[8px] w-[69px] h-[35px] flex justify-center items-center border border-[#67C6B0]'>
            <img src='/images/apple.png'/>
        </div>

        <div className='rounded-[8px] w-[69px] h-[35px] flex justify-center items-center border border-[#67C6B0]'>
            <img src='/images/apple.png'/>
        </div>

        <div className='rounded-[8px] w-[69px] h-[35px] flex justify-center items-center border border-[#67C6B0]'>
            <img src='/images/apple.png'/>
        </div>

        <div className='rounded-[8px] w-[69px] h-[35px] flex justify-center items-center border border-[#67C6B0]'>
            <img src='/images/apple.png'/>
        </div>

        <div className='rounded-[8px] w-[69px] h-[35px] flex justify-center items-center border border-[#67C6B0]'>
            <img src='/images/apple.png'/>
        </div>
        <div className='rounded-[8px] w-[69px] h-[35px] flex justify-center items-center border border-[#67C6B0]'>
            <img src='/images/apple.png'/>
        </div>
        

      </div>
    </>
      <>
        
<h3 className='mt-[27px] mb-[18px]'>Category by <span>category</span></h3>
<div className='flex flex-wrap gap-[7px] '>
  <div className='flex border border-[#ACACAC] rounded-[8px]  h-[44px] p-[10px]'>
<img src='/images/filter-category-im.png'/>
<span className='text-[12px] text-[#ACACAC]'>Product Name</span>
  </div>

  <div className='flex border border-[#ACACAC] rounded-[8px] h-[44px] p-[10px]'>
<img src='/images/filter-category-im.png'/>
<span className='text-[12px] text-[#ACACAC]'>Product Name</span>
  </div>

  <div className='flex border border-[#ACACAC] rounded-[8px]  h-[44px] p-[10px]'>
<img src='/images/filter-category-im.png'/>
<span className='text-[12px] text-[#ACACAC]'>Product Name</span>
  </div>

  <div className='flex border border-[#ACACAC] rounded-[8px]  h-[44px] p-[10px]'>
<img src='/images/filter-category-im.png'/>
<span className='text-[12px] text-[#ACACAC]'>Product Name</span>
  </div>
</div>
      </>
  </Modal>
  )
}

export default FilterModal
