import { useState, useRef, useEffect } from 'react';
import CarouselProductCard from './CarouselProductCard';
import bikes from '../data/bikes';

function ProductCarousel({ selectedCategory }) {
  const [showArrows, setShowArrows] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const containerRef = useRef(null);

  const filteredBikes = bikes.filter((bike) => bike.category === selectedCategory);
  //duplicate if >3 bikes
  const displayBikes = filteredBikes.length > 3 ? [...filteredBikes, ...filteredBikes, ...filteredBikes] : filteredBikes;

  //infinite scroll for >3 bikes
  useEffect(() => {
    const container = containerRef.current;
    if (!container || filteredBikes.length <= 3) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const thirdWidth = scrollWidth / 3;
      console.log('scroll: ', { scrollLeft, scrollWidth, clientWidth });
      if (scrollLeft >= scrollWidth - clientWidth - 1) {
        container.scrollLeft = scrollLeft - thirdWidth;
      } else if (scrollLeft <= 0) {
        container.scrollLeft = thirdWidth;
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [filteredBikes]);

  useEffect(() => {
    const container = containerRef.current;
    if (container && filteredBikes.length > 3) {
      container.scrollLeft = container.scrollWidth / 3;
      console.log('initial scrollLeft: ', container.scrollWidth / 3);
    }
  }, [selectedCategory, filteredBikes]);

  //debug log
  useEffect(() => {
    console.log('selected cat: ', selectedCategory);
    console.log('filtered bikes :', filteredBikes);
    console.log('display: ', displayBikes);
  }, [selectedCategory, filteredBikes, displayBikes]);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
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
        scrollRight();
      } else if (distance < -threshold) {
        scrollLeft();
      }
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
<div
  className="relative"
  onMouseEnter={() => setShowArrows(true)}
  onMouseLeave={() => setShowArrows(false)}
  onTouchStart={handleTouchStart}
  onTouchMove={handleTouchMove}
  onTouchEnd={handleTouchEnd}
>
  {filteredBikes.length === 0 ? (
    <div className="text-center text-black py-6">
      No bikes found for category: {selectedCategory}
    </div>
  ) : (
    <div
      ref={containerRef}
      className={`flex overflow-x-auto snap-x snap-mandatory scrollbar-hide py-6 px-4 pl-8 sm:${
        filteredBikes.length <= 3 ? 'justify-start lg:justify-center' : ''
      }`}
      style={{ WebkitOverflowScrolling: 'touch', scrollPadding: '1.5rem' }}
    >
      <div className="flex space-x-4 w-max">
        {displayBikes.map((bike, index) => (
          <CarouselProductCard key={`${bike.id}-${index}`} bike={bike} />
        ))}
      </div>
    </div>
  )}
  {/* arrows*/}
  <button
    onClick={scrollLeft}
    className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[rgba(0,0,0,0.5)] text-white flex !items-center !justify-center hover:bg-[rgba(0,0,0,0.6)] transition rounded-sm z-30 ${
      showArrows && filteredBikes.length > 3 ? 'opacity-100' : 'opacity-0'
    } hidden md:block`}
  >
    <svg
      className="w-8 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </button>
  <button
    onClick={scrollRight}
    className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[rgba(0,0,0,0.5)] text-white flex !items-center !justify-center hover:bg-[rgba(0,0,0,0.6)] transition rounded-sm z-30 ${
      showArrows && filteredBikes.length > 3 ? 'opacity-100' : 'opacity-0'
    } hidden md:block`}
  >
    <svg
      className="w-8 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </button>
  <style>
    {`
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
      .scrollbar-hide {
        scrollbar-width: none;
        -ms-overflow-style: none;
      }
    `}
  </style>
</div>
  );
}

export default ProductCarousel;