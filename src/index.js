import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";

import { Provider } from "react-redux";
import store from "./redux/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , rootElement
);