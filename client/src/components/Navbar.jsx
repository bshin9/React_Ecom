import React from 'react';
import {NavLink} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const Navbar = () => {
    return ( 
    <> 
    <nav className="navbar navbar-expand-lg fixed-top">
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navigation-bar">
            <span className="navbar-toggler-icon">☰</span>
        </button>
        <HashLink className="navbar-brand" to="/#header"><img
            src="img/conorlog.jpg"
            width="30px"
            height="30px"
            className="img-fluid"
            alt="proper"/></HashLink>
        <div className="collapse navbar-collapse" id="navigation-bar">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <HashLink className="nav-link" to="/#header">HOME</HashLink>
                </li>
                <li className="nav-item">
                    <HashLink className="nav-link" to="/#who">WHO</HashLink>
                </li>
                <li className="nav-item">
                    <HashLink className="nav-link" to="/#why">WHY</HashLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/products">PRODUCTS</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">CONTACTS</NavLink>
                </li>
            </ul>
        </div>
    </nav> 
    </>
    )
}

export default Navbar;