import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container=styled.div`
    flex:1;
    margin:3px;
    height:70vh;
    position:relative;

    &:hover{ 
      transform:scale(1.02);
    }
`
const Image=styled.img`
        width:100%;
        height:100%;
        object-fit:cover;
        opacity:0.65;
        ${mobile({ height: "40vh" })}
      
`
const Info=styled.div`
        position:absolute;
        top:0;
        left:0;
        height:100%;
        width:100%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
       
`
const Title=styled.h1`
        color:black;
        margin-bottom:20px;
        font-family: 'Montserrat', sans-serif;
        font-weight:800;
`
const Button=styled.button`
    border:none;
    padding:10px;
    color:white;
    background-color:black;
    cursor:pointer;
    font-family: 'Montserrat', sans-serif;
    transition:all 0.5 ease;

    &:hover ${Title}
    {
      color:white;
    }
    &:hover{
      background-color:white;
      color:black;
      transform:scale(1.1);
    }
  
`
const CategoryItem = ({item}) => {
  return (
    <Container>
         <Image src={item.img}/>
            <Info>
                <Title>
                    {item.title}
                 </Title>
                    <Button>
                      To The Collection
                 </Button>
            </Info>
    </Container>
  )
}

export default CategoryItem