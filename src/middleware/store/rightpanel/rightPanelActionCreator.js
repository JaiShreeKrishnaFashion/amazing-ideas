import {
  RIGHT_PANEL_VIEW_INITIATED,
  SELECTED_PRODUCT_VIEW,
  SET_RIGHT_PANEL_SCREEN_TYPE,
} from "./rightPanelActionTypes";

export const rightPanelInitiateAction = (data) => ({
  type: RIGHT_PANEL_VIEW_INITIATED,
  data,
});
export const setRightPanelScreenTypeAction = (data) => ({
  type: SET_RIGHT_PANEL_SCREEN_TYPE,
  data,
});

export const selectedProductViewAction = (data) => ({
  type: SELECTED_PRODUCT_VIEW,
  data,
});
