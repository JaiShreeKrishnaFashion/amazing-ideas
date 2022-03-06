import React from "react";
import StarProductViewConnect from "../connectedComponents/StarProductViewConnect";
import MovieProductViewConnect from "../connectedComponents/MovieProductViewConnect";
import { RIGHT_PANEL_VIEWS } from "../constants/constant";

export const RightPanelViewRouterMapper = [
  {
    id: RIGHT_PANEL_VIEWS.STAR_VIEW_COMPONENT,
    component: <StarProductViewConnect />,
  },
  {
    id: RIGHT_PANEL_VIEWS.MOVIE_VIEW_COMPONENT,
    component: <MovieProductViewConnect />,
  },
];
