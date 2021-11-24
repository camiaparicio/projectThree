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
import Items from './Items'
import './App.css'
// import PhotoForm from './PhotoForm';


function App() {

  // piece of state to hold the products
  const [product, setProduct] = useState([]);


    // THIS ADDS TO CART
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        console.log('add to cart +1')
        setCart([...cart, product]);
    }
    // END OF ADD TO CART

    // // THIS IS FOR CATEGORIES
  
    // const getPhotos = (e) => {
    //   e.preventDefault();
    //   console.log('getting categories');
    // }
    // // END OF CATEGORIES


  useEffect( () => {
  // in here well call the api using axios

  axios({
    url: 'https://fakestoreapi.com/products', 
    method: 'GET',
    responseType: 'json',
  })
  .then(response => {
    setProduct(response.data)
    console.log(response.data)
  });
}, []);

  return(
<>
    <div className='App'>
        <Header cart={product} click={product}/>

    {/* dropdown component*/}
     {/* <PhotoForm getPhotos={getPhotos} /> */}
    {/* end of dropdown component*/}

    {product.length === 0
          ? ( 
            <div className="loader"></div>
            ) : (
        <Items inventory={product} cart={addToCart}/>
          )}
        <Footer />
      </div>
</>
  )
}

export default App;
