import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/Zesty.png';
import { FaShoppingCart } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { MdPerson } from "react-icons/md";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { useSelector } from "react-redux";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Sync login state on load and route changes
  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(status === "true");
  }, [location.pathname]);

  const handleAuthClick = () => {
    if (isLoggedIn) {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userPhone");
      setIsLoggedIn(false);
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="flex justify-between items-center px-6 py-3 mx-6 mt-6 h-20 rounded-full shadow-xl bg-yellow-400">
      <div className="flex items-center text-green-800">
        <img src={logo} alt="Zesty Logo" className="w-14 h-14 rounded-full mr-3" />
        <h1 className="font-extrabold text-2xl">Zesty</h1>
      </div>

      <ul className="flex items-center space-x-8 text-green-800 font-bold">
        <li className="hover:text-white transition duration-200">
          <Link to="/"><IoMdHome size={28} /></Link>
        </li>
        <li className="relative hover:text-white transition duration-200">
          <Link to="/cart">
            <FaShoppingCart size={26} />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-white text-green-800 text-xs font-bold px-2 py-0.5 rounded-full shadow">
                {cartItems.length}
              </span>
            )}
          </Link>
        </li>
        <li className="hover:text-white transition duration-200">
          <Link to="/profile"><MdPerson size={30} /></Link>
        </li>

        {/* ✅ Login/Logout Button */}
        <li>
          <button
            onClick={handleAuthClick}
            className="flex items-center gap-2 px-5 py-2 bg-green-800 text-white border-2 border-white rounded-full shadow-md transition-all hover:bg-white hover:text-green-800 hover:border-green-800 hover:scale-105"
          >
            {isLoggedIn ? <FiLogOut size={18} /> : <FiLogIn size={18} />}
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </li>
      </ul>
    </div>
  );
}
