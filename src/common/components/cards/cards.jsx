
import React from 'react';
import {useStyles} from './cards.style';
const Cards=({imgAddress, imgCaption, cardClick, waterMark, waterMarkImg})=>{
    const classes=useStyles();
    //console.log("img address", imgAddress);
    return(
<div className={classes.card_container} onClick={(event)=>cardClick(imgCaption)}>
  <div className={classes.card}>
    {imgAddress && <img className={classes.card_img} src={imgAddress} alt="image"/>}
     {waterMark && <img className={classes.card_img} src={waterMarkImg} alt={`${waterMark}`}/>}
    
    <div className={`${classes.card_container} ${ classes.card_center}`}>
      <p>{imgCaption}</p>
     
    </div>
  </div>
</div>
    );
}
export default Cards;
