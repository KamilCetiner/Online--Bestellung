import React from 'react';
import Hero from './components/Hero';
import Products from './components/Products';
import {BrowserRouter as Router} from 'react-router-dom';
import {GlobalStyle} from './globalStyles';
import {productData, productDataTwo} from './components/Products/data';
import Feature from './components/Feature';


function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Products heading='Choose your favorite' data={productData} />
      <Feature/>

      <Products heading='s´Sweer treats y´fir you' data={productDataTwo} />

  
     <Hero/>
    </Router>
  );
}

export default App;
