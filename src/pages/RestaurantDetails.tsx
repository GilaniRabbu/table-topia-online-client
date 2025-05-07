
import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReservationForm from '../components/ReservationForm';
import { getRestaurantById } from '../data/restaurants';

const RestaurantDetails = () => {
  const { id } = useParams<{ id: string }>();
  const restaurant = getRestaurantById(Number(id));
  
  const [activeTab, setActiveTab] = useState('menu');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // If restaurant is not found, redirect to 404
  if (!restaurant) {
    return <Navigate to="/404" />;
  }

  // Additional images for the gallery (in a real app, these would come from the API)
  const galleryImages = [
    restaurant.image,
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Image */}
        <div 
          className="h-64 md:h-96 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${restaurant.image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
            <div className="container mx-auto px-4 pb-8">
              <div className="flex items-center mb-2">
                <span className="bg-restaurant-primary text-white px-2 py-1 rounded text-sm font-medium">
                  {restaurant.cuisine}
                </span>
                <span className="ml-2 text-white text-sm">
                  {restaurant.priceRange}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl text-white font-bold">{restaurant.name}</h1>
              <div className="flex items-center mt-2">
                <div className="flex items-center bg-white bg-opacity-90 px-2 py-1 rounded mr-4">
                  <span className="font-bold text-restaurant-secondary mr-1">{restaurant.rating}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-restaurant-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gray-700 ml-1">({restaurant.reviews} reviews)</span>
                </div>
                <span className="text-white">{restaurant.neighborhood}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="border-b border-gray-200 mb-6">
                <nav className="flex space-x-8">
                  <button
                    onClick={() => setActiveTab('menu')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'menu'
                        ? 'border-restaurant-primary text-restaurant-primary'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Menu
                  </button>
                  <button
                    onClick={() => setActiveTab('photos')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'photos'
                        ? 'border-restaurant-primary text-restaurant-primary'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Photos
                  </button>
                  <button
                    onClick={() => setActiveTab('about')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'about'
                        ? 'border-restaurant-primary text-restaurant-primary'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    About
                  </button>
                </nav>
              </div>
              
              {/* Tab Content */}
              {activeTab === 'menu' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Menu</h2>
                  
                  {restaurant.menu.map((category, index) => (
                    <div key={index} className="mb-8">
                      <h3 className="text-xl font-semibold mb-4 border-b pb-2">
                        {category.category}
                      </h3>
                      <div className="space-y-6">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex flex-col md:flex-row md:justify-between">
                            <div className="mb-2 md:mb-0">
                              <h4 className="font-medium flex items-center">
                                {item.name}
                                {item.popular && (
                                  <span className="ml-2 bg-restaurant-accent bg-opacity-20 text-restaurant-secondary text-xs px-2 py-0.5 rounded-full">
                                    Popular
                                  </span>
                                )}
                              </h4>
                              <p className="text-gray-600 text-sm">{item.description}</p>
                            </div>
                            <div className="text-restaurant-primary font-medium md:ml-4 md:text-right whitespace-nowrap">
                              ${item.price.toFixed(2)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {activeTab === 'photos' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">Photos</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {galleryImages.map((image, index) => (
                      <div 
                        key={index} 
                        className="bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition duration-300"
                        onClick={() => setActiveImageIndex(index)}
                      >
                        <img 
                          src={image} 
                          alt={`${restaurant.name} - Interior ${index + 1}`} 
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Image Modal - in a real app this would be a proper modal component */}
                  {activeImageIndex !== null && (
                    <div 
                      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
                      onClick={() => setActiveImageIndex(null)}
                    >
                      <div className="max-w-4xl w-full p-4">
                        <img 
                          src={galleryImages[activeImageIndex]} 
                          alt={`${restaurant.name} large view`}
                          className="w-full max-h-[80vh] object-contain"
                        />
                      </div>
                      <button 
                        className="absolute top-4 right-4 text-white hover:text-gray-300"
                        onClick={() => setActiveImageIndex(null)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              )}
              
              {activeTab === 'about' && (
                <div>
                  <h2 className="text-2xl font-bold mb-6">About</h2>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3">Description</h3>
                    <p className="text-gray-700">{restaurant.description}</p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3">Location</h3>
                    <p className="text-gray-700 mb-2">{restaurant.address}</p>
                    <p className="text-gray-700 mb-4">{restaurant.neighborhood}</p>
                    
                    {/* In a real app, this would be a Google Maps component */}
                    <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">Map view would be displayed here</p>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-3">Hours</h3>
                    <div className="space-y-2">
                      {restaurant.openingHours.map((hours, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="font-medium">{hours.days}</span>
                          <span>{hours.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Features</h3>
                    <div className="flex flex-wrap gap-2">
                      {restaurant.features.map((feature, index) => (
                        <span 
                          key={index}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Reservation Panel */}
            <div className="lg:col-span-1">
              <ReservationForm restaurant={restaurant} />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RestaurantDetails;
