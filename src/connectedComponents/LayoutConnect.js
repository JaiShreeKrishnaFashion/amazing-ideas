import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  initiateApplicationAction,
  initiateResponsiveAction,
} from "../middleware/store/applicationFlow/appInitializeActionCreator";
import Layout from "../components/layout";
const LayoutViewConnect = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initiateApplicationAction(true));
  }, [dispatch]);

  const redirect = (navigate) => {
    //console.log(navigate);
    switch (navigate.navigateId) {
      case "home":
        dispatch(initiateApplicationAction());
        break;
      case "contact us":
        //console.log("contact us");
        break;
      case "responsiveLayout":
        dispatch(initiateResponsiveAction());

        break;
      default:
        dispatch(initiateApplicationAction());
    }
    //console.log("redirect");
  };
  return (
    <React.Fragment>
      <Layout redirect={redirect} />
    </React.Fragment>
  );
};
export default React.memo(LayoutViewConnect);
