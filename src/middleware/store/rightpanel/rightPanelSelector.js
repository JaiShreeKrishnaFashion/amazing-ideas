import { createSelector } from "reselect";
import { rightPanelInitialState } from "./rightPanelReducer";

export const selectRightPanelViewDomain = (state = {}) =>
  state.rightPanelReducer || rightPanelInitialState;

export const rightPanelViewProps = createSelector(
  selectRightPanelViewDomain,
  ({ title, rightPanelType }) => ({
    title,
    rightPanelType,
  })
);
