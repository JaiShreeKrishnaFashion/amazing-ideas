import React, { memo } from "react";
import { useSelector } from "react-redux";
import RightPanelView from "../components/rightPanelView/rightPanelView";
import { rightPanelViewProps } from "../middleware/store/rightpanel/rightPanelSelector";

const RightPanelViewConnect = () => {
  const { title = "" } = useSelector(rightPanelViewProps);
  return <RightPanelView title={title} />;
};
export default memo(RightPanelViewConnect);
