import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import { searchRobot, requestRobotReducer } from "./reducers";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import "./index.css";

const logger = createLogger();
const store = createStore(
  combineReducers({ searchRobot, requestRobotReducer }),
  applyMiddleware(logger, thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
