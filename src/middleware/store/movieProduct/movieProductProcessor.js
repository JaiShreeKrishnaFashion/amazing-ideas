import { call, put } from "redux-saga/effects";
import { displayMovieProducts } from "./movieProductActionCreators";
import { getMovieProductsTask } from "./movieProductTask";
export function* initiateMovieProductProcessor() {
  console.log("movie product view processor");
  yield call(displayMovieProductProcessor);
}

export function* displayMovieProductProcessor() {
  console.log("movie product category processor");
  const queryParams = {};

  const { data, isSuccess } = yield call(getMovieProductsTask, queryParams);

  if (isSuccess && data?.response) {
    console.log(data);
    yield put(displayMovieProducts(data?.response));
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
