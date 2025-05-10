import React, { useState } from 'react'; // ✅ Required for useState
import logo from '../assets/Zesty.png';
import "./CSS/Header.css";

export default function Header() {
    const [btn, setBtn] = useState("Login");

    return (
        <>
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="Zesty Logo" className='lo' />
                </div>
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>Offers</li>
                        <li>Cart</li>
                        <li>Profile</li>
                        <li>
                            <button
                                id="login-btn"
                                onClick={() => {
                                    setBtn(btn === "Login" ? "Logout" : "Login");
                                }}
                            >
                                {btn}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
