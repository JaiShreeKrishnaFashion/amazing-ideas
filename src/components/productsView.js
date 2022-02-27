import React from "react";
import RightPanelViewConnect from "../connectedComponents/RightPanelViewConnect";
import SideBar from "../common/components/sidebar/sidebar";
import {
  ContentContainer,
  LeftContainer,
  RightContainer,
  Wrapper,
} from "../styles/globalStyle";

const productsView = ({ productsData, handleClick }) => {
  //console.log("inside products view::", productsData[0]);

  return (
    <Wrapper id="product_wrapper">
      <LeftContainer id="left_panel">
        <SideBar contents={productsData} handleClick={handleClick}></SideBar>
      </LeftContainer>
      <RightContainer id="right_panel">
        <RightPanelViewConnect />
      </RightContainer>
    </Wrapper>
  );
};

export default productsView;
