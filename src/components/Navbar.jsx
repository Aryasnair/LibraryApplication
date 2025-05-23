import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-emerald-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold">
          <Link to="/">BookNest</Link>
        </div>

        {/* Navigation Links */}
        <div className="space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
          <Link to="/" className="hover:underline">
            LogOut
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
