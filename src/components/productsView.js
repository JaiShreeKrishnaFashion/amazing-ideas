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
    <Wrapper>
      <LeftContainer>
        <SideBar contents={productsData} handleClick={handleClick}></SideBar>
      </LeftContainer>
      <ContentContainer>
        <RightPanelViewConnect />
      </ContentContainer>
    </Wrapper>
  );
};

export default productsView;
