import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CategorySelector from '../components/BikesCategorySelector';
import ProductCard from '../components/GridProductCard';
import StaticSection from '../components/StaticSection';
import bikes from '../data/bikes';
import { categories } from '../data/categories';

function Bikes() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || categories[0].name;
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  //sync selectedCategory with URL 
  // only when mount or url change
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl && categories.some((cat) => cat.name === categoryFromUrl)) {
      setSelectedCategory(categoryFromUrl);
    } else {
      setSelectedCategory(categories[0].name);
      setSearchParams({ category: categories[0].name }, { replace: true });
    }
  }, [searchParams]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchParams({ category }, { replace: true });
  };

  const filteredBikes = bikes.filter((bike) => bike.category === selectedCategory);
  const currentCategory = categories.find((cat) => cat.name === selectedCategory) || {};

  return (
    <div className="bg-white">
      {/*line*/}
      <div className="w-full h-px bg-gray-300"></div>
      {/*cat selector*/}
      <div className="py-2">
        <CategorySelector
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>
      {/*line*/}
      <div className="w-full h-px bg-gray-300"></div>
      {/*cat info*/}
      <div className="flex flex-col px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-bold uppercase text-black text-left">2025&nbsp;
          {selectedCategory} Motorcycles
        </h2>
        <p className="text-base md:text-lg text-black text-left mt-4 w-full">
          {currentCategory.description || 'Select a category to view its description.'}
        </p>
      </div>
      {/*product grid*/}
      <div className="px-4 py-1 bg-gray-50">
        {filteredBikes.length === 0 ? (
          <div className="text-center text-black py-6">
            No bikes found for category: {selectedCategory}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
            {filteredBikes.map((bike) => (
              <div key={bike.id} className="w-full max-w-xs mx-auto">
                <ProductCard bike={bike} />
              </div>
            ))}
          </div>
        )}
      </div>
      {/*static part */}
      <StaticSection />
    </div>
  );
}

export default Bikes;