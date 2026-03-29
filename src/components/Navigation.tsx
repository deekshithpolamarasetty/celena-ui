import { useState } from 'react';
import { X, ChevronRight } from 'lucide-react';

const navItems = [
  { name: 'New Arrivals', href: '/collections/new-arrivals' },
  { name: 'Best Seller', href: '/collections/best-seller' },
  { name: 'Fine Silver', href: '/collections/silver-luxe' },
  { 
    name: '9KT Fine Gold', 
    href: '/pages/gold-jewellery',
    badge: 'Luxe',
    badgeColor: 'bg-amber-400'
  },
  { 
    name: 'Emily In Paris', 
    href: '/pages/emily-in-paris',
    badge: 'à la mode',
    badgeColor: 'bg-blue-500'
  },
  { name: "Shraddha's Favourite", href: '/pages/shraddhas-favourite' },
  { name: 'Demi-fine Jewellery', href: '/collections/shop-by-category' },
  { name: 'Gifting', href: '/collections/gifts-for-her' },
  { name: 'About Us', href: '/pages/about-us' },
];

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Navigation({ isOpen, onClose }: NavigationProps) {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-1 overflow-x-auto scrollbar-hide">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setActiveItem(item.name)}
                onMouseLeave={() => setActiveItem(null)}
                className="relative px-4 py-3 text-sm text-gray-700 hover:text-black whitespace-nowrap transition-colors group"
              >
                <span className="flex items-center gap-1.5">
                  {item.name}
                  {item.badge && (
                    <span className={`${item.badgeColor} text-white text-[9px] px-1.5 py-0.5 rounded-sm font-medium`}>
                      {item.badge}
                    </span>
                  )}
                </span>
                <span 
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-black transition-all duration-300 ${
                    activeItem === item.name ? 'w-full' : 'w-0'
                  }`} 
                />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div 
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50"
          onClick={onClose}
        />
        
        {/* Drawer */}
        <div 
          className={`absolute left-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-xl transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <span 
              className="text-xl font-semibold tracking-widest"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              CELENA
            </span>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Drawer Content */}
          <div className="overflow-y-auto h-[calc(100%-65px)]">
            <nav className="py-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors border-b border-gray-50"
                >
                  <span className="flex items-center gap-2">
                    {item.name}
                    {item.badge && (
                      <span className={`${item.badgeColor} text-white text-[9px] px-1.5 py-0.5 rounded-sm font-medium`}>
                        {item.badge}
                      </span>
                    )}
                  </span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </a>
              ))}
            </nav>
            
            {/* Mobile Account Links */}
            <div className="p-4 border-t border-gray-100">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Account</p>
              <a 
                href="/account" 
                onClick={onClose}
                className="flex items-center gap-3 py-2 text-gray-700"
              >
                <span>Login & Register</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
