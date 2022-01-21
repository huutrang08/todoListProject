import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import store from './redux/store'
import {Provider} from 'react-redux'
import FRoot from "./Components/FRoot";
import FForm  from "./Components/FForm";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <FRoot/>
    </BrowserRouter>
  </Provider>  
  ,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
