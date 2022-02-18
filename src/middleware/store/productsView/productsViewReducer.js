import { PRODUCTS_VIEW_DISPLAY_CATEGORY } from "./productsViewActionTypes";

const productsViewInitialState = {
  displayproductsItems: false,
  productsData: [],
};

const productsViewReducer = (state = productsViewInitialState, action) => {
  switch (action.type) {
    case PRODUCTS_VIEW_DISPLAY_CATEGORY:
      return {
        ...state,
        productsData: action.data,
      };
    default: {
      return state;
    }
  }
};

export { productsViewInitialState, productsViewReducer };
