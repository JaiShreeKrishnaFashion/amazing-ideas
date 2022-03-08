import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsView from "../components/productsView";
import { RIGHT_PANEL_VIEWS } from "../constants/constant";
import {
  displayMovieProducts,
  movieProductInitiateAction,
} from "../middleware/store/movieProduct/movieProductActionCreators";
import { productsInitiateAction } from "../middleware/store/productsCategory/productsViewActionCreator";
import { productsViewProps } from "../middleware/store/productsCategory/productsViewSelector";
import {
  rightPanelInitiateAction,
  setRightPanelScreenTypeAction,
} from "../middleware/store/rightpanel/rightPanelActionCreator";

const ProductsViewConnect = () => {
  const [isActive, setActive] = useState(false);
  const dispatch = useDispatch();
  const { displayproductsItems, productsData = [] } =
    useSelector(productsViewProps);
  useEffect(() => {
    dispatch(productsInitiateAction());
  }, [dispatch]);

  const selectedItemView = (id, isActive) => {
    //dispatch(rightPanelInitiateAction(id));

    switch (id) {
      case "Star":
        // yield put(starProductInitiateAction(true));
        setActive(isActive);
        dispatch(
          setRightPanelScreenTypeAction(RIGHT_PANEL_VIEWS.STAR_VIEW_COMPONENT)
        );
        break;
      case "Movie":
        setActive(true);
        dispatch(movieProductInitiateAction(""));
        dispatch(
          setRightPanelScreenTypeAction(RIGHT_PANEL_VIEWS.MOVIE_VIEW_COMPONENT)
        );
        break;
      case "Wedding":
        dispatch(
          setRightPanelScreenTypeAction(
            RIGHT_PANEL_VIEWS.WEDDING_VIEW_COMPONENT
          )
        );
        break;
      case "Kids":
        dispatch(
          setRightPanelScreenTypeAction(RIGHT_PANEL_VIEWS.KIDS_VIEW_COMPONENT)
        );
        break;

      default:
        setActive(false);
        console.log("default");
    }
    console.log("id", id);
  };

  const productsProps = {
    displayproductsItems: displayproductsItems,
    productsData: productsData,
    handleClick: selectedItemView,
    active: isActive,
  };

  return <ProductsView {...productsProps}></ProductsView>;
};
export default memo(ProductsViewConnect);
