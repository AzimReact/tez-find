import { fetchIphones } from "../../services";

export const SET_IPHONES = "SET_IPHONES";

export const getIphones = () => {
  return async (dispatch) => {
    const iphones = await fetchIphones();
    dispatch({ type: SET_IPHONES, payload: { iphones } });
  };
};
