import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,
body{
    height:100%;
    width:100vw;
    overfloe:hidden;
}
body{
    font-family:Arial, sans-derif, roboto;
}

body.fontLoaded{
    font-family:'Open Sans'
}
#root{
    background-color:rgb(230, 233, 240);
    min-height:100%;
    min-width:100%;
    position:relative;
}
p,label{
    font-family:Georgia-Times, serif;
}
`;
const FullContainer = styled.div`
  position: relative;
  color: #fff;
  width: 100%;
  height: 86%;
  background: #e5a109b0;
`;
const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: ${({ collapsed }) =>
    collapsed ? "30vw 65vw" : "100vw 100vw"};
  width: 100%;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 100vw 100vw;
  padding-left: 30px;
  border: 1px solid #ccc;
  height: auto;
`;
const LeftContainer = styled.div`
  grid-area: Left;
  background: #fff;
  position: relative;
  display: flex;
  align-items: flex-end;
  height: 100%;
  flex-direction: column;
  border: 1px solid #ccc;
  width: 20%;
  padding-bottom: 20px;
`;
const RightContainer = styled.div`
  grid-area: Right;
  background: #fff;
  position: relative;
  margin-right: ${({ collapsed }) => (collapsed ? "" : "32px")};
`;
const LayoutContainer = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
`;
const PageTitle = styled.p`
  color: #fff;
  margin: 0 auto;
  text-align: center;
  font-size: 30px;
  font-family: arial;
  padding: 20px;
`;
const Button = styled.button`
  position: fixed;
  right: 20px;
  top: 60px;
  width: 180px;
  height: 50px;
  border-radius: 10px;
`;
export {
  LayoutContainer,
  Wrapper,
  GlobalStyle,
  ContentContainer,
  LeftContainer,
  RightContainer,
  FullContainer,
  PageTitle,
  Button,
};
