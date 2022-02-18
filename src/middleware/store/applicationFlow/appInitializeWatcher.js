import { takeLatest } from "redux-saga/effects";
import { initiateApplicationProcessor } from "./appInitializeProcessor";
import { INITIATE_APPLICATION } from "./appInitializaActionTypes";

export const appInitializeWatcher = [
  takeLatest(INITIATE_APPLICATION, initiateApplicationProcessor),
];
