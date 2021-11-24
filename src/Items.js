import React from 'react';

function Items(props) {
  // console.log(props)


    return(

      <div className="wrapper">
      <div className="container">

      {
        props.inventory.map( (values) => {
            // console.log(values)
            
          return(
            <div className="content" key={values.id}>
              <img src={values.image} alt={values.title} />
              <h2>{values.title}</h2>
              <h3> $ {values.price}</h3>
              <button onClick={() => props.cart(values)} >Add To Cart</button>
            </div>
          )
        })
      }
      </div>
      </div>
    )
}

export default Items;