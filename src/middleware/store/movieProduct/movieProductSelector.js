import { createSelector } from "reselect";
import { movieProductInitialState } from "./movieProductReducer";

export const selectMovieViewDomain = (state = {}) =>
  state.movieProductReducer || movieProductInitialState;

export const movieViewProps = createSelector(
  selectMovieViewDomain,
  ({ isMovieProducts, movieProductsData, title }) => ({
    isMovieProducts,
    movieProductsData,
    title,
  })
);
