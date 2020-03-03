import React from 'react';
import './style.css';
import LogoActive from '../../objects/LogoActive';
import About from '../../objects/About';
import Main from '../../objects/Main';

const Header = () => (
    <header className="header">
        <LogoActive />
        <About />
        <Main />
    </header>
)

export default Header;