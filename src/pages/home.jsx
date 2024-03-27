import React from 'react'
import Announce from '../components/announce'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Header from '../components/header'
import Navbar from '../components/navbar'
// import Product from '../components/Product'
import ProductList from '../components/ProductList'
import Slider from '../components/slider'
import Trending from '../components/Trending'
import WApp from './whatsapp'
// import Photo from '../pages/profil.jpeg'


const Home = () => {
  return(
    <div>
      <Announce/>
      {/* <Header /> */}
       <Navbar />
        <Slider/>
          <Categories/>
          <Trending />
            <ProductList/>
            <Footer/>
            <WApp/>
     </div>
  );
}

export default Home
 {/* <img src={Photo} /> */}