
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getNextWeekDates, getAvailableTimeSlots, generateConfirmationCode } from '../utils/dateUtils';
import { Restaurant } from '../data/restaurants';

interface ReservationFormProps {
  restaurant: Restaurant;
}

const ReservationForm = ({ restaurant }: ReservationFormProps) => {
  const navigate = useNavigate();
  const dates = getNextWeekDates();
  const timeSlots = getAvailableTimeSlots();
  
  const [selectedDate, setSelectedDate] = useState(dates[0].fullDate);
  const [selectedTime, setSelectedTime] = useState(timeSlots[8]); // Default to a dinner time
  const [partySize, setPartySize] = useState<string>("2");
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10,}$/.test(formData.phone.replace(/[^\d]/g, ''))) {
      newErrors.phone = 'Phone number must be at least 10 digits';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, this would be an API call
      console.log('Form submitted successfully:', {
        restaurant: restaurant.name,
        date: selectedDate,
        time: selectedTime,
        partySize,
        ...formData
      });
      
      // Generate a confirmation code
      const confirmationCode = generateConfirmationCode();
      
      // Navigate to confirmation page with reservation details
      navigate('/reservation/confirmation', { 
        state: {
          restaurantId: restaurant.id,
          restaurantName: restaurant.name,
          date: selectedDate,
          time: selectedTime,
          partySize,
          ...formData,
          confirmationCode
        } 
      });
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold mb-6 text-center">Make a Reservation</h3>
      
      <form onSubmit={handleSubmit}>
        {/* Date Selection */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Select Date</label>
          <div className="grid grid-cols-3 md:grid-cols-7 gap-2">
            {dates.map((dateObj, index) => (
              <button
                key={index}
                type="button"
                className={`flex flex-col items-center justify-center p-3 border rounded-lg transition-colors ${
                  selectedDate === dateObj.fullDate
                    ? 'bg-restaurant-primary text-white border-restaurant-primary'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-restaurant-primary'
                }`}
                onClick={() => setSelectedDate(dateObj.fullDate)}
              >
                <span className="text-sm">{dateObj.day}</span>
                <span className="text-lg font-bold">{dateObj.dayOfMonth}</span>
                <span className="text-sm">{dateObj.month}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Time & Party Size Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="time" className="block text-gray-700 font-medium mb-2">Select Time</label>
            <select
              id="time"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-primary focus:border-transparent"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
            >
              {timeSlots.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="partySize" className="block text-gray-700 font-medium mb-2">Party Size</label>
            <select
              id="partySize"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-primary focus:border-transparent"
              value={partySize}
              onChange={(e) => setPartySize(e.target.value)}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((size) => (
                <option key={size} value={size}>
                  {size} {size === 1 ? 'Person' : 'People'}
                </option>
              ))}
              <option value="large">More than 12</option>
            </select>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className={`w-full px-4 py-2 border ${
                errors.firstName ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-primary focus:border-transparent`}
              value={formData.firstName}
              onChange={handleInputChange}
            />
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className={`w-full px-4 py-2 border ${
                errors.lastName ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-primary focus:border-transparent`}
              value={formData.lastName}
              onChange={handleInputChange}
            />
            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full px-4 py-2 border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-primary focus:border-transparent`}
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={`w-full px-4 py-2 border ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-primary focus:border-transparent`}
              value={formData.phone}
              onChange={handleInputChange}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
        </div>
        
        {/* Special Requests */}
        <div className="mb-6">
          <label htmlFor="specialRequests" className="block text-gray-700 font-medium mb-2">Special Requests (Optional)</label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-restaurant-primary focus:border-transparent"
            value={formData.specialRequests}
            onChange={handleInputChange}
          ></textarea>
        </div>
        
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full btn-primary py-3"
        >
          Complete Reservation
        </button>
        
        <p className="text-center text-gray-600 mt-4 text-sm">
          By clicking "Complete Reservation" you agree to the TableTopia Terms of Use and Privacy Policy.
        </p>
      </form>
    </div>
  );
};

export default ReservationForm;
