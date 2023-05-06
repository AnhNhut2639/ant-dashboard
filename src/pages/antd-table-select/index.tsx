import { Table, Tag } from "antd";
import React, { useState } from "react";

const AntdTableSelect = () => {
  const [alreadySelected, setAlreadySelectd] = useState<any>(["1", "3"]);
  const columns = [
    {
      title: "Student ID",
      dataIndex: "id",
    },
    {
      title: "Student Name",
      dataIndex: "name",
    },
    {
      title: "Student Grade",
      dataIndex: "grade",
      render: (tag: any) => {
        const color = tag.includes("A")
          ? "Green"
          : tag.includes("B")
          ? "blue"
          : "red";
        return (
          <Tag key={tag} color={color}>
            {tag}
          </Tag>
        );
      },
    },
  ];
  const dataSource = [
    {
      key: "1",
      id: 1,
      name: "stu A",
      grade: "A+",
    },
    {
      key: "2",
      id: 2,
      name: "stu B",
      grade: "B",
    },
    {
      key: "3",
      id: 3,
      name: "stu C",
      grade: "C",
    },
    {
      key: "4",
      id: 4,
      name: "stu 4",
      grade: "B",
    },
    {
      key: "5",
      id: 5,
      name: "stu 5",
      grade: "C",
    },
  ];
  return (
    <div className="h-screen w-screen flex items-center justify-center text-2xl">
      <Table
        rowSelection={{
          type: "checkbox",
          selectedRowKeys: alreadySelected,
          onChange: (keys) => {
            setAlreadySelectd(keys);
          },
          onSelect: (record) => {
            console.log({ record });
          },
          // getCheckboxProps: (record) => ({
          //   disabled: record.grade === "C",
          // }),
          // hideSelectAll: true,
          selections: [
            Table.SELECTION_NONE,
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            {
              key: "even",
              text: "Select even Rows",
              onSelect: (allKeys) => {
                const selectedKeys = allKeys.filter((key: any) => {
                  return key % 2 == 0;
                });
                setAlreadySelectd(selectedKeys);
              },
            },
            {
              key: "excellent",
              text: "Select Excellent Grads",
              onSelect: (allKeys) => {
                const selectedKeys = allKeys.filter((key: any) => {
                  const isExcellent = dataSource.find((student) => {
                    return student.key == key && student.grade.includes("A+");
                  });
                  return isExcellent;
                });
                setAlreadySelectd(selectedKeys);
              },
            },
          ],
        }}
        columns={columns}
        dataSource={dataSource}
      ></Table>
    </div>
  );
};
export default AntdTableSelect;
