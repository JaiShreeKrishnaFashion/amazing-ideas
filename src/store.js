import { createStore, applyMiddleware } from "redux";
//import { composeWithDevTools } from "redux-devtools-extensions";
import createSagaMiddleWare from "redux-saga";
import rootSaga from "../src/middleware/saga/rootsaga";
import { rootReducer } from "../src/middleware/store/reducers/rootReducers";
const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);
export default store;
