import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navbar } from "../../show/components";
import { Home, About, Men, Women, Kids, Contact } from "../../show/pages";

const App = () => {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
