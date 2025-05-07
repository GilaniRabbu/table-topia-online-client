
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RestaurantCard from '../components/RestaurantCard';
import { getFilteredRestaurants, Restaurant, categories } from '../data/restaurants';

const Restaurants = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [filters, setFilters] = useState({
    search: searchParams.get('location') || '',
    cuisine: searchParams.get('cuisine') || '',
    price: searchParams.get('price') || '',
    sort: 'rating'
  });

  useEffect(() => {
    // Apply filters
    const filteredRestaurants = getFilteredRestaurants(
      filters.search,
      filters.cuisine
    );

    // Apply sort
    let sortedRestaurants = [...filteredRestaurants];
    if (filters.sort === 'rating') {
      sortedRestaurants.sort((a, b) => b.rating - a.rating);
    } else if (filters.sort === 'reviews') {
      sortedRestaurants.sort((a, b) => b.reviews - a.reviews);
    } else if (filters.sort === 'name') {
      sortedRestaurants.sort((a, b) => a.name.localeCompare(b.name));
    }

    setRestaurants(sortedRestaurants);

    // Update URL search params
    const newSearchParams = new URLSearchParams();
    if (filters.search) newSearchParams.set('location', filters.search);
    if (filters.cuisine) newSearchParams.set('cuisine', filters.cuisine);
    if (filters.price) newSearchParams.set('price', filters.price);
    setSearchParams(newSearchParams, { replace: true });
  }, [filters, setSearchParams]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      cuisine: '',
      price: '',
      sort: 'rating'
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-restaurant-secondary text-white py-10">
          <div className="container mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold">Discover Restaurants</h1>
            <p className="mt-2">Find the perfect spot for any occasion</p>
          </div>
        </div>
        
        <div className="container mx-auto py-8">
          {/* Filters Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-xl font-semibold">Filters</h2>
              <button 
                onClick={clearFilters}
                className="text-restaurant-primary hover:underline text-sm"
              >
                Clear All
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
              <div>
                <label htmlFor="search" className="block text-gray-700 text-sm font-medium mb-1">
                  Search
                </label>
                <input
                  type="text"
                  id="search"
                  name="search"
                  placeholder="Restaurant or location"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-primary focus:border-transparent"
                  value={filters.search}
                  onChange={handleFilterChange}
                />
              </div>
              
              <div>
                <label htmlFor="cuisine" className="block text-gray-700 text-sm font-medium mb-1">
                  Cuisine
                </label>
                <select
                  id="cuisine"
                  name="cuisine"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-primary focus:border-transparent"
                  value={filters.cuisine}
                  onChange={handleFilterChange}
                >
                  <option value="">All Cuisines</option>
                  {categories.map((category) => (
                    <option key={category.name} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="price" className="block text-gray-700 text-sm font-medium mb-1">
                  Price Range
                </label>
                <select
                  id="price"
                  name="price"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-primary focus:border-transparent"
                  value={filters.price}
                  onChange={handleFilterChange}
                >
                  <option value="">All Prices</option>
                  <option value="$">$ (Inexpensive)</option>
                  <option value="$$">$$ (Moderate)</option>
                  <option value="$$$">$$$ (Expensive)</option>
                  <option value="$$$$">$$$$ (Very Expensive)</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="sort" className="block text-gray-700 text-sm font-medium mb-1">
                  Sort By
                </label>
                <select
                  id="sort"
                  name="sort"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-primary focus:border-transparent"
                  value={filters.sort}
                  onChange={handleFilterChange}
                >
                  <option value="rating">Highest Rated</option>
                  <option value="reviews">Most Reviewed</option>
                  <option value="name">Name (A-Z)</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Results Section */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">{restaurants.length} Restaurants Found</h2>
            </div>
            
            {restaurants.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-700 mb-2">No restaurants found</h3>
                <p className="text-gray-500">Try adjusting your filters to find more options</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {restaurants.map((restaurant) => (
                  <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                ))}
              </div>
            )}
            
            {/* Pagination would go here in a real application */}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Restaurants;
