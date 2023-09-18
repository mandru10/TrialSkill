import React from 'react';
import AboutArticle from './components/AboutArticle';
import Slide from './components/Carousel/CarouselArticle';
import PackagesPriceArticle from './components/Packages/PackagesPrice';
import TestimonialsArticle from './components/Testimonials/TestimonialsArticle';
import Hero from './components/Hero';
import Layout from './components/Layout';

const App = () => {
  return (
      <Layout>
      <Hero />
      <PackagesPriceArticle />
      <AboutArticle />
      <Slide url={''} title={''} />
      <TestimonialsArticle />
      </Layout>
  );
}

export default App;
