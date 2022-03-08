import {
  DISPLAY_PRODUCTS_VIEW,
  DISPLAY_SELECTED_STAR_COLLECTIONS,
  DISPLAY_STAR_PRODUCTS_LIST,
} from "./startProductActionTypes";

const starProductInitialState = {
  starProductsData: {},
  isStarProducts: false,
  title: "My Favorite Star Theme",
  isStarCollection: false,
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
    case DISPLAY_SELECTED_STAR_COLLECTIONS:
      return {
        ...state,
        isStarCollection: action.data.isDisplay,
        title: `${action.data.imgCaption} Collections`,
        starCollectionData: [
          {
            title: "Tshirt",
            img: "https://www.greatwestgraphics.com/wp-content/uploads/2020/09/tshirt-business8-min_838a2996-f195-4c1d-a4d1-034bc0a9a0951.jpg",
          },
          {
            title: "Jeans",
            img: "http://n1.sdlcdn.com/imgs/a/o/f/K-san-Men-s-Jeans-SDL494856964-1-e0a4d.jpg",
          },
          {
            title: "cap",
            img: "https://img.mensxp.com/media/shop/catalog/products/1/1-1628328118.jpeg",
          },
          {
            title: "Jackets",
            img: "https://5.imimg.com/data5/BV/UY/ZP/SELLER-59756470/mens-cotton-jacket-500x500.jpg",
          },
        ],
      };

    default: {
      return state;
    }
  }
};

export { starProductInitialState, starProductReducer };
