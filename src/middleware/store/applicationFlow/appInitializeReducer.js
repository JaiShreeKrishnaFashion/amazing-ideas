import { APP_READY_FOR_OPERATION } from "./appInitializaActionTypes";
import {SET_COLLAPSE_MODE} from '../commonRedux/actionTypes';
 const appInitialStateReducer={
     isAppReadyForOperation:false,
     collapseMode:false
 };
 
 const appInitReducer=(state=appInitialStateReducer, action)=>{
     switch(action.type){
         case APP_READY_FOR_OPERATION:
             return{
                 ...state,
                 isAppReadyForOperation:action.data
             };
             case SET_COLLAPSE_MODE:
                 return{
                     ...state,
                     collapseMode:action.data
                 }
             default:
                 return state;
     }
 }

 export {appInitialStateReducer, appInitReducer};