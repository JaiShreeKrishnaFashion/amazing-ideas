import {
  RIGHT_PANEL_VIEW_INITIATED,
  SET_RIGHT_PANEL_SCREEN_TYPE,
} from "./rightPanelActionTypes";

const rightPanelInitialState = {
  title: "",
  rightPanelType: "",
};

const rightPanelReducer = (state = rightPanelInitialState, action) => {
  switch (action.type) {
    case RIGHT_PANEL_VIEW_INITIATED:
      return {
        ...state,
        //title: action.data.title,
        // rightPanelType: action.data.screenType,
      };
    case SET_RIGHT_PANEL_SCREEN_TYPE:
      return {
        ...state,
        rightPanelType: action.data,
      };
    default: {
      return state;
    }
  }
};

export { rightPanelInitialState, rightPanelReducer };
