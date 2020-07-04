import React from 'react';
import './styles.css';
import logo from '../../images/logo.png';
import logoLight from '../../images/logo-negative.png'

const Logo = ({light = false}) =>{
    return (<img src={light ? logoLight : logo } alt="logo" className="logo-active" />)
} 

export default Logo;