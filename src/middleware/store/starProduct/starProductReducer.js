import { DISPLAY_PRODUCTS_VIEW } from "./startProductActionTypes";

const starProductInitialState = {
  starProductsData: {},
  isStarProducts: false,
};

const starProductReducer = (state = starProductInitialState, action) => {
  switch (action.type) {
    case DISPLAY_PRODUCTS_VIEW:
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
