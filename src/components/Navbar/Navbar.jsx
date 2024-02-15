import React from 'react';
import './Navbar.css'
import {Link} from "react-router-dom";
const Navbar = ({className}) => {
    return (
        <nav className={className}>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About Us</Link>
        </nav>
    );
};

export default Navbar;