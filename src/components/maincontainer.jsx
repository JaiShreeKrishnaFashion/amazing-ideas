import React from 'react';
import { APPLICATION_TITLE } from '../constants/applicationConstants';
import {Button, FullContainer, PageTitle} from '../styles/globalStyle';
import DisplayLocalText from './DisplayLocalText';
 const MainContainer=({productsViewDisplay})=>{
 return(
<FullContainer>
            <PageTitle>
            <DisplayLocalText tid={APPLICATION_TITLE}/>
            </PageTitle>
        <Button onClick={(event)=>productsViewDisplay(event)}>Let's Start</Button>
    </FullContainer>);
 }
 export default MainContainer;
 