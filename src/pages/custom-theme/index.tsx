import React, { useState } from "react";
import {
  Button,
  Select,
  Radio,
  Checkbox,
  Input,
  Table,
  ConfigProvider,
  Space,
  Switch,
  theme,
} from "antd";

const CustomTheme: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<string>("light");
  const lightTheme = {
    colorPrimary: "green",
    colorTextBase: "green",
    colorTextLightSolid: "white",
  };
  const darkTheme = {
    colorPrimary: "orange",
    colorTextBase: "orange",
    colorTextLightSolid: "black",
    fontFamily: "Roboto",
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ConfigProvider
        theme={{
          //   token: {
          //     colorPrimary: "green",
          //     colorTextBase: "red",
          //     colorTextLightSolid: "black",
          //   },
          token: currentTheme === "light" ? lightTheme : darkTheme,
          components: {
            Checkbox: {
              colorPrimary: "orange",
            },
          },
        }}
      >
        <Space direction="vertical" size={12}>
          <Radio.Group
            value={currentTheme}
            onChange={(e) => setCurrentTheme(e.target.value)}
          >
            <Radio value={"light"}>Light</Radio>
            <Radio value={"dark"}>Dark</Radio>
          </Radio.Group>
          <Button type="primary">Theme Button</Button>
          <Radio>Radio</Radio>
          <ConfigProvider
            theme={{
              inherit: false,
            }}
          >
            <Radio>Radio without theme</Radio>
          </ConfigProvider>
          <ConfigProvider
            theme={{
              inherit: false,
              token: {
                colorPrimary: "purple",
              },
            }}
          >
            <Radio>Radio with child theme</Radio>
          </ConfigProvider>
          <Switch checkedChildren="ON" unCheckedChildren="off" />
          <Checkbox>Checkbox</Checkbox>
          <Input placeholder="type here ..." />
          <Select
            placeholder="select"
            options={[{ label: "Option 1", value: "Value 1" }]}
          />
          <Table
            columns={[{ title: "Column", dataIndex: "col" }]}
            dataSource={[
              {
                col: "value 1",
              },
            ]}
          />
          <Para />
        </Space>
      </ConfigProvider>
    </div>
  );
};

function Para() {
  const { token } = theme.useToken();
  return <h3 style={{ color: token.colorPrimary }}>H3 using token theme</h3>;
}
export default CustomTheme;
