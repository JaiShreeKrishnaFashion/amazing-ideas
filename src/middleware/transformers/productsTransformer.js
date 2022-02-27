import { apiBase } from "../../constants/apiConstants";

export function productsCategoryRequest(queryParams) {
  const serviceUrl = `${apiBase}/products`;
  // const serviceUrl =
  //   "https://firebasestorage.googleapis.com/v0/b/amazing-ideas.appspot.com/o/products.json?alt=media&token=1322de2c-55c3-489b-a49e-2d3357fe5a1e";

  return { serviceUrl };
}
export function productsCategoryTransformer(apiResponse) {
  const data = {};
  const error = {};

  let isSuccess = false;
  //console.log(apiResponse);
  if (apiResponse) {
    isSuccess = true;
    data.status = "SUCCESS";
    data.response = apiResponse;
  }
  return { data, error, isSuccess };
}
