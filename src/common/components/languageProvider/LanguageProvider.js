import React, {useState, createContext, useEffect} from 'react';
import PropTypes from "prop-types";
import {useDispatch} from 'react-redux';
import {dictionaryList, languageOptions} from '../../../constants/supportLanguages';
import {setSelectedLanguage} from '../../../middleware/store/appConfig/appConfigCreators';
import {getRegisterLanguage} from '../../utils/registerLanguage.js';

const currentLanguage=getRegisterLanguage();
export const LanguageContext=createContext({
    userLanguage:currentLanguage,
    dictionary:dictionaryList[currentLanguage]
});

export const LanguageProvider=({children})=>{
    const dispatch=useDispatch();
    const [userLanguage, setUserLanguage] = useState(currentLanguage);
    useEffect(()=>{
dispatch(setSelectedLanguage(userLanguage));
    },[userLanguage, dispatch]);
    const provider={
        userLanguage,
        dictionary:dictionaryList[userLanguage],
        userLanguageChange:(selected)=>{
            const newLanguage=languageOptions[selected] ? selected:'englishUSA';
            setUserLanguage(newLanguage);
        }
    };
    return (
        <LanguageContext.Provider value={provider}>
            {children}
        </LanguageContext.Provider>
    )
    
}


LanguageProvider.propType={
    children:PropTypes.node
}
export default LanguageProvider;