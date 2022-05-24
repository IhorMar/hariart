import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { picturesGroup } from "./Picture_group";
import { orders } from "./Orders";
import { timeout } from "./Time";

const rootReducer = combineReducers({
  picturesGroup: picturesGroup,
  orders: orders,
  timeout: timeout,
});

export const store = configureStore({
  reducer: rootReducer,
});
