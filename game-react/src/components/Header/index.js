import React from 'react';
import './style.css';
import Logo from '../../objects/Logo';
import About from '../../objects/About';
import Main from '../../objects/Main';

const Header = () => (
    <header className="header">
        <Logo />
        <About />
        <Main />
    </header>
)

export default Header;