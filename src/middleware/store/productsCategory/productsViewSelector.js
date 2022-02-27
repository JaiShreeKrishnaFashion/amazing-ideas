import { createSelector } from "reselect";
import { productsViewInitialState } from "./productsViewReducer";

export const selectproductsViewDomain = (state = {}) =>
  state.productsViewReducer || productsViewInitialState;

export const productsViewProps = createSelector(
  selectproductsViewDomain,
  ({ displayproductsItems, productsData }) => ({
    displayproductsItems,
    productsData,
  })
);
