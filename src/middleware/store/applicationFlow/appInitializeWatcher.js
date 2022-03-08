import { takeLatest } from "redux-saga/effects";
import {
  initiateApplicationProcessor,
  initiateResponsiveLayoutProcessor,
} from "./appInitializeProcessor";
import {
  INITIATE_APPLICATION,
  INITIATE_RESPONSIVE_LAYOUT,
} from "./appInitializaActionTypes";

export const appInitializeWatcher = [
  takeLatest(INITIATE_APPLICATION, initiateApplicationProcessor),
  takeLatest(INITIATE_RESPONSIVE_LAYOUT, initiateResponsiveLayoutProcessor),
];
