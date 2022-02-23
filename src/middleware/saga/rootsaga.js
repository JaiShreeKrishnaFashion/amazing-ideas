import { all } from "redux-saga/effects";
import { appInitializeWatcher } from "../store/applicationFlow/appInitializeWatcher";
import { productsInitializeWatcher } from "../store/productsView/productsViewWatcher";

export default function* rootSaga() {
  //console.log("rootSaga");
  yield all([...appInitializeWatcher, ...productsInitializeWatcher]);
}
