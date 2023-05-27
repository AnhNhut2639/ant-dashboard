/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getCustomer } from "../../apis";

const Customers = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [dataSource, setdataSource] = useState<any>([]);
  useEffect(() => {
    setLoading(true);
    try {
      getCustomer().then((result: any) => {
        setdataSource(result.users);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Customers</Typography.Title>
      <Table
        columns={[
          {
            title: "Photo",
            dataIndex: "image",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
          {
            title: "First Name",
            dataIndex: "firstName",
          },
          {
            title: "Last Name",
            dataIndex: "lastName",
          },
          {
            title: "Email",
            dataIndex: "email",
          },
          {
            title: "Phone",
            dataIndex: "phone",
          },

          {
            title: "Address",
            dataIndex: "address",
            render: (address) => {
              return (
                <span>
                  {address.address}, {address.city}
                </span>
              );
            },
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 10,
        }}
        loading={loading}
      />
    </Space>
  );
};
export default Customers;
