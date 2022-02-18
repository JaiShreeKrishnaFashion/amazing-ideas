import { call, put } from "redux-saga/effects";
import { INVALID_DATA } from "../../../constants/applicationConstants";
import { VIEW_ROUTE_SCREENS } from "../../../constants/constant";
import { setViewScreenTypeAction } from "../appRouter/appRouterActionCreator";
import { getProductCategoryTask } from "./productsTask";
import { productsViewDisplayCategoryAction } from "./productsViewActionCreator";

export function* initiateProductsViewProcessor() {
  console.log("products view processor");
  yield call(productsCategoryProcessor);
}

export function* productsCategoryProcessor() {
  console.log("products category processor");
  const queryParams = {};
  //yield put(setViewScreenTypeAction(VIEW_ROUTE_SCREENS.PROCESSING));
  const { data, isSuccess } = yield call(getProductCategoryTask, queryParams);

  if (isSuccess && data?.response) {
    console.log(data);
    //yield put(setViewScreenTypeAction(false));
    yield put(setViewScreenTypeAction(VIEW_ROUTE_SCREENS.PRODUCTS_VIEW));
    const categoryResponse = data?.response;
    yield put(productsViewDisplayCategoryAction(categoryResponse));
  } else {
    switch (data?.status) {
      case INVALID_DATA:
        console.log("invalid data");
        break;
      default: {
        console.log("unknown error");
      }
    }
  }
}
