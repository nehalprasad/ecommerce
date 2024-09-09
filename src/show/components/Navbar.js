import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <nav>
           <Link to="/"><li>Home</li></Link>
           <Link to="/Men"><li>Men</li></Link>
           <Link to="/Women"><li>Women</li></Link>
           <Link to="/Kids"><li>Kids</li></Link>
           <Link to="/Contact"><li>Contact</li></Link>
           <Link to="/about"><li>About Us</li></Link>
        </nav>
    </div>
  );
};

export default Navbar;
