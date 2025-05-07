
import React from 'react';
import { Link } from 'react-router-dom';
import { Restaurant } from '../data/restaurants';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <Link to={`/restaurant/${restaurant.id}`}>
        <div className="h-48 overflow-hidden relative">
          <img 
            src={restaurant.image} 
            alt={restaurant.name} 
            className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
          />
          {restaurant.featured && (
            <div className="absolute top-0 right-0 bg-restaurant-primary text-white px-3 py-1 m-2 rounded-md font-medium text-sm">
              Featured
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold">{restaurant.name}</h3>
            <div className="flex items-center bg-restaurant-secondary text-white px-2 py-1 rounded">
              <span className="font-bold">{restaurant.rating}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
          
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">{restaurant.cuisine}</span>
            <span>{restaurant.priceRange}</span>
            <span className="mx-4">•</span>
            <span>{restaurant.neighborhood}</span>
          </div>
          
          <p className="text-gray-600 line-clamp-2 mb-4">{restaurant.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {restaurant.features.slice(0, 3).map((feature, index) => (
              <span 
                key={index} 
                className="bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded"
              >
                {feature}
              </span>
            ))}
            {restaurant.features.length > 3 && (
              <span className="bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded">
                +{restaurant.features.length - 3} more
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
