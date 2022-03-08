import { makeStyles } from "@material-ui/styles";
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

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

const Page = styled.div`
  margin: auto;
  font-family: "sans-serif";
  text-align: center;

  @media ${device.laptop} {
    max-width: 100%;
  }

  @media ${device.desktop} {
    max-width: 100%;
  }
`;
const Grid = styled.div`
  border: 1px solid #ccc;
`;
const Row = styled.div`
  display: flex;
  border: 1px solid #ccc;
`;
const Col = styled.div`
  flex: ${(props) => props.size};
  ${(props) => props.collapse && media[props.collapse](`display:none`)};
  border: 1px solid #ccc;
`;
const media = {
  xs: (styles) => `
  @media only screen and (max-width:480px){
    ${styles}
  }
  `,
};
const useStyles = makeStyles({
  productsWrapper: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  cardWrapper: {
    minWidth: "20%",
  },
});

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
  device,
  size,
  Page,
  Grid,
  Row,
  Col,
  useStyles,
};
