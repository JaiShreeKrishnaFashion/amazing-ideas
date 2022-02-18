import React, {Fragment} from 'react';
import {LayoutContainer} from '../styles/globalStyle';
import Header from '../common/components/header/header';
import Footer from '../common/components/footer/footer';
import ViewRouterConnect from '../connectedComponents/ViewRouterConnect';
const Layout =({redirect})=>{
    return (
        <Fragment>
        <LayoutContainer>
            <Header navigate={redirect}></Header>
                <ViewRouterConnect/>
            <Footer></Footer>
        </LayoutContainer>
        </Fragment>
    )
}
export default Layout;