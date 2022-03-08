import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import StarProductsCollection from "../components/startProducts/starProductsCollection";
import { starViewProps } from "../middleware/store/starProduct/starProductSelector";

const StarProductsCollectionConnect = () => {
  const dispatch = useDispatch();
  const { starCollectionData, title } = useSelector(starViewProps);

  return (
    <StarProductsCollection
      starCollectionData={starCollectionData}
      title={title}
    />
  );
};
export default memo(StarProductsCollectionConnect);
