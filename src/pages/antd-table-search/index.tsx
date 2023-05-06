import { Button, Input, Space, Table, Tag } from "antd";
import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";

const AntdTableSearch = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      name: "stu A",
      age: 11,
      address: "Sysdey",
    },
    {
      key: "2",
      name: "stu B",
      age: 21,
      address: "Sysdey",
    },
    {
      key: "3",
      name: "stu C",
      age: 31,
      address: "Sysdey",
    },
  ]);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
        close,
      }: any) => {
        return (
          <>
            <Input
              placeholder="search...."
              onBlur={() => {
                confirm();
              }}
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
            ></Input>
            <Space />
            <Button
              type="primary"
              onClick={() => {
                confirm();
              }}
            >
              Search
            </Button>
            <Button
              onClick={() => {
                clearFilters();
                confirm();
              }}
            >
              Clear
            </Button>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value: any, record: any) => {
        return record.name.toLowerCase().includes(value.toLowerCase());
      },
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
  ];
  return (
    <div className="h-screen w-screen flex items-center justify-center text-2xl">
      <Table
        style={{ display: "flex" }}
        columns={columns}
        dataSource={dataSource}
      ></Table>
    </div>
  );
};
export default AntdTableSearch;
