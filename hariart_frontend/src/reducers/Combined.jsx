import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { picturesGroup } from "./Picture_group";
import { orders } from "./Orders";

const rootReducer = combineReducers({
  picturesGroup: picturesGroup,
  orders: orders,
});

export const store = configureStore({
  reducer: rootReducer,
});
