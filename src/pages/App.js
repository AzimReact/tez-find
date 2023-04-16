import { Layout, Space } from "antd";
import "./App.css";
import MyAllCards from "../components/MyAllCards";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import Header from "../components/Header";
import { getIphones } from "../store/actions";

const { Footer } = Layout;

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};

const App = () => {
  const storeIphones = useSelector((store) => ({ ...store.iphones }));
  const dispatch = useDispatch();

  const iphones = useMemo(() => {
    const result = [];
    for (const key in storeIphones) {
      result.push({
        ...storeIphones[key],
        model: key,
        image: storeIphones[key]["asia-store"][0].image,
      });
    }

    return result;
  }, [storeIphones]);

  useEffect(() => {
    dispatch(getIphones());
  }, [dispatch]);

  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
      size={[0, 48]}
    >
      <Layout>
        <Header iphonesRender={iphones} />
        <MyAllCards searchedIphones={iphones} />
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Space>
  );
};

export default App;
