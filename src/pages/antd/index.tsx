/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Input,
  Select,
  Form,
  Switch,
  Table,
  Space,
  Tag,
  message,
  Alert,
  DatePicker,
  TimePicker,
  Spin,
  Progress,
  FloatButton,
} from "antd";
import React, { useState } from "react";
import {
  PoweroffOutlined,
  UserOutlined,
  CheckOutlined,
  CloseOutlined,
  MessageFilled,
  PlusOutlined,
  UserAddOutlined,
  FileAddOutlined,
} from "@ant-design/icons";

const AndDTemplate = () => {
  // *** Select
  const players = [
    {
      id: 1,
      name: "L.Messi",
      number: 30,
    },
    {
      id: 2,
      name: "Neymar Jr",
      number: 10,
    },
    {
      id: 3,
      name: "K.Mbappe",
      number: 7,
    },
  ];
  // ****  end Select
  //*** */ Form
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const onFinish = (e: any) => {
    setTimeout(() => {
      message.success("kukulkhan");
      setShowAlert(true);
    }, 2000);
  };
  const handleChaneChecked = () => {
    console.log("hahaha");
  };
  //*** */ end Form

  //****  table */

  const data = [
    {
      id: 1,
      name: "user 1",
      age: 10,
      tags: ["nice", "developer"],
      address: "AG",
      key: 1,
    },
    {
      id: 2,
      name: "user 2",
      age: 20,
      tags: ["better", "developer"],
      address: "AG",
      key: 2,
    },
    {
      id: 3,
      name: "user 3",
      age: 30,
      tags: ["good", "developer"],
      address: "AG",
      key: 3,
    },
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (
        name:
          | string
          | number
          | boolean
          | React.ReactElement<any, string | React.JSXElementConstructor<any>>
          | React.ReactFragment
          | React.ReactPortal
          | null
          | undefined
      ) => {
        return (
          <a href="#" className="text-red-500 capitalize">
            {name}
          </a>
        );
      },
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      sorter: (a: { age: number }, b: { age: number }) => a.age - b.age,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Graduated?",
      key: "key",
      render: (payload: { age: number }) => {
        return <p>{payload.age > 20 ? "True" : "False"}</p>;
      },
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_: any, record: any) => (
        <>
          {record.tags.map((tag: any) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  // *end table
  // date pick
  const handleSelectDate = (e: any) => {
    console.log(e._d);
  };
  const handleChooseTime = (e: any) => {
    console.log(e._d);
  };
  // end date <pick></pick>
  // Spin

  // end Spin

  return (
    <div className="gap-5 h-screen w-screen bg-slate-700 flex flex-col items-center justify-center text-2xl">
      {/* ----------- Button -------- */}
      <Button
        icon={<PoweroffOutlined />}
        type="primary"
        className="flex items-center justify-center"
      >
        Click
      </Button>
      {/* ----------- End Button -------- */}
      {/* ----------- Input -------- */}
      <Input
        placeholder="cc"
        className="h-12"
        maxLength={10}
        allowClear
        prefix={<UserOutlined />}
      ></Input>
      {/* ----------- End Input -------- */}
      <Select
        mode="multiple"
        maxTagCount={2}
        placeholder="Select Player"
        className="w-40 min-w-fit"
        allowClear
      >
        {players.map((player, index) => {
          return (
            <Select.Option key={index} value={player.name}>
              {player.name}
            </Select.Option>
          );
        })}
      </Select>
      {showAlert && <Alert type="error" description="aabbcc" closable />}
      {/* ----------- Form Login -------- */}

      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Username"
          name="username"
          // rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input allowClear placeholder="Username"></Input>
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password placeholder="Passoword"></Input.Password>
        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
        <Form.Item
          label="Switch"
          valuePropName="checked"
          className="flex items-center justify-center "
        >
          <Switch
            className="bg-red-500"
            onChange={handleChaneChecked}
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            defaultChecked
          />
        </Form.Item>
      </Form>
      {/* ----------- End Form Login -------- */}
      <Table dataSource={data} columns={columns}></Table>
      {/* ----------- Date Picker -------- */}
      <DatePicker placement="topLeft" onSelect={handleSelectDate} />
      {/* ----------- End Date Picker -------- */}
      {/* ----------- Range Date Picker -------- */}
      <DatePicker.RangePicker />
      {/* ----------- End Range Date Picker -------- */}
      <TimePicker onOk={handleChooseTime} />
      <Spin spinning={true}></Spin>
      <Progress percent={50} strokeColor="green" type="circle" />
      {/* ----------- Float Button -------- */}
      <FloatButton />
      <FloatButton
        icon={<MessageFilled />}
        style={{ right: 80 }}
        shape="square"
        type="primary"
        description="SMS"
      />
      <FloatButton
        icon={<MessageFilled />}
        style={{ bottom: 100, right: 80 }}
        tooltip="chat"
      />

      <FloatButton.Group
        icon={<PlusOutlined />}
        style={{ right: 220 }}
        shape="circle"
        trigger="click"
        type="primary"
      >
        <FloatButton
          icon={<UserAddOutlined />}
          style={{ right: 80 }}
          shape="square"
          tooltip="this tooltip"
          // onClick={}
          description="SMS"
        />
        <FloatButton
          icon={<UserAddOutlined />}
          shape="square"
          tooltip="this tooltip"
          // onClick={}
          description="User"
        />
        <FloatButton
          icon={<FileAddOutlined />}
          shape="square"
          tooltip="this tooltip"
          // onClick={}
          description="File"
        />
      </FloatButton.Group>
      {/* ----------- End Button -------- */}
    </div>
  );
};
export default AndDTemplate;
