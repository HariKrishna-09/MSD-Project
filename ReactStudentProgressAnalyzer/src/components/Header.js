import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';

function Header() {
  return (
    <header>
      <h1>Progress Analyzer</h1>
      <nav>
        <Link to="/">Home</Link>
        <a href="#features">Features</a>
        <a href="#contact">Contact</a>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
    </header>
  );
}

export default Header;
