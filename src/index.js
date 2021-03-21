import React from "react";
import ReactDOM from "react-dom";
import Produtcts from "./Products";
import ShoppingCart from "./ShoppingCart";
import store from "./redux/store";
import "./styles/style.css";
import { Provider } from "react-redux";
console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <div className="row">
      <Produtcts /> <ShoppingCart />{" "}
    </div>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
