import React from "react";
import { useDispatch } from "react-redux";
import { VIEW_ROUTE_SCREENS } from "../constants/constant";
import { setViewScreenTypeAction } from "../middleware/store/appRouter/appRouterActionCreator";
import MainContainer from "../components/maincontainer";
const MainViewConnect = () => {
  const dispatch = useDispatch();
  const productsViewDisplay = () => {
    console.log("call products view");
    dispatch(setViewScreenTypeAction(VIEW_ROUTE_SCREENS.PRODUCTS_VIEW));
  };
  return (
    <React.Fragment>
      <MainContainer productsViewDisplay={productsViewDisplay} />
    </React.Fragment>
  );
};
export default React.memo(MainViewConnect);
