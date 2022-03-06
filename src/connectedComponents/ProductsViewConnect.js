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
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const { displayproductsItems, productsData = [] } =
    useSelector(productsViewProps);
  useEffect(() => {
    dispatch(productsInitiateAction());
  }, [dispatch]);

  const selectedItemView = (id) => {
    //dispatch(rightPanelInitiateAction(id));
    setActive(true);
    switch (id) {
      case "Star":
        // yield put(starProductInitiateAction(true));
        dispatch(
          setRightPanelScreenTypeAction(RIGHT_PANEL_VIEWS.STAR_VIEW_COMPONENT)
        );
        break;
      case "Movie":
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
        console.log("default");
    }
    console.log("id", id);
  };

  const productsProps = {
    displayproductsItems: displayproductsItems,
    productsData: productsData,
    handleClick: selectedItemView,
    active: active,
  };

  return <ProductsView {...productsProps}></ProductsView>;
};
export default memo(ProductsViewConnect);
