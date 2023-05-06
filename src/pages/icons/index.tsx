import React from "react";
import { AppleFilled, ExclamationCircleTwoTone } from "@ant-design/icons";
import { Divider } from "antd";
const AntdIcons = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center ">
      <AppleFilled
        twoToneColor="red"
        style={{ color: "green", fontSize: 100 }}
        rotate={45}
      />
      <ExclamationCircleTwoTone twoToneColor="red" style={{ fontSize: 100 }} />
      {/* <Divider /> */}
    </div>
  );
};
export default AntdIcons;
