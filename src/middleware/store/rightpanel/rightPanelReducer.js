import { RIGHT_PANEL_VIEW_INITIATED } from "./rightPanelActionTypes";

const rightPanelInitialState = {
  title: "",
};

const rightPanelReducer = (state = rightPanelInitialState, action) => {
  switch (action.type) {
    case RIGHT_PANEL_VIEW_INITIATED:
      return {
        ...state,
        title: action.data,
      };
    default: {
      return state;
    }
  }
};

export { rightPanelInitialState, rightPanelReducer };
