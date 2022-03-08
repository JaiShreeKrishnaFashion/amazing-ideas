import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import StarProductsView from "../components/startProducts/starProductsView";
import {
  starProductInitiateAction,
  starProductsCollectionAction,
} from "../middleware/store/starProduct/starProductActionCreators";
import { starViewProps } from "../middleware/store/starProduct/starProductSelector";

const StarProductViewConnect = () => {
  const dispatch = useDispatch();
  const { starProductsData, title, isStarCollection, imgCaption } =
    useSelector(starViewProps);
  const starProductsDataArr =
    Object(starProductsData)?.[Object.keys(starProductsData)];
  const starProductsDataProps = starProductsDataArr?.map((item, index) => {
    return item;
  });
  console.log("star products data", starProductsDataProps);
  const cardClick = (imgCaption) => {
    console.log(imgCaption);
    dispatch(
      starProductsCollectionAction({ isDisplay: true, imgCaption: imgCaption })
    );
    dispatch(starProductInitiateAction());
  };

  return (
    <StarProductsView
      starProductsData={starProductsDataProps}
      title={title}
      cardClick={cardClick}
      isStarCollection={isStarCollection}
      imgCaption={imgCaption}
    />
  );
};
export default memo(StarProductViewConnect);
