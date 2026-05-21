import React from 'react';
import { CategoryPill } from '../../atoms/actions/CategoryPill';

/**
 * @params categories - List of category names
 * @params activeCategory - Currently active category
 */
interface BlogFilterBarProps {
  categories: string[];
  activeCategory?: string;
  onCategorySelect?: (category: string) => void;
  searchPlaceholder?: string;
}

export function BlogFilterBar({ 
  categories, 
  activeCategory, 
  onCategorySelect,
  searchPlaceholder = "Buscar..."
}: BlogFilterBarProps) {
  return (
    <div className="w-full flex flex-col justify-start items-start">
      <div className="w-full inline-flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="w-96 px-6 py-4 relative bg-neutral-50 rounded-full outline outline-1 outline-offset-[-1px] outline-gray-200 flex justify-start items-center">
          <div className="w-full h-full left-0 top-0 absolute bg-white/0 rounded-full shadow-sm" />
          <div className="w-8 h-5 pr-3 inline-flex flex-col justify-start items-start z-10">
            <div className="w-5 h-5 flex flex-col justify-center items-center text-neutral-400">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9.5" cy="9.5" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M13.5 13.5L17.5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          <input 
            type="text" 
            placeholder={searchPlaceholder} 
            className="flex-1 bg-transparent border-none outline-none text-neutral-900 placeholder:text-neutral-400 text-base font-normal font-sans leading-6 z-10" 
          />
        </div>
        <div className="flex flex-wrap justify-start items-center gap-3">
          {categories.map((cat) => (
            <CategoryPill 
              key={cat} 
              label={cat} 
              isActive={cat === activeCategory} 
              onClick={() => onCategorySelect?.(cat)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
