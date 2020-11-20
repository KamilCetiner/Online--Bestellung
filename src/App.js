import React from 'react';
import Hero from './components/Hero';
import Products from './components/Products';
import {BrowserRouter as Router} from 'react-router-dom';
import {GlobalStyle} from './globalStyles';
import {productData} from './components/Products/data';


function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Products heading='Choose your favorite' data={productData} />
  
     <Hero/>
    </Router>
  );
}

export default App;
