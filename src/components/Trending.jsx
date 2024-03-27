import React from 'react'
import styled from 'styled-components'

const Container=styled.div`


padding 140px;
background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url("https://images.unsplash.com/photo-1608724552908-e1c141f631ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80")
    center;
background-size: cover;
`
const Title=styled.h1`
display:flex;
justify-content: center;
align-items:center;
font-family: 'Montserrat', sans-serif;
 color:black;

`


const Trending = () => {
  return (
    <Container>
        <Title>TRENDING NOW</Title>
    </Container>
  )
}

export default Trending