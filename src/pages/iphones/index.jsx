import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "antd";

import styles from "./styles.module.scss";
import { Header, Footer, TypeCard } from "../../components/modules";
import { COLOR_LIST, MEMORY_LIST } from "../../consts";
import { getFieldOptionsByIphoneType, getIphonesByType } from "../../store";

export const Iphones = () => {
  const [color, setColor] = useState("ALL");
  const [memory, setMemory] = useState("ALL");
  const [iphones, setIphones] = useState([]);
  const [colorOptions, setColorOptions] = useState([]);
  const [memoryOptions, setMemoryOptions] = useState([]);
  const { iphoneType } = useParams();

  useEffect(() => {
    getIphones(iphoneType);
    getOptions(iphoneType);
  }, [iphoneType]);

  const getIphones = async (iphoneType) => {
    const response = await getIphonesByType(iphoneType);
    setIphones(response);
  };

  const getOptions = async (iphoneType) => {
    const [colorOptions, memoryOptions] = await Promise.all([
      getFieldOptionsByIphoneType("color", iphoneType),
      getFieldOptionsByIphoneType("memory", iphoneType),
    ]);

    setColorOptions(colorOptions);
    setMemoryOptions(memoryOptions);
  };

  const filteredIphones = useMemo(() => {
    return iphones.filter(
      (iphone) =>
        (iphone.color === color || color === "ALL") &&
        (iphone.memory === memory || memory === "ALL")
    );
  }, [iphones, color, memory]);

  console.log(filteredIphones);
  return (
    <Layout>
      <Header />
      <h1>{iphones[0]?.type}</h1>
      <div className={styles["container"]}>
        <div className={styles["filters"]}>
          <div className={styles["color-filter"]}>
            <select value={color} onChange={(e) => setColor(e.target.value)}>
              <option value="ALL">All</option>
              {colorOptions.map((color, i) => (
                <option key={color + i} value={color}>
                  {COLOR_LIST[color]}
                </option>
              ))}
            </select>
          </div>
          <div className={styles["memory-filter"]}>
            <select value={memory} onChange={(e) => setMemory(+e.target.value)}>
              <option value="ALL">All</option>
              {memoryOptions.map((memory, i) => (
                <option key={memory + i} value={memory}>
                  {MEMORY_LIST[memory]}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles["content"]}>
          <div className={styles["cards"]}>
            {filteredIphones.map((iphone, i) => (
              <TypeCard
                onClick={() => window.open(iphone.url)}
                key={iphone.id}
                title={iphone.title}
                image={iphone.image}
                defaultImage="https://asiastore.kg/image/cache/catalog/iphone/iphone14/iphone14/purple/wwen_iphone14_q422_purple_pdp_image_position-1a-670x540.jpg"
              >
                <div>
                  Market:
                  <b>
                    <i>{iphone.market}</i>
                  </b>
                </div>
                <div>Memory: {MEMORY_LIST[iphone.memory]}</div>
                <div>Color: {COLOR_LIST[iphone.color]}</div>
                <div>Model: {iphone.model ?? "-"}</div>
                <div>
                  Price: <b>{iphone.price}</b>
                </div>
                <div>
                  <b
                    className={
                      iphone.isExist
                        ? styles["isExistTrue"]
                        : styles["isExistFalse"]
                    }
                  >
                    {iphone.isExist ? "В наличии" : "Уточнить у владельцев"}
                  </b>
                </div>
              </TypeCard>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  );
};
