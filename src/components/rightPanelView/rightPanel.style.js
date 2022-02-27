import { makeStyles } from "@material-ui/core/styles";
import Styled from "styled-components";

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
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    max-width: 72%;
    scroll-behavior: smooth;
    overflow: scroll;

`;

const useStyles = makeStyles({
  cardsPanelView: {
    border: "3px solid #ccc",
    boxSizing: "content-box",
    boxShadow: "aliceblue",
    padding: "10px",
    backgroundColor: "#cccccc21",
    width: "100%",
  },
});

export {
  useStyles,
  ProductsTitle,
  ProductsCardWrapper,
  ProductsPanel,
  AcronymTitle,
};
