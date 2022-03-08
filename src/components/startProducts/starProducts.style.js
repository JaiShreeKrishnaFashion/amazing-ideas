import { makeStyles } from "@material-ui/core/styles";
import Styled from "styled-components";
import { device } from "../../styles/globalStyle";

const AcronymTitle = Styled.span`
display: block;
    text-align: left;
    padding-left: 35.2em;
`;

const ProductsTitle = Styled.div`
    color: #fff !important;
    background-color: #1a347c !important;
    width: 100%;
    overflow: hidden;
    text-align: left;
    vertical-align: middle;
    padding-top: 8px;
    padding-bottom: 8px;
    font-family: arial;
    padding-left: 35.2em;
`;
const ProductsPanel = Styled.div`
display:block;
background-color:'#999';
 `;
const ProductsCardWrapper = Styled.div`

  @media ${device.mobileL} {
    margin-left:0px;
  }
  @media ${device.mobileS} {
    margin-left:0px;
  }
   @media ${device.laptop} {
    max-width: 800px;
    margin-left:120px;
  }
 

`;

const CardPanelView = Styled.div`
  @media ${device.laptop} {
    max-width: 800px;
  }

  @media ${device.desktop} {
    max-width: 1400px;
  }
  @media ${device.mobileL} {
    max-width: 480px;
  }
  @media ${device.mobileS} {
    max-width: 325px;
  }
`;

const useStyles = makeStyles({
  next: {
    cursor: "pointer",
    position: "absolute",
    top: "30%",
    width: "auto",
    padding: "16px",
    marginTop: "-50px",

    fontWeight: "bold",
    fontSize: "20px",
    userSelect: "none",
    right: "30px",
    borderRadius: "3px 0 0 3px",
  },
  prev: {
    top: "30%",
    left: "19%",
    color: "#000",
    width: "auto",
    cursor: "pointer",
    padding: "16px",
    position: "absolute",
    fontSize: "20px",
    fontWeight: "bold",
    userSelect: "none",
    borderRadius: "0 3px 3px 0",
  },
  cardContainer: {},
});

export {
  useStyles,
  ProductsTitle,
  ProductsCardWrapper,
  ProductsPanel,
  AcronymTitle,
  CardPanelView,
};
