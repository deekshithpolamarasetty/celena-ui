import { Heart, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  badge?: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-2 left-2 z-10 bg-black text-white text-[9px] sm:text-[10px] font-medium px-1.5 sm:px-2 py-0.5 sm:py-1">
          {product.badge}
        </div>
      )}

      {/* Wishlist Button */}
      <button
        onClick={() => setIsWishlisted(!isWishlisted)}
        className="absolute top-2 right-2 z-10 p-1.5 sm:p-2 bg-white rounded-full shadow-md opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity hover:bg-gray-50"
      >
        <Heart 
          className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
        />
      </button>

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100 rounded-sm mb-2 sm:mb-3">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
        />
        
        {/* Quick Add Button - Desktop */}
        <button 
          className={`hidden sm:flex absolute bottom-0 left-0 right-0 bg-black text-white py-2.5 md:py-3 text-sm font-medium items-center justify-center gap-2 transition-transform duration-300 ${
            isHovered ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Cart
        </button>

        {/* Mobile Add Button */}
        <button 
          className="sm:hidden absolute bottom-2 right-2 bg-black text-white p-2 rounded-full shadow-lg"
        >
          <ShoppingBag className="w-4 h-4" />
        </button>
      </div>

      {/* Product Info */}
      <div className="space-y-0.5 sm:space-y-1">
        <h3 className="text-xs sm:text-sm text-gray-800 line-clamp-2 min-h-[32px] sm:min-h-[40px]">
          {product.name}
        </h3>
        
        <div className="flex flex-wrap items-center gap-1 sm:gap-2">
          <span className="text-xs sm:text-sm font-semibold">
            ₹ {product.price.toLocaleString('en-IN')}.00
          </span>
          <span className="text-xs text-gray-400 line-through">
            ₹ {product.originalPrice.toLocaleString('en-IN')}.00
          </span>
          <span className="text-[10px] sm:text-xs text-gray-500">
            ({product.discount}%)
          </span>
        </div>
      </div>
    </div>
  );
}
