import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui//core/Grid";
import React from "react";
import Proptypes from "prop-types";
import { useStyles } from "./transitionStyle";
import DisplayLocalText from "../../../components/DisplayLocalText";

export const ProcessingScreen = ({ message, processing }) => {
  const processingMsg = DisplayLocalText({ tid: message });
  const classes = useStyles();
  return (
    <Grid container className={classes.bodyContainer}>
      <Grid className={classes.outerContainer} container>
        <Grid className={classes.innerBodyContainer} container item>
          <Grid className={classes.marginGridTop} container item>
            {processing ? <CircularProgress /> : ""}
            <Grid
              item
              className={classes.closedText}
              data-qtag-transition={message}
            >
              {processingMsg}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
ProcessingScreen.propTypes = {
  message: Proptypes.string,
};
export default ProcessingScreen;
