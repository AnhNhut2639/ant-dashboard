import React from "react";
import {
  Form,
  Button,
  Checkbox,
  DatePicker,
  Input,
  Select,
  Space,
  Rate,
  AutoComplete,
} from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";

const AntDForm = () => {
  const onFinish = (values: any) => {
    console.log({ values });
  };
  const initialValues = {
    teacher: "Delima",
    class: "9A6",
    students: [
      {},
      {
        first: "David",
      },
    ],
  };
  // search auto complete
  // const options = [
  //   {
  //     label: "One",
  //     value: "one",
  //   },
  //   {
  //     label: "Two",
  //     value: "two",
  //   },
  //   {
  //     label: "Three",
  //     value: "three",
  //   },
  // ];
  const [form] = Form.useForm();
  const name = Form.useWatch("myName", form);
  const programing = Form.useWatch("programing", form);
  console.log(name);

  return (
    <div className="h-screen w-screen text-2xl flex flex-col items-center justify-center">
      {/* <Form
        autoComplete="off"
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 14 }}
        onFinish={(values) => {
          console.log({ values });
        }}
        onFinishFailed={(error) => {
          console.log({ error });
        }}
      >
        <Form.Item
          name="fullName"
          label="Full Name"
          rules={[
            { required: true, message: "Please enter your name" },
            {
              whitespace: true,
              message: "not space",
            },
            { min: 6 },
          ]}
          hasFeedback
        >
          <Input placeholder="Type your name"></Input>
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Please enter your email" },
            {
              type: "email",
              message: "Please enter a valid email",
            },
          ]}
          hasFeedback
        >
          <Input placeholder="Type your email"></Input>
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            { required: true },
            {
              min: 6,
            },
            {
              validator: (_, value) => {
                value && value.includes("A")
                  ? Promise.resolve()
                  : Promise.reject("password not match criteria.");
              },
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Type your password"></Input.Password>
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          dependencies={["password"]}
          rules={[
            { required: true },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject("password not match");
              },
            }),
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Type your confirm password"></Input.Password>
        </Form.Item>
        <Form.Item name="gender" label="Gender" requiredMark="optional">
          <Select placeholder="Type your confirm password">
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="dob"
          label="Date of Birth"
          rules={[
            { required: true, message: "Please provide your Date of Birth" },
          ]}
          hasFeedback
        >
          <DatePicker
            style={{ width: "100%" }}
            picker="date"
            placeholder="choose you birthday"
          />
        </Form.Item>
        <Form.Item
          name="website"
          label="Website"
          rules={[
            { required: true, message: "Please enter your website" },
            {
              type: "url",
              message: "Please enter your URL",
            },
          ]}
          hasFeedback
        >
          <Input placeholder="Add your Webiste url" />
        </Form.Item>
        <Form.Item
          name="agreement"
          label="Agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) => {
                return value
                  ? Promise.resolve()
                  : Promise.reject("please check");
              },
            },
          ]}
        >
          <Checkbox>Agree to our</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form> */}
      {/* rate */}
      <Rate />
      <Rate
        defaultValue={3}
        count={4}
        tooltips={["bad", "normal", "Good", "Brilliant"]}
      />
      <Rate defaultValue={3} allowHalf allowClear style={{ color: "green" }} />
      <Rate
        defaultValue={3}
        allowHalf
        allowClear
        style={{ color: "red" }}
        character="N"
        // character={<icon />}
        onChange={(value) => {
          console.log("You rate as", value);
        }}
      />

      {/* Dynamic Form */}
      <Form
        initialValues={initialValues}
        onFinish={onFinish}
        style={{ width: 500 }}
      >
        <Form.Item name={"teacher"} label="Teacher name">
          <Input placeholder="Teacher Name" />
        </Form.Item>
        <Form.Item name={"class"} label="Class Name">
          <Input placeholder="Class" />
        </Form.Item>
        <Form.List name={"students"}>
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, index) => {
                return (
                  <Space key={field.key} direction="horizontal" size={12}>
                    <Form.Item
                      name={[field.name, "first"]}
                      label={`${index + 1}-Student`}
                      rules={[
                        { required: true, message: "first name is required" },
                      ]}
                    >
                      <Input placeholder="First name" />
                    </Form.Item>
                    <Form.Item
                      name={[field.name, "last"]}
                      label={`${index + 1}-Student`}
                    >
                      <Input placeholder="Last name" />
                    </Form.Item>
                    <Form.Item
                      name={[field.name, "gender"]}
                      label={`${index + 1}-gender`}
                    >
                      <Select placeholder="Gender">
                        {["Male", "Female"].map((gender) => {
                          return (
                            <Select.Option value={gender} key={gender}>
                              {gender}
                            </Select.Option>
                          );
                        })}
                      </Select>
                    </Form.Item>
                    <MinusCircleOutlined
                      style={{ height: 40, color: "red" }}
                      onClick={() => {
                        remove(field.name);
                      }}
                    />
                  </Space>
                );
              })}
              <Form.Item>
                <Button
                  icon={<PlusOutlined />}
                  type="dashed"
                  block
                  onClick={() => {
                    add();
                  }}
                >
                  Add
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
      {/* Search auto complete */}
      {/* <AutoComplete
        style={{ width: 230 }}
        placeholder="search here auto complete...."
        options={options}
        filterOption={true}
        onSelect={(value: any) => {
          console.log(value);
        }}
        onSearch={(values) => {
          console.log("search...", values);
        }}
      /> */}

      <Form form={form}>
        <Form.Item label="Name" name={"myName"}>
          <Input placeholder="Enter name" />
        </Form.Item>
        <Form.Item label="Programing" name={"programing"}>
          <Select
            placeholder={"Select your skill"}
            options={[
              {
                label: "javascript",
                value: "js",
              },
              {
                label: "typeScript",
                value: "ts",
              },
              {
                label: "Other",
                value: "other",
              },
            ]}
          ></Select>
        </Form.Item>
        {programing === "other" ? (
          <Form.Item label="please fill" name={"program"}>
            <Input placeholder="please fill" />
          </Form.Item>
        ) : null}
      </Form>
    </div>
  );
};
export default AntDForm;
