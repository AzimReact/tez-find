import { Layout } from "antd";

const { Footer: AntFooter } = Layout;

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};

export const Footer = () => {
  return <AntFooter style={footerStyle}>Footer</AntFooter>;
};
