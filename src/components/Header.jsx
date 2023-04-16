import React from "react";
import { Input, Space } from "antd";
import { Header as AntdHeader } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
const { Search } = Input;

export default function Header({ searchQuery, setSearchQuery }) {
  const onSearch = (value) => {
    console.log(value);
  };
  const headerStyle = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: "#7dbcea",
  };
  return (
    <AntdHeader style={headerStyle}>
      <div className="header">
        <h2>
          <Link style={{ cursor: "pointer", color: "white" }} to="/">
            TezFind
          </Link>{" "}
        </h2>
        <Space direction="vertical">
          <Search
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
