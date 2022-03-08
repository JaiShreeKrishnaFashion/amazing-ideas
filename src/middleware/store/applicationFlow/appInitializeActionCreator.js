import {
  INITIATE_APPLICATION,
  INITIATE_RESPONSIVE_LAYOUT,
} from "./appInitializaActionTypes";

export const initiateApplicationAction = (data) => ({
  type: INITIATE_APPLICATION,
  data,
});
export const initiateResponsiveAction = (data) => ({
  type: INITIATE_RESPONSIVE_LAYOUT,
  data,
});
