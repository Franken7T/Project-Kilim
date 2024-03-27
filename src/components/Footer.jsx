import { Facebook, Instagram, Twitter, Room, Phone, MailOutline } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'



const Container=styled.div`
      display:flex;
      flex:1;
      ${mobile({ flexDirection: "column" })}
`
const Left=styled.div`
      flex:1;
      display:flex;
      flex-direction:column;
      padding:20px;
`
const Logo=styled.h1`
font-family:'Oswald', sans-serif;

`
const Desc=styled.p`
      margin:20px 0px;
      font-family: 'Montserrat', sans-serif;
      font-size:13px;

`
const SocialContainer=styled.div`
      display:flex;
   
`
const SocialIcon=styled.h1`
      width:40px;
      height:40px;
      border-radius:50%;
      color:white;
      background-color: #${props=>props.color};
      display:flex;
      align-items:center;
      justify-content:center;
      margin-right:20px;

`
const Right=styled.div`
      flex:1;
      padding:20px;
      ${mobile({ backgroundColor: "black",color:"white" })}
`
const ContactItem=styled.div`
      margin-bottom:20px;
      display:flex;
      align-items:center;
      font-family: 'Montserrat', sans-serif;
      font-size:13px;
`
const Center=styled.div`
      flex:1;
      padding:20px;
`
const Title=styled.h2`
font-family:'Oswald', sans-serif;
      margin-bottom:30px;
    

`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Aura Rugs</Logo>
      
      <Desc>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
     optio, eaque rerum! Provident similique accusantium nemo autem.
      </Desc>
      <SocialContainer>
          <SocialIcon color='3B5999'>
            <Facebook/>
          </SocialIcon>
           <SocialIcon color='E4405F'>
            <Instagram />
          </SocialIcon>
          <SocialIcon color='55ACEE'>
            <Twitter/>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
      </Center>
      <Right>
           <Title>Contact</Title>
           <ContactItem><Room style={{marginRight:"10px"}}/>Nai Bazar, Bhadohi 221409</ContactItem>
           <ContactItem><Phone style={{marginRight:"10px"}}/>+91 99xxxxx87</ContactItem>
           <ContactItem><MailOutline style={{marginRight:"10px"}}/>info@aurarugs.in</ContactItem>
      </Right>
    </Container>
  )
}

export default Footer