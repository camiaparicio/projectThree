import React from 'react';

function Header(props) {

    return(
        <header>
            <nav className="nav topBar">

                <ul className='nav'>
                    <li><a href="#signup">Sign In</a></li>
                    <li><a href="#search">Search</a></li>
                    <li><a href="#menu">Menu</a></li>
                </ul>
                <div className='logo'>
                    <p>Fake Store</p>
                </div>
                <ul className='nav'>
                    <li><a href="#menu"><i className="fas fa-shopping-cart"> </i></a></li>
                    <p>You have {props.cart.length} items in your cart</p>
                </ul>
            </nav>
                <div className="headerBox">
                    <h1>Summer Sale!</h1>
                    <h3>get 25% off new arrivals</h3>
                    <button>Shop now</button>
                </div>
        </header>
    )
}

export default Header;