// on page load, make a call to the store api
// store the data from the api in state
// display the results to the page
//  -> img and title of object

// site: https://fakestoreapi.com/docs & no api key

import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  // piece of state to hold the products
  const [product, setProduct] = useState([])

  useEffect( () => {
  // in here well call the api using axios

  axios({
    url: 'https://fakestoreapi.com/products/categories', 
    method: 'GET',
    responseType: 'json',
    // params: {
    //   
    // }
  })
  .then(response => {
    console.log(response)
    setProduct(response.data)
  })
}, [])


  return (
    <div className="App">
      <div className='wrapper'>
        <header>
          <h1>welcome to the fake store </h1>

          
              <div className="sideNav">
                <ul>
                {
                  product.map( data => {
                    return(
                      
                    <li> <a href="#">{data}</a> </li>
                    )
                  })
                }
                </ul>
              </div>


        </header>
      </div>
    </div>
  );
}

export default App;
