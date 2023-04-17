import { Layout, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";
import { getIphones } from "../../store/actions";
import { TypeCard, Header, Footer } from "../../components/modules";
import { SimpleSpinner } from "../../components/ui";

export const Home = () => {
  const storeIphones = useSelector((store) => ({ ...store.iphones }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const iphoneTypes = useMemo(() => {
    const result = [];
    for (const typeKey in storeIphones) {
      let marketIphones = storeIphones[typeKey]["istore"]
        ? storeIphones[typeKey]["istore"]
        : storeIphones[typeKey]["asia-store"];

      result.push({
        type: marketIphones.at(-1).type,
        typeKey: typeKey,
        image: marketIphones.at(-1).image,
      });
    }

    return result;
  }, [storeIphones]);

  useEffect(() => {
    dispatch(getIphones());
  }, [dispatch]);

  if (!iphoneTypes.length) return <SimpleSpinner />;

  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
      size={[0, 48]}
    >
      <Layout>
        <Header />

        <div className={styles['all-cards']}>
          <div className={styles['cards']}>
            {iphoneTypes.map(({ typeKey, type, image }) => (
              <TypeCard
                onClick={() => navigate(typeKey)}
                key={type}
                title={type}
                image={image}
                defaultImage="https://asiastore.kg/image/cache/catalog/iphone/iphone14/iphone14/purple/wwen_iphone14_q422_purple_pdp_image_position-1a-670x540.jpg"
              />
            ))}
          </div>
        </div>

        <Footer />
      </Layout>
    </Space>
  );
};
