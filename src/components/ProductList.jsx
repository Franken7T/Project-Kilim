
import React from 'react'
import styled from 'styled-components'
import { PopularProducts } from '../data'
import { mobile } from '../responsive'
import Product from './Product'

const Container=styled.div`
        padding:20px;
        display:flex;
        flex-wrap:wrap;
        justify-content: space-between;
        
`

const ProductList = () => {
  return (
            <Container>
                {PopularProducts.map((item)=>(
                    <Product item={item} key={item.id}/>
                ))}
            </Container>
  )
}

export default ProductList