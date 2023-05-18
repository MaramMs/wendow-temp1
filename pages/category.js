import CardProduct from "@/components/CardProduct";
import CustomPagination from "@/components/CustomPagination";
import CustomeRang from "@/components/CustomeRang";
import FilterModal from "@/components/FilterModal";
import Wrapper from "@/components/Wrapper";
import useWindowSize from "@/hooks/useWindowSize";
import { Col, Row } from "antd";
import React, { useState } from "react";
import { FiFilter } from "react-icons/fi";

const category = () => {
  const { width } = useWindowSize();
  const isMobile = width <= 768;
  const [modal, setShowModal] = useState(false);

  const showModal = () => {
    setShowModal(true);
  };

  console.log(modal);
  return (
    <>
      <div>
        <img
          src="/images/cat-lap.png"
          width="100%"
          className="py-20 max-sm:py-0"
          height="100%"
        />
      </div>

      <Wrapper>
        <Row
          gutter={{
            lg: 24,
            xxl: 0,
            md: 8,
            sm: 8,
          }}
        >
            <Row className="md:mb-[264px]">
              <Col span={24} md={24}>
                <img src="/images/black-lap.png" />
              </Col>
            </Row>
          <Col span={24} md={{ span: 18 }}>
            {isMobile && (
              <div className="flex justify-center items-center  mt-[33px] mb-[26px] bg-[#FBF8FF] rounded-[8px] mr-auto w-[59px] h-[58px]">
                <FiFilter
                  className="text-[18px] text-[#7251A2] cursor-pointer"
                  onClick={showModal}
                />
              </div>
            )}

            {modal && <FilterModal setShowModal={setShowModal} modal={modal} />}

          

            <Row
              gutter={{
                lg: 24,
                xxl: 0,
                sm: 8,
                xs: 16,
              }}
              className="px-[15px]"
            >
              <Col span={12} className="gutter-row" md={{ span: 8 }}>
                <CardProduct />
              </Col>
              <Col span={12} className="gutter-row" md={{ span: 8 }}>
                <CardProduct />
              </Col>
              <Col span={12} className="gutter-row" md={{ span: 8 }}>
                <CardProduct />
              </Col>

              <Col span={12} className="gutter-row" md={{ span: 8 }}>
                <CardProduct />
              </Col>
              <Col span={12} className="gutter-row" md={{ span: 8 }}>
                <CardProduct />
              </Col>
              <Col span={12} className="gutter-row" md={{ span: 8 }}>
                <CardProduct />
              </Col>

              <Col span={12} className="gutter-row" md={{ span: 8 }}>
                <CardProduct />
              </Col>
              <Col span={12} className="gutter-row" md={{ span: 8 }}>
                <CardProduct />
              </Col>
              <Col span={12} className="gutter-row" md={{ span: 8 }}>
                <CardProduct />
              </Col>
            </Row>

            <CustomPagination />
          </Col>

          <Col md={{ span: 6 }} className="max-sm:hidden">
            <CustomeRang />

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


      <div className="bg-gradient-to-b from-purple-600 to-teal-400 h-[796px] md:mt-[216px] flex justify-center items-center">
 ads
      </div>
          </Col>
        </Row>
      </Wrapper>
    </>
  );
};

export default category;
