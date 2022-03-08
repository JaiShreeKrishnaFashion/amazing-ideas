import React, { memo } from "react";
import { useSelector } from "react-redux";
import MovieProductsView from "../components/movieProducts/movieProductsView";
import { movieViewProps } from "../middleware/store/movieProduct/movieProductSelector";

const MovieProductViewConnect = () => {
  const { movieProductsData, title } = useSelector(movieViewProps);
  const movieProductsDataArr =
    Object(movieProductsData)?.[Object.keys(movieProductsData)];
  const movieProductsDataProps = movieProductsDataArr?.map((item, index) => {
    return item;
  });
  console.log("movie products data", movieProductsDataProps);
  return (
    <MovieProductsView
      movieProductsData={movieProductsDataProps}
      title={title}
    />
  );
};
export default memo(MovieProductViewConnect);
