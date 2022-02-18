import { SET_VIEW_SCREEN_TYPE } from "./appRouterActionTypes";

const appRouterInitialState={
    viewScreenType:'',
    rightPanelViewScreenType:''
}

const appRouterReducer=(state=appRouterInitialState, action)=>{
    switch(action.type){
        case SET_VIEW_SCREEN_TYPE:
            return{
                ...state,
                viewScreenType:action.data
            };
            default:{
                return state;
            }
    }
}

export {appRouterInitialState, appRouterReducer}