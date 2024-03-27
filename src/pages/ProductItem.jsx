import styled from 'styled-components'
import Announce from '../components/announce'
import Footer from '../components/Footer'
import Navbar from '../components/navbar'
import ProductList from '../components/ProductList'
import { mobile } from '../responsive'

const Container=styled.div`
`
const Title=styled.h1`
      margin:20px;
      font-family:'Oswald', sans-serif
`
const FilterContainer=styled.div`
        display:flex;
        justify-content:space-between;
`
const Filter=styled.div`
        margin:20px;
        ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`
const FilterText=styled.span`
     font-size:20px;
     font-weight:500;
     font-family:'Oswald', sans-serif;
     margin-right:20px;
     ${mobile({ marginRight: "0px" })}
`
const Select=styled.select`
font-family: 'Montserrat', sans-serif;
border:none;
font-size:15px;
margin-right:20px;
padding:10px;
${mobile({ margin: "10px 0px" })}
`
const Option=styled.option`
font-family: 'Montserrat', sans-serif;
padding:2px;
${mobile({ fontSize:"12px"})}



`
const ProductItem = () => {
    return (
      <Container>
        <Navbar />
        <Announce />
        <Title>HandKnotted</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select>
              <Option disabled selected>
                Color
              </Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Yellow</Option>
              <Option>Green</Option>
            </Select>
            <Select>
              <Option disabled selected>
                Size
              </Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select>
              <Option selected>Newest</Option>
              <Option>Price (asc)</Option>
              <Option>Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        <ProductList />
        <Footer />
      </Container>
    );
}

export default ProductItem