import React from "react";
import LayoutConnect from "./connectedComponents/LayoutConnect";

const App = () => {
  //console.log("app ");
  return (
    <div className="App">
      <LayoutConnect />
    </div>
  );
};

export default React.memo(App);
