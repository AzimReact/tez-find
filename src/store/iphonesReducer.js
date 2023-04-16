import { SET_IPHONES } from "./actions";

const defaultState = {};

export const iphoneReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_IPHONES:
      return { ...state, ...action.payload.iphones };
    default:
      return state;
  }
};
