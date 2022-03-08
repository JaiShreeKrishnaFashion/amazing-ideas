import React, { useState } from "react";
import Cards from "../../common/components/cards/cards";
import { Wrapper } from "../../styles/globalStyle";
import {
  AcronymTitle,
  ProductsTitle,
  ProductsPanel,
} from "../rightPanelView/rightPanel.style";
import { useStyles, ProductsCardWrapper } from "./starProducts.style";
const StarProductsView = ({
  starProductsData,
  title,
  cardClick,
  isStarCollection,
  imgCaption,
}) => {
  console.log("starProductsView", starProductsData);
  const classes = useStyles();
  const [imgCount, setImgCount] = useState(5);
  const next = (event) => {
    if (imgCount < starProductsData?.length) setImgCount(imgCount + 5);
    console.log(imgCount);
  };
  const prev = (event) => {
    if (imgCount > 5) setImgCount(imgCount - 5);
    console.log(imgCount);
  };
  return (
    //   {/* <AcronymTitle>title</AcronymTitle> */}
    <React.Fragment>
      <ProductsTitle>{title}</ProductsTitle>
      <Wrapper id="start_products_view">
        <ProductsPanel id="cardsPanel_view" className={classes.cardsPanelView}>
          <ProductsCardWrapper>
            {starProductsData?.length !== 0 &&
              starProductsData?.map((items, index) => {
                return (
                  <React.Fragment>
                    {index < imgCount && (
                      <Cards
                        imgAddress={items.img}
                        imgCaption={items.title}
                        cardClick={cardClick}
                      ></Cards>
                    )}
                  </React.Fragment>
                );
              })}
          </ProductsCardWrapper>
          <a className={classes.prev} onClick={(event) => prev(event)}>
            &#10094;
          </a>
          <a className={classes.next} onClick={(event) => next(event)}>
            &#10095;
          </a>
        </ProductsPanel>
      </Wrapper>
    </React.Fragment>
  );
};

export default StarProductsView;
