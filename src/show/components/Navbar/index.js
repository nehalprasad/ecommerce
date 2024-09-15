import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { Cart } from "../../assets/svg";
import { Navigation } from "../../../process/helper";

const navbarList = ["Ecommerce", "Men", "Women", "Kids", "About Us", "SignIn"];

const renderNavbar = (item, index) => {
  const isFirst = index === 0;
  return (
    <Link
      to={`/${isFirst ? "" : item.toLowerCase()}`}
      className={`${
        isFirst ? "text-4xl cursor-pointer" : ""
      }hover:text-red-900`}
    >
      {item}
    </Link>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="flex justify-between w-full font-mono items-center py-4">
        {navbarList.map(renderNavbar)}
        <Cart onClick={Navigation.bind(null, "/cart", navigate)} />
      </nav>
    </div>
  );
};

export default Navbar;
