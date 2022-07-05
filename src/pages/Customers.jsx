import React,{useState} from 'react'
import Header from '../components/Header'
import { customersData } from '../data/dummy'
import { Table,Tag } from "antd";

const Customers = () => {

  const columns = [
    {
      title: "Name",
      dataIndex: "CustomerImage",
      key: "CustomerImage",
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
      title: "ProjectName",
      dataIndex: "ProjectName",
      key: "ProjectName",
      sorter: (a, b) => a.ProjectName.length - b.ProjectName.length,
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
      sorter: (a, b) => a.Status.length - b.Status.length,
      render: (text, record, index) => {
        return (
          <Tag color={record.StatusBg} key={index}>
            {text}
          </Tag>
        );
      },
    },
    {
      title: "Weeks",
      dataIndex: "Weeks",
      key: "Weeks",
    },
    {
      title: "Budget",
      dataIndex: "Budget",
      key: "Budget",
    },
  ];

  const [selectedRowKey,setSelectedRowKey] = useState([]);
  const onSelectChange = (newSelectedRowKeys)=>{
    setSelectedRowKey(newSelectedRowKeys)
  }
  const rowSelection = {
    selectedRowKey,
    onChange:onSelectChange
  }
  
  return (
    <div>
      <Header category='Page' title='Customers'/>
      {/* 因为key值问题影响到了数据所以会点击全选 通过rowkey添加一个key即可 */}
      <Table rowSelection={rowSelection} rowKey={record=>{return record.CustomerID}} columns={columns} dataSource={customersData}/>
    </div>
  )
}

export default Customers