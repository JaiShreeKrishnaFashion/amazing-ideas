import React from "react";
import LayoutConnect from "./connectedComponents/LayoutConnect";
import { Page } from "./styles/globalStyle";

const App = () => {
  //console.log("app ");
  return (
    <Page>
      <LayoutConnect />
    </Page>
  );
};

export default React.memo(App);
