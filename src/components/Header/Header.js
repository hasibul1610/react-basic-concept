import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">

            <div className="header">
                <a href="/home"><h2>That JS Dude</h2></a>
                <a href="/login"><button>Sign In</button></a>
            </div>
            
        </div>
    );
};

export default Header;