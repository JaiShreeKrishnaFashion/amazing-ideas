import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsView from "../components/productsView";
import { productsInitiateAction } from "../middleware/store/productsCategory/productsViewActionCreator";
import { productsViewProps } from "../middleware/store/productsCategory/productsViewSelector";
import { rightPanelInitiateAction } from "../middleware/store/rightpanel/rightPanelActionCreator";

const ProductsViewConnect = () => {
  const dispatch = useDispatch();
  const { displayproductsItems, productsData = [] } =
    useSelector(productsViewProps);
  useEffect(() => {
    dispatch(productsInitiateAction());
    dispatch(rightPanelInitiateAction(true));
  }, [dispatch]);

  const selectedItemView = (id) => {
    console.log("id", id);
    dispatch(rightPanelInitiateAction(id));
  };

  const productsProps = {
    displayproductsItems: displayproductsItems,
    productsData: productsData,
    handleClick: selectedItemView,
  };

  return <ProductsView {...productsProps}></ProductsView>;
};
export default memo(ProductsViewConnect);
