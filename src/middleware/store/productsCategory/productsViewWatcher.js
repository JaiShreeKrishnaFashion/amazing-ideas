import { takeLatest } from "redux-saga/effects";
import { initiateProductsViewProcessor } from "./productsViewProcessor";
import { PRODUCTS_VIEW_INITIATED } from "./productsViewActionTypes";

export const productsInitializeWatcher = [
  takeLatest(PRODUCTS_VIEW_INITIATED, initiateProductsViewProcessor),
];
