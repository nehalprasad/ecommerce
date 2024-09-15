import React from "react";
import { Link } from "react-router-dom";

import { Cart } from "../../assets";

const navbarList = ["Men", "Women", "Kids", "About Us"];

const renderNavbar = (item) => (
  <Link to={`/${item.toLowerCase()}`} className="hover:text-red-900">
    {item}
  </Link>
);

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between w-full font-mono items-center py-4">
        <Link to="/" className="text-4xl cursor-pointer hover:text-red-900">
          Ecommerce
        </Link>
        {navbarList.map(renderNavbar)}
        <Link to="/cart" className="hover:text-red-900">
          <Cart />
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
