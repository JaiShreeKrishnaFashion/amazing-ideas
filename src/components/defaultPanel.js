import React from "react";
import {
  ContentContainer,
  LeftContainer,
  RightContainer,
  Wrapper,
} from "../styles/globalStyle";

const DefaultView = () => {
  return (
    <Wrapper>
      <LeftContainer>Left</LeftContainer>
      <ContentContainer>Content</ContentContainer>
      <RightContainer>Right</RightContainer>
    </Wrapper>
  );
};

export default DefaultView;
