import React from 'react';
import './Header.css'
import Navbar from "../Navbar/Navbar";
import logo from './logo.webp'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={"main-header"}>
            <Link to={"/"} className={"main-header-logo"}><img src={logo} alt={"TESO logo"}/></Link>
            <Navbar className={"main-header-nav"}/>
        </header>
    );
};

export default Header;