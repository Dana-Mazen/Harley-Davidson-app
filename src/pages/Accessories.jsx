import { accessories } from '../data/accessories';

function Accessories() {
  return (
    <div className="bg-[#ececec] min-h-screen">
      {/*header*/}
      <div className="bg-black text-white py-8 px-6 sm:px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold uppercase text-left">
            NEW MOTORCYCLE PARTS & ACCESSORIES
          </h1>
          <p className="text-base md:text-lg text-left mt-2">
            Leave a bold, lasting impression when you trick out your ride with New Harley-Davidson® Genuine Motor Parts & Accessories.
          </p>
        </div>
      </div>
      {/*product cards */}
      <div className="py-8 px-6 sm:px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-4 max-w-7xl mx-auto">
          {accessories.map((accessory) => (
            <div key={accessory.id} className="flex flex-col items-center">
              <img
                src={accessory.img}
                alt={accessory.name}
                className="w-full h-40 sm:h-40 md:h-48 lg:h-64 object-cover rounded-sm aspect-square"
              />
              <h3 className="text-base sm:text-sm md:text-base font-bold text-black mt-4 text-center">
                {accessory.name.toUpperCase()}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Accessories;