import React from "react";
import MyCard from "./MyCard";
import { Layout, Space } from "antd";
const { Content } = Layout;
const contentStyle = {
  textAlign: "center",
  minHeight: "95vh",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9",
};

export default function MyAllCards({ searchedIphones }) {
  return (
    <Content style={contentStyle}>
      <div className="all-cards">
        <Space
          direction="vertical"
          style={{
            width: "93%",
          }}
          size={[0, 48]}
        >
          {searchedIphones.length > 0 ? (
            <div className="cards">
              {searchedIphones.map((iphone) => (
                <MyCard
                  key={iphone.model}
                  title={iphone.model}
                  image={iphone.image}
                  defaultImage="https://asiastore.kg/image/cache/catalog/iphone/iphone14/iphone14/purple/wwen_iphone14_q422_purple_pdp_image_position-1a-670x540.jpg"
                />
              ))}
            </div>
          ) : (
            <>
              <h1>Найди свой айфон iphone по лучшей цене в городе!</h1>
              <h4>Loading...</h4>
            </>
          )}
        </Space>
      </div>
    </Content>
  );
}
