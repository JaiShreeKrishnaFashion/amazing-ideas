import {
  INITIATE_MOVIE_PRODUCTS_VIEW,
  DISPLAY_MOVIE_PRODUCTS_LIST,
} from "./movieProductActionTypes";

export const movieProductInitiateAction = (data) => ({
  type: INITIATE_MOVIE_PRODUCTS_VIEW,
  data,
});

export const displayMovieProducts = (data) => ({
  type: DISPLAY_MOVIE_PRODUCTS_LIST,
  data,
});
