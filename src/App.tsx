import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedCategories from "./components/Featuredcategories";
import PromoBanners from "./components/Promobanners";
import PopularProducts from "./components/Popularproducts";
import AboutSection from "./components/Aboutsection";
import WhyChooseUs from "./components/Whychooseus";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCategories />
      <PromoBanners />
      <PopularProducts />
      <AboutSection />
      <WhyChooseUs />
      <Footer />
    </>
  );
}