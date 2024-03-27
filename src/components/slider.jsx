import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined, } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
// import Photos from '../components/designer-rugs-collection-olsen-ormandy.jpg'
import { sliderItems } from '../data'
import { mobile } from '../responsive'

const Container2=styled.div`
    width:100%;
    height:90vh;
    display:flex;
    position:relative;
    overflow:hidden;
`
const Arrow=styled.div`
  width:50px;
  height:50px;
  background-color:white;
  border-radius:50%;
  display:flex;
  justify-content:center;
  align-items:center;
  position:absolute;
  top: 0;
  bottom: 0;
  left:${props=>props.direction==="left"&&"10px"};
  right:${props=>props.direction==="right"&&"10px"};
  margin:auto;
  cursor:pointer;
  opacity:0.5;
  z-index:2;
`
const Wrapper1=styled.div`
     height:100%;
     display:flex;
     transform:translateX(${(props) => props.slideIndex *-100}vw);
`
   
    const Slide=styled.div`
        width:100vw;
        height:90vh;
        display:flex;
        align-items:center;
        background-color: #${props => props.bg};
    `
    const ImgContainer=styled.div`
        height:100%;  
        flex:1.5;
        ${mobile({ display: "none" })}
`
    const Image=styled.img`
    height:90%;
    width:100%;
     
     padding:3px;
    `
    const InfoContainer=styled.div`
    padding 50px;
        flex:1;
    `
    const Title=styled.h1`
    font-size:58px;
    font-family:'Oswald', sans-serif;
    ${mobile({ fontSize: "40px" })}
    `
    const Desc=styled.p`
    margin:50px 0px;
    font-size:18px;
    font-weight:500;
    letter-spacing:3px;
    font-family: 'Montserrat', sans-serif;
    ${mobile({ fontSize: "13px" })}
    `
    const Button=styled.button`
        padding:10px;
        font-size:16px;
        background-color:transparent;
        cursor:pointer;
        font-family: 'Montserrat', sans-serif;
        ${mobile({ fontSize: "14px" })}

    `
    
const Slider = () => {
    const [slideIndex, setSlideIndex]=useState(0);
    const handleClick=(direction)=>{
        if(direction==="left"){
            setSlideIndex(slideIndex>0 ? slideIndex-1:2);
        }
        else{
            setSlideIndex(slideIndex<2 ? slideIndex+1:0);
        }
    }
  return (
    <Container2>
        <Arrow direction="left" onClick={()=> handleClick("left")}>
            <KeyboardArrowLeftOutlined/>
        </Arrow>
        <Wrapper1 slideIndex={slideIndex}>
            {sliderItems.map((item) => (
            <Slide bg={item.bg}>
            <ImgContainer className='effects'>
                <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>SHOP NOW</Button>
            </InfoContainer>              
              </Slide>
            ))}
           
        </Wrapper1>
        
        <Arrow direction="right" onClick={()=> handleClick("right")}>
            <KeyboardArrowRightOutlined/>
        </Arrow>
    </Container2>
  )
}

export default Slider