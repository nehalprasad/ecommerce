

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  Home,
  About,
  Men,
  Women,
  Kids,
  Contact,
  SignIn,
  SignUp,
} from "../../show/pages/public";
import { Navbar } from "../../show/components";
import { Cart } from "../../show/pages/private";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/card" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/men" element={<Men />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/women" element={<Women />} />
      </Routes>
    </Router>
  );
};

export default App;
