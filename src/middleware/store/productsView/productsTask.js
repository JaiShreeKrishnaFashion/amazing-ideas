import { call } from "redux-saga/effects";
import { getService } from "../../../services/baseApi";
import {
  productsCategoryRequest,
  productsCategoryTransformer,
} from "../../transformers/productsTransformer";

export function* getProductCategoryTask(queryParams) {
  const { serviceUrl } = productsCategoryRequest({
    ...queryParams,
  });
  const { response: data } = yield call(getService, { serviceUrl });
  //console.log(data);
  return yield call(productsCategoryTransformer, data);
}
