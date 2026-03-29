import { Facebook, Instagram, Linkedin, Youtube, Smartphone, Star, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const policyLinks = [
  { name: 'Shipping & Delivery Policy', href: '#' },
  { name: 'Return & Exchange Policy', href: '#' },
  { name: 'Lifetime Warranty Policy', href: '#' },
  { name: 'Lifetime BuyBack Policy', href: '#' },
  { name: 'Payment Policy', href: '#' },
  { name: 'Grievance Redressal Policy', href: '#' },
];

const helpLinks = [
  { name: "FAQ's", href: '#' },
  { name: 'Contact Us', href: '#' },
  { name: 'Terms of Service', href: '#' },
  { name: 'Privacy Policy', href: '#' },
  { name: 'Track Order', href: '#' },
  { name: 'Return & Exchange', href: '#' },
];

const aboutLinks = [
  { name: 'About Us', href: '#' },
  { name: 'Blogs', href: '#' },
  { name: 'Contact Us', href: '#' },
  { name: 'Stores & Services', href: '#' },
];

const popularSearches = [
  'For Women', 'Demi-Fine Jewellery', 'Rings For Women', 'Earrings For Women',
  'Bracelet For Women', 'Pendants For Women', 'Necklaces For Women', 'For Men',
  'Rings For Men', 'Pendant For Men', 'Chain For Men', 'Mangalsutra',
  'Gold Mangalsutra', 'Diamond Mangalsutra', 'Infinity Mangalsutra', 'Pendants',
  'Gold Pendants', 'Diamond Pendants', 'Solitaire Pendants', 'Evil Eye Pendants',
  'Bracelets', 'Gold Bracelets', 'Diamond Bracelets', 'Pearl Bracelets',
  'Evil Eye Bracelets', 'Chain Bracelets', 'Stone Bracelets', 'Cuff Bracelets',
  'Necklace', 'Gold Necklace', 'Diamond Necklace', 'Pearl Necklace',
  'Necklaces For Women', 'Evil Eye Necklace', 'Name Necklace', 'Emerald Necklace',
  'Rings', 'Diamond Rings', 'Gold Rings', 'Silver Rings', 'Solitaire Rings',
  'Gemstone Rings', 'Mens Rings', 'Engagement Ring', 'Couple Ring', 'Wedding Ring',
  'Statement Ring', 'Emerald Ring', 'Earrings', 'Gold Earrings', 'Diamond Earrings',
  'Solitaire Earrings', 'Hoop Earrings', 'Stud Earrings', 'Pearl Earrings',
  'Emerald Earrings', 'Daily Wear Earrings', 'Dangler Earrings',
];

function FooterSection({ title, links }: { title: string; links: { name: string; href: string }[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 md:border-none">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-3 md:py-0 md:mb-4"
      >
        <h4 className="font-semibold text-sm md:text-base">{title}</h4>
        <ChevronDown className={`w-4 h-4 md:hidden transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <ul className={`space-y-2 ${isOpen ? 'block pb-3' : 'hidden md:block'}`}>
        {links.map((link) => (
          <li key={link.name}>
            <a 
              href={link.href}
              className="text-xs sm:text-sm text-gray-600 hover:text-black transition-colors"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-gray-50 pt-8 sm:pt-10 md:pt-12 pb-4 sm:pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Subscribe to receive exciting offers!</h3>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-2 sm:gap-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2.5 border border-gray-300 rounded-sm sm:rounded-r-none focus:outline-none focus:border-black text-sm"
            />
            <button className="px-6 py-2.5 bg-black text-white rounded-sm sm:rounded-l-none hover:bg-gray-800 transition-colors text-sm font-medium">
              Subscribe
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-8 mb-8 sm:mb-10 md:mb-12">
          {/* Company Info */}
          <div className="border-b border-gray-200 md:border-none pb-4 md:pb-0">
            <h4 className="font-semibold text-sm md:text-base mb-3 md:mb-4">DEMIFINE FASHION PVT LTD</h4>
            <p className="text-xs sm:text-sm text-gray-600 mb-4">
              Registered Address:<br />
              Office No 501/502/503/504/505(A) 5th Floor, Verdant 84, Plot 1, Lane Z, 
              Koregaon Park Annexe, Mundhwa, Pune, Maharashtra 411036.
            </p>
            
            {/* Social Links - Mobile */}
            <div className="flex items-center gap-3 md:hidden">
              <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Policy Links */}
          <FooterSection title="Policy" links={policyLinks} />

          {/* Help Links */}
          <FooterSection title="Help" links={helpLinks} />

          {/* About Links + Social + App */}
          <div className="border-b border-gray-200 md:border-none pb-4 md:pb-0">
            <FooterSection title="About Us" links={aboutLinks} />
            
            {/* Social Links - Desktop */}
            <div className="hidden md:flex items-center gap-3 mt-6">
              <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            {/* App Download */}
            <div className="bg-black text-white p-3 sm:p-4 rounded-sm mt-4 md:mt-6">
              <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                <Smartphone className="w-6 h-6 sm:w-8 sm:h-8" />
                <div>
                  <p className="text-xs sm:text-sm font-medium">Download the CELENA App</p>
                  <p className="text-[10px] sm:text-xs text-gray-400">
                    ( 5L+ Downloads | <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 inline fill-yellow-400 text-yellow-400" /> 4.4 )
                  </p>
                </div>
              </div>
              <p className="text-[10px] sm:text-xs text-gray-300">Get Exclusive Offers On App</p>
            </div>
          </div>
        </div>

        {/* Popular Searches */}
        <div className="border-t border-gray-200 pt-4 sm:pt-6 mb-4 sm:mb-6">
          <h4 className="font-semibold text-sm mb-2 sm:mb-3">Popular Searches</h4>
          <div className="flex flex-wrap gap-x-2 gap-y-1">
            {popularSearches.map((search, index) => (
              <span key={index} className="text-[10px] sm:text-xs text-gray-500">
                {search} {index < popularSearches.length - 1 && '|'}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
          <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
            All Rights Reserved © CELENA
          </p>
          <a 
            href="#" 
            className="text-xs sm:text-sm text-gray-500 hover:text-black transition-colors"
          >
            Annual Returns 2023-24
          </a>
        </div>
      </div>
    </footer>
  );
}
