import {createSelector} from 'reselect';
import { appConfigurationInitialState } from './appConfigReducer';

export const selectAppDomain=(state={})=>state.appConfigurationReducer || appConfigurationInitialState;

export const selectAppConfig=()=>
createSelector(
    selectAppDomain,({
        selectedLanguage
    })=>({
        selectedLanguage
    })
);
export const selectLanguage=createSelector(selectAppDomain, ({selectedLanguage})=>({
selectedLanguage
}));