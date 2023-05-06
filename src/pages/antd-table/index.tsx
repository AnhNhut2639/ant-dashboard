import React, { useEffect, useState } from "react";
import { Table } from "antd";

const AntdTable = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState([]);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setDataSource(data);
      })
      .catch((erorr) => {
        console.log(erorr);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "User ID",
      dataIndex: "userId",
      sorter: (a: any, b: any) => {
        return a.userId - b.userId;
      },
    },
    {
      key: "3",
      title: "Status",
      dataIndex: "completed",
      render: (completed: boolean) => {
        return <p>{completed ? "Completed" : "In Progress"}</p>;
      },
      filters: [
        {
          text: "Complete",
          value: true,
        },
        {
          text: "In progress",
          value: false,
        },
      ],
      onFilter: (value: any, record: any) => {
        // console.log(record);
        // console.log(value);
        return record.completed === value;
      },
    },
  ];
  return (
    <div className="h-screen w-screen flex items-center justify-center text-xl">
      <Table
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        pagination={{
          current: page,
          pageSize: pageSize,
          // total: 500,
          onChange: (page, pageSize) => {
            //page and page i current in this context
            setPage(page);
            setPageSize(pageSize);
            // make call api here with page and page size
          },
        }}
      ></Table>
    </div>
  );
};
export default AntdTable;
