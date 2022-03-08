import { call, put, select } from "redux-saga/effects";
import { RIGHT_PANEL_VIEWS } from "../../../constants/constant";
import { setRightPanelScreenTypeAction } from "../rightpanel/rightPanelActionCreator";
import { displayStarProducts } from "./starProductActionCreators";
import { starViewProps } from "./starProductSelector";
import { getStarProductsTask } from "./starProductTask";
export function* initiateStarProductProcessor() {
  const { isStarCollection, starCollectionData } = yield select(starViewProps);
  console.log("isStart collection in proceesor", isStarCollection);
  if (isStarCollection) {
    yield call(starProductsCollectionProcessor, {
      isStarCollection,
      starCollectionData,
    });
  } else {
    yield call(displayStarProductProcessor);
  }
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

export function* starProductsCollectionProcessor(data) {
  console.log("products collection data", data);
  if (data?.isStarCollection) {
    yield put(
      setRightPanelScreenTypeAction(
        RIGHT_PANEL_VIEWS.STAR_VIEW_COLLECTION_COMPONENT
      )
    );
  }
}
