import { mergeClasses } from '@material-ui/styles';
import React from 'react';
import { Col, Grid, Row, useStyles } from '../../../styles/globalStyle';

const ResponsiveLayout=()=>{
    const classes=useStyles();
    return (<Grid>
        <Row><Col size={1}>12 Grid</Col></Row>
        <Row>
            <Col size={3}>6 Grid</Col>
            <Row className={classes.productsWrapper}>
           <Col className={classes.cardWrapper} size={2} collapse="xs">I will disappear</Col>
            <Col className={classes.cardWrapper} size={2}>I will expand to fill</Col>
             <Col className={classes.cardWrapper} size={2}>I will expand to fill</Col>
             <Col className={classes.cardWrapper} size={2}>I will expand to fill</Col>
             <Col className={classes.cardWrapper} size={2}>I will expand to fill</Col>
               <Col className={classes.cardWrapper} size={2}>I will expand to fill</Col>
             <Col className={classes.cardWrapper} size={2}>I will expand to fill</Col>
            </Row>
            
            </Row>
        
    </Grid>)
}
export default ResponsiveLayout;



