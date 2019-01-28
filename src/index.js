import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MainContainer from "./components/container/MainContainer";
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        <MainContainer />
    </Provider>,
    document.getElementById("root")
);
