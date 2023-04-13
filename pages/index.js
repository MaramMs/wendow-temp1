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
import { CustomerCard, CustomCard } from "@/components/CustomerCard";
import Language from "@/components/Language";
import CustomCarousel from "@/components/CustomCarousel";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const cardData = [
    { title: "Card 1", description: "Description for Card 1" },
    { title: "Card 2", description: "Description for Card 2" },
    { title: "Card 3", description: "Description for Card 3" },
    { title: "Card 4", description: "Description for Card 4" },
    { title: "Card 5", description: "Description for Card 5" },
    { title: "Card 6", description: "Description for Card 6" },
    { title: "Card 4", description: "Description for Card 4" },
    { title: "Card 5", description: "Description for Card 5" },
    { title: "Card 6", description: "Description for Card 6" },
  ];
  return (
    <>
      <Language />

      <Navbar />
   <Carousel >
   <Hero />
   <Hero />
   <Hero />
   </Carousel>
      <main className="overflow-x-hidden	">
        <Wrapper>
          <Row
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 24,
            }}
            className="max-sm:px-5"
          >
            <Col className="gutter-row " lg={18} sm={12}>
              <Row gutter={[16, 16]} className="pb-14">
                <Col span={8}>
                  <Card />
                </Col>
                <Col span={8}>
                  <Card />
                </Col>
                <Col span={8}>
                  <Card />
                </Col>
              </Row>

              <Line right="Last product" left="more" />
            </Col>
            <Col className="gutter-row max-sm:hidden" lg={6}>
              <CategoriesCard />
            </Col>
          </Row>

          <div className="mt-12 max-sm:px-5">
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
            </Row>
          </div>

          <Banner />
          <div className="mt-[172px] max-sm:px-5 ">
            <Line right="More Sale" left="more" />
            <CustomCarousel className="max-sm:py-10 sm:py-10" slidesNum={2} title='product'>
              {cardData.map((data, index) => (
                <MostProductCard key={index} title={data.title} >
                  {data.description}
                </MostProductCard>
              ))}
            </CustomCarousel>
          </div>

          <div className="mt-[139px] max-sm:px-5 max-sm:mt-0">
            <Row
              gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              }}
            >
              <Col sm={12} className="gutter-row max-sm:hidden">
                <Image
                  src="/images/iphone.png"
                  width="579"
                  height="230"
                  className="object-cover"
                />
              </Col>
              <Col sm={12} className=" gutter-row">
                <Image
                  src="/images/lap.png"
                  width="579"
                  height="230"
                  className="object-cover"
                />
              </Col>
            </Row>
          </div>

          <div className="mt-20 max-sm:px-5  ">
            <Line right="Customers" />
            <CustomCarousel className="max-sm:py-10 sm:py-10" slideNum={1 } title='customer'>
              {cardData.map((data, index) => (
                <CustomerCard key={index} title={data.title} >
                  {data.description}
                </CustomerCard>
              ))}
            </CustomCarousel>

            <Row
              gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              }}
              className="mt-40 max-sm:mt-10 "
            >
              <Col lg={8} className="gutter-row">
                <CustomCard />
              </Col>
              <Col lg={8} className="gutter-row">
                <CustomCard />
              </Col>
              <Col lg={8} className="gutter-row">
                <CustomCard />
              </Col>
            </Row>
          </div>
        </Wrapper>
      </main>
      <Footer />
    </>
  );
}
