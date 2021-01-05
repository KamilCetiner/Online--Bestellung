import React from 'react';
import Hero from './components/Hero';
import Products from './components/Products';
import {BrowserRouter as Router} from 'react-router-dom';
import {GlobalStyle} from './globalStyles';
import {productData, productDataTwo} from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer'


function App() {
  return (
    <Router>
      <Hero/>
      <GlobalStyle/>
      <Products heading='Choose your favorite' data={productData} />
      <Feature/>
      <Products heading='What is your favorite' data={productDataTwo} />
      <Footer/>
    </Router>
  );
}

export default App;
