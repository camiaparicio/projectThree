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
// import Cart from './Cart'
import './App.css'


function App() {

  // piece of state to hold the products
  const [product, setProduct] = useState([]);


    // this adds to cart 
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        console.log('add to cart +1')
        setCart([...cart, product]);
    }
    // end of add to cart

    // this is categories
    const [categories, setCategories] = useState([])

    const chooseCategory = (category) => {
      console.log('you clicked a category')
      setCategories([...categories, category])
    }
    // end of categories


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

    <div className='categories'>
      <ul>
        <li onClick={ () => {chooseCategory} }> <a href="#">Men's Fashion</a></li>
        <li onClick={ () => {chooseCategory} }> <a href="#">Women's Fashion</a></li>
        <li onClick={ () => {chooseCategory} }> <a href="#">Electronics</a></li>
        <li onClick={ () => {chooseCategory} }> <a href="#">Jewelery</a></li>
      </ul>
    </div>
    
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
