import React from 'react';
import Cards from '../../common/components/cards/cards';
import { Wrapper } from '../../styles/globalStyle';
import {useStyles, ProductsTitle, ProductsPanel, ProductsCardWrapper, AcronymTitle} from './rightPanel.style';
const RightPanelView=({title})=>{
    const classes=useStyles();
    return (
        <React.Fragment>
         <ProductsTitle>{title}</ProductsTitle>
        <Wrapper id='cardsPanel_view'>

            <ProductsPanel className={classes.cardsPanelView}>
                <AcronymTitle>A</AcronymTitle>
                <ProductsCardWrapper>
                    <Cards></Cards>
                     <Cards></Cards>
                      <Cards></Cards>
                       <Cards></Cards>
                         <Cards></Cards>
                     <Cards></Cards>
                      <Cards></Cards>
                       <Cards></Cards>
                         <Cards></Cards>
                     <Cards></Cards>
                      <Cards></Cards>
                       <Cards></Cards>
                </ProductsCardWrapper>
            </ProductsPanel>
        </Wrapper>
        </React.Fragment>
    )
}

export default RightPanelView;