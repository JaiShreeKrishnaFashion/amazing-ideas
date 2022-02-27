import { combineReducers } from "redux";
import {
  appConfigurationInitialState,
  appConfigurationReducer,
} from "../appConfig/appConfigReducer";
import {
  appInitialStateReducer,
  appInitReducer,
} from "../applicationFlow/appInitializeReducer";
import {
  appRouterInitialState,
  appRouterReducer,
} from "../appRouter/appRouterReducer";
import {
  productsViewInitialState,
  productsViewReducer,
} from "../productsCategory/productsViewReducer";
import {
  rightPanelInitialState,
  rightPanelReducer,
} from "../rightpanel/rightPanelReducer";
import {
  starProductInitialState,
  starProductReducer,
} from "../starProduct/starProductReducer";

export const appReducer = combineReducers({
  appConfigurationReducer,
  appInitReducer,
  appRouterReducer,
  productsViewReducer,
  rightPanelReducer,
  starProductReducer,
});
const initialState = {
  appConfigurationReducer: appConfigurationInitialState,
  appInitReducer: appInitialStateReducer,
  appRouterReducer: appRouterInitialState,
  productsViewReducer: productsViewInitialState,
  rightPanelReducer: rightPanelInitialState,
  starProductReducer: starProductInitialState,
};
const rootReducer = (state, action) => {
  if (action.type === "RESET_APP") {
  }
  return appReducer(state, action);
};

export { rootReducer, initialState };
