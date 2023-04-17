import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Layout } from "antd";

import styles from "./styles.module.scss";
import { Header, Footer } from "../../components/modules";

// FIXME: This page under construction !!!!
export const Iphone = () => {
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

  console.log("render", filteredIphones);
  // TODO:
  const colorOptions = useMemo(() => {
    const result = {};
    for (let iphone of iphones) {
      if (iphone.memory !== memory) continue;
      result[iphone.color] = iphone.color;
    }

    return Object.values(result);
  }, [iphones, memory]);

  const memoryOptions = useMemo(() => {
    const result = {};
    for (let iphone of iphones) {
      if (iphone.color !== color) continue;
      result[iphone.memory] = iphone.memory;
    }

    return Object.values(result);
  }, [iphones, color]);

  return (
    <Layout>
      <Header />
      <div className={styles["title"]}>
        <h1>{iphones[0]?.type}</h1>
      </div>

      <div className={styles["iphone-container"]}>
        <div className={styles["preview"]}>
          <div>
            <img src={iphones[0]?.image} alt="" />
          </div>
        </div>
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
      </div>

      <Footer />
    </Layout>
  );
};
