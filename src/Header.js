import React from 'react';

function Header() {

    return(
        <header>
            <nav className="nav topBar">
                    <div className='logo'>
                        <p>Fake Store</p>
                    </div>
                <ul className='nav'>
                    <li><a href="#signup">sign in</a></li>
                    <li><a href="#search">search</a></li>
                    <li><a href="#menu">menu</a></li>
                    <li><a href="#menu"><i class="fas fa-shopping-cart"></i></a></li>
                </ul>
            </nav>
                <div className="headerBox">
                    <h1>Summer Sale!</h1>
                    <h3>get 30% off new arrivals</h3>
                    <button>Shop now</button>
                </div>
        </header>
    )
}

export default Header;