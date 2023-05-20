import { Card, Space, Statistic, Table, Typography } from "antd";
import {
  ShoppingCartOutlined,
  DollarCircleOutlined,
  UserOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getCustomer, getInventory, getOrders, getRevenue } from "../../apis";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [orders, setOrders] = useState<number>(0);
  const [inventory, setInventory] = useState<number>(0);
  const [customers, setCustomers] = useState<number>(0);
  const [revenue, setRevenue] = useState<number>(0);
  useEffect(() => {
    getOrders().then((res) => {
      setOrders(res.total);
      setRevenue(res.discountedTotal);
    });
    getInventory().then((res) => {
      setInventory(res.total);
    });
    getCustomer().then((res) => {
      setCustomers(res.total);
    });
  }, []);

  return (
    <Space size={12} direction="vertical">
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space direction="horizontal">
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.5)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Orders"}
          value={orders}
        />
        <DashboardCard
          icon={
            <ShoppingOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Inventory"}
          value={inventory}
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: "purple",
                backgroundColor: "rgba(0,255,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Customers"}
          value={customers}
        />
        <DashboardCard
          icon={
            <DollarCircleOutlined
              style={{
                color: "red",
                backgroundColor: "rgba(255,0,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Revenue"}
          value={revenue}
        />
      </Space>
      <Space>
        <RecentOrders />
        <DashboardChart />
      </Space>
    </Space>
  );
};
function DashboardCard({ title, value, icon }: any) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}
function RecentOrders() {
  const [dataSource, setDataSource] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    try {
      getOrders().then((res) => {
        setDataSource(res.products.splice(0, 3));
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <Typography.Title level={4}> Recent Order</Typography.Title>
      <Table
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "Price",
            dataIndex: "discountedPrice",
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
      ></Table>
    </>
  );
}
function DashboardChart() {
  const [revenueData, setrevenueData] = useState<any>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    getRevenue().then((res) => {
      const labels = res.carts.map((cart: any) => {
        return `User-${cart.userId}`;
      });
      const data = res.carts.map((cart: any) => {
        return cart.discountedTotal;
      });

      const dataSource = {
        labels,
        datasets: [
          {
            label: "Revenue",
            data: data,
            backgroundColor: "rgba(255, 0, 0, 1)",
          },
          // {
          //   label: "Dataset 2",
          //   data: data,

          //   backgroundColor: "rgba(53, 162, 235, 0.5)",
          // },
        ],
      };

      setrevenueData(dataSource);
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: "Order Revenue",
      },
    },
  };
  return (
    <Card style={{ width: 500, height: 250 }}>
      <Bar
        style={{ height: "100%", width: "100%" }}
        options={options}
        data={revenueData}
      />
    </Card>
  );
}
export default Dashboard;
