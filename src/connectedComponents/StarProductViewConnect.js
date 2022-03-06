import React, { memo } from "react";
import { useSelector } from "react-redux";
import StarProductsView from "../components/startProducts/starProductsView";
import { starViewProps } from "../middleware/store/starProduct/starProductSelector";

const StarProductViewConnect = () => {
  const { starProductsData, title } = useSelector(starViewProps);
  const starProductsDataArr =
    Object(starProductsData)?.[Object.keys(starProductsData)];
  const starProductsDataProps = starProductsDataArr?.map((item, index) => {
    return item;
  });
  console.log("star products data", starProductsDataProps);
  return (
    <StarProductsView starProductsData={starProductsDataProps} title={title} />
  );
};
export default memo(StarProductViewConnect);
