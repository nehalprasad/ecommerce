import React from "react";
import { Link } from "react-router-dom";

import { Cart } from "../../assets";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between w-full font-mono items-center py-4">
        <Link to="/" className="text-4xl cursor-pointer hover:text-red-900">Ecommerce</Link>
        <Link to="/Men" className="hover:text-red-900">Men</Link>
        <Link to="/Women" className="hover:text-red-900">Women</Link>
        <Link to="/Kids" className="hover:text-red-900">Kids</Link>
        <Link to="/about" className="hover:text-red-900">About Us</Link>
        <Link to="/cart" className="hover:text-red-900"><Cart/></Link>
      </nav>
    </div>
  );
};

export default Navbar;
