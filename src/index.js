import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
//import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById("root"));
//serviceWorker.unregister();  // 监听开发、 如果有内容需要缓存，就自动缓存起来， 可注释

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,

    document.querySelector("#root")
  );
}
render();
store.subscribe(render);
