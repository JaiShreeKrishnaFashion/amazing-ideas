import { makeStyles } from "@material-ui/core/styles";
import Styled, { css } from "styled-components";
export const useStyles = makeStyles({
  sidebarMain: {
    width: "215px",
    color: "#000!important",
    backgroundColor: "#f1f1f1!important",
    position: "relative",
    animation: "animateleft 0.4s",
  },
  main: {
    marginLeft: "0px",
  },
  active: {
    color: "#fff!important",
    backgroundColor: "#4CAF50!important",
  },
  defaultActive: {
    color: "#fff!important",
    backgroundColor: "#4CAF50!important",
  },
});
export const SideBarTitle = Styled.div`
  color: #fff !important;
  background-color: #616161 !important;
  width: 100%;
  overflow: hidden;
`;
export const SideBarListItems = Styled.div`
display:block;
background-color:'#999';
  ${(props) =>
    props.hoverActive &&
    css`
      &:hover {
        backgroundcolor: "red";
      }
    `}

`;
export const SideBarListContent = Styled.a`
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

export default {
  useStyles,
  SideBarTitle,
  SideBarListItems,
  SideBarListContent,
};
