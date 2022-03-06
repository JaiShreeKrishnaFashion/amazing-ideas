import React from 'react';
import {HeaderContainer,NavItemContainer,NavItem,NavItemList} from './headerStyle';
import DisplayLocalText from '../../../components/DisplayLocalText';
import {HEADER_VIEWS} from '../../../constants/applicationConstants';
const Header =({navigate})=>{
    
    return (<HeaderContainer>
        <NavItemContainer>
        <NavItem>
        <NavItemList onClick={()=>navigate({navigateId:'home'})} ><DisplayLocalText tid={HEADER_VIEWS.HOME}/></NavItemList>
        <NavItemList onClick={()=>navigate({navigateId:'contact us'})}><DisplayLocalText tid={HEADER_VIEWS.CONTACT_US}/></NavItemList>
        <NavItemList onClick={(event)=>navigate(event)}><DisplayLocalText tid={HEADER_VIEWS.ABOUT_US}/></NavItemList>
        <NavItemList onClick={(event)=>navigate({navigateId:'responsiveLayout'})}><DisplayLocalText tid={HEADER_VIEWS.RESPONSIVE}/></NavItemList>
        
       </NavItem>
        </NavItemContainer>
    </HeaderContainer>)
}
export default Header;