import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Product Management Hub</h1>
        <nav>
          <Link to="/" className="mx-2 hover:text-gray-300">Home</Link>
          <Link to="/blogs" className="mx-2 hover:text-gray-300">Blogs</Link>
          <Link to="/tools" className="mx-2 hover:text-gray-300">Tools</Link>
          <Link to="/about" className="mx-2 hover:text-gray-300">About</Link>
          <Link to="/contact" className="mx-2 hover:text-gray-300">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;