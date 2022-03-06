
import React from 'react';
import {useStyles} from './cards.style';
const Cards=({imgAddress, imgCaption})=>{
    const classes=useStyles();
    //console.log("img address", imgAddress);
    return(
<div className={classes.card_container}>
  <div className={classes.card}>
    {imgAddress && <img className={classes.card_img} src={imgAddress} alt="image"/>}
    <div className={`${classes.card_container} ${ classes.card_center}`}>
      <p>{imgCaption}</p>
    </div>
  </div>
</div>
    );
}
export default Cards;
