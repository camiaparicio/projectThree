// on page load, make a call to the store api
// store the data from the api in state
// display the results to the page
//  -> img and title of object

// site: https://fakestoreapi.com/docs & no api key

import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

// COMPONENTS
import Footer from './Footer'
import Header from './Header'
// import Products from './Products'


function App() {

  // piece of state to hold the products
  const [product, setProduct] = useState([]);

  useEffect( () => {
  // in here well call the api using axios

  axios({
    url: 'https://fakestoreapi.com/products', 
    method: 'GET',
    responseType: 'json',
  })
  .then(response => {
    setProduct(response.data)
    // console.log(response.data)
  });
}, []);

  return(
    <div className='App'>
      <Header />
      {
        product.map( (values) => {
            console.log(values)
            return(
              <>
                <div className="wrapper">
                  <div className="container">
                  <div className="grid">
                    <img src="{values.image}" alt="" />
                      <h2>{values.title}</h2>
                        <h3>{values.price}</h3>
                          <h4>{values.description}</h4>
                  </div>
                  </div>
                </div>
              </>
            )
        })
      }
      <Footer />
    </div>
 );

}

export default App;
