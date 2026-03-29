import { Search, User, Heart, ShoppingBag, MapPin, ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onMenuClick: () => void;
  isMenuOpen: boolean;
}

export function Header({ onMenuClick, isMenuOpen }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Left: Menu Button (Mobile) + Logo */}
          <div className="flex items-center gap-3">
            <button 
              onClick={onMenuClick}
              className="lg:hidden p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
            
            <a href="/" className="flex items-center">
              <span 
                className="text-xl md:text-2xl font-semibold tracking-widest" 
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                CELENA
              </span>
            </a>
            
            <button className="hidden md:flex items-center gap-1 text-sm text-gray-600 hover:text-black transition-colors ml-4">
              <MapPin className="w-4 h-4" />
              <span className="hidden lg:inline">Update Delivery Pincode</span>
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search term"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-2.5 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-black/10 transition-all"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200 rounded-full transition-colors">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Mobile Search Toggle */}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            
            <a 
              href="/account" 
              className="hidden sm:flex items-center gap-2 text-sm text-gray-700 hover:text-black transition-colors"
            >
              <User className="w-5 h-5" />
              <span className="hidden lg:inline">login & register</span>
            </a>
            
            <a 
              href="/account"
              className="sm:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <User className="w-5 h-5" />
            </a>
            
            <a 
              href="/wishlist" 
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Heart className="w-5 h-5" />
              <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-black text-white text-[10px] flex items-center justify-center rounded-full">
                0
              </span>
            </a>
            
            <a 
              href="/cart" 
              className="flex items-center gap-1 md:gap-2 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-black text-white text-[10px] flex items-center justify-center rounded-full">
                  0
                </span>
              </div>
              <div className="hidden lg:flex flex-col items-start">
                <span className="text-xs text-gray-500">Cart</span>
                <span className="text-sm font-medium">₹ 0.00</span>
              </div>
            </a>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="lg:hidden pb-3">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search term"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-2.5 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-black/10 transition-all"
                autoFocus
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200 rounded-full transition-colors">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
