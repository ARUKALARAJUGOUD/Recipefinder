// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import "./App.css";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Home />
//     </>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import "./App.css"
import Login from "./pages/Login";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { useState } from "react";
export default function App() {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      {/* <nav className="navbar">
        <h2>🍽 Recipe Finder</h2>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/Login">Login</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/favorites">❤️ Favorites</Link>
        </div>
      </nav> */}

<nav className="navbar">
      <div className="nav-container">
        <h2 className="logo">🍽 Recipe Finder</h2>

        {/* Hamburger for mobile */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/Login" onClick={() => setMenuOpen(false)}>Login</Link>
          <Link to="/Contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/favorites" onClick={() => setMenuOpen(false)}>❤️ Favorites</Link>
        </div>
      </div>
    </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/Login" element = {<Login />}/>
        <Route path="/Contact" element = {<ContactForm />}  />
      </Routes>
      <Footer />
    </Router>
  );
}
