import { call } from "redux-saga/effects";
import { getService } from "../../../services/baseApi";
import {
  starProductsRequest,
  starProductsTransformer,
} from "../../transformers/starProductTransformer";

export function* getStarProductsTask(queryParams) {
  const { serviceUrl } = starProductsRequest({
    ...queryParams,
  });
  const { response: data } = yield call(getService, { serviceUrl });
  ////console.log(data);
  return yield call(starProductsTransformer, data);
}
