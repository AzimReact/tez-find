import React from "react";
import { Input, Space } from "antd";
import { Header as AntdHeader } from "antd/es/layout/layout";
import styles from "./styles.module.scss";

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};

export const Header = ({ onSearch: handleSearch }) => {
  return (
    <AntdHeader style={headerStyle}>
      <div className={styles["header"]}>
        <h2>TezFind</h2>
        <Space direction="vertical">
          <Input.Search
            placeholder="Введи свой телефон"
            allowClear
            enterButton="Найти"
            size="large"
            onSearch={handleSearch}
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
};
