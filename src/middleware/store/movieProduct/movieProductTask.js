import { call } from "redux-saga/effects";
import { getService } from "../../../services/baseApi";
import {
  movieProductsRequest,
  movieProductsTransformer,
} from "../../transformers/movieProductTransformer";

export function* getMovieProductsTask(queryParams) {
  const { serviceUrl } = movieProductsRequest({
    ...queryParams,
  });
  const { response: data } = yield call(getService, { serviceUrl });
  ////console.log(data);
  return yield call(movieProductsTransformer, data);
}
