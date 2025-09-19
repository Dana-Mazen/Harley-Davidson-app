import Carousel from './Carousel';
import { useState, useEffect } from 'react';
import CategorySelector from './CategorySelector';
import ProductCarousel from './ProductCarousel';
import { Link } from 'react-router-dom';
function Home() {
  const [selectedCategory, setSelectedCategory] = useState('GRAND AMERICAN TOURING');
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const atTop = currentScrollY <= 0;
      const atBottom =
        currentScrollY + window.innerHeight >= document.documentElement.scrollHeight - 10;

      if (atTop || atBottom) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Carousel />
      <div className="bg-white py-12">
        <CategorySelector onCategoryChange={setSelectedCategory} />
        <ProductCarousel selectedCategory={selectedCategory} />
        <div className="flex justify-center py-8">
          <Link
            to="/bikes/categories"
            className="bg-white text-black py-2 px-6 rounded-sm font-bold transition hover:text-white hover:bg-black flex items-center space-x-2 border border-black"
          >
            <span>View All Motorcycles</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 20 20"
            >
              <path d="M4 10h12m0 0l-4-4m4 4l-4 4" />
            </svg>
          </Link>
        </div>
      </div>
      {/*shopping tools */}
      <div className="bg-white">
        <div className="w-full h-px bg-gray-300"></div>
        <div className="py-8">
          <h2 className="text-2xl md:text-3xl font-bold uppercase text-black text-center md:text-left px-4">
            Shopping Tools
          </h2>
          <div className="flex justify-center space-x-4 px-4 py-6">
            <a
              href="#"
              className="flex flex-col items-center justify-center w-50 h-30 md:w-80 md:h-35 bg-black text-white rounded-md transition"
            >
              <svg
                className="w-12 h-12 mb-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm md:text-base font-bold">Financing</span>
            </a>
            <a
              href="#"
              className="flex flex-col items-center justify-center w-50 h-30 md:w-80 md:h-35 bg-black text-white rounded-md transition"
            >
              <svg
                className="w-12 h-12 mb-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 006 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
              <span className="text-sm md:text-base font-bold">Request a Brochure</span>
            </a>
          </div>
        </div>
        <div className="w-full h-px bg-gray-300"></div>
      </div>
      {/*customize*/}
      <div className="bg-white py-10">
        <div className="flex flex-col md:flex-row md:space-x-4 px-4">
          <div className="md:w-1/2 flex flex-col justify-center text-left">
            <h2 className="text-3xl md:text-4xl font-bold uppercase text-black">
              YOUR RIDE. YOUR RULES.
            </h2>
            <p className="text-base md:text-md text-black mt-4">
              Customize your bike with parts and accessories that bring your vision to life.
            </p>
            <Link
              to="/accessories"
              className="bg-black text-white py-2 px-6 rounded-sm font-bold transition hover:bg-gray-800 flex items-center space-x-2 w-fit mt-6"
            >
              <span>Shop Parts & Accessories</span><span></span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 20 20"
              >
                <path d="M4 10h12m0 0l-4-4m4 4l-4 4" />
              </svg>
            </Link>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              src="/assets/homePageAccessories1.png"
              alt="accessories"
              className="w-full h-80 md:h-96 object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
      {/*gear n apparel */}
      <div className="bg-white py-8">
        <div className="w-full h-px bg-gray-300"></div>
        <div className="py-8 px-4">
          <h2 className="text-2xl md:text-3xl font-bold uppercase text-black text-left">
            SHOP GEAR & APPAREL
          </h2>
          <div className="flex flex-col lg:flex-row lg:space-x-4 mt-6">
            <div className="flex flex-col items-start w-full lg:w-1/2">
              <img
                src="/assets/ApparelMenHome.png"
                alt="Men's Apparel"
                className="w-full h-80 md:h-96 lg:h-[32rem] object-cover rounded-sm"
              />
              <Link
                to="/mens-apparel"
                className="text-sm md:text-base font-bold uppercase text-black flex items-center space-x-2 mt-4"
              >
                <span>SHOP MEN'S APPAREL</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 10h12m0 0l-4-4m4 4l-4 4" />
                </svg>
              </Link>
            </div>
            <div className="flex flex-col items-start w-full lg:w-1/2 mt-6 lg:mt-0">
              <img
                src="/assets/ApparelWomenHome.png"
                alt="Women's Gear & Apparel"
                className="w-full h-80 md:h-96 lg:h-[32rem] object-cover rounded-sm"
              />
              <Link
                to="/womens-gear"
                className="text-sm md:text-base font-bold uppercase text-black flex items-center space-x-2 mt-4"
              >
                <span>SHOP WOMEN'S GEAR & APPAREL</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 10h12m0 0l-4-4m4 4l-4 4" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*sticky footer navbar */}
      <div
        className={`fixed bottom-0 left-0 w-full bg-orange-500 md:bg-white shadow-[0_-2px_4px_rgba(0,0,0,0.1)] z-50 transition-transform duration-300 ${
          isNavbarVisible ? 'translate-y-0' : 'translate-y-[100%]'
        }`}
      >
        <div className="flex items-center justify-between md:px-4 md:py-2">
          <p className="text-base md:text-lg font-semibold text-black hidden md:block md:pl-4">
         <p className="text-base font-semibold"> Bring home your dream bike</p> 
          </p>
          <a
            href="#"
            className="bg-orange-500 md:bg-orange-500 text-white py-3 md:py-2 px-6 rounded-xs md:rounded-md font-bold transition hover:bg-orange-600 flex items-center space-x-2 w-full md:w-auto justify-between md:justify-start"
          >
            <span>Find a Dealer</span>
            <span></span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 20 20"
            >
              <path d="M4 10h12m0 0l-4-4m4 4l-4 4" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;