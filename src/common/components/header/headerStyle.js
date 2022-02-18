import styled from 'styled-components';

const HeaderContainer=styled.header`
width:100%;
background-color:#0e153a;
z-index: 2;
font-size: 17px;
color: #f1f1f1;
width: 100%;
padding: 0;
letter-spacing: 1px;
font-family: 'Source Sans Pro', sans-serif;
top:0px;
`
const NavItemContainer=styled.div`
overflow:auto
`
const NavItem=styled.div`
white-space: normal;
`
const NavItemList=styled.div`
padding: 8px 16px;
float: left;
width: auto;
border: none;
display: block;
outline: 0;
`

export {
    HeaderContainer,
    NavItemContainer,
    NavItem,
    NavItemList
}