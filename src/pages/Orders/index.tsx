import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getOrders } from "../../apis";

const Orders = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [dataSource, setdataSource] = useState<any>([]);
  useEffect(() => {
    setLoading(true);
    try {
      getOrders().then((result: any) => {
        setdataSource(result.products);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Orders</Typography.Title>
      <Table
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "DiscountedPrice",
            dataIndex: "discountedPrice",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "Total",
            dataIndex: "total",
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
export default Orders;
