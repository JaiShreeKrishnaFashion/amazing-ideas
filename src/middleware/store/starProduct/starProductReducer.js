import {
  DISPLAY_PRODUCTS_VIEW,
  DISPLAY_STAR_PRODUCTS_LIST,
} from "./startProductActionTypes";

const starProductInitialState = {
  starProductsData: {},
  isStarProducts: false,
  title: "My Favorite Star Theme",
};

const starProductReducer = (state = starProductInitialState, action) => {
  switch (action.type) {
    case DISPLAY_PRODUCTS_VIEW:
      return {
        ...state,
        isStarProducts: true,
      };
    case DISPLAY_STAR_PRODUCTS_LIST:
      return {
        ...state,
        isStarProducts: true,
        starProductsData: action.data,
      };

    default: {
      return state;
    }
  }
};

export { starProductInitialState, starProductReducer };
