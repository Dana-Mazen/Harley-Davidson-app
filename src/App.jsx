import './App.css';
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import { useEffect } from 'react';
import Bikes from './pages/Bikes';
import BikeCategories from './pages/BikesCategories';
import Accessories from './pages/Accessories';
import WomensApparel from './pages/WomensApparel';
import MensApparel from './pages/MensApparel';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

  return (
    <>
     <BrowserRouter>
     <Navbar />
     <ScrollToTop />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bikes" element={<Bikes />} />
        <Route path="/bikes/categories" element={<BikeCategories />} />
         <Route path="/accessories" element={<Accessories />} />
         <Route path="/mens-apparel" element={<MensApparel />} />
         <Route path="/womens-gear" element={<WomensApparel />} />
         <Route path="*" element={<NotFound />} />
      </Routes>
     <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
