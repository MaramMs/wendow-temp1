import MobileProfile from "@/components/MobileProfile";
import WebMyProfile from "@/components/WebMyProfile";
import Wrapper from "@/components/Wrapper";
import useWindowSize from "@/hooks/useWindowSize";
import { Tabs } from "antd";
import React from "react";

const myprofile = () => {
  const { width } = useWindowSize();
  const isMobile = width <= 768;
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `My Profile`,
      children: <WebMyProfile />,
    },
    {
      key: "2",
      label: `Contact`,
      // children: `Content of Tab Pane 2`,
    },
    {
      key: "3",
      label: `My Order`,
      // children: `Content of Tab Pane 3`,
    },
    {
      key: "4",
      label: `Settings`,
      // children: `Content of Tab Pane 3`,
    },
  ];
  return (
    <div>
      {isMobile ? (
        <MobileProfile />
      ) : (
        <>
          <div className="bg-[#F4FFFD] ">
            <Wrapper>
              <h2 className="text-[#000] text-[16px] font-bold mb-[75px]">
                My Profile
              </h2>
            </Wrapper>
          </div>
          <Wrapper>
            <Tabs
              defaultActiveKey="1"
              items={items}
              onChange={onChange}
              style={{
                marginTop: "-95px",
                marginBottom: "0px",
                borderBottom: "0px",
              }}
            />
          </Wrapper>
        </>
      )}
    </div>
  );
};

export default myprofile;
