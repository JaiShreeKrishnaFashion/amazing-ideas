import React from "react";
import Cards from "../../common/components/cards/cards";
import { Wrapper } from "../../styles/globalStyle";
import {
  AcronymTitle,
  ProductsTitle,
  ProductsPanel,
} from "../rightPanelView/rightPanel.style";
import { useStyles, ProductsCardWrapper } from "./movieProducts.style";
const MovieProductsView = ({ movieProductsData, title }) => {
  console.log("movieProductsView", movieProductsData);
  const classes = useStyles();
  return (
    //   {/* <AcronymTitle>title</AcronymTitle> */}
    <React.Fragment>
      <ProductsTitle>{title}</ProductsTitle>
      <Wrapper id="start_products_view">
        <ProductsPanel id="cardsPanel_view" className={classes.cardsPanelView}>
          <ProductsCardWrapper>
            {movieProductsData?.length !== 0 &&
              movieProductsData?.map((items, index) => {
                return (
                  <Cards
                    imgAddress={items.img}
                    imgCaption={items.title}
                  ></Cards>
                );
              })}
          </ProductsCardWrapper>
        </ProductsPanel>
      </Wrapper>
    </React.Fragment>
  );
};

export default MovieProductsView;
