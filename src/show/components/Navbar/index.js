import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { XMarkIcon } from '@heroicons/react/24/solid';
import Marquees from '../Marquee';
import { FaSearch } from 'react-icons/fa';
import { Cart } from "../../assets/svg";
import { Men, Women, Kid } from "../../assets/img";
import { Navigation } from "../../../process/helper";

const navbarItems = [
  { name: "About Us", path: "about-us" },
  { name: "Sign In", path: "signin" },
];

const categoryItems = [
  { name: "Men", path: "men", image: Men },
  { name: "Women", path: "women", image: Women },
  { name: "Kids", path: "kids", image: Kid },
];

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);

  return (
    <div>
      <Marquees />
      <nav className="w-full font-mono items-center py-1 md:px-20">
        <div className="flex justify-between">
          <Link to="/" className="hover:text-red-900 text-4xl">
            Ecommerce
          </Link>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-zinc-100 focus:outline-none text-xs w-1/2 pl-8"
              onChange={(e) => { }}
            />
            <FaSearch className="h-2 w-2 absolute left-2 top-2.5" />
          </div>
        </div>

        <div className="flex justify-end items-center mb-1">
          <Cart onClick={Navigation.bind(null, "/cart", navigate)} className="hover:text-red-900 w-4 h-4" />
          <Link to="/about-us" className="hover:text-red-900 pe-2 text-xs">Shopping Cart</Link>
          <div className="bg-brown text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
            <span aria-hidden="true" data-cart-count="0">0</span>
            <span className="sr-only">0 items</span>
          </div>
          <Link to="/signin" className="hover:text-red-900 text-xs ps-3">Sign in</Link>
          <Link to="/signup" className="hover:text-red-900 ps-1 text-xs">or Sign up</Link>
        </div>
        <button onClick={toggleMobileMenu} className="md:hidden">Menu</button>
      </nav>

      <div className="flex justify-center bg-brown text-white text-xs font-bolder py-1">
        {navbarItems.map(({ name, path }) => (
          <Link
            key={name}
            to={`/${path}`}
            className={`hover:text-red-900 text-center px-3 ${["About Us", "Sign In"].includes(name) ? "hidden md:block" : ""}`}
          >
            {name}
          </Link>
        ))}
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-start p-4">
          <button onClick={toggleMobileMenu} className="self-end flex items-center">
            <XMarkIcon className="h-4 w-4" />
          </button>
          {navbarItems.map(({ name, path }) =>
            name !== "Ecommerce" && (
              <Link key={name} to={`/${path}`} className="hover:text-red-900 py-2">
                {name}
              </Link>
            )
          )}
        </div>
      )}

      <div className="flex justify-center py-3 gap-8">
        {categoryItems.map(({ name, path, image }) => (
          <div key={name} className="flex flex-col items-center">
            <img src={image} alt={name} className="w-9 h-9 mb-2 rounded-full border border-red-900" />
            <Link to={`/${path}`} className="hover:text-red-900 text-xs text-center">{name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;