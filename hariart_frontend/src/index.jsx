import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./reducers/Combined";
import App from "./App";
import "./localization/config";

createRoot(document.getElementById("app")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
