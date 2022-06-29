import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import numerosReducer from "./reducers/numeros";

const reducers = combineReducers({
  numeros: numerosReducer,
});

function storeConfig() {
  return configureStore({ reducer: reducers });
}
export default storeConfig;
