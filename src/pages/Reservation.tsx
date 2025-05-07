
import React, { useEffect } from 'react';
import { useLocation, Navigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getRestaurantById } from '../data/restaurants';
import { formatDisplayDate } from '../utils/dateUtils';

const ReservationConfirmation = () => {
  const location = useLocation();
  const reservation = location.state as {
    restaurantId: number;
    restaurantName: string;
    date: string;
    time: string;
    partySize: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    specialRequests?: string;
    confirmationCode: string;
  } | null;
  
  const restaurant = reservation ? getRestaurantById(reservation.restaurantId) : null;
  
  useEffect(() => {
    if (reservation) {
      // In a real app, this would be an API call to send an email confirmation
      console.log('Email confirmation would be sent to:', reservation.email, 'with details:', reservation);
    }
  }, [reservation]);
  
  // If there's no reservation data in state, redirect to home
  if (!reservation || !restaurant) {
    return <Navigate to="/" />;
  }
  
  // Format the date for display
  const displayDate = new Date(reservation.date);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Reservation Confirmed!</h1>
              <p className="text-gray-600">
                Your reservation has been successfully booked. A confirmation has been sent to your email.
              </p>
            </div>
            
            <div className="border-t border-b border-gray-200 py-6 my-6">
              <h2 className="text-xl font-semibold mb-4">Reservation Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-gray-500 text-sm">Restaurant</h3>
                  <p className="font-medium">{restaurant.name}</p>
                </div>
                
                <div>
                  <h3 className="text-gray-500 text-sm">Confirmation Code</h3>
                  <p className="font-medium text-restaurant-primary">{reservation.confirmationCode}</p>
                </div>
                
                <div>
                  <h3 className="text-gray-500 text-sm">Date</h3>
                  <p className="font-medium">{formatDisplayDate(displayDate)}</p>
                </div>
                
                <div>
                  <h3 className="text-gray-500 text-sm">Time</h3>
                  <p className="font-medium">{reservation.time}</p>
                </div>
                
                <div>
                  <h3 className="text-gray-500 text-sm">Party Size</h3>
                  <p className="font-medium">
                    {reservation.partySize} {Number(reservation.partySize) === 1 ? 'Person' : 'People'}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-gray-500 text-sm">Name</h3>
                  <p className="font-medium">{reservation.firstName} {reservation.lastName}</p>
                </div>
                
                <div>
                  <h3 className="text-gray-500 text-sm">Email</h3>
                  <p className="font-medium">{reservation.email}</p>
                </div>
                
                <div>
                  <h3 className="text-gray-500 text-sm">Phone</h3>
                  <p className="font-medium">{reservation.phone}</p>
                </div>
              </div>
              
              {reservation.specialRequests && (
                <div className="mt-4">
                  <h3 className="text-gray-500 text-sm">Special Requests</h3>
                  <p>{reservation.specialRequests}</p>
                </div>
              )}
            </div>
            
            <div className="text-center space-y-4">
              <p className="text-gray-600">
                Need to make changes? Please contact the restaurant directly.
              </p>
              <div className="space-x-4">
                <Link to="/" className="btn-outline">
                  Return Home
                </Link>
                <Link to={`/restaurant/${reservation.restaurantId}`} className="btn-primary">
                  View Restaurant
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ReservationConfirmation;
