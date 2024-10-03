import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { XMarkIcon } from '@heroicons/react/24/solid';
import { Cart } from "../../assets/svg";
import MenImage from "../../assets/img/men.png";
import WomenImage from "../../assets/img/women.jpg";
import KidsImage from "../../assets/img/kid.png";
import { Navigation } from "../../../process/helper";

const navbarItems = [
  { name: "Ecommerce", path: "" },
  { name: "About Us", path: "about-us" },
  { name: "Sign In", path: "signin" },
];

const categoryItems = [
  { name: "Men", path: "men", image: MenImage },
  { name: "Women", path: "women", image: WomenImage },
  { name: "Kids", path: "kids", image: KidsImage },
];

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);

  return (
    <div>
      <nav className="flex justify-between w-full font-mono items-center py-4 border-b border-red-900">
        <button onClick={toggleMobileMenu} className="md:hidden">Menu</button>
        {navbarItems.map(({ name, path }) => (
          <Link
            key={name}
            to={`/${path}`}
            className={`hover:text-red-900 ${name === "Ecommerce" ? "text-4xl" : ""} ${["About Us", "Sign In"].includes(name) ? "hidden md:block" : ""}`}
          >
            {name}
          </Link>
        ))}
        <Cart onClick={Navigation.bind(null, "/cart", navigate)} />
      </nav>

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

      <div className="flex justify-center py-4 gap-8">
        {categoryItems.map(({ name, path, image }) => (
          <div key={name} className="flex flex-col items-center">
            <img src={image} alt={name} className="w-12 h-12 mb-2 rounded-full border border-red-900" />
            <Link to={`/${path}`} className="hover:text-red-900 text-xs text-center">{name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

