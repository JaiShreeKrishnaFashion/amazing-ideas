import { apiBase } from "../../constants/apiConstants";
export function movieProductsRequest(queryParams) {
  const serviceUrl = `${apiBase}/movieProducts`;
  return { serviceUrl };
}
export function movieProductsTransformer(apiResponse) {
  const data = {};
  const error = {};

  let isSuccess = false;
  //console.log(apiResponse);
  if (apiResponse) {
    isSuccess = true;
    data.status = "SUCCESS";
    data.response = apiResponse.movieData;
  }
  return { data, error, isSuccess };
}
