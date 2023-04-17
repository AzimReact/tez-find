import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Layout } from "antd";

import styles from "./styles.module.scss";
import { Header, Footer, TypeCard } from "../../components/modules";

export const Iphones = () => {
  const storeIphones = useSelector((store) => store.iphones);
  const [color, setColor] = useState("");
  const [memory, setMemory] = useState("");
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

  useEffect(() => {
    if (!iphones.length) return;
    setColor(iphones[0].color);
    setMemory(iphones[0].memory);
  }, [iphones]);

  const filteredIphones = useMemo(() => {
    return iphones.filter(
      (iphone) => iphone.color === color && iphone.memory === memory
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
              {colorOptions.map((color, i) => (
                <option key={color + i} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
          <div className={styles["memory-filter"]}>
            <select value={memory} onChange={(e) => setMemory(e.target.value)}>
              {memoryOptions.map((memory, i) => (
                <option key={memory + i} value={memory}>
                  {memory}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles["content"]}>
          <div className={styles["cards"]}>
            {filteredIphones.map((iphone, i) => (
              <TypeCard
                key={iphone.id}
                title={iphone.title}
                image={iphone.image}
                defaultImage="https://asiastore.kg/image/cache/catalog/iphone/iphone14/iphone14/purple/wwen_iphone14_q422_purple_pdp_image_position-1a-670x540.jpg"
              >
                <span>Children...</span>
              </TypeCard>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  );
};
