import React, { useState, useMemo } from 'react';
import { BlogCard } from '../../molecules/cards/BlogCard';
import { BlogFilterBar } from '../filters/BlogFilterBar';
import { Button } from '../../atoms/actions/Button';
import { usePagination } from '../../../hooks/usePagination';

export interface BlogPostItem {
  id: string;
  image: string;
  category: string;
  date: string;
  title: string;
  description: string;
  href?: string;
}

interface BlogListProps {
  items: BlogPostItem[];
  categories: string[];
}

export function BlogList({ items, categories }: BlogListProps) {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  
  // Filter items
  const filteredItems = useMemo(() => {
    if (activeCategory === "All Posts") return items;
    return items.filter(item => item.category.toUpperCase() === activeCategory.toUpperCase());
  }, [items, activeCategory]);

  // Paginate items
  const { currentData, loadMore, hasMore } = usePagination({
    data: filteredItems,
    itemsPerPage: 6
  });

  return (
    <div className="w-full flex flex-col items-center">
      <BlogFilterBar 
        categories={categories} 
        activeCategory={activeCategory} 
        onCategorySelect={setActiveCategory}
      />
      
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-8">
        {currentData.map((item) => (
          <BlogCard key={item.id} {...item} />
        ))}
      </div>

      {hasMore && (
        <div className="w-full pt-12 flex justify-center items-center">
          <Button 
            variant="outline" 
            label="Load More Articles" 
            onClick={loadMore}
          />
        </div>
      )}
    </div>
  );
}
