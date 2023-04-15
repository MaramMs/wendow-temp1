import { Tabs } from "antd";
import Wrapper from "./Wrapper";
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: `Product description`,
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus libero et tortor posuere lacinia. Maecenas volutpat facilisis diam id efficitur. Sed sed justo augue. Vivamus blandit nulla vitae ante pretium venenatis. Maecenas eu purus ac ipsum pulvinar faucibus. Nulla `,
  },
  {
    key: "2",
    label: `Product Rate`,
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus libero et tortor posuere lacinia. Maecenas volutpat facilisis diam id efficitur. Sed sed justo augue. Vivamus blandit nulla vitae ante pretium venenatis. Maecenas eu purus ac ipsum pulvinar faucibus. Nulla Second `,
  },
];
const { TabPane } = Tabs;
const tabBarStyle	={
color:'#ACACAC',
fontSize:'14px',
fontWeight:'400',
marginRight :'10px',
}

const style = {
    width:'548px',
    color:'#ACACAC',
    fontSize:'12px',
    fontWeight:'300',
    overflowWrap: 'break-word',
}

const CustomTabs = () => {
  return (
    <>
      <Wrapper>
        <Tabs defaultActiveKey="1" onChange={onChange} tabBarGutter={38} tabBarStyle={tabBarStyle}  activeTabClassName="custom-active-tab">
          <TabPane tab="Product description" key="1" style={style}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus
            libero et tortor posuere lacinia. Maecenas volutpat facilisis diam
            id efficitur. Sed sed justo augue. Vivamus blandit nulla vitae ante
            pretium venenatis. Maecenas eu purus ac ipsum pulvinar faucibus.
            Nulla
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus
            libero et tortor posuere lacinia. Maecenas volutpat facilisis diam
            id efficitur. Sed sed justo augue. Vivamus blandit nulla vitae ante
            pretium venenatis. Maecenas eu purus ac ipsum pulvinar faucibus.
            Nulla
          </TabPane>
          <TabPane tab="Product Rate" key="2" style={style}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus
            libero et tortor posuere lacinia. Maecenas volutpat facilisis diam
            id efficitur. Sed sed justo augue. Vivamus blandit nulla vitae ante
            pretium venenatis. Maecenas eu purus ac ipsum pulvinar faucibus.
            Nulla Second
          </TabPane>
        </Tabs>
      </Wrapper>
    </>
  );
};

export default CustomTabs;
