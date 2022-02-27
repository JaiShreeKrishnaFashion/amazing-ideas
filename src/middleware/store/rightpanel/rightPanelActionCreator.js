import {
  RIGHT_PANEL_VIEW_INITIATED,
  SELECTED_PRODUCT_VIEW,
} from "./rightPanelActionTypes";

export const rightPanelInitiateAction = (data) => ({
  type: RIGHT_PANEL_VIEW_INITIATED,
  data,
});
export const selectedProductViewAction = (data) => ({
  type: SELECTED_PRODUCT_VIEW,
  data,
});
