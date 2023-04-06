import Image from "next/image";
import Link from "next/link";
import Wrapper from "./Wrapper";
import React, { useState } from "react";
import { Button, Dropdown, Space, Layout, Menu, theme } from "antd";
import {
  BarsOutlined,
  DownOutlined,
  SearchOutlined,
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

function Navbar() {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
  ];
  const { Header, Content, Footer, Sider } = Layout;

  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    return setToggle(!toggle);
  };
  return (
    <>
      <Wrapper>
        <nav className="flex items-center gap-40 max-sm:justify-around max-sm:flex-row-reverse">
          <Link href="/" className="mt-[-36px] max-sm:mt-0">
            <Image
              src="/logo.png"
              width="64"
              height="74"
              className="max-sm:w-[54px] max-sm:h-[62px]"
            />
          </Link>
    
         <Button
            className="flex justify-center items-center bg-[#7251A2] rounded-[5px] max-sm:w-[43px] max-sm:h-[43px] lg:hidden"
            onClick={handleClick}
          >
            <BarsOutlined className="text-[23.62px] text-[#fff]" />
          </Button> 
          <div className="grow  p-2 flex justify-between items-center flex-wrap max-sm:hidden">
            <div className="relative flex items-center">
              <input
                placeholder="search now"
                className="w-[479px] h-[51px]  rounded-full border-gray-200 border pr-10 ml-10"
              />
              <span className="bg-[#7251A2] absolute left-10 h-full text-white rounded-l-[2.5rem] p-5 flex justify-center">
                <SearchOutlined />
              </span>
            </div>
            <div className="flex items-center   gap-10">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-8"
                  style={{
                    color: "#67C6B0",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
                <span className="w-4 h-4 bg-[#7251A2] rounded-full absolute bottom-1 right-1 flex justify-center items-center text-white ">
                  1
                </span>
              </div>
              <span className="border-l-2  h-7 border-slate-300	"></span>
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-8"
                  style={{
                    color: "#67C6B0",
                    position: "relative",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                <span className="w-4 h-4 bg-[#7251A2] rounded-full absolute bottom-1 right-1 flex justify-center items-center text-white">
                  1
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <Link href="/" className="text-[#7251A2] font-normal	text-sm	">
                {" "}
                تسجيل
              </Link>
              <span className="text-black font-bold	">او</span>
              <Link href="/" className="text-[#7251A2] font-normal	text-sm	">
                تسجيل دخول
              </Link>
            </div>

            <ul className="flex justify-between pt-10 w-[450px] items-center">
              <li>
                <Link href="/" className="text-[#7251A2] text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space className="text-[#7251A2] text-sm">
                      category
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </li>
              <li>
                <Link href="/" className="text-[#7251A2] text-sm">
                  about
                </Link>
              </li>
              <li>
                <Link href="/" className="text-[#7251A2] text-sm">
                  contact us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </Wrapper>
      {toggle && <SideBar />}
    </>
  );
}

export default Navbar;

export function SideBar() {
  const { Header, Content, Footer, Sider } = Layout;
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  // // const items = [
  // //   UserOutlined,
  // //   VideoCameraOutlined,
  // //   UploadOutlined,
  // //   BarChartOutlined,
  // //   CloudOutlined,
  // //   AppstoreOutlined,
  // //   TeamOutlined,
  // //   ShopOutlined,
  // // ].map((icon, index) => ({
  // //   key: String(index + 1),
  // //   icon: React.createElement(icon),
  // //   label: `nav ${index + 1}`,
  // // }));
  // // return (
  // //   <Layout hasSider>
  // //     <Sider
  // //       style={{
  // //         overflow: "auto",
  // //         height: "100vh",
  // //         position: "fixed",
  // //         left: 0,
  // //         top: 0,
  // //         bottom: 0,
  // //       }}
  // //     >
  // //       <div
  // //         style={{
  // //           height: 32,
  // //           margin: 16,
  // //           background: "rgba(255, 255, 255, 0.2)",
  // //         }}
  // //       />
  // //       <Menu
  // //         theme="dark"
  // //         mode="inline"
  // //         defaultSelectedKeys={["4"]}
  // //         items={items}
  // //       />
  // //     </Sider>
  // //     {/* <Layout
  // //       className="site-layout"
  // //       style={{
  // //         marginLeft: 200,
  // //       }}
  // //     >
  // //       <Header
  // //         style={{
  // //           padding: 0,
  // //           background: colorBgContainer,
  // //         }}
  // //       />
  // //       <Content
  // //         style={{
  // //           margin: "24px 16px 0",
  // //           overflow: "initial",
  // //         }}
  // //       >
  // //         <div
  // //           style={{
  // //             padding: 24,
  // //             textAlign: "center",
  // //             background: colorBgContainer,
  // //           }}
  // //         >
  // //           <p>long content</p>
  // //           {
  // //             // indicates very long content
  // //             Array.from(
  // //               {
  // //                 length: 100,
  // //               },
  // //               (_, index) => (
  // //                 <React.Fragment key={index}>
  // //                   {index % 20 === 0 && index ? "more" : "..."}
  // //                   <br />
  // //                 </React.Fragment>
  // //               )
  // //             )
  // //           }
  // //         </div>
  // //       </Content>
  // //       <Footer
  // //         style={{
  // //           textAlign: "center",
  // //         }}
  // //       >
  // //         Ant Design ©2023 Created by Ant UED
  // //       </Footer>
  // //     </Layout> */}
  //   </Layout>
  const items = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    BarChartOutlined,
    CloudOutlined,
    AppstoreOutlined,
    TeamOutlined,
    ShopOutlined,
  ].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }));
  return (
    <Layout 
  
    >
      {/* <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 40,
        }}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider> */}


      <Sider
        breakpoint="lg"
        // collapsedWidth="0"
        // onBreakpoint={(broken) => {
        //   console.log(broken);
        // }}
        // onCollapse={(collapsed, type) => {
        //   console.log(collapsed, type);
        // }}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 40,
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
            (icon, index) => ({
              key: String(index + 1),
              icon: React.createElement(icon),
              label: `nav ${index + 1}`,
            }),
          )}
        />
      </Sider>
    </Layout>
  );
}
