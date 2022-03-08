import React from "react";
import Cards from "../../common/components/cards/cards";
import { Wrapper } from "../../styles/globalStyle";
import {
  ProductsCardWrapper,
  AcronymTitle,
  ProductsTitle,
  ProductsPanel,
} from "../rightPanelView/rightPanel.style";
import { useStyles } from "./starProducts.style";
const StarProductsView = ({ starProductsData, title, cardClick }) => {
  console.log("starProductsView", starProductsData);
  const classes = useStyles();
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
                  <Cards
                    imgAddress={items.img}
                    imgCaption={items.title}
                    cardClick={cardClick}
                  ></Cards>
                );
              })}
          </ProductsCardWrapper>
        </ProductsPanel>
      </Wrapper>
    </React.Fragment>
  );
};

export default StarProductsView;
