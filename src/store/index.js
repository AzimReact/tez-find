import { fetchIphones } from "../services";

export const getIphonesRoot = async () => {
  try {
    const cache = JSON.parse(sessionStorage.getItem("IPHONES"));
    if (cache) return cache;
    const iphones = await fetchIphones();
    sessionStorage.setItem("IPHONES", JSON.stringify(iphones));
    return iphones;
  } catch (error) {
    console.log(error.message);
  }
};

export const getIphoneTypes = async () => {
  const iphonesRoot = await getIphonesRoot();

  const result = [];
  for (const typeKey in iphonesRoot) {
    let marketIphones = iphonesRoot[typeKey]["istore"]
      ? iphonesRoot[typeKey]["istore"]
      : iphonesRoot[typeKey]["asia-store"];

    marketIphones = marketIphones ?? iphonesRoot[typeKey][Object.keys(iphonesRoot[typeKey]).at(0)] ?? []

    result.push({
      type: marketIphones.at(-1).type,
      typeKey: typeKey,
      image: marketIphones.at(-1).image,
    });
  }

  return result;
};

export const getIphonesByType = async (iphoneType) => {
  const iphonesRoot = await getIphonesRoot();

  const result = [];

  for (const market in iphonesRoot[iphoneType]) {
    iphonesRoot[iphoneType][market] = iphonesRoot[iphoneType][market].map(
      (el) => ({ ...el, market })
    );
    result.push(...iphonesRoot[iphoneType][market]);
  }

  return result;
};

export const getFieldOptionsByIphoneType = async (fieldName, iphoneType) => {
  const iphones = await getIphonesByType(iphoneType)
  const result = {};

  for (let iphone of iphones) {
    result[iphone[fieldName]] = iphone[fieldName];
  }

  return Object.values(result);
}
