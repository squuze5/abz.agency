import React from 'react';

import './Navbar.scss';
import Logo from '../../assets/img/logo.svg';

const NavBar = () => {
    return (
        <header className="navbar">
            <div className="container">

                <nav>
                    <div className="navbar__logo">
                        <img src={Logo} alt="logo"/>
                    </div>

                    <ul className="navbar__items">
                        <li>About me</li>
                        <li>Relationships</li>
                        <li>Requirements</li>
                        <li>Users</li>
                        <li>Sign Up</li>
                    </ul>
                </nav>
            </div>  
        </header>
    )
}

export default NavBar;