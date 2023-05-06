import React, { useRef, useState } from "react";
import { Space, Tabs } from "antd";
import { AppleOutlined, AmazonOutlined } from "@ant-design/icons";

const AntdTabs = () => {
  const nextTabIndex = useRef(3);
  const [tabsList, setTabsList] = useState<any>([
    { tab: "Tab 1", key: "tab1" },
    { tab: "Tab 2", key: "tab2" },
  ]);

  const onEdit = (tabKey: any, action: any) => {
    console.log({ action, tabKey });
    if (action === "add") {
      setTabsList((pre: any) => [
        ...pre,
        {
          tab: `Tab ${nextTabIndex.current}`,
          key: `tab${nextTabIndex.current}`,
        },
      ]);
      nextTabIndex.current += 1;
    } else if (action === "remove") {
      setTabsList((pre: any) => [
        ...pre.filter((tab: any) => tab.key !== tabKey),
      ]);
    }
  };
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Tabs
        defaultActiveKey="tab1"
        tabPosition="left"
        type="editable-card"
        onEdit={onEdit}
      >
        {tabsList.map((tab: any, index: number) => {
          return (
            <Tabs.TabPane
              closable={index > 1}
              // closeIcon
              tab={
                <span>
                  <AppleOutlined /> {tab.tab}
                </span>
              }
              key={tab.key}
            >
              <div>this is content of {tab.tab}</div>
            </Tabs.TabPane>
          );
        })}

        {/* <Tabs.TabPane
          tab={
            <span>
              <AppleOutlined /> Tab 1
            </span>
          }
          key="tab1"
        >
          <div>this is content of Tab 1</div>
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={
            <span>
              <AmazonOutlined /> Tab 2
            </span>
          }
          key="tab2"
        >
          <div>this is content of Tab 2</div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab 3" key="tab3">
          <div>this is content of Tab 3</div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab 4" key="tab4">
          <div>this is content of Tab 4</div>
        </Tabs.TabPane> */}
      </Tabs>
    </div>
  );
};
export default AntdTabs;
