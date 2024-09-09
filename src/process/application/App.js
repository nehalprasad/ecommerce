import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../show/pages/Home";
import About from "../../show/pages/About";
import Contact from "../../show/pages/Contact";
import Men from "../../show/pages/Men";
import Women from "../../show/pages/Women";
import Kids from "../../show/pages/Kids";
import Navbar from '../../show/components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;