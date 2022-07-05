import React from "react";
import { Table, Tag } from "antd";
import { ordersData } from "../data/dummy";

import Header from "../components/Header";

const Orders = () => {
  const columns = [
    {
      title: "Image",
      dataIndex: "ProductImage",
      key: "ProductImage",
      render: (img) => (
        <img
          src={img}
          alt=""
          style={{ height: "auto" }}
          className="sm:w-8 md:w-16"
        />
      ),
    },
    {
      title: "Items",
      dataIndex: "OrderItems",
      key: "OrderItems",
      sorter: (a, b) => a.OrderItems.length - b.OrderItems.length,
    },
    {
      title: "Customer Name",
      dataIndex: "CustomerName",
      key: "CustomerName",
      sorter: (a, b) => a.CustomerName.length - b.CustomerName.length,
    },
    {
      title: "Total Amount",
      dataIndex: "TotalAmount",
      key: "TotalAmount",
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
      render: (text, record, index) => {
        return (
          <Tag color={record.StatusBg} key={index}>
            {text}
          </Tag>
        );
      },
    },
    {
      title: "OrderID",
      dataIndex: "OrderID",
      key: "OrderID",
    },
  ];
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <Table columns={columns} dataSource={ordersData} />
    </div>
  );
};

export default Orders;
