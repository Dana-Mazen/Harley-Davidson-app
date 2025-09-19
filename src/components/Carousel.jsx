import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const carouselItems = [
  {
    id: 1,
    category: 'GRAND AMERICAN TOURING',
    title: "2025 GRAND AMERICAN TOURING",
    text1: "OUR ROAD. OUR RULES. LET'S RIDE.",
    text2: "Go the distance on our 2025 Grand American Touring motorcycles.",
    img: '/assets/carousel1.png'
  },
  {
    id: 2,
    category: 'CRUISER',
    title: "2025 CRUISERS",
    text1: 'MORE POWER. MORE TECH. SAME SOUL.',
    text2: 'Every 2025 Cruiser now packs a more powerful Milwaukee-Eight 117 V-Twin Engine, new Ride Modes, all-LED lighting, and Rider Safety Enhancements.',
    img: '/assets/carousel2.png'
  },
  {
    id: 3,
    category: 'SPORT',
    title: "2025 SPORT",
    text1: 'MAX PERFORMANCE. PURE GRIT.',
    text2: 'Sportster legacy meets Revolution Max power in our 2025 Sport lineup.',
    img: '/assets/carousel3.png'
  },
  {
    id: 4,
    category: 'ADVENTURE TOURING',
    title: "2025 ADVENTURE TOURING",
    text1: 'OWN THE ROAD. ON AND OFF.',
    text2: 'Fast canyon roads or rugged off-road trails? Ride it all on our 2025 Adventure Touring motorcycles.',
    img: '/assets/carousel4.png'
  },
  {
    id: 5,
    category: 'TRIKE',
    title: "2025 CVO MOTORCYCLES",
    text1: 'THE BEST OF EVERTHING. REFINED FOR THE ROAD.',
    text2: 'Explore the pinnacle of H-D style and design with our 2025 CVO motorcycles.',
    img: '/assets/carousel5.png'
  }
];

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart && touchEnd) {
      const distance = touchStart - touchEnd;
      const threshold = 50;
      if (distance > threshold) {
        goToNext();
      } else if (distance < -threshold) {
        goToPrevious();
      }
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div
      className="relative w-full h-[80vh] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={carouselItems[currentSlide].img}
            alt={carouselItems[currentSlide].category}
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute text-left left-8 top-8 sm:top-1/2 sm:transform sm:-translate-y-1/2 flex flex-col items-start">
            <h2 className="text-md font-extrabold text-white drop-shadow-md mb-4">
              {carouselItems[currentSlide].title}
            </h2>
            <h2 className="text-4xl font-extrabold text-white drop-shadow-md mb-4">
              {carouselItems[currentSlide].text1}
            </h2>
            <h2 className="text-md font-abold text-white drop-shadow-md mb-4">
              {carouselItems[currentSlide].text2}
            </h2>
            <Link
              to={`/bikes?category=${encodeURIComponent(carouselItems[currentSlide].category)}`}
              className="bg-white text-black py-3 px-6 rounded-sm font-bold transition hover:text-gray-600 flex items-center space-x-2"
            >
              <span>Explore {carouselItems[currentSlide].category.toLowerCase()}</span>
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
          <div className="absolute bottom-4 right-4 flex items-center space-x-2">
            <div className="text-white text-md font-semibold drop-shadow-md sm:hidden">
              {currentSlide + 1}/{carouselItems.length}
            </div>
            <div className="hidden sm:flex space-x-2">
              <button
                onClick={goToPrevious}
                className="w-12 h-12 bg-[rgba(0,0,0,0.5)] text-white flex items-center justify-center hover:bg-[rgba(0,0,0,0.6)] transition rounded-sm"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="w-12 h-12 bg-[rgba(0,0,0,0.5)] text-white flex items-center justify-center hover:bg-[rgba(0,0,0,0.6)] transition rounded-sm"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Carousel;