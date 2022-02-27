import { makeStyles } from "@material-ui/core/styles";
import Styled from "styled-components";

const ProductsTitle = Styled.div`
    color: #fff !important;
    background-color: #1a347c !important;
    width: 100%;
    overflow: hidden;
    text-align: center;
    vertical-align: middle;
    padding-top: 8px;
    padding-bottom: 8px;
    font-family: arial;
`;
const ProductsPanel = Styled.div`
display:block;
background-color:'#999';
 `;
const ProductsCardWrapper = Styled.a`
  width: 100%;
    display: block;
    padding: 8px 0px;
    text-align: center;
    border: none;
    white-space: normal;
    float: none;
    outline: 0;
    font-family: arial;
    cursor:pointer;
    `;

const useStyles = makeStyles({});

export { useStyles, ProductsTitle, ProductsCardWrapper, ProductsPanel };
