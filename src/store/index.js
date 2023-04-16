import { applyMiddleware, combineReducers, createStore } from "redux";
import { iphoneReducer } from "./iphonesReducer";

const rootReducer = combineReducers({
  iphones: iphoneReducer,
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));

function reduxThunk(store) {
  return (next) => {
    return (action) => {
      if (typeof action === "function") action(next, store);
      else next(action);
    };
  };
}
