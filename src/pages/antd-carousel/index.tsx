import React, { useRef, useState } from "react";
import {
  Button,
  Carousel,
  Steps,
  Collapse,
  Typography,
  Divider,
  Dropdown,
} from "antd";
import { CaretRightFilled } from "@ant-design/icons";

const AntdCarousel = () => {
  const ref = useRef<any>();
  const [current, setCurrent] = useState<number>(1);
  const { Step } = Steps;
  return (
    <div className="h-screen w-screen gap-4 flex flex-col items-center justify-center text-2xl">
      <div className="h-[300px] w-[300px] bg-orange-400">
        <Carousel
          autoplay
          dots={true}
          //   dotPosition="left"
          //   pauseOnDotsHover
          //   pauseOnHover
          draggable
          effect="scrollx"
          ref={ref}
        >
          <div className="h-[300px] w-[300px] flex items-center justify-center text-2xl text-white bg-red-600">
            slide 1
          </div>
          <div className="h-[300px] w-[300px] flex items-center justify-center text-2xl text-white bg-green-600">
            slide 2
          </div>
          <div className="h-[300px] w-[300px] flex items-center justify-center text-2xl text-white bg-sky-600">
            slide 3
          </div>
        </Carousel>
      </div>
      <div>
        <Button
          onClick={() => {
            ref.current.prev();
          }}
        >
          Prev
        </Button>
        <Button
          onClick={() => {
            ref.current.goTo(0);
          }}
        >
          Reset
        </Button>
        <Button
          onClick={() => {
            ref.current.next();
          }}
        >
          Next
        </Button>
      </div>
      {/* <div>
        <Steps
          current={current}
          percent={50}
          labelPlacement="vertical"
          //   direction="vertical"
          onChange={(c) => {
            setCurrent(c);
          }}
          //   progressDot
        >
          <Step title="Finished"></Step>
          <Step title="In Progress" subTitle="2 Mins" status="error"></Step>
          <Step title="Waiting"></Step>
        </Steps>
      </div> */}
      <div>
        <Collapse
          accordion={false}
          expandIconPosition="right"
          expandIcon={({ isActive }) => {
            return <CaretRightFilled rotate={isActive ? 90 : 0} />;
          }}
          defaultActiveKey={["2"]}
          //   bordered={false}
        >
          <Collapse.Panel key={1} header={<div>this is custom 1</div>}>
            <Typography.Text>this content</Typography.Text>
          </Collapse.Panel>
          <Collapse.Panel
            extra={<Button>Haha</Button>}
            key={2}
            // collapsible="disabled"
            header="header panel 2"
          >
            <Typography.Text>this content 2</Typography.Text>
          </Collapse.Panel>
        </Collapse>
      </div>
      <div></div>
    </div>
  );
};
export default AntdCarousel;
