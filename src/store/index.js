import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import user from "./user.redux";
import counter from "./counter.redux";

const store = createStore(
  // reducer模块化
  combineReducers({ user, counter }),
  applyMiddleware(thunk)
);

export default store;
