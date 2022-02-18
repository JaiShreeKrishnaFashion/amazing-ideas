import { SET_SELECTED_LANGUAGE
 } from "./appConfigActionTypes";

 const appConfigurationInitialState={
     selectedLanguage:''
 }

 const appConfigurationReducer=(state = appConfigurationInitialState, action)=>{
     switch(action.type){
         case SET_SELECTED_LANGUAGE:
             return{
                 ...state,
                 selectedLanguage:action.data
             };
             default:{
                 return state;
             }
     }
     
 }

 export {appConfigurationInitialState, appConfigurationReducer};