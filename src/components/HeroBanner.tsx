import { useEffect, useState } from 'react';

export function HeroBanner() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] xl:h-[550px] overflow-hidden">
      {/* Background Image */}
      <div 
        className={`absolute inset-0 transition-transform duration-1000 ${isLoaded ? 'scale-100' : 'scale-105'}`}
      >
        <img
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1920&q=80"
          alt="Mega Sale Banner"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/40 via-orange-400/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-end">
        <div 
          className={`text-right text-white transition-all duration-700 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 md:mb-6 tracking-tight"
            style={{ fontFamily: 'Playfair Display, serif', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
          >
            MEGA SALE
          </h1>
          
          <div className="flex items-center justify-end gap-2 sm:gap-4 md:gap-8 mb-3 md:mb-4">
            <div className="text-right">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light">BUY 4 for</p>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">₹3996</p>
              <p className="text-xs sm:text-sm md:text-base mt-0.5 md:mt-1">CODE: MEGA4</p>
            </div>
            <div className="w-px h-10 sm:h-12 md:h-16 bg-white/50" />
            <div className="text-right">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light">BUY 3 for</p>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">₹3003</p>
              <p className="text-xs sm:text-sm md:text-base mt-0.5 md:mt-1">CODE: MEGA3</p>
            </div>
          </div>
          
          <p className="text-xs sm:text-sm md:text-base text-white/90 mb-3 md:mb-4">
            Apply code at checkout
          </p>
          
          <a 
            href="#products"
            className="inline-block text-sm sm:text-base md:text-lg font-medium underline underline-offset-4 hover:no-underline transition-all"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
}
