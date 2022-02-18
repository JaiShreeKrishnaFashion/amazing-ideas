import axios from "axios";
export const getService = ({ serviceUrl }) => {
  const requestHeaders = {
    "Access-Control-Allow-Origin": "*",
  };
  return axios
    .get(serviceUrl, requestHeaders)
    .then((response) => {
      const responseData = { ...response.data };
      responseData.statusCode = response.status;
      return { response: responseData };
    })
    .catch((error) => {
      const errorResponse = { ...error };
      errorResponse.statusCode =
        error && error.response && error.response.status;
      return errorResponse;
    });
};
