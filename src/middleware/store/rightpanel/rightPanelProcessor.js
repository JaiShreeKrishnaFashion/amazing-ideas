import { call, put } from "redux-saga/effects";
import { RIGHT_PANEL_VIEWS } from "../../../constants/constant";
import { starProductInitiateAction } from "../starProduct/starProductActionCreators";
import { setRightPanelScreenTypeAction } from "./rightPanelActionCreator";

export function* initiateRightPanelViewProcessor() {
  console.log("rightPanel view processor");
  yield put(starProductInitiateAction(true));
  yield put(
    setRightPanelScreenTypeAction(RIGHT_PANEL_VIEWS.STAR_VIEW_COMPONENT)
  );

  return true;
}

export function* selectedProductViewProcessor(id) {
  console.log("selectedProductViewProcessor", id);
  //yield put(starProductInitiateAction(true));
  switch (id?.data) {
    case "Star":
      // yield put(starProductInitiateAction(true));
      yield put(
        setRightPanelScreenTypeAction(RIGHT_PANEL_VIEWS.STAR_VIEW_COMPONENT)
      );
      break;
    case "Movie":
      console.log("Movie View");
      break;
    default:
      console.log("default");
  }
  //console.log("redirect");
}
