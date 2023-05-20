import { Avatar, Rate, Space, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { getInventory } from "../../apis";

const Inventory = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [dataSource, setdataSource] = useState<any>([]);
  useEffect(() => {
    setLoading(true);
    try {
      getInventory().then((result: any) => {
        setdataSource(result.products);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Inventory</Typography.Title>
      <Table
        columns={[
          {
            title: "Thumbnail",
            dataIndex: "thumbnail",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
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
            title: "Rating",
            dataIndex: "rating",
            render: (rating) => {
              return <Rate value={rating} allowHalf />;
            },
          },
          {
            title: "Stock",
            dataIndex: "stock",
          },

          {
            title: "Brand",
            dataIndex: "brand",
          },
          {
            title: "Caterogy",
            dataIndex: "category",
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
export default Inventory;
