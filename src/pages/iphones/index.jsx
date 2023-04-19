import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Layout } from "antd";

import styles from "./styles.module.scss";
import { Header, Footer, TypeCard } from "../../components/modules";
import { COLOR_LIST, MEMORY_LIST } from "../../consts";

export const Iphones = () => {
  const storeIphones = useSelector((store) => store.iphones);
  const [color, setColor] = useState("ALL");
  const [memory, setMemory] = useState("ALL");
  const { iphoneType } = useParams();

  const iphones = useMemo(() => {
    const result = [];

    for (const market in storeIphones[iphoneType]) {
      storeIphones[iphoneType][market] = storeIphones[iphoneType][market].map(
        (el) => ({ ...el, market })
      );
      result.push(...storeIphones[iphoneType][market]);
    }

    return result;
  }, [storeIphones, iphoneType]);

  const filteredIphones = useMemo(() => {
    return iphones.filter(
      (iphone) =>
        (iphone.color === color || color === "ALL") &&
        (iphone.memory === memory || memory === "ALL")
    );
  }, [iphones, color, memory]);

  const colorOptions = useMemo(() => {
    const result = {};
    for (let iphone of iphones) {
      result[iphone.color] = iphone.color;
    }

    return Object.values(result);
  }, [iphones]);

  const memoryOptions = useMemo(() => {
    const result = {};
    for (let iphone of iphones) {
      result[iphone.memory] = iphone.memory;
    }

    return Object.values(result);
  }, [iphones]);

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
              </TypeCard>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  );
};
