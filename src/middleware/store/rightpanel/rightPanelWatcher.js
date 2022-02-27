import { takeLatest } from "redux-saga/effects";
import { initiateRightPanelViewProcessor } from "./rightPanelProcessor";
import { RIGHT_PANEL_VIEW_INITIATED } from "./rightPanelActionTypes";

export const rightPanelInitializeWatcher = [
  takeLatest(RIGHT_PANEL_VIEW_INITIATED, initiateRightPanelViewProcessor),
];
