
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({
    location: '',
    cuisine: '',
    date: '',
    time: '',
    partySize: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct query string from search parameters
    const queryString = new URLSearchParams(
      Object.entries(searchParams).filter(([_, v]) => v !== '')
    ).toString();
    
    // Navigate to restaurants page with search params
    navigate(`/restaurants?${queryString}`);
  };

  return (
    <div className="relative h-[600px] bg-cover bg-center" 
         style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-white z-10 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Find your table for any occasion
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl">
          Book the best restaurants at the best prices, instantly.
        </p>
        
        <form onSubmit={handleSearch} className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="col-span-1">
              <label htmlFor="location" className="block text-gray-700 text-sm font-medium mb-1">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="City or ZIP code"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-restaurant-primary focus:border-transparent"
                value={searchParams.location}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="col-span-1">
              <label htmlFor="cuisine" className="block text-gray-700 text-sm font-medium mb-1">Cuisine</label>
              <select
                id="cuisine"
                name="cuisine"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-restaurant-primary focus:border-transparent"
                value={searchParams.cuisine}
                onChange={handleInputChange}
              >
                <option value="">All Cuisines</option>
                <option value="Italian">Italian</option>
                <option value="Japanese">Japanese</option>
                <option value="Mexican">Mexican</option>
                <option value="Indian">Indian</option>
                <option value="Thai">Thai</option>
                <option value="Vegetarian">Vegetarian</option>
              </select>
            </div>
            
            <div className="col-span-1">
              <label htmlFor="date" className="block text-gray-700 text-sm font-medium mb-1">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-restaurant-primary focus:border-transparent"
                value={searchParams.date}
                onChange={handleInputChange}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            
            <div className="col-span-1">
              <label htmlFor="time" className="block text-gray-700 text-sm font-medium mb-1">Time</label>
              <select
                id="time"
                name="time"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-restaurant-primary focus:border-transparent"
                value={searchParams.time}
                onChange={handleInputChange}
              >
                <option value="">Select Time</option>
                <option value="lunch">Lunch (12PM - 2PM)</option>
                <option value="dinner">Dinner (6PM - 9PM)</option>
              </select>
            </div>
            
            <div className="col-span-1">
              <label htmlFor="partySize" className="block text-gray-700 text-sm font-medium mb-1">Party Size</label>
              <select
                id="partySize"
                name="partySize"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-restaurant-primary focus:border-transparent"
                value={searchParams.partySize}
                onChange={handleInputChange}
              >
                <option value="">Select Party Size</option>
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5">5 People</option>
                <option value="6">6 People</option>
                <option value="7+">7+ People</option>
              </select>
            </div>
          </div>
          
          <button type="submit" className="w-full mt-6 btn-primary py-3">
            Search Restaurants
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
