
import React from 'react';
import { getFeaturedRestaurants } from '../../data/restaurants';
import RestaurantCard from '../RestaurantCard';

const FeaturedRestaurants = () => {
  const featuredRestaurants = getFeaturedRestaurants();

  return (
    <div className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Restaurants</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our selection of the finest dining experiences in your area
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/restaurants" 
            className="btn-outline"
          >
            View All Restaurants
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRestaurants;

import { Link } from 'react-router-dom';
