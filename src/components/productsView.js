import React from "react";
import SideBar from "../common/components/sidebar/sidebar";
import {
  ContentContainer,
  LeftContainer,
  RightContainer,
  Wrapper,
} from "../styles/globalStyle";
import RightPanelViewRouterConnect from "../connectedComponents/RightPanelViewRouterConnect";

const productsView = ({ productsData, handleClick, active }) => {
  //console.log("inside products view::", productsData[0]);

  return (
    <Wrapper id="product_wrapper">
      <LeftContainer id="left_panel">
        <SideBar
          contents={productsData}
          handleClick={handleClick}
          active={active}
        ></SideBar>
      </LeftContainer>
      <RightContainer id="right_panel">
        <RightPanelViewRouterConnect />
      </RightContainer>
    </Wrapper>
  );
};

export default productsView;
