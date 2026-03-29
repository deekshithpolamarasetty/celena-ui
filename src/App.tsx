import { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { HeroBanner } from './components/HeroBanner';
import { Breadcrumb } from './components/Breadcrumb';
import { ProductFilter } from './components/ProductFilter';
import { ProductGrid } from './components/ProductGrid';
import { Footer } from './components/Footer';
import type { Product } from './components/ProductCard';

// Product data
const products: Product[] = [
  {
    id: 1,
    name: 'Hearts All Over Bracelet',
    price: 2229,
    originalPrice: 3184,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&q=80',
    badge: 'BUY 1 GET 1',
  },
  {
    id: 2,
    name: 'Plain Ball Stud Earrings',
    price: 1495,
    originalPrice: 2136,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80',
  },
  {
    id: 3,
    name: 'Crystal Love Bangle Bracelet',
    price: 2659,
    originalPrice: 3799,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&q=80',
    badge: 'BUY 1 GET 1',
  },
  {
    id: 4,
    name: 'Athena Solitaire Hoop Earrings',
    price: 2258,
    originalPrice: 3226,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1635767798638-3e2523c0188b?w=500&q=80',
    badge: 'BUY 1 GET 1',
  },
  {
    id: 5,
    name: 'Diamond Affair Bracelet',
    price: 2553,
    originalPrice: 3647,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&q=80',
    badge: 'BUY 1 GET 1',
  },
  {
    id: 6,
    name: 'Round Solitaire Necklace',
    price: 2799,
    originalPrice: 3998,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80',
    badge: 'BUY 1 GET 1',
  },
  {
    id: 7,
    name: 'Classic Emerald Necklace',
    price: 2223,
    originalPrice: 3175,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&q=80',
    badge: 'BUY 1 GET 1',
  },
  {
    id: 8,
    name: 'Nail Bangle Bracelet',
    price: 2258,
    originalPrice: 3226,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&q=80',
    badge: 'BUY 1 GET 1',
  },
  {
    id: 9,
    name: 'Delicate Diamond Studded Necklace',
    price: 2113,
    originalPrice: 3019,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80',
    badge: 'BUY 1 GET 1',
  },
  {
    id: 10,
    name: 'Bow Pendant Necklace',
    price: 1749,
    originalPrice: 2499,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&q=80',
    badge: 'BUY 1 GET 1',
  },
  {
    id: 11,
    name: 'Multi Stone Q Clasp Bracelet',
    price: 2258,
    originalPrice: 3226,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&q=80',
    badge: 'BUY 1 GET 1',
  },
  {
    id: 12,
    name: 'Golden Orb Set',
    price: 2285,
    originalPrice: 3264,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80',
    badge: 'BUY 1 GET 1',
  },
  {
    id: 13,
    name: 'Rope Chain | 6 MM',
    price: 2633,
    originalPrice: 3761,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&q=80',
    badge: 'BUY 1 GET 1',
  },
  {
    id: 14,
    name: 'Plain Stackable Bangle Bracelet |4MM',
    price: 2117,
    originalPrice: 3024,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1635767798638-3e2523c0188b?w=500&q=80',
    badge: 'BUY 1 GET 1',
  },
  {
    id: 15,
    name: 'Tree of Life Necklace',
    price: 2508,
    originalPrice: 3583,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80',
    badge: 'BUY 1 GET 1',
  },
  {
    id: 16,
    name: 'Cross-Over Stones Lined Twist Ring',
    price: 2903,
    originalPrice: 4147,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&q=80',
    badge: 'BUY 1 GET 1',
  },
  {
    id: 17,
    name: 'Daisy Flower Necklace',
    price: 2111,
    originalPrice: 3016,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&q=80',
    badge: 'BUY 1 GET 1',
  },
  {
    id: 18,
    name: 'Infinity Wish Bracelet',
    price: 2111,
    originalPrice: 3016,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&q=80',
    badge: 'BUY 1 GET 1',
  },
  {
    id: 19,
    name: 'Black Vixen Necklace',
    price: 1225,
    originalPrice: 1750,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80',
    badge: 'BUY 1 GET 1',
  },
  {
    id: 20,
    name: 'Classic Textured Hoops',
    price: 1335,
    originalPrice: 1907,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1635767798638-3e2523c0188b?w=500&q=80',
    badge: 'BUY 1 GET 1',
  },
  {
    id: 21,
    name: 'Cuban Chain Hollow Heart Necklace',
    price: 2346,
    originalPrice: 3351,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&q=80',
    badge: 'BUY 1 GET 1',
  },
  {
    id: 22,
    name: 'InterLock Gold Chain Necklace',
    price: 2100,
    originalPrice: 3000,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80',
    badge: 'BUY 1 GET 1',
  },
  {
    id: 23,
    name: 'Black Onyx Two Layer Necklace',
    price: 2473,
    originalPrice: 3533,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&q=80',
    badge: 'BUY 1 GET 1',
  },
  {
    id: 24,
    name: 'Heart Rays Necklace',
    price: 2346,
    originalPrice: 3351,
    discount: 30,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80',
    badge: 'BUY 1 GET 1',
  },
];

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Header 
        onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMenuOpen={isMobileMenuOpen}
      />
      <Navigation 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <HeroBanner />
      
      {/* Main Content */}
      <main id="products" className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8">
        {/* Page Title */}
        <div className="text-center mb-4 sm:mb-6">
          <h1 
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            MEGA SALE
          </h1>
          <Breadcrumb items={[{ name: 'MEGA SALE' }]} />
        </div>
        
        {/* Filter & Sort */}
        <ProductFilter />
        
        {/* Product Grid */}
        <ProductGrid products={products} />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
