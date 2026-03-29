import { Zap } from 'lucide-react';

export function AnnouncementBar() {
  return (
    <div className="bg-black text-white py-2 px-3 sm:px-4 text-center">
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
        <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400 flex-shrink-0" />
        <span className="truncate">
          <span className="underline font-medium">FREE STUDS</span>
          <span className="text-gray-300 hidden xs:inline"> worth </span>
          <span className="underline font-medium hidden xs:inline">₹1495</span>
          <span className="text-gray-300 hidden sm:inline"> on orders above ₹2999</span>
        </span>
      </div>
    </div>
  );
}
