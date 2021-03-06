import { all } from "redux-saga/effects";
import { appInitializeWatcher } from "../store/applicationFlow/appInitializeWatcher";
import { productsInitializeWatcher } from "../store/productsCategory/productsViewWatcher";
import { rightPanelInitializeWatcher } from "../store/rightpanel/rightPanelWatcher";
import { starProductsInitializeWatcher } from "../store/starProduct/starProductsWatcher";
import { movieProductsInitializeWatcher } from "../store/movieProduct/movieProductsWatcher";
export default function* rootSaga() {
  //console.log("rootSaga");
  yield all([
    ...appInitializeWatcher,
    ...productsInitializeWatcher,
    ...rightPanelInitializeWatcher,
    ...starProductsInitializeWatcher,
    ...movieProductsInitializeWatcher,
  ]);
}
