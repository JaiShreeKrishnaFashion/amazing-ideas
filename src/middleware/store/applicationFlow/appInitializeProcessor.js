import { put } from "redux-saga/effects";
import { VIEW_ROUTE_SCREENS } from "../../../constants/constant";
import { setViewScreenTypeAction } from "../appRouter/appRouterActionCreator";

export function* initiateApplicationProcessor() {
  //console.log("application initiated");
  yield put(setViewScreenTypeAction(VIEW_ROUTE_SCREENS.LANDING_VIEW));
}
