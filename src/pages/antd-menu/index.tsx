import React from "react";
import { Menu, Space, Input, Button, Dropdown } from "antd";
import {
  HomeFilled,
  DashboardOutlined,
  DollarCircleOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";

const AntdMenu = () => {
  const menu = [
    {
      label: <Input.Search placeholder="Search here"></Input.Search>,

      key: "search",
    },
    { label: "Home", key: "home", icon: <HomeFilled></HomeFilled> },
    {
      label: <span className="text-green-500">Dashboard</span>,
      key: "dashboard",
      icon: <DashboardOutlined />,
      children: [
        {
          label: "Revenue",
          key: "rev",
          icon: <DollarCircleOutlined />,
        },
        {
          label: "Expenses",
          key: "exp",
          icon: <MoneyCollectOutlined />,
        },
      ],
    },
    { label: "User Management", key: "um" },
    { label: "Signout", key: "signout", danger: true },
  ];
  const items = [
    { label: "item 1", key: "item-1" }, // remember to pass the key prop
    { label: "item 2", key: "item-2" },
  ];
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Space>
        <Menu
          mode="inline"
          //   defaultOpenKeys={["dashboard"]}
          onClick={(info) => {
            console.log(info);
          }}
          items={menu}
        ></Menu>
      </Space>
      <div>
        <Dropdown menu={{ items }} trigger={["contextMenu"]}>
          <Button>CLick me</Button>
        </Dropdown>
      </div>
    </div>
  );
};
export default AntdMenu;
