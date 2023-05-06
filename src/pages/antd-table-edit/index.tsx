import { Button, Table, Modal, Input } from "antd";
import React, { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const AntdEdit = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      id: 1,
      name: "student A",
      email: "A@gmail.com",
      address: "address A",
    },
    {
      key: "2",
      id: 2,
      name: "student B",
      email: "A@gmail.com",
      address: "address B",
    },
    {
      key: "3",
      id: 3,
      name: "student C",
      email: "A@gmail.com",
      address: "address C",
    },
  ]);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editData, setEditData] = useState<any>(null);
  const columns = [
    {
      title: "Student ID",
      dataIndex: "id",
      key: "1",
    },
    {
      title: "Student Name",
      dataIndex: "name",
      key: "2",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "3",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "4",
    },
    {
      title: "Action",
      key: "5",
      render: (record: any) => {
        return (
          <>
            <EditOutlined onClick={() => onEditItem(record)} />
            <DeleteOutlined
              onClick={() => onDeleteItem(record)}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];
  const onAddStudent = () => {
    const randomNumber = Math.floor(Math.random() * 1000);
    const newStudent = {
      id: randomNumber,
      name: "chicken" + randomNumber,
      email: randomNumber + "chicken@gmail.com",
      address: "USA" + randomNumber,
    };
    setDataSource((pre: any) => {
      return [...pre, newStudent];
    });
  };
  const onDeleteItem = (record: any) => {
    Modal.confirm({
      title: "Are you want to delete it?",
      okText: "Yes, do it !",
      okType: "danger",
      onOk: () => {
        setDataSource((pre: any) => {
          return pre.filter((item: any) => item.id !== record.id);
        });
      },
    });
  };
  const onEditItem = (record: any) => {
    setIsEditing(true);
    setEditData({ ...record });
  };
  const resetEdit = () => {
    setIsEditing(false);
    setEditData(null);
  };
  return (
    <div className="h-screen w-screen flex flex-col gap-4 items-center justify-center text-2xl">
      <Button
        className="bg-sky-500 text-white rounded-md font-semibold"
        onClick={onAddStudent}
      >
        Add new
      </Button>
      <Table columns={columns} dataSource={dataSource}></Table>
      <Modal
        title="Edit Student"
        open={isEditing}
        onCancel={() => {
          resetEdit();
        }}
        onOk={() => {
          setDataSource((pre) => {
            return pre.map((student) => {
              if (student.id === editData.id) {
                return editData;
              } else {
                return student;
              }
            });
          });
          setIsEditing(false);
        }}
        okText="Save"
      >
        <Input
          value={editData?.name}
          onChange={(e) => {
            setEditData((pre: any) => {
              return { ...pre, name: e.target.value };
            });
          }}
        />
        <Input
          value={editData?.email}
          onChange={(e) => {
            setEditData((pre: any) => {
              return { ...pre, email: e.target.value };
            });
          }}
        />
        <Input
          value={editData?.address}
          onChange={(e) => {
            setEditData((pre: any) => {
              return { ...pre, address: e.target.value };
            });
          }}
        />
      </Modal>
    </div>
  );
};
export default AntdEdit;
