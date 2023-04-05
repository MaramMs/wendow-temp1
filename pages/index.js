import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import CategoriesCard from "@/components/CategoriesCard";
import Wrapper from "@/components/Wrapper";
import { Col, Row } from "antd";
import CardProduct from "@/components/CardProduct";
import Banar from "@/components/Banar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <Wrapper>
          <Row
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 32,
            }}
          >
            <Col className="gutter-row border-b-[0.5px] border-[#E4E4E4] relative" span={18}>
              <div className="flex gap-5  flex-col ">
                <div className="flex gap-5">
                  <Card />
                  <Card />
                  <Card />
                </div>
                <div className="flex justify-between items-center ">
                  <span className="absolute bottom-0 right-0 text-xl	font-semibold border-b-[3px] border-[#7251A2] pb-4	">
                    last product
                  </span>
                  <span className="absolute bottom-4 left-0 text-[#7251A2] font-[16px]">
                    more
                  </span>
                </div>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
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
              <Col className="gutter-row" span={6}>
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
              </Col>
              <Col className="gutter-row" span={6}>
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
              </Col>
            </Row>
          </div>
          <Banar />
        </Wrapper>
      </main>
    </>
  );
}
