
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-restaurant-secondary text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">TableTopia</h3>
            <p className="text-gray-300">
              Discover and book the best restaurants in your area.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Discover</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/restaurants" className="text-gray-300 hover:text-white transition duration-300">
                  Restaurants
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white transition duration-300">
                  Special Offers
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white transition duration-300">
                  Cuisines
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">About</h4>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-300 hover:text-white transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white transition duration-300">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} TableTopia. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="#" className="text-gray-300 hover:text-white transition duration-300">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-300 hover:text-white transition duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
