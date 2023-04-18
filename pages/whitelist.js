import Wrapper from "@/components/Wrapper";
import React from "react";

import { Space, Table, Tag } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
const columns = [
  {
    title: "The product name",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <div className="flex gap-2 items-center">
        <span>
          <CloseCircleOutlined />
        </span>
        <img src={record.image} alt={record.name} width={50} />
      </div>
    ),
  },
  {
    title: "The price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "a viable in the store",
    dataIndex: "store",
    key: "store",
    className: "text-[#67C6B0]",
  },
];
const data = [
  {
    key: "1",
    image: "/images/products/cart-product.png",
    price: 32,
    store: "a viable",
  },
  {
    key: "2",
    image: "/images/products/cart-product.png",
    price: 32,
    store: "not a viable",
  },
  {
    key: "3",
    image: "/images/products/cart-product.png",
    price: 32,
    store: "not a viable",
  },
];
const whitelist = () => {
  return (
    <>
      <div
        className="h-[239px] bg-[#FAFAFA] flex justify-center items-center max-[575px]:h-[110px] max-[575px]:bg-gradient-to-br from-purple-800 to-teal-300"
      >
        <h1 className="text-center 	 text-[24px] font-semibold max-[575px]:text-white">The Favorite</h1>
      </div>
      <Wrapper>
        <Table
          bordered={false}
          columns={columns}
          dataSource={data}
          className="list-table mb-[500px] max-[575px]:px-5 max-[575px]:border-t-0 max-[575px]:border-b-0 border-t-[1px] "
          pagination={false}
        />
      </Wrapper>
    </>
  );
};

export default whitelist;
