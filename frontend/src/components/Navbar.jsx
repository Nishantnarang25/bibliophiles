import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900">
          Book<span className="text-blue-600">Hub</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700">
          <li>
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          </li>
          <li>
            <Link to="/books" className="hover:text-blue-600 transition">Books</Link>
          </li>
          <li>
            <Link to="/favorites" className="hover:text-blue-600 transition">Favorites</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600 transition">About</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-lg text-gray-700 py-4 space-y-4 text-center">
          <li>
            <Link to="/" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/books" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>
              Books
            </Link>
          </li>
          <li>
            <Link to="/favorites" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>
              Favorites
            </Link>
          </li>
          <li>
            <Link to="/about" className="block hover:text-blue-600" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
