
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/HomePage/Hero';
import Categories from '../components/HomePage/Categories';
import FeaturedRestaurants from '../components/HomePage/FeaturedRestaurants';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Categories />
        <FeaturedRestaurants />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
