import { useState } from 'react';

function ProductCard({ bike }) {
  const [selectedColor, setSelectedColor] = useState(bike.colors[0].name);

  const handleColorClick = (color) => {
    setSelectedColor(color.name);
  };

  return (
    
    <div className="flex flex-col items-center w-full max-w-xs">
      <img
        src={bike.colors.find((c) => c.name === selectedColor).img}
        alt={`${bike.name} in ${selectedColor}`}
        className="w-full h-48 md:h-56 lg:h-64 object-contain"
      />
      <h3 className="text-sm md:text-lg font-bold text-black mt-3 text-center">
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
