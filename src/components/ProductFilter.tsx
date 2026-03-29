import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const sortOptions = [
  'Best selling',
  'Price: Low to High',
  'Price: High to Low',
  'Newest',
  'Featured',
];

export function ProductFilter() {
  const [selectedSort, setSelectedSort] = useState('Best selling');
  const [isSortOpen, setIsSortOpen] = useState(false);

  return (
    <div className="flex items-center justify-between py-3 sm:py-4 border-b border-gray-200">
      {/* Filter Button */}
      <button className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 border border-gray-300 rounded-sm hover:border-black transition-colors text-xs sm:text-sm font-medium">
        <SlidersHorizontal className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        <span>Filter</span>
      </button>

      {/* Sort Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsSortOpen(!isSortOpen)}
          className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm"
        >
          <span className="text-gray-500 hidden xs:inline">Sort by:</span>
          <span className="font-medium">{selectedSort}</span>
          <ChevronDown className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
        </button>

        {isSortOpen && (
          <>
            <div 
              className="fixed inset-0 z-40"
              onClick={() => setIsSortOpen(false)}
            />
            <div className="absolute right-0 top-full mt-2 w-40 sm:w-48 bg-white border border-gray-200 rounded-sm shadow-lg z-50 py-1">
              {sortOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setSelectedSort(option);
                    setIsSortOpen(false);
                  }}
                  className={`w-full text-left px-3 sm:px-4 py-2 text-xs sm:text-sm hover:bg-gray-50 transition-colors ${
                    selectedSort === option ? 'font-medium bg-gray-50' : ''
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
