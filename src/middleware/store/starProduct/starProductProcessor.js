import { call, put } from "redux-saga/effects";
import { displayStarProducts } from "./starProductActionCreators";
import { getStarProductsTask } from "./starProductTask";
export function* initiateStarProductProcessor() {
  //console.log("star product view processor");
  yield call(displayStarProductProcessor);
}

export function* displayStarProductProcessor() {
  //console.log("start product category processor");
  const queryParams = {};

  const { data, isSuccess } = yield call(getStarProductsTask, queryParams);

  if (isSuccess && data?.response) {
    console.log(data);
    yield put(displayStarProducts(data?.response));
    //yield put(setViewScreenTypeAction(false));
    // yield put(setViewScreenTypeAction(VIEW_ROUTE_SCREENS.PRODUCTS_VIEW));
    // const categoryResponse = data?.response;
    // yield put(productsViewDisplayCategoryAction(categoryResponse));
  } else {
    switch (data?.status) {
      case "INVALID":
        //console.log("invalid data");

        break;
      default: {
        //console.log("unknown error");
      }
    }
  }
}
