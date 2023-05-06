import React, { useState } from "react";
import {
  Upload,
  Button,
  Spin,
  Typography,
  Divider,
  Switch,
  Avatar,
  Drawer,
} from "antd";
const { Title, Text, Paragraph, Link } = Typography;

const AntdUpload = () => {
  const [text, setText] = useState<string>("edit here");
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  return (
    <div className="min-h-screen w-screen text-2xl flex flex-col gap-32 items-center justify-center">
      <Button onClick={() => setOpenDrawer(true)}>Open Drawer</Button>
      <Drawer
        open={openDrawer}
        title="Drwaer Title"
        footer={"Drawer footer"}
        //   closable={false}
        // maskClosable={false}
        onClose={() => setOpenDrawer(false)}
        // placement="left"
      >
        <div className="text-2xl text-green-600">content Drawer</div>
      </Drawer>

      <div>
        <Upload.Dragger
          multiple
          listType="picture"
          action={"http://127.0.0.1:5173/antd-upload"}
          showUploadList={{ showRemoveIcon: false }}
          // accept=".png,.jpeg,.doc"
          // beforeUpload={(file) => {
          //   console.log({ file });
          //   return false;
          // }}
          defaultFileList={[
            {
              uid: "abc",
              name: "existing_file.png",
              status: "uploading",
              percent: 50,
              url: "https://www.google.com",
            },
          ]}
          iconRender={() => {
            return <Spin></Spin>;
          }}
          // itemRender={(existingComp, file) => {
          //   return <p>{file.name}</p>;
          // }}
          progress={{
            strokeWidth: 3,
            strokeColor: "green",
            style: { top: 12 },
          }}
        >
          Drag here to upload
          <br />
          <Button>CLick to Upload</Button>
        </Upload.Dragger>
      </div>
      <Divider style={{ borderColor: "red" }} orientation="left">
        Space
      </Divider>
      <div className="flex flex-col">
        <Title level={3}>Code with me</Title>
        <Title level={5}>Code with me</Title>
        <Text strong underline mark type="success">
          I'm Genius
        </Text>
        <Text type="success">I'm Genius</Text>
        <Link underline>link nek</Link>
        <Paragraph
          //   copyable={{
          //     tooltips:["click to copy","Done"]
          //   }}
          editable={{
            onChange: (value) => {
              setText(value);
            },
            // triggerType: "icon|text",
            tooltip: "click to edit",
            // icon: <SmileFilled />
            // enterIcon:
          }}
        >
          {text}
        </Paragraph>
        <Paragraph
          style={{ width: "200px" }}
          ellipsis={{
            rows: 2,
            expandable: true,
            symbol: "show more",
            suffix: "Code with ME",
          }}
        >
          Code with ME , Code with ME , Code with ME , Code with ME , Code with
          ME , Code with ME , Code with ME , Code with ME , Code with ME , Code
          with ME ,
        </Paragraph>
      </div>
      <Switch
        defaultChecked={true}
        checkedChildren="On"
        unCheckedChildren="Off"
        onChange={(checked) => {
          console.log("-----", checked);
        }}
      />
      <Avatar.Group maxCount={3}>
        <Avatar shape="circle" style={{ backgroundColor: "red" }}></Avatar>
        <Avatar shape="circle" style={{ backgroundColor: "red" }}></Avatar>
        <Avatar shape="circle" style={{ backgroundColor: "red" }}></Avatar>
        <Avatar shape="circle" style={{ backgroundColor: "red" }}></Avatar>
        <Avatar shape="circle" style={{ backgroundColor: "red" }}></Avatar>
      </Avatar.Group>
    </div>
  );
};

export default AntdUpload;
