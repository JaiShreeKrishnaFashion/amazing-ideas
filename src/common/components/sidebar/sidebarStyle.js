import { makeStyles } from "@material-ui/core/styles";
import Styled from "styled-components";

const SideBarTitle = Styled.div`
  color: #fff !important;
  background-color: #616161 !important;
  width: 100%;
  overflow: hidden;
`;
const SideBarListItems = Styled.div`
background-color: ${(props) => (props.active ? "#4CAF50" : "#fff")};
display:block;
 `;
const SideBarListContent = Styled.a`
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

const useStyles = makeStyles({
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

export { useStyles, SideBarTitle, SideBarListItems, SideBarListContent };
