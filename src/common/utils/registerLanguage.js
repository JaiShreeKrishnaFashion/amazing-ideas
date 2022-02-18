import {LANGUAGE_OPTIONS} from '../../constants/applicationConstants'
export const getRegisterLanguage=()=>{
    const language=localStorage.getItem('language') || 'en';
    return LANGUAGE_OPTIONS[language];
}