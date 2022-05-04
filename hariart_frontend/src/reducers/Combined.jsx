import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { picturesGroup } from "./Picture_group";

const rootReducer = combineReducers({ picturesGroup: picturesGroup });

export const store = configureStore({
  reducer: rootReducer,
});
