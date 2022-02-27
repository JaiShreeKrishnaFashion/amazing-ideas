import React from "react";
import { VIEW_ROUTE_SCREENS } from "../constants/constant";
import ProductsViewConnect from "../connectedComponents/ProductsViewConnect";
import MainViewConnect from "../connectedComponents/MainViewConnect";
import ProcessingScreen from "../common/components/transitions/processing";
import { PROCESSING } from "../constants/applicationConstants";
export const ViewRouteMapper = [
  {
    id: VIEW_ROUTE_SCREENS.LANDING_VIEW,
    component: <MainViewConnect />,
  },
  {
    id: VIEW_ROUTE_SCREENS.PRODUCTS_VIEW,
    component: <ProductsViewConnect />,
  },

  {
    id: VIEW_ROUTE_SCREENS.PROCESSING,
    component: <ProcessingScreen message={PROCESSING} processing />,
  },
];
