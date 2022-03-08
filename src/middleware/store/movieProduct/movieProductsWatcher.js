import { takeLatest } from "redux-saga/effects";
import { initiateMovieProductProcessor } from "./movieProductProcessor";
import { INITIATE_MOVIE_PRODUCTS_VIEW } from "./movieProductActionTypes";

export const movieProductsInitializeWatcher = [
  takeLatest(INITIATE_MOVIE_PRODUCTS_VIEW, initiateMovieProductProcessor),
];
