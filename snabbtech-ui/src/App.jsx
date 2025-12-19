import Hero from "./sections/Hero";
import Discover from "./sections/Discover";
import Navbar from "./components/Navbar";
import Reviews from "./sections/Reviews";
import Services from "./components/Services";
import PortfolioDetail from "./pages/PortfolioDetail";
import Challenges from "./components/Challenges";
import Partnership from "./components/Patnership";
import UniqueSolutions from "./components/UniqueSolution";
import IndustryReasons from "./components/IndustryReasons";
import Industries from "./components/Industries";
import Testimonials from "./components/Testimonials";
import SecondLast from "./components/secondlast";
import Footer from "./components/Footer";
import Blog from "./components/Blog";



export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Discover />
      <Reviews />
      <Services />
      <PortfolioDetail />
      <Challenges />
      <Partnership />
      <IndustryReasons />
      <UniqueSolutions/>
      <Industries />
      <Testimonials />
      <Blog/>
      <SecondLast/>
      <Footer />

    </>
    
  );
}
