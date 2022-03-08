import React, { memo } from "react";
import { useSelector } from "react-redux";
import { compose } from "redux";
import RightPanelView from "../components/rightPanelView/rightPanelView";
import { rightPanelViewProps } from "../middleware/store/rightpanel/rightPanelSelector";
import { starViewProps } from "../middleware/store/starProduct/starProductSelector";
import { RightPanelViewRouterMapper } from "../routers/rightPanelViewRouterMapper";

const RightPanelViewRouterConnect = () => {
  const { title = "", rightPanelType } = useSelector(rightPanelViewProps);
  const { isStarProducts, starProductsData } = useSelector(starViewProps);
  console.log("rightPanelViewConnect", starProductsData);
  const component = RightPanelViewRouterMapper.find(
    (x) => x.id === rightPanelType
  )?.component;
  if (component) {
    return component;
  }
  return <RightPanelView></RightPanelView>;
};
export default compose(memo)(RightPanelViewRouterConnect);
