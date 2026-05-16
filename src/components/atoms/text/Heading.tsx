import React from 'react';

export interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  variant?: 'hero' | 'section' | 'display' | 'card';
}

export const Heading = ({ 
  level = 1, 
  children, 
  className = '', 
  variant = 'hero' 
}: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const variants = {
    'display': "text-neutral-900 text-6xl font-bold font-sans leading-[80px]",
    'hero': "text-white text-5xl md:text-7xl font-bold font-sans leading-tight",
    'section': "text-neutral-900 text-3xl font-bold font-sans leading-9",
    'card': "text-neutral-900 text-xl font-semibold font-sans leading-7"
  };

  return (
    <Tag className={`${variants[variant]} ${className}`}>
      {children}
    </Tag>
  );
};
