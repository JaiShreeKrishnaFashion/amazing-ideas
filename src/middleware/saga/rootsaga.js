import { all } from "redux-saga/effects";
import { appInitializeWatcher } from "../store/applicationFlow/appInitializeWatcher";
import { productsInitializeWatcher } from "../store/productsCategory/productsViewWatcher";
import { rightPanelInitializeWatcher } from "../store/rightpanel/rightPanelWatcher";

export default function* rootSaga() {
  //console.log("rootSaga");
  yield all([
    ...appInitializeWatcher,
    ...productsInitializeWatcher,
    ...rightPanelInitializeWatcher,
  ]);
}
