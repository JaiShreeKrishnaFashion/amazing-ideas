import {
  PRODUCTS_VIEW_DISPLAY_CATEGORY,
  PRODUCTS_VIEW_INITIATED,
} from "./productsViewActionTypes";

export const productsInitiateAction = () => ({
  type: PRODUCTS_VIEW_INITIATED,
});
export const productsViewDisplayCategoryAction = (data) => ({
  type: PRODUCTS_VIEW_DISPLAY_CATEGORY,
  data,
});
