import { apiBase } from "../../constants/apiConstants";

export function productsCategoryRequest(queryParams) {
  const serviceUrl = `${apiBase}/products`;
  // const serviceUrl =
  //   "https://products.free.beeceptor.com/jaiShreeKrishna/products";

  return { serviceUrl };
}
export function productsCategoryTransformer(apiResponse) {
  const data = {};
  const error = {};
  let isSuccess = false;
  console.log(apiResponse);
  if (apiResponse) {
    isSuccess = true;
    data.status = "SUCCESS";
    data.response = apiResponse;
  }
  return { data, error, isSuccess };
}
