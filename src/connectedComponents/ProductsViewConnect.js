import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsView from "../components/productsView";
import { productsInitiateAction } from "../middleware/store/productsView/productsViewActionCreator";
import { productsViewProps } from "../middleware/store/productsView/productsViewSelector";

const ProductsViewConnect = () => {
  const dispatch = useDispatch();
  const { displayproductsItems, productsData = [] } =
    useSelector(productsViewProps);
  useEffect(() => {
    dispatch(productsInitiateAction());
  }, [dispatch]);

  const selectedItemView = (id) => {};

  const productsProps = {
    displayproductsItems: displayproductsItems,
    productsData: productsData,
    selectedItemView: selectedItemView,
  };

  return <ProductsView {...productsProps}></ProductsView>;
};
export default memo(ProductsViewConnect);
