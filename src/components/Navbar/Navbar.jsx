import React from "react";
import './styles.css'
import { Link } from "react-router-dom";

function Navbar() {


    return (

        <nav>
            <div className="logo-container">
                <h1 className="logo">
                    <Link to="/home">
                        LOGO
                    </Link>

                </h1>
            </div>

            <ul>
                <li>
                    <Link to="/home">
                        Home
                    </Link>
                </li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>

    );
}

export default Navbar