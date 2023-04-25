import CardProduct from '@/components/CardProduct'
import CustomPagination from '@/components/CustomPagination'
import CustomeRang from '@/components/CustomeRang'
import Wrapper from '@/components/Wrapper'
import { Col, Row } from 'antd'
import React from 'react'

const category = () => {
  return (
<>
<div

  >
  <img src='/images/cat-lap.png'width='100%' className='py-20' height='100%'/>
  </div>


    <Wrapper>
     <Row  gutter={{
            lg:24,
            xxl:0,
            md:8,
            sm:8
           }}>
        <Col lg={{span:20}} xxl={{span:20}}>
           <img src='/images/black-lap.png' className='mb-[32px]'/>

           <Row  gutter={{
            lg:24,
            xxl:0,
            sm:8,
            xs:16
           }} 
           className='px-[15px]'
           >
            <Col className="gutter-row" lg={{span:8}} xxl={{span:7}}>
            <CardProduct />
            </Col>
            <Col className="gutter-row" lg={{span:8}} xxl={{span:7}}> 
            <CardProduct />
            </Col>
            <Col className="gutter-row" lg={{span:8}} xxl={{span:7}}>
            <CardProduct />
            </Col>

            <Col className="gutter-row" lg={{span:8}} xxl={{span:7}}>
            <CardProduct />
            </Col>
            <Col className="gutter-row" lg={{span:8}} xxl={{span:7}}> 
            <CardProduct />
            </Col>
            <Col className="gutter-row" lg={{span:8}} xxl={{span:7}}>
            <CardProduct />
            </Col>


            <Col className="gutter-row" lg={{span:8}} xxl={{span:7}}>
            <CardProduct />
            </Col>
            <Col className="gutter-row" lg={{span:8}} xxl={{span:7}}> 
            <CardProduct />
            </Col>
            <Col className="gutter-row" lg={{span:8}} xxl={{span:7}}>
            <CardProduct />
            </Col>
           </Row>

           <CustomPagination />
        </Col>

        <Col lg={{span:4}} xxl={{span:4}} className='max-sm:hidden'>
         <CustomeRang />
        </Col>
     </Row>
    </Wrapper>
</>
  )
}

export default category
