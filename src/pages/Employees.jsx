import React from "react";
import Header from "../components/Header";
import { employeesData } from "../data/dummy";
import { Table } from "antd";



const Employees = () => {
  const title = Array.from(new Set(employeesData.map(item=>{
    return item.Title
  })))

  const columns = [
    {
      title: "Image",
      dataIndex: "EmployeeImage",
      key: "EmployeeImage",
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
      title: "Designation",
      dataIndex: "Title",
      key: "Title",
      sorter: (a, b) => a.Title.length - b.Title.length,
      filters:[
        {
          text:title[0],
          value:title[0]
        },
        {
          text:title[1],
          value:title[1]
        },
        {
          text:title[2],
          value:title[2]
        }
      ],
      onFilter: (value, record) => record.Title.startsWith(value),
      filterSearch: true,
      width: "40%",
    },
    {
      title: "Country",
      dataIndex: "Country",
      key: "Country",
      sorter: (a, b) => a.Country.length - b.Country.length,
    },
    {
      title: "Hire Date",
      dataIndex: "HireDate",
      key: "HireDate",
    },
    {
      title: "Reports To",
      dataIndex: "ReportsTo",
      key: "ReportsTo",
    },
  ];
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <Table columns={columns} dataSource={employeesData} />
    </div>
  );
};

export default Employees;
