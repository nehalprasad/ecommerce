import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { XMarkIcon } from '@heroicons/react/24/solid';

import { Cart } from "../../assets/svg";
import I18n from '../../../process/locales/I18n';
import { Men, Women, Kid } from "../../assets/img";
import { Navigation } from "../../../process/helper";
import { Marquees, TextField, Separator } from '../index';

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
  <nav className="font-mono px-10 py-2">
    <div className="hidden md:flex justify-between pl-10">
      <Link to="/" className="hover:text-red-900 text-4xl hidden md:block">Ecommerce</Link>
      <div>
        <TextField
          className="bg-gray-200"
          placeholder={I18n.t('navbar:search')}
          rightIcon={FaSearch}
        />
      </div>
    </div>
    <div className="flex md:hidden justify-between items-center mb-1">
      <button onClick={toggleMobileMenu} className="md:hidden">Menu</button>
      <TextField
        className="bg-gray-200 mx-2"
        placeholder={I18n.t('navbar:search')}
        rightIcon={FaSearch}
      />
      <Cart onClick={Navigation.bind(null, "/cart", navigate)} className="hover:text-red-900 w-6 h-6" />
    </div>
    <div className="hidden md:flex justify-end mb-1">
      <Cart onClick={Navigation.bind(null, "/cart", navigate)} className="hover:text-red-900 w-6 h-6" />
      <Link to="/about-us" className="hover:text-red-900 pe-2 text-sm hidden md:block">Shopping Cart</Link>
      <div className="bg-brown text-white rounded-full w-4 h-4 text-center text-xs hidden md:block">
        <span aria-hidden="true" data-cart-count="0">0</span>
        <span className="sr-only text-sm">0 items</span>
      </div>
      <Link to="/signin" className="hover:text-red-900 text-sm hidden md:block ps-3">Sign in</Link>
      <Link to="/signup" className="hover:text-red-900 ps-1 text-sm hidden md:block">or Create an account</Link>
    </div>
  </nav>
  <div className="flex bg-brown text-white text-xs font-bold text-center py-1 hidden md:block">
    {navbarItems.map(({ name, path }) => (
      <Link key={name} to={`/${path}`} className="hover:text-red-900 px-3">
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
      <Link to="/about-us" className="hover:text-red-900 py-2">Shopping Cart</Link>
      <Link to="/signup" className="hover:text-red-900 py-2">or Create an account</Link>
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
  <Separator width={'w-1/3'} />
</div>
  );
};

export default Navbar;