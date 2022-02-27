import { ProductsTitle, ProductsPanel, ProductsCardWrapper} from './rightPanel.style';
const RightPanelView=({title})=>{
    return (
        <div className='rightPanelView'>
            <ProductsTitle>{title}</ProductsTitle>
            <ProductsPanel>
                <ProductsCardWrapper></ProductsCardWrapper>
            </ProductsPanel>
        </div>
    )
}

export default RightPanelView;