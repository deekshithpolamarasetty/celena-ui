import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
  items: { name: string; href?: string }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="py-2 sm:py-4">
      <ol className="flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm flex-wrap">
        <li>
          <a 
            href="/" 
            className="flex items-center gap-1 text-gray-500 hover:text-black transition-colors"
          >
            <Home className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Home</span>
          </a>
        </li>
        {items.map((item) => (
          <li key={item.name} className="flex items-center gap-1 sm:gap-2">
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
            {item.href ? (
              <a 
                href={item.href}
                className="text-gray-500 hover:text-black transition-colors"
              >
                {item.name}
              </a>
            ) : (
              <span className="text-black font-medium">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
