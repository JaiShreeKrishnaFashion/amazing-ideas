import { apiBase } from "../../constants/apiConstants";
export function starProductsRequest(queryParams) {
  const serviceUrl = `${apiBase}/starProducts`;
  return { serviceUrl };
}
export function starProductsTransformer(apiResponse) {
  const data = {};
  const error = {};

  let isSuccess = false;
  //console.log(apiResponse);
  if (apiResponse) {
    isSuccess = true;
    data.status = "SUCCESS";
    data.response = apiResponse.starData;
  }
  return { data, error, isSuccess };
}
