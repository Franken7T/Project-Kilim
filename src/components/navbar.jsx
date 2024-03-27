
import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import Aura from '../components/AURA.png'
import { mobile } from '../responsive';


const Container=styled.div`
     
     height:130px;
    //  background-color: white;
    ${mobile({ height: "88px" })}
`;
     
const Wrapper= styled.div`
    padding: 1px 10px;
    display: flex;
    justify-content: space-between;
    ${mobile({ padding: "0px 0px",position:"relative", bottom:"28px" })}
`;
const SearchContainer=styled.div`
    border-style:none;
    border-bottom:solid black;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:5px;
`
const Input=styled.input`
 border:none;
 padding:5px;
 font-family: 'Montserrat', sans-serif;
`
const Language=styled.div`
    font-family:'Oswald', sans-serif;
    font:14px;
    cursor:pointer;
    ${mobile({ display: "none" })}
`
const Left=styled.div`
    flex: 1;
    display:flex;
    position:relative;
    bottom:40px;
   
    ${mobile({ display: "none" })}
`;
const Right=styled.div`
    flex: 1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    ${mobile({ flex:2, justifyContent: "center" })}
`;
const MenuItems=styled.div`
    font-size:14px;
    cursor:pointer;
    font-family:'Oswald', sans-serif;
    margin:25px;
    position:relative;
    bottom:40px;
    ${mobile({ fontSize: "12px", marginLeft: "5px",position:"relative", right:"50px" })}

    &:hover{
        text-decoration:underline;
        font-size:16px;
    }
   
`
const Center=styled.div`
    flex: 1;
    display:flex;
    text-align:center;
    align-items:center;
    justify-content:flex-end;
    ${mobile({position:"relative", right:"40px"})}

`;

// const Logo=styled.div`
//   font-weight:bold;
//   font-family:'Oswald', sans-serif;
//   font-size:30px;
// `

const Company = () => (
    <img
      src={Aura}
      alt=""
      style={{
        height:'260px',
        width:'260px',
        display:'block',
        position:'relative',
        bottom:'60px',  
       margin: 'auto', 
       cursor:'pointer',
        }}
        
      />
      
    
)

const Navbar = () => {
  return (

    <Container>  
        <Wrapper>
            <Left>
                {/* <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <Search style={{color:"black", fontsize:16}}/>
                </SearchContainer> */}
                </Left>
            <Center>
                {/* <Logo>Aura Rugs</Logo> */}
                <Company/>
                </Center>
                <Right>
                <MenuItems>REGISTER</MenuItems>
                <MenuItems>SIGN IN</MenuItems>
                <MenuItems>
                 <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined/>
                </Badge> 
                </MenuItems>
                </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar