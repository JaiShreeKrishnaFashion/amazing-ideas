import React from "react";
import SideBar from "../common/components/sidebar/sidebar";
import {
  ContentContainer,
  LeftContainer,
  RightContainer,
  Wrapper,
} from "../styles/globalStyle";

const productsView = ({ productsData, selectedItemView }) => {
  //console.log("inside products view::", productsData[0]);

  return (
    <Wrapper>
      <LeftContainer>
        <SideBar
          contents={productsData}
          selectedItemView={selectedItemView}
        ></SideBar>
      </LeftContainer>
      <ContentContainer>
        <h2>selected view under construction</h2>
      </ContentContainer>
      <RightContainer>Right</RightContainer>
    </Wrapper>
  );
};

export default productsView;
