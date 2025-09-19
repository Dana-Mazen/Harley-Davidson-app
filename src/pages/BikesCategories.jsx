import { Link } from 'react-router-dom';
import { categories } from '../data/categories';

function BikeCategories() {
  return (
    <div className="bg-white py-3">
      {/*header img with text*/}
      <div className="px-4 relative">
        <img
          src="/assets/CategoriesPic.png"
          alt="Bikes Header"
          className="w-full max-w-7xl mx-auto h-[60vh] object-cover rounded-sm"
        />
        <div className="absolute text-left left-8 top-8 sm:top-1/2 sm:transform sm:-translate-y-1/2 flex flex-col items-start lg:pl-25">
          <h2 className="text-4xl md:text-6xl font-bold uppercase text-white">
            EXPLORE THE<br></br> MOTORCYCLES
          </h2>
        </div>
      </div>
      {/*category cards*/}
      <div className="px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/bikes?category=${encodeURIComponent(category.name)}`}
              className="flex flex-col items-start"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-80 md:h-96 object-cover rounded-sm"
              />
              <h3 className="text-lg md:text-xl font-bold uppercase text-black mt-4">
                {category.name}
              </h3>
              <p className="text-sm md:text-base font- text-black mt-1">
                {category.description}
              </p>
              <div className="text-sm md:text-base font-bold text-black flex items-center space-x-2 mt-4">
                <span>EXPLORE {category.name.toUpperCase()}</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 10h12m0 0l-4-4m4 4l-4 4" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BikeCategories;