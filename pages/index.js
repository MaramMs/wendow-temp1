import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import CategoriesCard from "@/components/CategoriesCard";
import Wrapper from "@/components/Wrapper";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <Wrapper>
          <div className="flex justify-between gap-5 ">
            <div className="flex gap-5 border-b-[0.5px] border-[#E4E4E4] flex-col relative">
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
            <div>
              <CategoriesCard />
            </div>
          </div>
        </Wrapper>
      </main>
    </>
  );
}
