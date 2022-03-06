import {
  DISPLAY_PRODUCTS_VIEW,
  DISPLAY_STAR_PRODUCTS_LIST,
} from "./startProductActionTypes";

export const starProductInitiateAction = (data) => ({
  type: DISPLAY_PRODUCTS_VIEW,
  data,
});

export const displayStarProducts = (data) => ({
  type: DISPLAY_STAR_PRODUCTS_LIST,
  data,
});
