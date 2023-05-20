import { Badge, Image, Space, Typography } from "antd";
import { BellFilled, MailOutlined } from "@ant-design/icons";

const AppHeader = () => {
  return (
    <div className="AppHeader">
      <Image
        width={40}
        src="https://i.pinimg.com/564x/1c/2a/fd/1c2afd5df5bc136bfbae9ce51386cd5f.jpg"
      ></Image>
      <Typography.Title>Delima Dashboard</Typography.Title>
      <Space>
        <Badge count={20} dot>
          <MailOutlined style={{ fontSize: 24 }} />
        </Badge>
        <Badge count={10}>
          <BellFilled style={{ fontSize: 24 }} />
        </Badge>
      </Space>
    </div>
  );
};

export default AppHeader;
