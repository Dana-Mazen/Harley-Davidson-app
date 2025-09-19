import { useState } from 'react';

function ProductCard({ bike }) {
  const [selectedColor, setSelectedColor] = useState(bike.colors[0].name);

  const handleColorClick = (color) => {
    setSelectedColor(color.name);
  };

  return (
    <div className="flex flex-col items-start snap-center w-52 md:w-60 lg:w-72 shrink-0">
      <img
        src={bike.colors.find((c) => c.name === selectedColor).img}
        alt={`${bike.name} in ${selectedColor}`}
        className="w-full h-36 md:h-44 lg:h-48 object-contain"
      />
      <h3 className="text-sm md:text-lg font-bold text-black mt-3">
        {bike.name}
      </h3>
      <div className="flex space-x-2 mt-2">
        {bike.colors.map((color) => (
          <div key={color.name} className="relative">
            <button
              onClick={() => handleColorClick(color)}
              className="w-6 h-6 rounded-none border border-gray-300"
              style={{ backgroundColor: color.name }}
            />
            <span
              className={`absolute left-0 w-full h-0.5 bg-black transition-opacity ${
                selectedColor === color.name ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ bottom: '-1px' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;