import { Typography } from "antd";

const AppFooter = () => {
  return (
    <div className="AppFooter">
      <Typography.Link href="tel:+123456789">+ 12312312312312</Typography.Link>
      <Typography.Link href="https://www.google.com" target={"_blank"}>
        Privacy
      </Typography.Link>
      <Typography.Link href="https://www.google.com" target={"_blank"}>
        Term fo Use
      </Typography.Link>
    </div>
  );
};

export default AppFooter;
