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
  const [modal ,setShowModal] = useState(false)

  const showModal = () =>{
    setShowModal(true);
   
  }

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
          <Col lg={{ span: 20 }} xxl={{ span: 20 }}>
            <img
              src="/images/black-lap.png"
              className="mb-[32px] max-sm:px-[17px]"
            />
            {isMobile && (
              <div className="flex justify-center items-center  mt-[33px] mb-[26px] bg-[#FBF8FF] rounded-[8px] mr-auto w-[59px] h-[58px]">
                <FiFilter className="text-[18px] text-[#7251A2] cursor-pointer" onClick={showModal}/>
              </div>

            )
            
           
            }

            {
              modal && <FilterModal setShowModal={setShowModal} modal={modal}/>
            }

  
            <Row
              gutter={{
                lg: 24,
                xxl: 0,
                sm: 8,
                xs: 16,
              }}
              className="px-[15px]"
            >
              <Col className="gutter-row" lg={{ span: 8 }} xxl={{ span: 7 }}>
                <CardProduct />
              </Col>
              <Col className="gutter-row" lg={{ span: 8 }} xxl={{ span: 7 }}>
                <CardProduct />
              </Col>
              <Col className="gutter-row" lg={{ span: 8 }} xxl={{ span: 7 }}>
                <CardProduct />
              </Col>

              <Col className="gutter-row" lg={{ span: 8 }} xxl={{ span: 7 }}>
                <CardProduct />
              </Col>
              <Col className="gutter-row" lg={{ span: 8 }} xxl={{ span: 7 }}>
                <CardProduct />
              </Col>
              <Col className="gutter-row" lg={{ span: 8 }} xxl={{ span: 7 }}>
                <CardProduct />
              </Col>

              <Col className="gutter-row" lg={{ span: 8 }} xxl={{ span: 7 }}>
                <CardProduct />
              </Col>
              <Col className="gutter-row" lg={{ span: 8 }} xxl={{ span: 7 }}>
                <CardProduct />
              </Col>
              <Col className="gutter-row" lg={{ span: 8 }} xxl={{ span: 7 }}>
                <CardProduct />
              </Col>
            </Row>

            <CustomPagination />
          </Col>

          <Col lg={{ span: 4 }} xxl={{ span: 4 }} className="max-sm:hidden">
            <CustomeRang />
          </Col>
        </Row>
      </Wrapper>
    </>
  );
};

export default category;
