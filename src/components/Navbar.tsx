import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-restaurant-primary">
            Table<span className="text-restaurant-secondary">Topia</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-restaurant-primary transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/restaurants"
            className="text-gray-700 hover:text-restaurant-primary transition duration-300"
          >
            Restaurants
          </Link>
          <Link to="/restaurants" className="btn-primary">
            Make a Reservation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-restaurant-primary focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white w-full shadow-lg animate-fade-in">
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            <Link
              to="/"
              className="text-gray-700 hover:text-restaurant-primary transition duration-300 px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/restaurants"
              className="text-gray-700 hover:text-restaurant-primary transition duration-300 px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Restaurants
            </Link>
            <Link
              to="#"
              className="btn-primary mx-4 text-center"
              onClick={() => setIsOpen(false)}
            >
              Make a Reservation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
