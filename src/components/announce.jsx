import React from 'react'
import styled from 'styled-components'


const Container1=styled.div`
    height:30px;
    background-color:#411530;
    color:white;
    justify-content:center;
    align-items:center;
    display:flex;
    font-size:14px;
    font-weight:100;
    font-family:'Oswald', sans-serif;
`
const Announce = () => {
  return <Container1>
          SALE! FREE SHIPPING ON ORDERS ABOVE $100
        </Container1>;
}

export default Announce