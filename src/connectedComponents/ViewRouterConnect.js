import React, { memo } from "react";
import { compose } from "redux";
import { useSelector } from "react-redux";
import { ViewRouteMapper } from "../routers/ViewRouterMapper";
import Default from "../components/defaultPanel";

const ViewRouterConnect = () => {
  const viewType = useSelector(
    (state) => state.appRouterReducer.viewScreenType
  );
  //console.log(viewType);
  const component = ViewRouteMapper.find((x) => x.id === viewType)?.component;
  if (component) {
    //console.log(component);
    return component;
  }

  return <Default></Default>;
};
export default compose(memo)(ViewRouterConnect);
