import { Link } from 'react-router-dom';

function StaticSection() {
  const items = [
    { image: '/assets/StParts.png', text: 'Shop Parts & Accessories', url: '/accessories' },
    { image: '/assets/StMens.png', text: 'Shop Men’s Apparel', url: '/mens-apparel' },
    { image: '/assets/StWomens.png', text: 'Shop Women’s Gear & Apparel', url: '/womens-gear' },
  ];

  return (
    <div className="bg-white py-8">
      {/*img*/}
      <div className="px-4">
        <img
          src="/assets/static1.png"
          alt="Shop Parts & Apparel"
          className="w-full h-[80vh] object-cover rounded-none"
        />
      </div>
      {/*title*/}
      <div className="px-4 py-4">
        <h2 className="text-2xl md:text-3xl font-bold uppercase text-black text-left">
          SHOP PARTS & APPAREL
        </h2>
      </div>
      {/*imgs w/ buttons */}
      <div className="px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-start">
              <img
                src={item.image}
                alt={item.text}
                className="w-full h-80 md:h-96 object-cover rounded-sm"
              />
              <Link
                to={item.url}
                className="text-sm md:text-base font-bold uppercase text-black flex items-center space-x-2 mt-4"
              >
                <span>{item.text}</span>
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default StaticSection;