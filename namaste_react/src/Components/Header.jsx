import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Zesty.png';


export default function Header() {
    const [btn, setBtn] = useState("Login");

    return (
        <div className="flex justify-between m-6 h-20 rounded-full shadow-xl border-0 bg-yellow-300 ">
            <div className="logo">
                <img src={logo} alt="Zesty Logo" className="w-20 rounded-full ms-4" />
            </div>
            <div className="nav-items">
                <ul className='flex  '>
                    <li className='p-4 m-4 font-bold font text-green-800 hover:underline'>
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className='p-4 m-4 font-bold font text-green-800 hover:underline'>
                        <Link to="/offers" className="nav-link">Search</Link>
                    </li>
                    <li className='p-4 m-4 font-bold font text-green-800 hover:underline'>
                        <Link to="/cart" className="nav-link">Cart</Link>
                    </li>
                    <li className='p-4 m-4 font-bold font text-green-800 hover:underline'>
                        <Link to="/profile" className="nav-link">Profile</Link>
                    </li>
                    <li>
                        <button
                            className='bg-green-800 px-4 py-2  mr-6 me-4 mt-5.5 text-amber-50 font-bold rounded-3xl items-center'
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
