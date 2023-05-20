import {
  Badge,
  Drawer,
  Image,
  List,
  Space,
  Typography,
  notification,
} from "antd";
import { BellFilled, MailOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getComments, getOrders } from "../../apis";

const AppHeader = () => {
  const [comments, setCommnets] = useState<any>([]);
  const [orders, setOrders] = useState<any>([]);
  const [openComments, setOpenCommnets] = useState<boolean>(false);
  const [openNotifications, setOpenNotifications] = useState<boolean>(false);
  useEffect(() => {
    getComments().then((res) => {
      setCommnets(res.comments);
    });
    getOrders().then((res) => {
      setOrders(res.products);
    });
  }, []);
  return (
    <div className="AppHeader">
      <Image
        width={40}
        src="https://i.pinimg.com/564x/1c/2a/fd/1c2afd5df5bc136bfbae9ce51386cd5f.jpg"
      ></Image>
      <Typography.Title>Delima Dashboard</Typography.Title>
      <Space>
        <Badge count={comments?.length} dot>
          <MailOutlined
            style={{ fontSize: 24 }}
            onClick={() => setOpenCommnets(true)}
          />
        </Badge>
        <Badge count={orders?.length}>
          <BellFilled
            style={{ fontSize: 24 }}
            onClick={() => setOpenNotifications(true)}
          />
        </Badge>
      </Space>
      <Drawer
        title="Comments"
        open={openComments}
        onClose={() => setOpenCommnets(false)}
        maskClosable
      >
        <List
          dataSource={comments}
          renderItem={(item: any, index: number) => {
            return <List.Item key={index}>{item.body}</List.Item>;
          }}
        />
      </Drawer>
      <Drawer
        title="Notifications"
        open={openNotifications}
        onClose={() => setOpenNotifications(false)}
        maskClosable
      >
        <List
          dataSource={orders}
          renderItem={(item: any, index: number) => {
            return (
              <List.Item key={index}>
                <Typography.Text strong>{item.title}</Typography.Text>
                has been ordered !
              </List.Item>
            );
          }}
        />
      </Drawer>
    </div>
  );
};

export default AppHeader;
