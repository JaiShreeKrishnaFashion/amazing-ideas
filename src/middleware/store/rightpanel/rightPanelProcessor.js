import { call, put } from "redux-saga/effects";
import { starProductInitiateAction } from "../starProduct/starProductActionCreators";

export function* initiateRightPanelViewProcessor(id) {
  console.log("rightPanel view processor");
  yield call(selectedProductViewProcessor, id);
}

export function* selectedProductViewProcessor(id) {
  console.log("selectedProductViewProcessor", id);
  //yield put(starProductInitiateAction(true));
  switch (id?.data) {
    case "Star":
      yield put(starProductInitiateAction(true));

      break;
    case "Movie":
      console.log("Movie View");
      break;
    default:
      console.log("default");
  }
  //console.log("redirect");
}
