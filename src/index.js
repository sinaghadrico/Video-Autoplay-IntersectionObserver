import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "./state/reducers";
import { Provider } from "react-redux";
import { fetchData } from "./state/actions";
const store = createStore(reducer, compose(applyMiddleware(thunk)));

store.dispatch(fetchData());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
