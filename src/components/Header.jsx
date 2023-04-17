import React from "react";
import { Input, Space } from "antd";
import { Header as AntdHeader } from "antd/es/layout/layout";
const { Search } = Input;

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};

export default function Header({onSearch: handleSearch}) {
  const onSearch = (value) => {
    console.log(value);
    if (handleSearch) handleSearch(value)
  };
  
  return (
    <AntdHeader style={headerStyle}>
      <div className="header">
        <h2 style={{ cursor: "pointer" }}>TezFind</h2>
        <Space direction="vertical">
          <Search
            placeholder="Введи свой телефон"
            allowClear
            enterButton="Найти"
            size="large"
            onSearch={onSearch}
            style={{
              display: "flex",
              alignSelf: "center",
              width: "200%",
            }}
          />
        </Space>
      </div>
    </AntdHeader>
  );
}