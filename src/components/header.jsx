import React from 'react'
import styled from 'styled-components';
import Aura from '../components/AURA.png'


const Container=styled.div`
     
     height:60px;
    //  background-color: whitesmoke;
    margin-bottom: 50px;
`;
     
const Wrapper= styled.div`
    // padding: 1px 10px;
  
    align-items:center;
`;




const Center=styled.div`
    text-align:center;
`;

// const Logo=styled.div`
// //  font-weight:bold;
// //  font-family:'Oswald', sans-serif;
// `

const Company = () => (
      <img
        src={Aura}
        alt=""
        style={{
          height:'260px',
          width:'300px',
          display:'block',
          position:'relative',
          bottom:'60px',  
         margin: 'auto', 
         cursor:'pointer',
        }}
        />
      
  )
const Header = () => {
  return (

    <Container>  
        <Wrapper>
          
            <Center>
                <Company/>
                </Center>
        </Wrapper>
    </Container>
  )
}

export default Header