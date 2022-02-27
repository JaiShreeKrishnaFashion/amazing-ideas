import { createSelector } from "reselect";
import { starProductInitialState } from "./starProductReducer";

export const selectStarViewDomain = (state = {}) =>
  state.starProductReducer || starProductInitialState;

export const starViewProps = createSelector(
  selectStarViewDomain,
  ({ isStarProducts, starProductsData }) => ({
    isStarProducts,
    starProductsData,
  })
);
