import { takeLatest } from "redux-saga/effects";
import { initiateStarProductProcessor } from "./starProductProcessor";
import { DISPLAY_PRODUCTS_VIEW } from "./startProductActionTypes";

export const starProductsInitializeWatcher = [
  takeLatest(DISPLAY_PRODUCTS_VIEW, initiateStarProductProcessor),
];
