import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles({
  bodyContainer: {
    backgroundColor: "rgb(230,233,250)",
    alignItems: "center",
    flexDirection: "column",
  },
  outerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  innerBodyContainer: {
    backgroundColor: "rgb(255, 255, 255)",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    height: "auto",
    width: "96%",
  },
  closedText: {
    marginTop: "20px",
    fontSize: "28px",
    fontFamily: "arial",
  },
  marginGridTop: {
    width: "100%",
    justifyContent: "center",
    display: "contents",
  },
  footerGridContainer: {
    width: "100%",
    height: "144px",
    position: "absolute",
    bottom: 0,
    backgroundColor: "reg(230, 233, 240)",
  },
});
