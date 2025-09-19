import { useState, useEffect } from 'react';
import bikes from '../data/bikes';

const categories = Array.from(new Set(bikes.map((bike) => bike.category)));

function CategorySelector({ onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  //swiping on phones
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
      const container = document.querySelector('#category-container');
      if (distance > threshold) {
        container.scrollBy({ left: 150, behavior: 'smooth' });
      } else if (distance < -threshold) {
        container.scrollBy({ left: -150, behavior: 'smooth' });
      }
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  //makes sure first cat. is visible on mount
  useEffect(() => {
    const container = document.querySelector('#category-container');
    if (container) {
      container.scrollLeft = 0;
      console.log('Category scrollLeft set to 0');
    }
  }, []);

  return (
    <div
      id="category-container"
      className="flex overflow-x-auto md:overflow-x-hidden snap-x snap-mandatory scrollbar-hide"
      style={{ scrollPadding: '0.5rem', WebkitOverflowScrolling: 'touch' }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="flex justify-start md:justify-center w-full space-x-2 px-4 py-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 py-2 text-xs md:text-sm font-bold uppercase transition-colors duration-300 snap-start border !border-gray-300 min-w-fit rounded-sm
              ${selectedCategory === category ? 'bg-black text-white' : 'bg-white text-black hover:bg-black hover:text-white'}`}
            style={{ border: '1px solid #d1d5db' }}
          >
            {category}
          </button>
        ))}
      </div>
      <style>
        {`
          #category-container::-webkit-scrollbar {
            display: none;
          }
          #category-container {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
        `}
      </style>
    </div>
  );
}

export default CategorySelector;