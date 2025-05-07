
import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/restaurants';

const Categories = () => {
  return (
    <div className="py-16 bg-restaurant-neutral">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Browse by Cuisine</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore restaurants by your favorite cuisine type and discover new flavors
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link 
              key={index} 
              to={`/restaurants?cuisine=${category.name}`}
              className="bg-white rounded-lg shadow-md p-6 text-center transform hover:scale-105 transition duration-300 hover:shadow-lg"
            >
              <div className="text-3xl mb-2">{category.icon}</div>
              <h3 className="text-xl font-semibold">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
