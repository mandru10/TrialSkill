import AboutArticle from "./components/AboutArticle";
import CarouselArticle from "./components/CarouselArticle";
import PackagesPrice from "./components/PackagesPrice";
import TestimonialsArticle from "./components/TestimonialsArticle";
import Hero from "./components/Hero";
import { Layout } from "./components";

const App = () => {
  // TODO App Routing

  return (
    <Layout>
      <Hero />
      <PackagesPrice />
      <AboutArticle />
      <CarouselArticle />
      <TestimonialsArticle />
    </Layout>
  );
};

export default App;
