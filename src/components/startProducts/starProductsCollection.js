import React from "react";
import Cards from "../../common/components/cards/cards";
import { Wrapper } from "../../styles/globalStyle";
import { ProductsTitle } from "../rightPanelView/rightPanel.style";
import {
  ProductsCardWrapper,
  ProductsPanel,
  useStyles,
} from "./starProducts.style";

const StarProductsCollection = ({ starCollectionData = [], title }) => {
  console.log("starProducts collection", starCollectionData);
  const classes = useStyles();
  return (
    <React.Fragment>
      <ProductsTitle>{title}</ProductsTitle>
      <Wrapper id="star_products_collection_view">
        <ProductsPanel id="cardsPanel_view" className={classes.cardsPanelView}>
          <ProductsCardWrapper>
            {starCollectionData?.length !== 0 &&
              starCollectionData?.map((items, index) => {
                return (
                  <Cards
                    waterMark={items.title}
                    waterMarkImg={items.img}
                  ></Cards>
                );
              })}
          </ProductsCardWrapper>
        </ProductsPanel>
      </Wrapper>
    </React.Fragment>
  );
};

export default StarProductsCollection;
