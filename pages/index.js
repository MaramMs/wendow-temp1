import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import CategoriesCard from "@/components/CategoriesCard";
import Wrapper from "@/components/Wrapper";
import { Carousel, Col, Row } from "antd";
import CardProduct from "@/components/CardProduct";
import Banner from "@/components/Banner";
import MostProductCard from "@/components/MostProductCard";
import Line from "@/components/Line";
import{CustomerCard, CustomCard } from "@/components/CustomerCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <main className="overflow-x-hidden	">
        <Wrapper>
          <Row
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 24,
            }}
          >
            <Col
              className="gutter-row "
              lg={18}
              sm={12}
            >
              <div className="flex gap-5  pb-14  ">
                <div className="flex gap-5">
                  <Card />
                  <Card />
                  <Card />
                </div>
              </div>
               <Line right='Last product' left='more' width='882px' />
            </Col>
            <Col className="gutter-row max-sm:hidden" lg={6}>
              <CategoriesCard />
            </Col>
          </Row>

          <div className="mt-12">
            <Row
              gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              }}
            >
              <Col className="gutter-row" lg={6} sm={6}>
                <CardProduct />
              </Col>
              <Col className="gutter-row" lg={6} sm={6}>
                <CardProduct />
              </Col>
              <Col className="gutter-row" lg={6} sm={6}>
                <CardProduct />
              </Col>
              <Col className="gutter-row" lg={6} sm={6}>
                <CardProduct />
              </Col>
              {/* <Col className="gutter-row" span={6}>
                <CardProduct />
              </Col>
              <Col className="gutter-row" span={6}>
                <CardProduct />
              </Col>
              <Col className="gutter-row" span={6}>
                <CardProduct />
              </Col>
              <Col className="gutter-row" span={6}>
                <CardProduct />
              </Col> */}
            </Row>
          </div>
          {/* <Banner />
          <div className="mt-[172px] ">
            <Line right='More Sale' left='more'/>
            <Row
              gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              }}
              className="pt-10"
            >
              <Col className="gutter-row " span={8}>
                <MostProductCard />
              </Col>
              <Col className="gutter-row " span={8}>
                <MostProductCard />
              </Col>

              <Col className="gutter-row " span={8}>
                <MostProductCard />
              </Col>
              <Col className="gutter-row " span={8}>
                <MostProductCard />
              </Col>
              <Col className="gutter-row " span={8}>
                <MostProductCard />
              </Col>
              <Col className="gutter-row " span={8}>
                <MostProductCard />
              </Col>
            </Row>
          </div>

          <div className="mt-[139px]">
            <Row
              gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              }}
            >
              <Col span={12} className="gutter-row ">
                <Image
                  src="/images/iphone.png"
                  width="579"
                  height='230'
                  className="object-cover"
                />
              </Col>
              <Col span={12}>
                <Image src='/images/lap.png'
                   width="579"
                   height='230'
                   className="object-cover"
                />
              </Col>
            </Row>
          </div>

          <div className="mt-20">
            <Line right='Customers' />
          <Row 
             gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 32,
            }}
            className="pt-10"
          >
            <Col className="gutter-row " span={8}>
            <CustomerCard />
            </Col>

            <Col className="gutter-row " span={8} >
            <CustomerCard />
            </Col>

            <Col className="gutter-row " span={8}>
            <CustomerCard />
            </Col>
           </Row>
          
           <Row 
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 32,
            }}
            className="mt-40"
           >
            <Col span={8}  className="gutter-row">
            <CustomCard />
            </Col>
            <Col span={8}  className="gutter-row">
            <CustomCard />
            </Col>
            <Col span={8}  className="gutter-row">
            <CustomCard />
            </Col>
           </Row>
        
          </div> */}
        </Wrapper>
      </main>
    </>
  );
}
