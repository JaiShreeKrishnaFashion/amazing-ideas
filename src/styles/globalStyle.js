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
  grid-template-columns: 99vw 100vw;
  position: static;
  overflow: hidden;
  display: grid;
  border: 1px solid #ccc;
  height: auto;
`;
const LeftContainer = styled.div`
  flex:2
  border: solid 1px #ccc;
  height:auto;
  margin-right: auto;

`;
const RightContainer = styled.div`
  border: solid 1px #ccc;
  margin-left: auto;
  flex: 10;
  height: auto;
`;
const LayoutContainer = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  border: solid 1px #ccc;
  display: flex;
  justify-content: space-between;
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
