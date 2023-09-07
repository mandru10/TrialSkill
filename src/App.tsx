import React from 'react';
import AboutArticle from './components/AboutArticle';
import CarouselArticle from './components/CarouselArticle';
import Footer from './components/Footer';
import Header from './components/Header';
import PackagesPrice from './components/PackagesPrice';
import TestimonialsArticle from './components/TestimonialsArticle';
import Hero from './components/Hero';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <PackagesPrice />
      <AboutArticle />
      <CarouselArticle />
      <TestimonialsArticle />
      <Footer />
    </div>
  );
}

export default App;
