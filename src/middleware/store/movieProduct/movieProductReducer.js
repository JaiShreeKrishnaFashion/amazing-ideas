import {
  INITIATE_MOVIE_PRODUCTS_VIEW,
  DISPLAY_MOVIE_PRODUCTS_LIST,
} from "./movieProductActionTypes";

const movieProductInitialState = {
  movieProductsData: {},
  isMovieProducts: false,
  title: "My Favorite Movie Theme",
};

const movieProductReducer = (state = movieProductInitialState, action) => {
  switch (action.type) {
    case INITIATE_MOVIE_PRODUCTS_VIEW:
      return {
        ...state,
      };
    case DISPLAY_MOVIE_PRODUCTS_LIST:
      return {
        ...state,
        isMovieProducts: true,
        movieProductsData: action.data,
      };

    default: {
      return state;
    }
  }
};

export { movieProductInitialState, movieProductReducer };
