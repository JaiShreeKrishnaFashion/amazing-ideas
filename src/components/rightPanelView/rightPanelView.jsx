import React from 'react';
import StarProductViewConnect from '../../connectedComponents/StarProductViewConnect';
import { Wrapper } from '../../styles/globalStyle';
import {useStyles, ProductsTitle, ProductsPanel} from './rightPanel.style';
const RightPanelView=({title, isStarProducts})=>{
    const classes=useStyles();
     console.log('rightPanelView starproduct flag', isStarProducts);
    return (
        <React.Fragment>
        </React.Fragment>
    )
}

export default RightPanelView;