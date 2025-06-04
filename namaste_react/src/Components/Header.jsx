import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Zesty.png';
import './CSS/Header.css';

export default function Header() {
    const [btn, setBtn] = useState("Login");

    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="Zesty Logo" className="lo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li>
                        <Link to="/offers" className="nav-link">Offers</Link>
                    </li>
                    <li>
                        <Link to="/cart" className="nav-link">Cart</Link>
                    </li>
                    <li>
                        <Link to="/profile" className="nav-link">Profile</Link>
                    </li>
                    <li>
                        <button
                            id="login-btn"
                            onClick={() => setBtn(btn === "Login" ? "Logout" : "Login")}
                        >
                            {btn}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
