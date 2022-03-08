import { makeStyles } from "@material-ui/core/styles";
import Styled from "styled-components";
import { LeftContainer } from "../../../styles/globalStyle";
const useStyles = makeStyles({
  card_container: {
    padding: "0.01em 0px",
    margin: "5px",
    width: "170px",
    float: "left",
    cursor: "pointer",
  },
  card: {
    boxShadow: "0 4px 10px 0 rgb(0 0 0 / 20%), 0 4px 20px 0 rgb(0 0 0 / 19%)",
  },
  card_center: {
    textAlign: "center",
  },
  card_img: {
    width: "100%",
    objectFit: "cover",
    borderRadius: "8px",
    height: "100px",
  },
});
export { useStyles };
