import { useContext } from "react";
import PropTypes from 'prop-types';
import {LanguageContext} from '../common/components/languageProvider/LanguageProvider';

export const DisplayLocalText=({tid})=>{
    const languageContext=useContext(LanguageContext);
    if(tid){
        return languageContext.dictionary[tid] || tid;

    }
    return '';
}
DisplayLocalText.propType={
    tid:PropTypes.string.isRequired
}
export default DisplayLocalText;