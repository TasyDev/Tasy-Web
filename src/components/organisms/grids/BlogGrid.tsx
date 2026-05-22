import React from 'react';
import { BlogCard } from '../../molecules/cards/BlogCard';

export interface BlogPostItem {
  id: string;
  image: string;
  category: string;
  date: string;
  title: string;
  description: string;
  href?: string;
}

/**
 * @params items - Array of blog post data to render
 */
export interface BlogGridProps {
  items: BlogPostItem[];
}

export function BlogGrid({ items }: BlogGridProps) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-8">
      {items.map((item) => (
        <BlogCard key={item.id} {...item} />
      ))}
    </div>
  );
}
