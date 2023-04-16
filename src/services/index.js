import axios from "axios";

const $api = axios.create({
  baseURL:
    "https://catalog-75e49-default-rtdb.asia-southeast1.firebasedatabase.app",
});

export const fetchIphones = async () => {
  try {
    const { data } = await $api.get("/iphones.json");
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
