import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import store from "../src/store";
import App from "./App";
import LanguageProvider from "./common/components/languageProvider/LanguageProvider";
//import routes from "./common/utils/routes";
const rootEle = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <LanguageProvider>
        <App></App>
      </LanguageProvider>
    </BrowserRouter>
  </Provider>,
  rootEle
);
