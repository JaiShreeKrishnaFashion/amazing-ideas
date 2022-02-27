
import React from 'react';
import {useStyles} from './cards.style';
const Cards=()=>{
    const classes=useStyles();
    return(
<div className={classes.card_container}>
  <div className={classes.card}>
    <img className={classes.card_img} src="https://www.filmibeat.com/img/2021/06/xakshay-kumar-1-1623524827.jpg.pagespeed.ic.LhcENgfSPo.jpg" alt="Alps"/>
    <div className={`${classes.card_container} ${ classes.card_center}`}>
      <p>Akshay Kumar</p>
    </div>
  </div>
</div>
    );
}
export default Cards;
