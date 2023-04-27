import { Layout } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";
import { TypeCard, Footer, Header } from "../../components/modules";
import { SimpleSpinner } from "../../components/ui";
import { getIphoneTypes } from "../../store";

export const Main = () => {
  const [iphoneTypes, setIphoneTypes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTypes();
  }, []);

  const getTypes = async () => {
    const response = await getIphoneTypes();
    setIphoneTypes(response);
  };

  if (!iphoneTypes.length) return <SimpleSpinner />;

  return (
    <Layout>
      <Header />

      <div className={styles["all-cards"]}>
        <div className={styles["cards"]}>
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
  );
};
