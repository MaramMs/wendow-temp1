import MobileProfile from "@/components/MobileProfile";
import WebContactProfile from "@/components/WebContactProfile";
import WebMyProfile from "@/components/WebMyProfile";
import WebOrderProfile from "@/components/WebOrderProfile";
import WebSettingsProfile from "@/components/WebSettingsProfile";
import Wrapper from "@/components/Wrapper";
import useWindowSize from "@/hooks/useWindowSize";
import { Tabs } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const index= () => {
  const { width } = useWindowSize();
  const router = useRouter();
  const isMobile = width <= 768;
  const [activeTab, setActiveTab] = useState("account");


  useEffect(()=>{
const {query} = router;
const activeTabKey = query.tab||'account'
setActiveTab(activeTabKey)
  },[router])

  const onChange = (activeTabKey) => {
    setActiveTab(activeTabKey);
    router.push(`/profile?tab=${activeTabKey}`)
  };
  const items = [
    {
      key: "account",
      label: `My Profile`,
      children: <WebMyProfile />,
    },
    {
      key: "contact",
      label: `contact`,
      children: <WebContactProfile /> ,
    },
    {
      key: "orders",
      label: `My Order`,
      children: <WebOrderProfile /> ,
    },
    {
      key: "settings",
      label: `Settings`,
      children:< WebSettingsProfile/>,
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
             activeKey={activeTab}
              defaultActiveKey="account"
              items={items}
              onChange={onChange}
              style={{
                marginTop: "-95px",
                marginBottom: "0px",
                borderBottom: "0px",
              }}
            />
            {items.find((tab)=>tab.key === activeTab)?.children}

          </Wrapper>
        </>
      )}
    </div>
  );
};

export default index;

