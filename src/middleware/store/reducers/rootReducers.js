import { combineReducers } from "redux";
import { appConfigurationInitialState, appConfigurationReducer } from "../appConfig/appConfigReducer";
import { appInitialStateReducer, appInitReducer } from "../applicationFlow/appInitializeReducer";
import { appRouterInitialState, appRouterReducer } from "../appRouter/appRouterReducer";
import {productsViewInitialState, productsViewReducer} from "../productsView/productsViewReducer";
export const appReducer=combineReducers({
    appConfigurationReducer,
    appInitReducer,
    appRouterReducer,
    productsViewReducer
    
});
const initialState={

    appConfigurationReducer:appConfigurationInitialState,
    appInitReducer:appInitialStateReducer,
    appRouterReducer:appRouterInitialState,
    productsViewReducer:productsViewInitialState
};
const rootReducer=(state, action)=>{
    if(action.type==='RESET_APP'){
        
    }
    return appReducer(state, action);
};

export {rootReducer, initialState};


